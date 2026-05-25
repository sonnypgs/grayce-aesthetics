export type TrackingEvent = {
  event: string;
  [key: string]: string | number | boolean | null | undefined;
};

declare global {
  interface Window {
    dataLayer?: TrackingEvent[];
  }
}

export function pushDataLayer(event: TrackingEvent) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}
