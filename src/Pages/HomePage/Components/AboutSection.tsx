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
                  className="absolute inset-0 border-2 border-galeto-secondary/20 rounded-lg -z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="text-center relative group">
                <div className="text-4xl font-bold text-[#DAA520]">1000+</div>
                <div className="text-[#3E2723]">Clientes felizes</div>
                <motion.div
                  className="absolute inset-0 border-2 border-galeto-secondary/20 rounded-lg -z-10"
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
              className="absolute -bottom-6 left-6 w-32 bg-[#DAA520] rounded-full flex items-center justify-center text-[#5E2612] font-bold text-xl p-4 text-center shadow-lg"
              animate={{ rotate: [0, 5, 0, - 5, 0] }}
              transition={{ transition: 6, repeat: Number.POSITIVE_INFINITY}}
            >
              TEMPERO EXCLUVISO
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
