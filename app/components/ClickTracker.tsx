"use client";

import { useEffect } from "react";

export function analyticsEvent(href: string): string | null {
  const value = href.trim();
  if (!value || value.startsWith("#")) return null;
  if (value.endsWith(".pdf") || value.includes("/resumes/")) return "resume-download";
  if (value.startsWith("mailto:")) return "outbound-email";
  try {
    const url = new URL(value, "https://portfolio.local");
    const host = url.hostname.replace(/^www\./, "");
    if (host === "linkedin.com" || host.endsWith(".linkedin.com")) return "outbound-linkedin";
    if (host === "github.com" || host.endsWith(".github.com")) return "outbound-github";
  } catch {
    return null;
  }
  return null;
}

export function ClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;
      const name = analyticsEvent(href);
      const counter = window.goatcounter;
      if (!name || !counter?.count) return;
      counter.count({ path: name, event: true });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
