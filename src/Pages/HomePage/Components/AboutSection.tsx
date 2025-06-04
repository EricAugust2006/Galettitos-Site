"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-[#F8F3E9] to-[#F5DEB3]/30 overflow-hidden"
      id="about"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 mc:order-1"
            style={{ opacity: textOpacity, y: textY }}
          >
            <motion.h2
              className="text-4xl text-center md:text-5xl font-serif font-bold text-[#360000] mb-8 relative inline-block md:w-[600px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              TRADIÇÃO EM <span className="text-[#DAA520]">GALETOS</span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-[#DAA520]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.p variants={fadeInUp} className="text-[#3E2723]">
                Há mais de 4 anos servindo galetos assados no capricho com
                acompanhamentos deliciosos e um atendimento que faz você se
                sentir em casa.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[#3E2723]">
                Cada prato é feito com carinho, pensando em oferecer uma
                experiência gostosa e acolhedora para todos que passam por aqui.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[#3E2723]">
                Nosso segredo está no tempero exclusivo e no tempo perfeito de
                preparo, garantindo que cada galeto saia suculento por dentro e
                crocante por fora.
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-10 grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center relative group">
                <div className="text-4xl font-bold text-[#DAA520]">4+</div>
                <div className="text-[#3E2723]">Anos de tradição</div>
                <motion.div
                  className="absolute inset-0 border-2 border-[#DAA520]/20 rounded-lg -z-10"
                  whileInView={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="text-center relative group">
                <div className="text-4xl font-bold text-[#DAA520]">100%</div>
                <div className="text-[#3E2723]">Satisfação</div>
                <motion.div
                  className="absolute inset-0 border-2 border-[#DAA520]/20 rounded-lg -z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="text-center relative group">
                <div className="text-4xl font-bold text-[#DAA520]">1000+</div>
                <div className="text-[#3E2723]">Clientes felizes</div>
                <motion.div
                  className="absolute inset-0 border-2 border-[#DAA520]/20 rounded-lg -z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 relative"
            style={{ scale: imageScale, opacity: imageOpacity }}
          >
            <motion.div
              className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl"
              whileInView={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1540189549336-e6e106c10e42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Galeto sendo preparado"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>

            <motion.div
              className="absolute px-[12px] -bottom-6 left-6 bg-[#DAA520] rounded-full flex items-center justify-center text-[#5E2612] font-bold text-xl p-4 text-center shadow-lg"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ transition: 10, repeat: Number.POSITIVE_INFINITY }}
            >
              TEMPERO EXCLUVISO
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-[#8B4513] rounded-full flex items-center justify-center text-white font-bold text-lg p-3 text-center shadow-lg"
              animate={{ rotate: [0, -5, 0, 5, 0] }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
              }}
            >
              Desde 2020
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-24 bg-[#FFF9F0] rounded-2xl p-10 shadow-md border border-[#E8D8C0] relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/5 to-transparent" />

          <h3 className="text-3xl font-bold text-[#8B4513] mb-8 text-center font-serif relative z-10">
            NOSSO <span className="text-[#DAA520]">DIFERENCIAL</span> 
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#8B4513]"
                  >
                    <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                  </svg>
                ),
                title: "Tempero caseiro exclusivo",
                description: "Receita secreta passada de geração em geração",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#8B4513]"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                ),
                title: "Frango assado suculento",
                description: "Preparo perfeito que mantém a suculência",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#8B4513]"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
                title: "Atendimento acolhedor",
                description:
                  "Equipe treinada para proporcionar a melhor experiência",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#8B4513]"
                  >
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                ),
                title: "Entrega rápida",
                description: "Seu pedido chega quentinho e no prazo",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-[#8B4513]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#8B4513]/20 transition-colors duration-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                  <motion.div
                    className="absolute inset-0 bg-[#8B4513]/10 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>
                <h4 className="font-bold text-[#8B4513] mb-2 group-hover:text-[#DAA520] transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-[#3E2723]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
