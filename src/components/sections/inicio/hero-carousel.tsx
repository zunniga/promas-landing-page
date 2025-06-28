"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";




// Variantes de animación para el contenedor principal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

// Variantes para elementos que vienen desde la izquierda
const slideInLeft = {
  hidden: {
    x: -100,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
      duration: 0.8,
    },
  },
};

// Variantes para elementos que vienen desde la derecha
const slideInRight = {
  hidden: {
    x: 100,
    opacity: 0,
    scale: 0.8,
    rotate: 10,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 1,
    },
  },
};

// Variantes para el título con efecto de escritura
const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

// Variantes para elementos flotantes
const floatingVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      delay: 1.2,
    },
  },
};

export default function HeroSection() {


  // Función para dividir texto en palabras para animación
  const splitText = (text: string) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        variants={letterVariants}
        className="inline-block mr-2"
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Elementos flotantes decorativos con animaciones mejoradas */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/es/bg/linear.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <motion.div
        className="absolute top-20 right-20 w-20 h-20 bg-[#CF0072]/20 dark:bg-[#CF0072]/30 rounded-full blur-xl"
        variants={floatingVariants}
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
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-[#90007e]/30 dark:bg-[#90007e]/40 rounded-full blur-lg"
        variants={floatingVariants}
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-10 w-16 h-16 bg-[#CF0072]/20 dark:bg-[#CF0072]/30 rounded-full blur-lg"
        variants={floatingVariants}
        animate={{
          y: [0, -25, 0],
          x: [0, 12, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Contenido de texto */}
          <motion.div
            className="text-[#09122C] dark:text-white order-2 lg:order-1"
            variants={slideInLeft}
          >
            <motion.div
              className="text-4xl text-center lg:text-left md:text-5xl lg:text-6xl xl:text-7xl font-sans font-extrabold mb-6"
              variants={titleVariants}
            >
              {splitText("Transforma tu")}
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF0072] to-[#90007e] dark:from-[#FF1493] dark:to-[#CF0072]"
                variants={letterVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                Futuro
              </motion.span>
              <br />
              <motion.span
                className="text-[#09122C] dark:text-gray-100"
                variants={letterVariants}
              >
                {splitText("Profesional Hoy")}
              </motion.span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-center lg:text-left lg:text-2xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: 1.5,
                  },
                },
              }}
            >
              Impulsa tu carrera con nuestros cursos y diplomados certificados.{" "}
              <motion.span
                className="text-[#CF0072] text-center lg:text-left dark:text-[#FF1493] font-semibold"
                whileHover={{
                  scale: 1.05,
                  color: "#FF1493",
                  transition: { duration: 0.2 },
                }}
              >
                ¡Tu éxito comienza aquí!
              </motion.span>
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 100,
                    delay: 2,
                  },
                },
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(207, 0, 114, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-[#CF0072] to-[#90007e] dark:from-[#FF1493] dark:to-[#CF0072] text-white border-0 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#CF0072]/25 rounded-lg"
                >
                  <Link href="/courses">Explorar Cursos →</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Área con imagen */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
            variants={slideInRight}
          >
            <div className="relative w-full max-w-2xl">
              {/* Imagen principal con animaciones mejoradas */}
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-full max-w-md mx-auto">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      damping: 15,
                      stiffness: 100,
                      delay: 0.8,
                    }}
                  >
                    <Image
                      src="/es/bg/brr.png"
                      alt="Estudiante profesional"
                      width={500}
                      height={500}
                      className="w-[100%] h-auto object-contain rounded-xl"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </motion.div>

                  {/* Formas decorativas con animaciones mejoradas */}
                  <motion.div
                    className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#FF6B9D]/30 to-[#C44569]/30 rounded-full blur-2xl -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                  />
                  <motion.div
                    className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/20 rounded-full blur-2xl -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1 }}
                  />
                  <motion.div
                    className="absolute -bottom-8 w-48 h-48 bg-gradient-to-br from-white/10 to-white/10 dark:bg-white/5 rounded-full blur-2xl -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.1, duration: 1 }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
