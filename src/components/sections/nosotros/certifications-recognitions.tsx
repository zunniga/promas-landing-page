"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Globe, Zap, Award, Shield, Star, CheckCircle } from 'lucide-react'

interface CertificationsRecognitionsProps {
  partnerships: Array<{
    name: string
    type: string
    logo: string
  }>
}

export function CertificationsRecognitions({ partnerships }: CertificationsRecognitionsProps) {

  const enhancedContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const enhancedItemVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -45, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 80,
      },
    },
  }

  const cardHoverVariants = {
    hover: {
      y: -15,
      rotateY: 5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  }

  return (
    <motion.section
      className="py-24 md:py-32 relative overflow-hidden bg-transparent"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {/* Background decorative patterns */}
      <motion.div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        initial={{ opacity: 0, rotate: -5 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(54,11,127,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-20"
            variants={enhancedContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={enhancedItemVariants}
              className="inline-block mb-8"
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            >
              <motion.div
                className="bg-gradient-to-r from-[#360b7f] to-[#680080] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide flex items-center shadow-lg"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "auto", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Award className="w-6 h-6 mr-3" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  NUESTRAS ALIANZAS
                </motion.span>
                <motion.div
                  initial={{ rotate: 180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Shield className="w-6 h-6 ml-3" />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.h2
              variants={enhancedItemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-[#360b7f] to-[#680080] dark:from-white dark:via-[#cf0072] dark:to-[#e82769] bg-clip-text text-transparent mb-8 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -100, rotateY: -90 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Colaboraciones
              </motion.span>
              <br />
              <motion.span
                className="text-transparent bg-gradient-to-r from-[#cf0072] to-[#e82769] bg-clip-text"
                initial={{ opacity: 0, x: 100, rotateY: 90 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Institucionales
              </motion.span>
            </motion.h2>

            <motion.div variants={enhancedItemVariants} className="flex items-center justify-center mb-8">
              <motion.div
                className="h-1 w-16 bg-gradient-to-r from-[#360b7f] to-[#680080] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="h-2 w-2 bg-[#cf0072] rounded-full mx-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="h-1 w-16 bg-gradient-to-r from-[#cf0072] to-[#e82769] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <motion.p
              variants={enhancedItemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Partnerships estratégicos que potencian nuestra propuesta educativa y multiplican las oportunidades de
              crecimiento profesional para nuestra comunidad estudiantil.
            </motion.p>
          </motion.div>

          {/* Enhanced Partnership Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={enhancedContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                className="group relative h-full"
                variants={enhancedItemVariants}
                whileHover="hover"
                custom={index}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#cf0072]/20 to-[#e82769]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl transform scale-110"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />

                <motion.div
                  className="relative h-full bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 hover:border-[#cf0072]/50 dark:hover:border-[#cf0072]/60 transition-all duration-500 text-center overflow-hidden flex flex-col justify-between min-h-[280px]"
                  variants={cardHoverVariants}
                  initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                  whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#cf0072]/0 to-[#e82769]/0 group-hover:from-[#cf0072]/10 group-hover:to-[#e82769]/10 dark:group-hover:from-[#360b7f]/10 dark:group-hover:to-[#680080]/10 transition-all duration-500 rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    {/* Logo container */}
                    <motion.div
                      className="relative mb-6"
                      initial={{ opacity: 0, y: -30, scale: 0.5 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1, type: "spring", stiffness: 150 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative">
                        <motion.div
                          className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-2xl border border-gray-200 dark:border-gray-600"
                          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.15 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Image
                            src={partner.logo || "/placeholder.svg?height=56&width=56&query=partner logo"}
                            alt={partner.name}
                            width={56}
                            height={56}
                            className="rounded-2xl transition-all duration-500 group-hover:opacity-90"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = "/placeholder.svg?height=56&width=56"
                            }}
                          />
                        </motion.div>

                        {/* Status indicator */}
                        <motion.div
                          className="absolute -top-2 -right-2 bg-gradient-to-r from-[#360b7f] to-[#680080] w-8 h-8 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                          viewport={{ once: true }}
                          whileHover={{ rotate: 360 }}
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </motion.div>

                        {/* Decorative ring */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl border-2 border-[#cf0072]/0 group-hover:border-[#cf0072]/50 dark:group-hover:border-[#cf0072]/60 transition-all duration-500 transform group-hover:scale-105"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>

                    {/* Content container */}
                    <div className="flex flex-col justify-between flex-grow">
                      {/* Partner name */}
                      <motion.h4
                        className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#360b7f] dark:group-hover:text-[#cf0072] transition-colors duration-300 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {partner.name}
                      </motion.h4>

                      {/* Partner type badge */}
                      <motion.div
                        className="inline-flex items-center bg-gradient-to-r from-[#680080] to-[#cf0072] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 mx-auto"
                        initial={{ opacity: 0, scale: 0, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 + index * 0.1, type: "spring", stiffness: 150 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                      >
                        <motion.div
                          initial={{ rotate: -180 }}
                          whileInView={{ rotate: 0 }}
                          transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-4 h-4 mr-2" />
                        </motion.div>
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {partner.type}
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced bottom section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-[#cf0072]/10 to-[#e82769]/10 dark:from-[#360b7f]/30 dark:to-[#680080]/30 px-8 py-4 rounded-full"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 360 }}
              >
                <Globe className="w-6 h-6 text-[#360b7f] dark:text-[#cf0072] mr-3" />
              </motion.div>
              <motion.span
                className="text-[#360b7f] dark:text-[#cf0072] font-semibold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Red internacional de colaboración educativa
              </motion.span>
              <motion.div
                initial={{ rotate: 180, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ rotate: -360 }}
              >
                <Zap className="w-6 h-6 text-[#360b7f] dark:text-[#cf0072] ml-3" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}