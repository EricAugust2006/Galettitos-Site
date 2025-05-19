"use client";

import { useEffect, useState } from "react";
// import { useScrollFade } from "../../../hooks/useScrollFade";
import Button from "../../../GlobalComponents/Button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
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


  return (
    <>
      <header
        className={`w-full p-2 top-0 z-50 transition-all duration-300  bg-[#F8F3E9]/95 shadow-md backdrop-blur-sm`}
      >
        <nav className="w-full p-4 md:p-6">
          <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-6 h-16">
            <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px]">
              <img
                src="public/GalettitosLogo.png"
                alt="Galettitos Logo"
                // fill
                className="object-contain"
                // priority
              />
            </div>
            <Button
              texto="MENU"
              className={`md:hidden text-lg active:scale-95`}
              onClick={() => setMenuAberto(!menuAberto)}
            />
            <div className="hidden md:flex w-full items-center gap-6">
              <div className="flex-1 flex justify-center gap-6">
                <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md transition-colors h-10 px-4 py-2 text-base font-medium hover:text-[#8B4513] active:scale-95 hover:bg-[#cb8743] text-base font-medium hover:[#8B4513] active:scale-95">SOBRE NÓS</button>
                <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md transition-colors h-10 px-4 py-2 text-base font-medium hover:text-[#8B4513] active:scale-95 hover:bg-[#cb8743] text-base font-medium hover:[#8B4513] active:scale-95">CONTATO</button>
                <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md transition-colors h-10 px-4 py-2 text-base font-medium hover:text-[#8B4513] active:scale-95 hover:bg-[#cb8743] text-base font-medium hover:[#8B4513] active:scale-95">SERVIÇOS</button>
              </div>
              <button 
              onClick={handleNavigate}
              className="text-base font-medium active:scale-95 bg-[#8B4513] text-white hover:bg-[#8B4513]/90 px-6 py-2 rounded-full transition-all">
                RESERVE JÁ
              </button>
            </div>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              menuAberto ? "max-h-[300px] py-4" : "max-h-0 py-0"
            }`}
          >
           
          </div>
        </nav>
      </header>
    </>
  );
};
