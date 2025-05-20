import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const X = useTransform(
    cursorX,
    [0, window.innerWidth],
    [0, window.innerWidth]
  );
  const Y = useTransform(
    cursorY,
    [0, window.innerHeight],
    [0, window.innerHeight]
  );
  useEffect(() => {
    const handleResize = () => {
      setShowCursor(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if(!showCursor) return;
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showCursor, cursorX, cursorY]);

  useEffect(() => {
    if(!showCursor) return;

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "button" ||
        target.dataset.cursor === "hover"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener("mouseover", checkHover);
    return () => {
      removeEventListener("mouseover", checkHover);
    };
  }, [showCursor]);

  if(!showCursor) return null;
  
  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-black z-50 pointer-events-none"
      style={{
        translateX: X,
        translateY: Y,
      }}
      animate={{
        width: isHovering ? 28 : 24,
        height: isHovering ? 28 : 24,
        backgroundColor: isHovering ? "#8B4513" : "#000000",
        borderRadius: "50%",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    />
  );
};

export default CustomCursor;
