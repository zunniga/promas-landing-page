"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "./utils/testimonials";
import Link from "next/link";

const testimonialVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.4 },
  }),
};

type Testimonial = {
  id: string | number;
  name: string;
  role: string;
  image?: string;
  quote: string;
  rating: number;
};

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      className="bg-white dark:bg-[#101424] rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
      layout
    >
      {/* Quote icon */}
      <motion.div
        className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "backOut" }}
      >
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </motion.div>

      <Link
        href="https://www.facebook.com/profile.php?id=61552473052389&sk=reviews"
        target="_blank"
        className="block"
      >
        <motion.div
          className="flex items-center mb-4"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 ring-2 ring-purple-500">
            <Image
              src={testimonial.image ?? "/default-avatar.png"}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">
              {testimonial.name}
            </h3>
            <p className="text-purple-600 dark:text-pink-400 text-sm">
              {testimonial.role}
            </p>
          </div>
        </motion.div>
      </Link>

      <motion.blockquote
        className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {testimonial.quote}
      </motion.blockquote>

      <motion.div
        className="flex space-x-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
          >
            <Star
              className="w-4 h-4 text-yellow-400"
              fill={i < testimonial.rating ? "currentColor" : "none"}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function NavButton({
  onClick,
  direction,
}: {
  onClick: () => void;
  direction: "prev" | "next";
}) {
  return (
    <motion.button
      onClick={onClick}
      className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-purple-500 hover:text-purple-500 transition-all duration-300 bg-white dark:bg-gray-800"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={direction === "prev" ? "Anterior" : "Siguiente"}
    >
      {direction === "prev" ? (
        <ChevronLeft className="w-5 h-5" />
      ) : (
        <ChevronRight className="w-5 h-5" />
      )}
    </motion.button>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
 

  const changeTestimonial = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      changeTestimonial(nextIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNavigation = (dir: "prev" | "next") => {
    const newIndex =
      dir === "prev"
        ? (currentIndex - 1 + testimonials.length) % testimonials.length
        : (currentIndex + 1) % testimonials.length;
    changeTestimonial(newIndex);
  };

  // Set how many testimonials to show at once (e.g., 3 for desktop, 1 for mobile)
  const visibleCount = 3;

  const getVisibleTestimonials = () => {
    const extended = [...testimonials, ...testimonials];
    return Array.from({ length: visibleCount }, (_, i) => extended[currentIndex + i]);
  };

  return (
    <section className="bg-transparent py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">

           <div className="inline-flex items-center justify-center mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#360b7f] dark:to-[#E82769]"></div>
            <span className="mx-4 text-[#360b7f] dark:text-[#E82769] font-bold text-sm tracking-[0.2em] uppercase">
              TESTIMONIOS
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#360b7f] dark:to-[#E82769]"></div>
          </div>


          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Reseñas de nuestros{" "}
            <span className="bg-gradient-to-r from-[#CF0072] to-[#90007e] dark:from-[#CF0072] dark:to-[#90007e] hover:bg-[#360b7f]/90 dark:hover:bg-[#680080]/90 bg-clip-text text-transparent">
              Participantes
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div
          className="relative overflow-hidden mb-8"
          style={{ minHeight: "300px" }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${currentIndex}-${index}`}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-4 mb-6">
          <NavButton
            onClick={() => handleNavigation("prev")}
            direction="prev"
          />
          <NavButton
            onClick={() => handleNavigation("next")}
            direction="next"
          />
        </div>

        {/* Dots indicator (mobile only) */}
        <div className="flex justify-center space-x-2 md:hidden">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => changeTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{ scale: index === currentIndex ? 1.2 : 1 }}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
