"use client";

import { useEffect, useState } from "react";
// import { useScrollFade } from "../../../hooks/useScrollFade";
import Button from "../../../GlobalComponents/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CustomCursor from "../../../GlobalComponents/MouseCustom";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [lineIsOpen, setLineIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };
  // const scrollStyle = useScrollFade(400);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const handleNavigate = async () => {
    console.log("handleNavigate chamado");
    navigate("/reservas");
  };

  const LineSeparationHeader = () => {
    return (
      <motion.div
        className="bg-black w-[1px] flex items-center justify-center"
        initial={{ height: 0, opacity: 0.2 }}
        animate={{ height: 40, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          marginTop: "auto",
          marginBottom: "auto",
        }}
      />
    );
  };

  return (
    <>
      <header
        className={`w-full p-2 top-0 z-50 transition-all duration-300  bg-[#F8F3E9]/95 shadow-md backdrop-blur-sm`}
        id="header"
      >
        <nav className="w-full p-4 md:p-6">
          <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-6 h-16">
            <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px]">
              <motion.img
                src="public/GalettitosLogo.png"
                alt="Galettitos Logo"
                className="object-contain"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <Button
              texto="MENU"
              className={`md:hidden text-lg active:scale-95`}
              onClick={() => setMenuAberto(!menuAberto)}
            ></Button>

            <div className="hidden md:flex w-full items-center gap-6">
              <div className="flex-1 flex justify-center gap-6">
                {LineSeparationHeader()}
                <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md transition-colors h-10 px-4 py-2 text-base font-medium hover:text-[#8B4513] active:scale-95 hover:bg-[#cb8743] text-base font-medium hover:[#8B4513] active:scale-95">
                  <a href="#about">SOBRE NÓS</a>
                </button>
                {LineSeparationHeader()}
                <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md transition-colors h-10 px-4 py-2 text-base font-medium hover:text-[#8B4513] active:scale-95 hover:bg-[#cb8743] text-base font-medium hover:[#8B4513] active:scale-95">
                  <a href="#Menu">MENU</a>
                </button>
                {LineSeparationHeader()}
                <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md transition-colors h-10 px-4 py-2 text-base font-medium hover:text-[#8B4513] active:scale-95 hover:bg-[#cb8743] text-base font-medium hover:[#8B4513] active:scale-95">
                  <a href="#contact">CONTATO</a>
                </button>

                {LineSeparationHeader()}
              </div>
              <button
                onClick={handleNavigate}
                className="text-base font-medium active:scale-95 bg-[#8B4513] text-white hover:bg-[#8B4513]/90 px-6 py-2 rounded-full transition-all"
              >
                RESERVE JÁ
              </button>
            </div>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              menuAberto ? "max-h-[300px] py-4" : "max-h-0 py-0"
            }`}
          >
            <motion.div
              //centralizar a linha
              className="h-1 bg-black w-full center mx-auto mt-6 p"
              initial={{ width: 0 }}
              animate={{ width: menuAberto ? "100%" : "0%" }}
              transition={{ duration: 0.5 }}
            />
            <section className="flex flex-col items-center gap-4 mt-4">
              <hr className="w-1/2 h-.5 bg-black" />
              <a href="#">SOBRE NÓS</a>
              <hr className="w-1/2 h-.5 bg-black" />
              <a href="#">CONTATO</a>
              <hr className="w-1/2 h-.5 bg-black" />
              <a href="#">SERVIÇOS</a>
              <hr className="w-1/2 h-.5 bg-black" />
            </section>
          </div>
        </nav>
      </header>
    </>
  );
};
