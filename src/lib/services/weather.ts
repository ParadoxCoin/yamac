export interface WeatherData {
  windSpeed: number;
  windDirection: number;
  windDirectionDegrees: number;
  windGusts: number;
  temperature: number;
  precipitation: number;
  visibility: number;
  cloudCover: number;
  humidity: number;
  updatedAt: string;
}

export interface FlightCondition {
  status: 'good' | 'caution' | 'bad';
  data: WeatherData;
}

// Memory cache
let cachedWeatherData: WeatherData | null = null;
let lastFetchTime: number = 0;
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes

export async function fetchWeatherData(): Promise<WeatherData> {
  const now = Date.now();
  if (cachedWeatherData && now - lastFetchTime < CACHE_TTL) {
    return cachedWeatherData;
  }

  try {
    const lat = 36.8769;
    const lng = 30.6525;
    
    // Open-Meteo API
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=visibility&timezone=auto`,
      { next: { revalidate: 900 } }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    const currentHourIndex = new Date().getHours();
    
    // Fallback visibility
    let visibility = 10000;
    if (data.hourly && data.hourly.visibility && data.hourly.visibility.length > currentHourIndex) {
        visibility = data.hourly.visibility[currentHourIndex];
    }

    const weatherData: WeatherData = {
      windSpeed: data.current.wind_speed_10m,
      windDirectionDegrees: data.current.wind_direction_10m,
      // For simplified wind direction mapping
      windDirection: data.current.wind_direction_10m,
      windGusts: data.current.wind_gusts_10m,
      temperature: data.current.temperature_2m,
      precipitation: data.current.precipitation,
      visibility: visibility,
      cloudCover: data.current.cloud_cover,
      humidity: data.current.relative_humidity_2m,
      updatedAt: new Date().toISOString(),
    };

    cachedWeatherData = weatherData;
    lastFetchTime = now;

    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    if (cachedWeatherData) {
      return cachedWeatherData;
    }
    throw error;
  }
}

export function evaluateFlightConditions(data: WeatherData): FlightCondition {
  const { windSpeed, precipitation, visibility } = data;

  // green if wind 8-25km/h and no rain and visibility>5000
  if (windSpeed >= 8 && windSpeed <= 25 && precipitation === 0 && visibility > 5000) {
    return { status: 'good', data };
  }

  // red if wind>35 or rain>1mm or visibility<2000
  if (windSpeed > 35 || precipitation > 1 || visibility < 2000) {
    return { status: 'bad', data };
  }

  // yellow otherwise
  return { status: 'caution', data };
}
