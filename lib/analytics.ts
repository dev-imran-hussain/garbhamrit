export const GA_MEASUREMENT_ID = "G-Y8HFW5QDS2";

// Extend window interface for Google Analytics dataLayer & gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Safe generic event tracker for GA4
 * Fails silently if ad-blocker is enabled or gtag hasn't loaded yet
 */
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean | undefined>
): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    try {
      window.gtag("event", action, params);
    } catch (err) {
      // Ignore analytics logging errors to prevent breaking user flow
    }
  }
}

/**
 * Track Call conversions
 */
export function trackCallClick(location: string, details?: Record<string, any>): void {
  trackEvent("phone_call_click", {
    event_category: "Leads",
    event_label: `Call from ${location}`,
    location,
    ...details,
  });
}

/**
 * Track WhatsApp leads & enquiries
 */
export function trackWhatsAppClick(location: string, details?: Record<string, any>): void {
  trackEvent("whatsapp_lead_click", {
    event_category: "Leads",
    event_label: `WhatsApp from ${location}`,
    location,
    ...details,
  });
}

/**
 * Track Order CTA button clicks
 */
export function trackOrderClick(location: string, details?: Record<string, any>): void {
  trackEvent("order_now_click", {
    event_category: "Conversion",
    event_label: `Order CTA from ${location}`,
    location,
    ...details,
  });
}

/**
 * Track internal navigation / jump links
 */
export function trackNavigationClick(destination: string, location: string): void {
  trackEvent("navigation_click", {
    event_category: "Engagement",
    destination,
    location,
  });
}

