import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// handle scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
