"use client";

import { useEffect } from "react";

const useIntersectionObserver = (
  refs: any,
  options: any,
  appearClass: string,
  delay = 1000
) => {
  useEffect(() => {
    const handleIntersection = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          const targetIndex = parseInt(entry.target.dataset.index, 10);
          const delayTime = targetIndex * delay;

          setTimeout(() => {
            entry.target.classList.add(appearClass);
          }, delayTime);

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    refs.forEach((ref: any) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, [refs, options, appearClass, delay]);
};

export default useIntersectionObserver;
