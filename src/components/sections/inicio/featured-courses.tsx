"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Book, ArrowRight } from "lucide-react";
import { CourseData } from "@/types/course";
import { CourseGrid } from "@/components/ui/course/course-grid";

interface FeaturedCoursesProps {
  countryCode: string;
  courses: CourseData[];
}

export function FeaturedCourses({
  countryCode,
  courses,
}: FeaturedCoursesProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3,
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#360b7f] dark:to-[#E82769]"></div>
                <span className="mx-4 text-[#360b7f] dark:text-[#E82769] font-bold text-sm tracking-[0.2em] uppercase">
                  CURSOS
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#360b7f] dark:to-[#E82769]"></div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Transforma Tu{" "}
                <span className="bg-gradient-to-r from-[#CF0072] to-[#90007e] dark:from-[#CF0072] dark:to-[#90007e] hover:bg-[#360b7f]/90 dark:hover:bg-[#680080]/90 bg-clip-text text-transparent">
                  Futuro
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto px-4">
                Descubre cursos diseñados por expertos que te llevarán al
                siguiente nivel profesional, potenciando tus habilidades con
                contenidos actualizados, metodologías prácticas.
              </p>
            </motion.div>
          </motion.div>

          {/* Course Grid Component */}
          <div className="mb-16">
            <CourseGrid countryCode={countryCode} courses={courses} />
          </div>

          {/* Botón Ver Todos los Cursos */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/${countryCode}/cursos`}
              className="group inline-flex items-center bg-gradient-to-b from-[#CF0072] to-[#90007e] dark:from-[#CF0072]/90 dark:to-[#CF0072]/40 
        text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Book className="w-5 h-5 mr-3" />
              Ver Todos los Cursos
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
