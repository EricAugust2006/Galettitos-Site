import { useEffect, useState } from "react";
// import { useScrollFade } from "../../../hooks/useScrollFade";
import { Button } from "../../../GlobalComponents/Button";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

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

  const menuItems = [
    { label: "SOBRE NÓS", href: "#home" },
    { label: "SERVIÇOS", href: "#home" },
    { label: "CONTATO", href: "#home" },
  ];

  const renderMenuButtons = (className = "") => (
    <>
      {menuItems.map((item) => (
        <Button
          key={item.label}
          texto={item.label}
          href={item.href}
          className={`text-lg active:scale-95 ${className}`}
        />
      ))}
    </>
  );

  return (
    <>
      <header
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8F3E9]/95 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        }`}
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
              texto="SOBRE NÓS"
              className="md:hidden border-galeto-primary text-galeto-primary"
              onClick={() => setMenuAberto(!menuAberto)}
            />
            <div className="hidden md:flex w-full items-center gap-6">
              <div className="flex-1 flex justify-center gap-6">
                {renderMenuButtons()}
              </div>
              <Button
                texto="RESERVE JÁ"
                onClick={handleNavigate}
                className="text-base font-medium active:scale-95 bg-galeto-primary text-white hover:bg-galeto-primary/90 px-6 py-2 rounded-full transition-all"
              />
            </div>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              menuAberto ? "max-h-[300px] py-4" : "max-h-0 py-0"
            }`}
          >
            <div className="px-4">
              <div className="w-full h-[1px] bg-galeto-border mb-4" />
              <div className="flex flex-col items-center gap-4">
                {renderMenuButtons("w-full justify-start")}
                <Button
                  texto="RESERVE JÁ"
                  onClick={handleNavigate}
                  className="w-full text-base font-medium active:scale-95 bg-galeto-primary text-white hover:bg-galeto-primary/90 rounded-full transition-all"
                />
                RESERVE JÁ
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
