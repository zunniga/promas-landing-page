"use client"
import { motion } from "framer-motion"

interface HeroAboutProps {
  countryName: string
  stats: Array<{
    number: string
    label: string
  }>
}

export function HeroAbout({ countryName, stats }: HeroAboutProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Fondo con gradiente actualizado */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#070717] dark:via-[#070717] dark:to-[#070717]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Patrón decorativo mejorado */}
      <motion.div
        className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.08]"
        initial={{ opacity: 0, scale: 1.2, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 2, delay: 0.3 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(207,0,114,0.6) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </motion.div>

      {/* Formas geométricas decorativas flotantes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#e82769]/20 to-[#cf0072]/30 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-[#680080]/20 to-[#360b7f]/30 rounded-full blur-2xl"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -60, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <motion.span
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#360b7f]/25 to-[#680080]/25 dark:bg-gradient-to-r dark:from-[#680080]/40 dark:to-[#cf0072]/30 text-[#360b7f] dark:text-[#e82769] rounded-full text-sm font-semibold mb-4 border border-[#cf0072]/20"
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
              transition={{ duration: 0.3 }}
            >
              Descubre PROMAS {countryName}
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 60, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 90 }}
          >
            <motion.span
              className="text-gray-900 dark:text-white block"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Innovando el panorama de la
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-[#680080] via-[#cf0072] to-[#e82769] bg-clip-text text-transparent block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              capacitación especializada
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            Somos una organización pionera en formación continua y desarrollo de competencias, dedicados a la excelencia
            educativa y al crecimiento integral de nuestros participantes en {countryName}.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, staggerChildren: 0.15 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="min-w-[140px]"
                initial={{ opacity: 0, scale: 0, rotateY: -120 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.4 + index * 0.15,
                  type: "spring",
                  stiffness: 140,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="relative p-6 rounded-2xl bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-[#cf0072]/20 hover:border-[#e82769]/40 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(207,0,114,0.15)",
                    backgroundColor: "rgba(255,255,255,0.15)",
                  }}
                >
                  <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-[#680080] to-[#cf0072] bg-clip-text text-transparent mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.15 }}
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div
                    className="text-sm text-gray-700 dark:text-gray-300 font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.7 + index * 0.15 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
