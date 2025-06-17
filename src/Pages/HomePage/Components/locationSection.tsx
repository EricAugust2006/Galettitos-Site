"use client"
import { MapPin, Clock, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function LocationSection() {
  return (
    <section className="py-24 px-6 bg-[#F8F3E9] relative overflow-hidden" id="contact">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#DAA520]/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8B4513]/5 rounded-full -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-center w-full text-3xl md:text-4xl text-[#8B4513] font-bold mb-6 font-serif relative inline-block">
              NOSSA LOCALIZAÇÃO
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-[#8B4513]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </h2>
            <p className="text-lg  text-center text-[#3E2723] mb-8">
              Estamos localizados em um ponto de fácil acesso. Venha nos visitar e experimente o melhor frango assado da
              região!
            </p>

            <motion.div
              className="space-y-6 mb-8 "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {[
                {
                  icon: <MapPin className="text-[#8B4513] w-6 h-6" />,
                  title: "Endereço",
                  content: (
                    <p className="text-[#3E2723]">
                      Av. Fernando Antonio da Silveira, 452
                      <br />
                      Santa Rita, Vila Velha - ES
                    </p>
                  ),
                },
                {
                  icon: <Clock className="text-[#8B4513] w-6 h-6" />,
                  title: "Horário de Funcionamento",
                  content: (
                    <p className="text-[#3E2723]">
                      Somente aos domingos
                      <br />
                      Das 8:00 às 14:00
                    </p>
                  ),
                },
                {
                  icon: <Phone className="text-[#8B4513] w-6 h-6" />,
                  title: "Contato",
                  content: <p className="text-[#3E2723]">(11) 99999-9999</p>,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <motion.div
                    className="bg-[#8B4513]/10 p-3 rounded-full group-hover:bg-[#8B4513]/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-[#8B4513] mb-1 group-hover:text-[#DAA520] transition-colors duration-300">
                      {item.title}
                    </h3>
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
            className="flex justify-center items-center sm:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button

                className="bg-[#DAA520] text-[#5E2612] hover:bg-[#DAA520]/90  sm:w-1/2 p-4 rounded-full group relative overflow-hidden"
              >
                <a className="" href="https://maps.app.goo.gl/R5zN2QkhEF3RHBfa8" target="_blank" rel="noopener noreferrer">
                  <span className="relative p-4 font-bold font-serif  z-10">COMO CHEGAR</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </a>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white p-4 rounded-2xl shadow-lg border border-[#E8D8C0] relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#DAA520]/5 to-transparent"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            <iframe
              title="Localização do Galettitos"
              className="rounded-xl w-full h-[400px] relative z-10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.850501536927!2d-40.33612712554587!3d-20.347793751452894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83ddedba92f57%3A0xe2a395bf2e90003d!2sAv.%20Fernando%20Ant%C3%B4nio%20da%20Silveira%2C%20452%20-%20Santa%20Rita%2C%20Vila%20Velha%20-%20ES%2C%2029118-450!5e0!3m2!1spt-BR!2sbr!4v1745671715471!5m2!1spt-BR!2sbr"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>

            <motion.div
              className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#8B4513]/10 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
