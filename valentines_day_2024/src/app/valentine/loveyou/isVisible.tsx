"use client";

import { useEffect, useState } from "react";

export function useIsVisible(ref: React.MutableRefObject<undefined>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });
    if (!ref.current) {
      return;
    }

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
