"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const MenuSection = () => {
  const [hoveredItem, setHorevered] = useState<number | null>(null);

  const menuItems = [
    {
      id: 1,
      name: "GALETITTO ASSADO",
      description:
        "Nosso clássico galeto assado com tempero exclusivo da família que acompanha farofa",
      price: "R$ 45,00",
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 2,
      name: "GALETITTO ASSADO + UAI/IATE 2L",
      description:
        "Nosso clássico galeto assado com tempero exclusivo da família que acompanha farofa e IATE/UAI 2L",
      price: "R$ 49,99",
      image: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 3,
      name: "GALETITTO ASSADO + Coca-Cola 2L",
      description:
        "Nosso clássico galeto assado com tempero exclusivo da família que acompanha farofa e Coca-Cola 2L",
      price: "R$ 59,99",
      image: "https://picsum.photos/200/300?random=3",
    },
    {
      id: 4,
      name: "FEIJÃO TROPEIRO - 400g",
      description: "Feijão tropeiro com tempero exclusivo da família",
      price: "R$ 15,00",
      image: "https://picsum.photos/200/300?random=4",
    },
  ];

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

  return (
    <section className="px-6 py-24 bg-[#F8F3E9] relative overflow-hidden" id="Menu">
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#DAA520]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8B4513]/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-15"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl text-[#8B4513] font-bold mb-4 font-serif relative inline-block">
            NOSSO <span className="text-[#DAA520]">CARDAPIO</span>
            <motion.div
              className="flex justify-center items-center text-[#8B4513] absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-[#DAA520]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </h2>

          <p className="text-[#3E2723] text-lg max-w-2xl mx-auto">
            Conheça nossas especialidades preparadas com ingredientes
            selecionados e muito carinho para proporcionar uma experiência
            gastronômica inesquecível.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {menuItems.map((items) => (
            <motion.div
              key={items.id}
              className="bg-[#FFF9F0] rounded-xl p-6 flex flex-col md:flex-row gap-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[#E8D8C0] hover:-translate-y-1 relative overflow-hidden"
              variants={item}
              onMouseEnter={() => setHorevered(items.id)}
              onMouseLeave={() => setHorevered(null)}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#5E2612]/10 to-transparent opacity-0 transition-opacity duration-300"
                style={{ opacity: hoveredItem === items.id ? 1 : 0 }}
              />

              {/* //images */}
              <div className="relative md:1/3 aspect-square rounded-xl overflow-hidden">
                <img
                // !!!!!!  as imagens tem que estar 200 por 200 !!!!!!!!
                  src={items.image || "https://picsum.photos/200/300?random=1"}
                  alt={items.name}
                  className="object-cover"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === items.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/30 to transparent"
                />
              </div>

              <motion.div
                className="w-[.5px] bg-black bottom-0 left-1/2 -translate-x-1/2 "
                initial={{ scaleY: 0 }}
                animate={{
                  scaleY: hoveredItem === items.id ? 1 : 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              />

              <div className="flex-1 flex flex-col justify-between relative z-10 ">
                <div>
                  <h3 className="text-xl font-bold text-[#8B4513] mb-2 group-hover:text-[#DAA520] transition-colors text-center">
                    {items.name}
                  </h3>
                  <p className="text-[#3E2723] text-center mb-2">
                    {items.description}
                  </p>
                </div>
                <div className="group-hover:-translate-y-3 px-8 w-full text-center shadow-xl rounded-xl transition-all duration-300">
                  <h2 className="text-3xl font-bold font-serif p-[2px] text-[#3E2723]">{items.price}</h2>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
