"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Formulario from "../../../GlobalComponents/form";
import { useEffect, useState } from "react";

export const Footer = () => {
  const handleScroll = (id: any) => {
    window.scrollTo({
      top: document.getElementById(id)
        ? document.getElementById(id)!.offsetTop
        : 0,
      behavior: "smooth",
    });
  };

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Handles a click event on an element and scrolls to the element with the
   * same id as the clicked element.
   * @param {React.MouseEvent} e - The click event.
   */
  /*******  dcda0283-74de-4fc2-94fb-a20086697c09  *******/
  const handleClickId = (e: any) => {
    const id = e.target.id;
    if (id) {
      handleScroll(id);
    }
  };

  return (
    <>
      <footer
        className="bg-gradient-to-b from-[#5E2612]/20 to-[#5E2612]/30 text-[#3E2723] pt-20 pb-10 relative overflow-hidden"
        id="contact"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="flex flex-col">
            <img
              src="/GalettitosLogo.png"
              alt="Galettitos Logo"
              className="max-h-20 w-auto object-contain mb-8"
            />
            <p className="text-base leading-relaxed mb-6">
              Na <span className="font-bold">Galettitos</span>, tradição e
              qualidade caminham lado a lado. Produtos artesanais preparados com
              excelência para encantar nossos clientes.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-8 border-b-2 border-[#FFCC00] inline-block pb-2">
              Contato
            </h3>
            <ul className="space-y-5 text-base">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FFCC00]" />
                <span>contato@galettitos.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FFCC00]" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#FFCC00]" />
                <span>
                  Rua das Delícias, 123
                  <br />
                  São Paulo, SP
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-8 border-b-2 border-[#FFCC00] inline-block pb-2">
              Links Rápidos
            </h3>
            <ul className="space-y-5 text-base">
              <li>
                <button className="hover:text-[#FFCC00] transition-colors">
                  <a href="#header">Início</a>
                </button>
              </li>
              <li>
                <a href="#info" className="hover:text-[#FFCC00] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#Menu" className="hover:text-[#FFCC00] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FFCC00] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-8 border-b-2 border-[#FFCC00] inline-block pb-2">
              Fale Conosco
            </h3>

            <Formulario />
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-900">
            &copy; {new Date().getFullYear()} Galettitos. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </>
  );
};
