type AnalyticsEvent = 
  | 'whatsapp_click'
  | 'booking_form_start'
  | 'booking_form_submit'
  | 'phone_click'
  | 'map_click'
  | 'certificate_view'
  | 'gallery_open'
  | 'video_play'
  | 'blog_read'
  | 'language_switch';

export function trackEvent(event: AnalyticsEvent, metadata?: Record<string, string>) {
  if (typeof window === 'undefined') return;
  
  // Google Analytics (if configured)
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, metadata);
  }
  
  // Custom analytics endpoint
  try {
    navigator.sendBeacon('/api/analytics', JSON.stringify({
      event,
      page: window.location.pathname,
      metadata,
      timestamp: new Date().toISOString(),
    }));
  } catch {
    // Silent fail for analytics
  }
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
