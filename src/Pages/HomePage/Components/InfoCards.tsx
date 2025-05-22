"use client";

import { MapPin, Truck, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const InfoCards = () => {
  const phoneNumber = "27999124491";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Olá%2C%20gostaria%20de%20mais%20informações%21`;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const cards = [
    {
      icon: <MapPin className="text-[#8B4513] w-8 h-8" />,
      title: "LOCALIZAÇÃO",
      content: (
        <p className="text-[#3E2723] text-center">
          Av. Fernando Antonio da
          <br />
          Silveira n° 452
        </p>
      ),
    },
    {
      icon: <Truck className="text-[#8B4513] w-8 h-8" />,
      title: "ENTREGAMOS",
      content: (
        <p className="text-[#3E2723] text-center">
          Rápida e segura em toda a região
          <br />
          Consulte disponibilidade!
        </p>
      ),
    },
    {
      icon: <Clock className="text-[#8B4513] w-8 h-8" />,
      title: "HORÁRIOS",
      content: (
        <p className="text-[#3E2723] text-center">
          Somente aos domingos
          <br />
          Das 8:00 às 14:00
        </p>
      ),
    },
    {
      icon: <Phone className="text-[#8B4513] w-8 h-8" />,
      title: "WHATSAPP",
      content: (
        <>
          <p className="text-[#3E2723] text-center mb-4">
            Fale conosco diretamente!
          </p>
          <button className="bg-[#DAA520] text-[#3E2723] hover:bg-[#DAA520]/90 rounded-full font-medium group relative overflow-hidden">
            <a
              className="flex justify-center items-center p-4 text-nowrap"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-bold text-[#3E2723] relative z-10">Conversar no WhatsApp</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
          </button>
        </>
      ),
    },
  ];
  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-[#F5DEB3]/30 to-[#F8F3E9]"
      id="info"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#8B4513] text-center mb-16 font-serif relative inline-block mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          CONHEÇA NOSSA {" "}
          <span className="text-[#DAA520]">GALETERIA</span>
          <motion.span
            className="absolute -bottom-2 left-0 h-1 bg-[#DAA520]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-[#FFF9F0] p-8 rounded-2xl flex flex-col items-center shadow-md hover:shadow-lg transition-all duration-300 border border-[#E8D8C0] group hover:-translate-y-2"
            >
              <div className="bg-[#8B4513]/10 p-4 rounded-full mb-6 group-hover:bg-[#8B4513]/20 transition-colors relative overflow-hidden">
                {card.icon}
                <span className="absolute inset-0 bg-[#8B4513]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full transform scale-0 group-hover:scale-100" />
              </div>
              <h3 className="text-[#8B4513] font-bold text-xl mb-3 relative">
                {card.title}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8B4513]/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                />
              </h3>
              {card.content}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
