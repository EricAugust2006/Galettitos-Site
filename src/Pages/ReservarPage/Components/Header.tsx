import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../../GlobalComponents/BackIcon";
import { useScroll, useTransform, motion } from "framer-motion";
export const Header = () => {
  const ref = useRef(null);
  const Navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacityNav = useTransform(scrollYProgress, [1, 0.5], [0.5, 1]);

  const BackPage = async () => {
    await Navigate(-1);
  };

  return (
    <motion.nav className="w-full p-2 text-black z-100 bg-[#F5DEB3]" style={{ opacity: opacityNav }}>
      <button className="text-black" onClick={BackPage}>
        <BackIcon />
      </button>
    </motion.nav>
  );
};
