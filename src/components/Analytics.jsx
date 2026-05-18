import { useEffect } from "react";

export function Analytics() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.querySelector("script[data-pa]")) return;
    const s = document.createElement("script");
    s.src = "https://portfolio-analytics.amy-dev.workers.dev/tracker.js";
    s.defer = true;
    s.setAttribute("data-site", "b8kuzcuvkwg4");
    s.setAttribute(
      "data-endpoint",
      "https://portfolio-analytics.amy-dev.workers.dev/api/collect",
    );
    s.setAttribute("data-pa", "1");
    document.head.appendChild(s);
  }, []);
  return null;
}
