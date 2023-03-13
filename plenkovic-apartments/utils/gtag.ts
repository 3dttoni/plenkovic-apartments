import { EventsEnum } from "@e/events";

export function analyticsEvent(action: EventsEnum, params: {} = {}): void {
  const browserWindow = window as any;

  browserWindow?.gtag?.("event", action, params);
}
