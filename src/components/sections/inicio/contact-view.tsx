"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, MapPin, Info, CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div id="contacts" className="min-h-screen bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#360b7f]/5 dark:via-[#90007e]/5 dark:to-[#360b7f]/5 relative overflow-hidden">
      {/* Decorative lines background */}
      <div className="absolute  opacity-30">
        <Image
          src="/image/utils/linear.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left side - Content */}
          <div className="text-white space-y-8 ">
            
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="inline-flex ml-12 items-center text-center justify-center mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#360b7f] dark:to-[#E82769]"></div>
                <span className="mx-4 text-[#360b7f] dark:text-[#E82769] font-bold text-sm tracking-[0.2em] uppercase">
                  CONTÁCTOS
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#360b7f] dark:to-[#E82769]"></div>
              </div>

              <div className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Contáctanos{" "}
                <span className="bg-gradient-to-r from-[#CF0072] to-[#90007e] dark:from-[#CF0072] dark:to-[#90007e] hover:bg-[#360b7f]/90 dark:hover:bg-[#680080]/90 bg-clip-text text-transparent">
                  ahora
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-md">
                Ofrecemos diplomas y cursos especializados para impulsar tu
                carrera profesional. Descubre nuestros programas educativos de
                alta calidad.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">
                  Certificación oficial al completar el programa
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">
                  Respuesta en menos de 24 horas hábiles
                </span>
              </div>
            </motion.div>

            {/* Info boxes - Now with 3 boxes */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              {/* Contact box */}
              <motion.div
                className="bg-gradient-to-br from-transparent to-transparent dark:from-transparent dark:to-transparent backdrop-blur-sm rounded-2xl p-4 border border-[#680080]/40 dark:border-white/30 shadow-lg"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(207, 0, 114, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-[#D50A6F]/90 dark:to--[#D50A6F]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Phone className="w-5 h-5 text-white " />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white/90 text-sm font-medium">
                      Consultas Inmediatas
                    </p>
                    <p className="text-gray-800 dark:text-white font-semibold text-lg">
                      +51 984 040 264
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Location box */}
              <motion.div
                className="bg-gradient-to-br from-transparent to-transparent dark:from-transparent dark:to-transparent backdrop-blur-sm rounded-2xl p-4 border border-[#90007e]/40 dark:border-white/30 shadow-lg"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(144, 0, 126, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-[#360b7f]/90 dark:to-[#360b7f]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MapPin className="w-5 h-5 text-white dark:text-white/90" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white/90 text-sm font-medium">
                      Ubicación
                    </p>
                    <p className="text-gray-800 dark:text-white font-semibold text-lg">
                      Lima, Perú
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Additional info box */}
              <motion.div
                className="bg-gradient-to-br from-transparent to-transparent dark:from-transparent dark:to-transparent backdrop-blur-sm rounded-2xl p-4 border border-[#CF0072]/40 dark:border-white/30 shadow-lg"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(232, 39, 105, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-10 h-10 bg-gradient-to-l from-purple-600 to-pink-600 dark:from-[#D50A6F]/90 dark:to--[#D50A6F]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Info className="w-5 h-5 text-white dark:text-white/90" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white/90 text-sm font-medium">
                      Horario de Atención
                    </p>
                    <p className="text-gray-800 dark:text-white font-semibold text-lg">
                      Lun-Vie: 9am-6pm
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Form */}
          <motion.div
            className="bg-white/95 dark:bg-[#101424] backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/20"
            variants={itemVariants}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tu Nombre
                </label>
                <Input
                  type="text"
                  placeholder="Ingresa tu nombre completo"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="h-14 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl text-base focus:ring-2 focus:ring-[#CF0072] focus:border-[#CF0072] dark:focus:ring-[#E82769] dark:focus:border-[#E82769]"
                  required
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Correo Electrónico
                </label>
                <Input
                  type="email"
                  placeholder="tu.email@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-14 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl text-base focus:ring-2 focus:ring-[#CF0072] focus:border-[#CF0072] dark:focus:ring-[#E82769] dark:focus:border-[#E82769]"
                  required
                />
              </div>

              {/* Phone field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Número de Teléfono
                </label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="h-14 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl text-base focus:ring-2 focus:ring-[#CF0072] focus:border-[#CF0072] dark:focus:ring-[#E82769] dark:focus:border-[#E82769]"
                />
              </div>

              {/* Subject field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tema de Consulta
                </label>
                <Select
                  onValueChange={(value) => handleInputChange("subject", value)}
                >
                  <SelectTrigger className="h-14 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl text-base focus:ring-2 focus:ring-[#CF0072] focus:border-[#CF0072] dark:focus:ring-[#E82769] dark:focus:border-[#E82769]">
                    <SelectValue placeholder="Selecciona un tema" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diplomas">
                      Información sobre Diplomas
                    </SelectItem>
                    <SelectItem value="cursos">Cursos Disponibles</SelectItem>
                    <SelectItem value="inscripciones">
                      Proceso de Inscripción
                    </SelectItem>
                    <SelectItem value="becas">
                      Becas y Financiamiento
                    </SelectItem>
                    <SelectItem value="horarios">
                      Horarios y Modalidades
                    </SelectItem>
                    <SelectItem value="certificacion">Certificación</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="group relative text-lg px-6 sm:px-8 py-3 sm:py-4 w-full h-full bg-gradient-to-b from-[#CF0072] to-[#90007e] dark:from-[#CF0072]/90 dark:to-[#CF0072]/40 hover:shadow-2xl hover:shadow-[#360b7f]/30 dark:hover:shadow-[#CF0072]/30 text-white rounded-lg"
                >
                  Enviar →
                </Button>
              </motion.div>
            </form>

            {/* Additional info */}
            <div className="mt-6 p-4 bg-gradient-to-r from-[#CF0072]/10 to-[#E82769]/10 dark:from-[#680080]/20 dark:to-[#90007e]/20 rounded-xl border border-[#CF0072]/20 dark:border-[#E82769]/30">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Al enviar este formulario, aceptas recibir información sobre
                nuestros programas educativos.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
