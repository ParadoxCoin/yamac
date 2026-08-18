import { NextResponse } from 'next/server';

interface WeatherData {
  windSpeed: number;
  windDirection: string;
  windDirectionDegrees: number;
  windGusts: number;
  temperature: number;
  precipitation: number;
  visibility: number;
  cloudCover: number;
  humidity: number;
  updatedAt: string;
}

interface FlightCondition {
  status: 'good' | 'caution' | 'bad';
  data: WeatherData;
}

let cachedData: FlightCondition | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

function getWindDirection(degrees: number): string {
  const directions = ['K', 'KKD', 'KD', 'DKD', 'D', 'DGD', 'GD', 'GGD', 'G', 'GGB', 'GB', 'BGB', 'B', 'BKB', 'KB', 'KKB'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
}

function evaluateFlightConditions(data: WeatherData): 'good' | 'caution' | 'bad' {
  const { windSpeed, windGusts, precipitation, visibility } = data;
  const gustSpread = windGusts - windSpeed;

  // Red conditions
  if (windSpeed > 35 || windGusts > 45 || precipitation > 1 || visibility < 2000) {
    return 'bad';
  }

  // Green conditions
  if (
    windSpeed >= 8 && windSpeed <= 25 &&
    gustSpread < 10 &&
    precipitation === 0 &&
    visibility > 5000
  ) {
    return 'good';
  }

  // Everything else is caution
  return 'caution';
}

export async function GET() {
  const now = Date.now();

  // Return cached data if fresh
  if (cachedData && now - cacheTimestamp < CACHE_DURATION) {
    return NextResponse.json(cachedData, {
      headers: {
        'Cache-Control': 'public, max-age=900, s-maxage=900',
      },
    });
  }

  try {
    const lat = process.env.WEATHER_LATITUDE || '36.8769';
    const lon = process.env.WEATHER_LONGITUDE || '30.6525';

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,cloud_cover,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=auto`;

    const response = await fetch(url, {
      next: { revalidate: 900 },
    });

    if (!response.ok) {
      throw new Error(`Weather API returned ${response.status}`);
    }

    const result = await response.json();
    const current = result.current;

    const weatherData: WeatherData = {
      windSpeed: Math.round(current.wind_speed_10m * 10) / 10,
      windDirection: getWindDirection(current.wind_direction_10m),
      windDirectionDegrees: current.wind_direction_10m,
      windGusts: Math.round(current.wind_gusts_10m * 10) / 10,
      temperature: Math.round(current.temperature_2m * 10) / 10,
      precipitation: current.precipitation,
      visibility: current.visibility,
      cloudCover: current.cloud_cover,
      humidity: current.relative_humidity_2m,
      updatedAt: new Date().toISOString(),
    };

    const status = evaluateFlightConditions(weatherData);
    const flightCondition: FlightCondition = { status, data: weatherData };

    cachedData = flightCondition;
    cacheTimestamp = now;

    return NextResponse.json(flightCondition, {
      headers: {
        'Cache-Control': 'public, max-age=900, s-maxage=900',
      },
    });
  } catch (error) {
    // Return cached data if available, even if stale
    if (cachedData) {
      return NextResponse.json(cachedData, {
        headers: {
          'Cache-Control': 'public, max-age=60',
        },
      });
    }

    return NextResponse.json(
      {
        status: 'unavailable',
        data: null,
        error: 'Weather data is currently unavailable',
      },
      { status: 503 }
    );
  }
}
