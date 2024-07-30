"use client";
import { useState, useEffect } from "react";

const useIsDesktop = (width = 1512 as number) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkScreenSize = () => {
        const newIsDesktop = window.innerWidth >= width;

        if (newIsDesktop !== isDesktop) {
          setIsDesktop(newIsDesktop);
        }
      };

      checkScreenSize();

      window.addEventListener("resize", checkScreenSize);

      return () => {
        window.removeEventListener("resize", checkScreenSize);
      };
    }
  }, [isDesktop, width]);

  return isDesktop;
};

export default useIsDesktop;
