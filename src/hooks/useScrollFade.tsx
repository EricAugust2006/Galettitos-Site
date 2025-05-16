import { useEffect, useState } from "react";

export function useScrollFade(maxScroll = 300) {
  const [style, setStyle] = useState({
    opacity: 1,
    padding: 100,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / maxScroll, 0);
      const padding = Math.max(100 - scrollY / 2, 20);

      setStyle({ opacity, padding });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxScroll]);
  return style;
}
