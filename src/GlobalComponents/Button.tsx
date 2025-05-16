import { useScrollFade } from "../hooks/useScrollFade";
import React from "react";

interface ButtonProps {
  texto: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  tipo?: "BotaoNormal" | "Reservar" | "Cardapio";
}

export const Button: React.FC<ButtonProps> = ({
  texto,
  href,
  onClick,
  className = "",
  tipo = "BotaoNormal",
}) => {
  const baseStyle = "rounded";
  const tipoStyle = {
    BotaoNormal:
      "w-[150px] h-[50px] flex shadow-xl/20 bg-[#A47103] items-center justify-center text-center tracking-[2px] transition-colors transition-transform duration-500 ease-in-out transform hover:bg-[#855B00] hover:scale-105 hover:shadow-md hover:shadow-xl/30",

    Reservar:
      "w-[200px] h-[50px] font-semibold flex shadow-xl/20 bg-[#A47103] items-center justify-center text-center tracking-[2px] transition-colors transition-transform duration-500 ease-in-out transform hover:bg-[#855B00] hover:scale-105 hover:shadow-lg hover:shadow-xl/30",

    Cardapio:
      "w-[250px] h-[75px] font-semibold flex shadow-xl/20 bg-[#A47103] items-center justify-center text-center tracking-[2px] transition-colors transition-transform duration-500 ease-in-out transform hover:bg-[#855B00] hover:scale-110 hover:shadow-xl hover:shadow-xl/30",
  };

  const finalStyle = `${baseStyle} ${tipoStyle[tipo]} ${className}`;
  // const dynamicStyle = {
  //   opacity: scrollStyle.opacity,
  //   transition: "opacity 0.3s ease-in-out, padding 0.3s ease-in-out",
  // };
  if (href) {
    return (
      <a href={href} className={finalStyle}>
        <p className="text-[18px] font-crimson text-center">{texto}</p>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={finalStyle}>
      <p className="text-[16px] font-crimson text-center">{texto}</p>
    </button>
  );
};
