"use client";

import { useEffect } from "react";

const LISTENER_OPTS: AddEventListenerOptions = { passive: false };

/**
 * iOS Safari often ignores viewport user-scalable=no; block pinch via gesture + multi-touch.
 */
export default function DisablePinchZoom() {
  useEffect(() => {
    const preventGesture = (e: Event) => {
      e.preventDefault();
    };

    const preventMultiTouch = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    const preventCtrlWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    let lastTouchEnd = 0;
    const preventDoubleTapZoom = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener("gesturestart", preventGesture, LISTENER_OPTS);
    document.addEventListener("gesturechange", preventGesture, LISTENER_OPTS);
    document.addEventListener("gestureend", preventGesture, LISTENER_OPTS);
    document.addEventListener("touchstart", preventMultiTouch, LISTENER_OPTS);
    document.addEventListener("touchmove", preventMultiTouch, LISTENER_OPTS);
    document.addEventListener("touchend", preventDoubleTapZoom, LISTENER_OPTS);
    document.addEventListener("wheel", preventCtrlWheel, LISTENER_OPTS);

    return () => {
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
      document.removeEventListener("gestureend", preventGesture);
      document.removeEventListener("touchstart", preventMultiTouch);
      document.removeEventListener("touchmove", preventMultiTouch);
      document.removeEventListener("touchend", preventDoubleTapZoom);
      document.removeEventListener("wheel", preventCtrlWheel);
    };
  }, []);

  return null;
}
