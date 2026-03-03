"use client";

import { useSyncExternalStore } from "react";

let scrollY = 0;
let ticking = false;
const listeners = new Set<() => void>();

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(() => {
      scrollY = window.scrollY;
      ticking = false;
      listeners.forEach((cb) => cb());
    });
  }
}

function subscribe(callback: () => void) {
  if (listeners.size === 0) {
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
    if (listeners.size === 0) {
      window.removeEventListener("scroll", onScroll);
    }
  };
}

function getSnapshot() {
  return scrollY;
}

function getServerSnapshot() {
  return 0;
}

export function useScrollY() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
