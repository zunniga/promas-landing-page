"use client"
import { motion } from "framer-motion"
import { Target, Eye, Heart, Star, Lightbulb, Users, Award, Globe } from "lucide-react"

interface MissionVisionValuesProps {
  countryName: string
  countryCode: string
}

export function MissionVisionValues({ countryName }: MissionVisionValuesProps) {
  const values = [
    {
      icon: <Star className="h-7 w-7" />,
      title: "Excelencia",
      description: "Mantenemos los más altos estándares de calidad en cada uno de nuestros programas formativos.",
      color: "from-[#360b7f] to-[#680080]",
      bgColor: "bg-[#360b7f]/10 dark:bg-[#360b7f]/25",
      iconColor: "text-[#360b7f] dark:text-[#cf0072]",
    },
    {
      icon: <Lightbulb className="h-7 w-7" />,
      title: "Innovación",
      description:
        "Integramos continuamente metodologías vanguardistas y herramientas tecnológicas para optimizar el aprendizaje.",
      color: "from-[#680080] to-[#cf0072]",
      bgColor: "bg-[#680080]/10 dark:bg-[#680080]/25",
      iconColor: "text-[#680080] dark:text-[#e82769]",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Compromiso",
      description:
        "Nos enfocamos en el desarrollo profesional y personal de cada miembro de nuestra comunidad educativa.",
      color: "from-[#cf0072] to-[#e82769]",
      bgColor: "bg-[#cf0072]/10 dark:bg-[#cf0072]/25",
      iconColor: "text-[#cf0072] dark:text-[#e82769]",
    },
    {
      icon: <Award className="h-7 w-7" />,
      title: "Integridad",
      description: "Operamos con transparencia, ética y responsabilidad en cada una de nuestras actividades.",
      color: "from-[#e82769] to-[#cf0072]",
      bgColor: "bg-[#e82769]/10 dark:bg-[#e82769]/25",
      iconColor: "text-[#e82769] dark:text-[#cf0072]",
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Inclusión",
      description: "Fomentamos un entorno diverso e inclusivo donde cada persona puede alcanzar su máximo potencial.",
      color: "from-[#680080] to-[#360b7f]",
      bgColor: "bg-[#680080]/10 dark:bg-[#680080]/25",
      iconColor: "text-[#680080] dark:text-[#cf0072]",
    },
    {
      icon: <Heart className="h-7 w-7" />,
      title: "Impacto Social",
      description: "Contribuimos al progreso de la sociedad mediante la educación y el desarrollo de talento humano.",
      color: "from-[#cf0072] to-[#360b7f]",
      bgColor: "bg-[#cf0072]/10 dark:bg-[#cf0072]/25",
      iconColor: "text-[#cf0072] dark:text-[#e82769]",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -120, scale: 0.7 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 90,
      },
    },
  }

  return (
    <motion.section
      className="py-24 md:py-32 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {/* Fondo decorativo */}
      <motion.div
        className="absolute inset-0 bg-transparent"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header mejorado */}
          <motion.div
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-4"
              variants={itemVariants}
              whileHover={{ scale: 1.08, rotate: [0, -2, 2, 0] }}
            >
              <div className="bg-gradient-to-r from-[#680080] to-[#cf0072] text-white px-8 py-3 rounded-full text-sm font-bold tracking-wide shadow-lg">
                NUESTRA ESENCIA
              </div>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-[#680080] to-[#cf0072] dark:from-white dark:via-[#e82769] dark:to-[#cf0072] bg-clip-text text-transparent mb-6 leading-tight"
              variants={itemVariants}
            >
              <motion.span
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Misión, Visión
              </motion.span>
              <br />
              <motion.span
                className="text-transparent bg-gradient-to-r from-[#cf0072] to-[#e82769] bg-clip-text"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                y Principios
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Los cimientos fundamentales que orientan nuestra labor y expresan nuestro compromiso con la formación de
              excelencia en {countryName}.
            </motion.p>
          </motion.div>

          {/* Misión y Visión con animaciones mejoradas */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 mb-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Misión */}
            <motion.div
              className="relative group"
              variants={cardVariants}
              whileHover={{ y: -15, rotateY: 8, scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#680080] to-[#cf0072] rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"
                initial={{ scale: 0, rotate: -200 }}
                whileInView={{ scale: 1, rotate: 2 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl">
                <motion.div
                  className="flex items-center mb-8"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="bg-gradient-to-r from-[#680080] to-[#cf0072] p-4 rounded-2xl mr-6 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Target className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Nuestra Misión</h3>
                    <motion.div
                      className="w-20 h-1 bg-gradient-to-r from-[#680080] to-[#cf0072] rounded-full mt-2"
                      initial={{ width: 0 }}
                      whileInView={{ width: 80 }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Brindar servicios educativos especializados a organizaciones y profesionales, destacando por la
                  calidad de nuestros facilitadores, el uso de tecnología avanzada y un equipo comprometido con una
                  formación de primer nivel.
                </motion.p>
              </div>
            </motion.div>

            {/* Visión */}
            <motion.div
              className="relative group"
              variants={cardVariants}
              whileHover={{ y: -15, rotateY: -8, scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#cf0072] to-[#e82769] rounded-3xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500"
                initial={{ scale: 0, rotate: 200 }}
                whileInView={{ scale: 1, rotate: -2 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              />
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl">
                <motion.div
                  className="flex items-center mb-8"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="bg-gradient-to-r from-[#cf0072] to-[#e82769] p-4 rounded-2xl mr-6 shadow-lg"
                    whileHover={{ rotate: -360, scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Eye className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Nuestra Visión</h3>
                    <motion.div
                      className="w-20 h-1 bg-gradient-to-r from-[#cf0072] to-[#e82769] rounded-full mt-2"
                      initial={{ width: 0 }}
                      whileInView={{ width: 80 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  viewport={{ once: true }}
                >
                  Consolidarnos como una organización líder, innovadora y reconocida a nivel regional, estableciendo
                  nuevos estándares en capacitación, gestión del talento humano y servicios de consultoría de alta
                  calidad.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Valores con animaciones mejoradas */}
          <motion.div>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, rotateX: -90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Nuestros{" "}
                <span className="bg-gradient-to-r from-[#680080] to-[#cf0072] bg-clip-text text-transparent">
                  Principios
                </span>
              </motion.h3>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-[#680080] to-[#cf0072] rounded-full mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={{
                    hidden: { opacity: 0, y: 80, rotateX: -60, scale: 0.7 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      scale: 1,
                      transition: {
                        duration: 1,
                        delay: index * 0.15,
                        type: "spring",
                        stiffness: 90,
                      },
                    },
                  }}
                  whileHover={{ y: -15, rotateY: 8, scale: 1.03 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-xl transform scale-110`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1.1 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 hover:border-[#cf0072]/30 dark:hover:border-[#e82769]/40 transition-all duration-500">
                    <motion.div
                      className="flex items-start mb-6"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`${value.bgColor} p-4 rounded-xl mr-4 group-hover:scale-115 transition-transform duration-300`}
                        whileHover={{ rotate: [0, -15, 15, 0], scale: 1.25 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className={`${value.iconColor}`}>{value.icon}</div>
                      </motion.div>
                      <div className="flex-1">
                        <motion.h4
                          className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#680080] dark:group-hover:text-[#cf0072] transition-colors duration-300"
                          initial={{ opacity: 0, y: -15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {value.title}
                        </motion.h4>
                        <motion.div
                          className={`w-12 h-0.5 bg-gradient-to-r ${value.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: 48 }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                    <motion.p
                      className="text-gray-600 dark:text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
