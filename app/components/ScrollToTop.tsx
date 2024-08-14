"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0); // Forcer le scroll en haut après chaque changement de route
  }, [pathname]);

  return null;
};

export default ScrollToTop;
