"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Button from "../../../GlobalComponents/Button";

export const HeroSection = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 800) {
        const opacity = Math.max(1 - scrollPosition / 800, 0.1);
        setScrollOpacity(opacity);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const images = [
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/200",
  ];


  const imageVariantes = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transiton: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      transiton: {
        duration: 0.5,
      },
    }),
  };

  return (
    <section
      className="bg-[#5E2612]/50 relative overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5E2612] to-[#5E2612]/60"
          style={{ y, opacity }}
        />
      </div>

      {/* conteudo */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-[90vh] max-w-7xl mx-auto px-6 py-20">
        <div className="p-6 w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-white text-4xl md:text-6xl lg:text-7xl font-bold font-serimb-6"
              style={{
                opacity: scrollOpacity,
                transition: "opacity 0.3s ease-in-out",
              }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              O MELHOR{" "}
              <span className="text-[#DAA520] relative inline-block">
                GALETO
                <motion.span
                  className="absolute left-1/2 -translate-x-1/2 -bottom-.5 h-[2px] bg-[#DAA520]"
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    display: "block",
                  }}
                />
              </span>{" "}
              DA CIDADE
            </motion.h1>
            <p
              className="text-white text-lg md:text-2xl mt-6 font-medium max-w-xl mx-auto md:mx-0"
              style={{
                opacity: scrollOpacity,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              Suculento, crocante e preparado com temperos especiais que fazem
              toda a diferença. Uma tradição que conquista pelo sabor.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="text-base font-medium active:scale-95 bg-[#DAA520] text-[#5E2612] hover:bg-white/90 hover:text-black px-4 py-2 rounded-full transition-all group overflow-hidden relative">
                VER CARDAPIO
              </button>
              <button className="text-base font-medium active:scale-95 border-white text-white bg-[#DAA520] hover:bg-white/90 hover:text-black px-6 py-4 rounded-full transition-all group overflow-hidden relative">
                FAZER RESERVAS
              </button>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end py-6">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            <motion.div
              className="absolute inset-0 rounded-full bg-[#DAA520]/20"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            <motion.div
              className="absolute inset-0 rounded-full bg-[#8B4513]/10"
              animate={{
                scale: [1.05, 1, 1.05],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
            />

            <AnimatePresence initial={false} custom={1}>
              <motion.div
                key={activeImage}
                custom={1}
                variants={imageVariantes}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <img
                  src={images[activeImage] || "/public/BackgroundComponent.svg"}
                  alt="background"
                  width={450}
                  height={450}
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute -bottom-4 -right-4 bg-[#8B4513] text-white px-4 py-2 rounded-full shadow-lg transform rotate-[-5deg]">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="text-sm font-bold"
              >
                Tempero especial
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* elemento decorativo*/}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F3E9] to-transparent" />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 mt-[10px]">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <a href="#info" className="flex flex-col items-center text-white">
            <span className="text-sm ">Descubra mais</span>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5L12 19M12 19L19 12M12 19L5 12"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
