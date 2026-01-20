import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_TRACKING_ID = "G-EX413S433G"; // replace with your ID

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on every route change
    if (window.gtag) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null; // this component doesn't render anything
}
