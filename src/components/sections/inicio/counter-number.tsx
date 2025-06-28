"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Users, Heart, Activity } from "lucide-react";

interface CounterItemProps {
  icon: React.ReactNode;
  targetNumber: number;
  suffix: string;
  label: string;
  index: number;
}

interface CounterStatsProps {
  className?: string;
}

const CounterItem: React.FC<CounterItemProps> = ({
  icon,
  targetNumber,
  suffix,
  label,
  index,
}) => {
  const [count, setCount] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.02,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className=" bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#101424] dark:via-[#101424] dark:to-[#101424] border border-white/60  rounded-2xl flex flex-col items-center justify-center text-center p-4 shadow-lg transition-all duration-300 min-h-[160px]"
    >
      {/* Icon container */}
      <motion.div
        className="w-12 h-12 rounded-full bg-gradient-to-br dark:from-[#360b7f] dark:to-[#680080] from-[#680080] to-[#90007e] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.2, delay: index * 0.02 }}
      >
        <div className="text-white w-6 h-6">{icon}</div>
      </motion.div>

      {/* Counter */}
      <motion.div
        className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#360b7f] via-[#680080] to-[#90007e] dark:from-[#CF0072] dark:via-[#E82769] dark:to-[#90007e] bg-clip-text text-transparent mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onViewportEnter={() => {
            let start = 0;
            const increment = targetNumber / 15;
            const timer = setInterval(() => {
              start += increment;
              if (start >= targetNumber) {
                setCount(targetNumber);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 12);
          }}
        >
          {count}
          {suffix}
        </motion.span>
      </motion.div>

      {/* Label */}
      <motion.div
        className="text-sm text-gray-600 dark:text-gray-300 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: index * 0.02 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

const CounterStats: React.FC<CounterStatsProps> = ({ className = "" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const counters = [
    {
      icon: <Award className="w-full h-full" />,
      targetNumber: 950,
      suffix: "+",
      label: "Proyectos Exitosos",
    },
    {
      icon: <Users className="w-full h-full" />,
      targetNumber: 450,
      suffix: "+",
      label: "Expertos Calificados",
    },
    {
      icon: <Heart className="w-full h-full" />,
      targetNumber: 25,
      suffix: "k",
      label: "Clientes Felices",
    },
    {
      icon: <Activity className="w-full h-full" />,
      targetNumber: 91.9,
      suffix: "k",
      label: "Actividades Mediáticas",
    },
  ];

  // Imágenes para diferentes temas
  const backgroundImageUrl = "/es/bg/hero2.jpg";

  if (!isClient)
    return (
      <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );

  return (
    <motion.div
      className={`w-full relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Image - Directamente integrada */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-none dark:bg-black/10 " />

      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#CC0072]/45 to-[#360b7f]/45  dark:from-[#080718]/70 dark:via-[#080717]/70 dark:to-[#080717]/70" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-white mb-4  drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Necesitas Conocer
              <br />
              <span className="bg-gradient-to-r from-[#CF0072] to-[#90007e] dark:from-[#CF0072] dark:to-[#90007e] hover:bg-[#360b7f]/90 dark:hover:bg-[#680080]/90 bg-clip-text text-transparent">
               Algunos Datos
              </span>
            </motion.h2>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex -space-x-2">
                {[
                  "/es/testimonials/five.jpg",
                  "/es/testimonials/four.jpg",
                  "/es/testimonials/three.jpg",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#CF0072] to-[#E82769] border-2 border-white flex items-center justify-center shadow-lg overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`Avatar ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="text-white">
                <p className="font-semibold drop-shadow-sm">
                  Tenemos 2k+ Estudiantes
                </p>
                <p className="text-sm text-white/90 drop-shadow-sm">
                  A Nivel Global
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Stats cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {counters.map((counter, index) => (
              <CounterItem
                key={index}
                index={index}
                icon={counter.icon}
                targetNumber={counter.targetNumber}
                suffix={counter.suffix}
                label={counter.label}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CounterStats;
