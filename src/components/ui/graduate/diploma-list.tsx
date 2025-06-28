"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Calendar, Star, ArrowRight, Award, Medal, CreditCard } from "lucide-react"
import type { GraduateData } from "@/types/graduate"
import { formatCurrencyInstallment, formatDate } from "@/utils/format"

interface DiplomaListProps {
  countryCode: string
  diplomas: GraduateData[]
}

export function DiplomaList({ countryCode, diplomas }: DiplomaListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className="space-y-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {diplomas && Array.isArray(diplomas) && diplomas.length > 0 ? (
        diplomas.map((diploma, index) => {
          const priceData = formatCurrencyInstallment(diploma.corporation[0]?.priceGraduate || "0", countryCode)

          return (
            <motion.div
              key={diploma.id}
              variants={item}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Glow effect para lista - custom teal theme */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#360b7f]/8 to-[#E82769]/8 dark:from-[#E82769]/10 dark:to-[#360b7f]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative bg-white dark:bg-[#101424] rounded-3xl overflow-hidden border border-slate-200 dark:border-gray-700 hover:border-[#CF0072]/30 dark:hover:border-[#360b7f]/50 transition-all duration-500 hover:shadow-2xl backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row">
                  {/* Imagen - misma altura que el grid */}
                  <div className="relative h-48 sm:h-auto sm:w-60 flex-shrink-0 bg-gradient-to-br from-[#E82769]/5 to-[#360b7f]/5 dark:from-[#101424] dark:to-[#101424] overflow-hidden">
                    <Image
                      src="/peru/course/diplomado.webp"
                      alt={diploma.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />

                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#680080] to-[#90007e] dark:from-[#E82769] dark:to-[#360b7f] text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                      <Medal className="w-3 h-3 inline mr-1" />
                      Diplomado
                    </div>
                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-800/90 backdrop-blur-sm text-slate-700 dark:text-white text-xs font-bold px-3 py-1 rounded-full border border-slate-200 dark:border-transparent">
                      #{index + 1}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 p-6 flex flex-col">
                    {/* Header badges */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#680080]/10 dark:bg-[#E82769]/30 text-[#680080] dark:text-[#E82769] px-3 py-1 rounded-full text-xs font-bold border border-[#E82769]/20 dark:border-transparent">
                        ESPECIALIZACIÓN
                      </span>
                      <Star className="w-5 h-5 text-[#E82769]/60 dark:text-white/40 group-hover:animate-pulse" />
                    </div>

                    {/* Título */}
                    <h3 className="font-black text-xl sm:text-2xl text-slate-800 dark:text-white mb-3 group-hover:text-[#680080] dark:group-hover:text-[#E82769] transition-colors duration-300 leading-tight">
                      {diploma.name}
                    </h3>

                    {/* Stats - mismo estilo que el grid */}
                    <div className="bg-[#360b7f]/3 dark:bg-gray-900/50 rounded-2xl p-4 mb-4 space-y-3 flex-shrink-0 border border-[#E82769]/10 dark:border-transparent">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <Clock className="h-4 w-4 mr-2 text-[#E82769]" />
                          <span className="font-semibold text-sm">Duración</span>
                        </div>
                        <span className="font-bold text-gray-100 dark:text-white bg-[#CF0072]/60 dark:bg-[#360b7f]/60 px-3 py-1 rounded-full text-xs">
                          {diploma.corporation[0]?.hours || "180"} hrs
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <Calendar className="h-4 w-4 mr-2 text-[#b6d900]" />
                          <span className="font-semibold text-sm">Inicio</span>
                        </div>
                        <span className="font-bold text-gray-100 dark:text-white bg-[#360b7f]/60 dark:bg-[#CF0072]/60 px-3 py-1 rounded-full text-xs">
                          {formatDate(diploma.startDate)}
                        </span>
                      </div>
                    </div>

                    {/* Spacer para empujar el footer hacia abajo */}
                    <div className="flex-grow"></div>

                    {/* Footer reorganizado */}
                    <div className="mt-auto space-y-4">
                      {/* Pricing - Fila completa como los stats */}
                      <div className="p-4 border-t border-slate-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-[#E82769]" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Desde</span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-500">{priceData.installmentText}</span>
                        </div>

                        <div className="flex items-baseline justify-between">
                          <span className="text-2xl font-black text-[#680080] dark:text-white">
                            {priceData.installmentPrice}
                          </span>
                          <span className="text-sm text-slate-500 dark:text-gray-400">
                            Total: {priceData.totalPrice}
                          </span>
                        </div>
                      </div>

                      {/* CTA Button - Fila separada */}
                      <div className="flex justify-center">
                        <Link
                          href={`/${countryCode}/diplomados/${diploma.id}`}
                          className="text-white dark:text-white bg-[#CF0072] hover:bg-[#90007e] dark:bg-[#b40264] dark:hover:bg-[#680080]/90 font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center shadow-lg hover:shadow-xl group/link transform hover:scale-105 text-sm w-full justify-center"
                        >
                          Ver diplomado
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
             
              </div>
            </motion.div>
          )
        })
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-16 text-center border border-slate-200 dark:border-gray-700">
            <Award className="h-24 w-24 mx-auto text-slate-300 dark:text-gray-600 mb-6" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Próximamente nuevos diplomados</h3>
            <p className="text-slate-500 dark:text-gray-400 text-lg max-w-md mx-auto">
              Estamos preparando programas especializados de alta calidad para tu crecimiento profesional.
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
