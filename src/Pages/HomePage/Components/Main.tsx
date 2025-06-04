"use client";

import { MapPin, Truck, Phone } from "lucide-react";

export const Main = () => {
  const num = import.meta.env.NUMBER;
  const url = `https://wa.me/${encodeURIComponent(
    num
  )}?text=Olá%2C%20gostaria%20de%20mais%20informações%21`;

  return (
    <>
      <main>
        <div className="flex n">
          <section></section>
          <section></section>
        </div>
        <section className="bg-[#360000] py-16 px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-[#2a0000] p-6 rounded-lg flex flex-col items-center">
              <MapPin className="text-[#FFCC00] mb-4 w-10 h-10" />
              <h3 className="text-[#FFCC00] font-bold text-xl mb-2">
                LOCALIZAÇÃO
              </h3>
              <p className="text-white text-sm">
                Av. Fernando Antonio da
                <br />
                Silveira n° 452
              </p>
            </div>

            <div className="bg-[#2a0000] p-6 rounded-lg flex flex-col items-center">
              <Truck className="text-[#FFCC00] mb-4 w-10 h-10" />
              <h3 className="text-[#FFCC00] font-bold text-xl mb-2">
                ENTREGAMOS
              </h3>
              <p className="text-white text-sm">
                Rápida e segura em toda a região
                <br />
                Consulte disponibilidade!
              </p>
            </div>

            <div className="bg-[#2a0000] p-6 rounded-lg flex flex-col items-center">
              <Phone className="text-[#FFCC00] mb-4 w-10 h-10" />
              <h3 className="text-[#FFCC00] font-bold text-xl mb-2">
                WHATSAPP
              </h3>
              <p className="text-white text-sm mb-2">
                Fale conosco diretamente pelo WhatsApp!
              </p>
              <a
                href={url}
                target="_blank"
                rel=""
                className="bg-[#FFCC00] text-[#360000] px-4 py-2 rounded-lg font-bold hover:bg-[#e6b800] transition"
              >
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
        <section className="bg-[#240000] py-20 px-6 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-[#FFCC00] text-5xl md:text-6xl font-bold font-crimson drop-shadow-md">
              FRANGO ASSADO
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-xl md:text-2xl drop-shadow-sm font-mono-2 font-semibold">
                Há mais de 4 anos servindo galetos assados no capricho com
                acompanhamentos deliciosos e um atendimento que faz você se
                sentir em casa.
              </p>
              <p className="text-xl md:text-2xl drop-shadow-sm font-mono-2 font-semibold">
                Cada prato é feito com carinho, pensando em oferecer uma
                experiência gostosa e acolhedora para todos que passam por aqui.
              </p>
            </div>
          </div>

          <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#2a0000] rounded-3xl p-10 shadow-2xl transform transition duration-300 hover:scale-105">
              <div className="flex flex-col items-center">
                <h3 className="text-[#FFCC00] text-3xl font-bold mb-2 font-crimson border-b-2 border-[#FFCC00] pb-2">
                  NOSSO DIFERENCIAL
                </h3>
                <span className="list-disc list-inside space-y-4 text-center text-lg md:text-xl mt-4 w-full max-w-md font-bold font-mono-2 tracking-wide">
                  <p>Tempero caseiro exclusivo</p>
                  <p>Frango assado suculento</p>
                  <p>Atendimento acolhedor</p>
                  <p>Entrega rápida e eficiente</p>
                </span>
              </div>
            </div>

            <div className="bg-[#2a0000] rounded-3xl p-10 shadow-2xl transform transition duration-300 hover:scale-105">
              <div className="flex flex-col items-center">
                <h3 className="text-[#FFCC00] text-3xl font-bold mb-6 font-crimson border-b-2 border-[#FFCC00] pb-2">
                  HORÁRIOS
                </h3>
                <h2 className="text-2xl font-bold mb-4 font-crimson">
                  SOMENTE AOS DOMINGOS
                </h2>
                <p className="text-lg md:text-xl text-center font-medium tracking-wide">
                  De 8:00 às 14:00
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
