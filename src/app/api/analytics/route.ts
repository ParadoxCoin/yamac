import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, page, metadata, timestamp } = body;

    // Validate event name
    const validEvents = [
      'whatsapp_click', 'booking_form_start', 'booking_form_submit',
      'phone_click', 'map_click', 'certificate_view', 'gallery_open',
      'video_play', 'blog_read', 'language_switch',
    ];

    if (!validEvents.includes(event)) {
      return NextResponse.json({ error: 'Invalid event' }, { status: 400 });
    }

    // In production, this would write to a database
    // For now, we log it (Vercel will capture in logs)
    console.log('[Analytics]', { event, page, metadata, timestamp });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
