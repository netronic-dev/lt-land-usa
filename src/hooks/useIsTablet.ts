import { useState, useEffect } from "react";

const useIsTablet = (width = 1024 as number) => {
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkScreenSize = () => {
        const newIsTablet = window.innerWidth >= width;

        if (newIsTablet !== isTablet) {
          setIsTablet(newIsTablet);
        }
      };

      checkScreenSize();

      window.addEventListener("resize", checkScreenSize);

      return () => {
        window.removeEventListener("resize", checkScreenSize);
      };
    }
  }, [isTablet, width]);

  return isTablet;
};

export default useIsTablet;
