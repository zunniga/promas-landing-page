"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ThemeSwitch } from "@/components/ThemeSwitch"
import { CountrySwitcher } from "../country-switcher"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

// Importamos las configuraciones de países
import { countries, commonRoutes } from "@/config/countries"

export function Navbar({ countryCode = "" }: { countryCode?: string }) {
  const pathname = usePathname()
  const [country, setCountry] = React.useState<string>(countryCode || "pe")
  const { resolvedTheme } = useTheme()
  const [logoSrc, setLogoSrc] = useState("/es/logos/promas_logo_main.png")
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    setMounted(true)

    // Si no se proporcionó un código de país en las props, detectarlo de la ruta
    if (!countryCode) {
      // Detectar el país actual basado en la ruta
      const detectedCountry = Object.keys(countries).find((code) => pathname.includes(`/${code}`))

      if (detectedCountry) {
        setCountry(detectedCountry)
      }
    }
  }, [pathname, countryCode])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setLogoSrc("/es/logos/promas_logo_dark.png")
    } else {
      setLogoSrc("/es/logos/referencia-color.png")
    }
  }, [resolvedTheme])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMobileMenu = () => setIsMenuOpen(false)

  // Cerrar el menú cuando se cambia de ruta
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Header Principal */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full fixed top-0 left-0 right-0 z-50 animate-fadeIn"
      >
        <header
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-gradient-to-b from-blue-50/80 to-white/60 dark:from-transparent dark:to-transparent backdrop-blur-xl shadow-lg border-b border-gray-200/30 dark:border-gray-700/30"
              : "bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#360b7f]/5 dark:via-[#90007e]/5 dark:to-[#360b7f]/5"
          }`}
        >
          <div className="container-custom px-4 sm:px-6">
            <div className="flex items-center justify-between py-3 sm:py-4">
              <div className="flex items-center gap-8 min-w-0 flex-1">
                {/* Logo con efecto hover mejorado */}
                <motion.div
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href="/" className="flex items-center">
                    <div className="relative rounded-lg overflow-hidden w-28 h-12 sm:w-36 sm:h-14 lg:w-44 lg:h-16">
                      <div className="relative w-full h-full">
                        {mounted && (
                          <Image
                            src={logoSrc || "/placeholder.svg"}
                            alt="Promas-Logo"
                            fill
                            className="object-contain"
                            priority
                          />
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* Navegación Desktop */}
                <nav className="hidden lg:flex items-center justify-center flex-1">
                  <div className="flex items-center space-x-8">
                    {commonRoutes.map((item, index) => {
                      // Construir la URL con el prefijo del país actual
                      const fullHref = item.href === "" ? `/${country}` : `/${country}${item.href}`

                      // Verificar si esta ruta está activa
                  

                      return (
                        <motion.div
                          key={`${item.label}-${index}`}
                          className="relative"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={fullHref}
                            className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${
                              pathname === fullHref
                                ? "text-primary font-semibold"
                                : "text-gray-700 dark:text-gray-200 hover:text-primary"
                            }`}
                          >
                            {item.label}
                            <span
                              className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                                pathname === fullHref ? "w-full" : "w-0"
                              }`}
                            />
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </nav>
              </div>

              {/* Controles de la derecha */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {/* Aula Virtual Button - Desktop */}
                <div className="hidden lg:flex items-center space-x-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      className="text-sm font-medium bg-gradient-to-r from-[#CF0072] to-[#90007e] dark:from-[#90007e] dark:to-[#CF0072] border dark:border-white-50/20 hover:bg-[#360b7f]/90 dark:hover:bg-[#680080]/90 text-white shadow-md hover:shadow-lg rounded-lg transition-all duration-300"
                      asChild
                    >
                      <Link href={`https://www.unp.auladm.com/`} className="flex items-center gap-2" target="_blank">
                        <GraduationCap size={16} />
                        Aula Virtual
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                {/* Country Switcher Desktop */}
                {/* <div className="hidden sm:block relative">
                  <CountrySwitcher currentCountryCode={country} size="default" />
                </div> */}

                {/* Mode Toggle */}
                <div className="flex-shrink-0 relative">
                  <ThemeSwitch />
                </div>

                {/* Botón de menú móvil */}
                <div className="flex items-center space-x-2 lg:hidden">
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-800"
                      onClick={toggleMenu}
                      aria-label="Toggle menu"
                    >
                      <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                      </motion.div>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </motion.div>

      {/* Overlay del menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] lg:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 right-0 h-screen bg-white dark:bg-transparent z-[70] lg:hidden shadow-2xl overflow-hidden"
          >
            {/* Header del menú móvil */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
            >
              <div className="relative w-32 h-12">
                {mounted && (
                  <Image src={logoSrc || "/placeholder.svg"} alt="Inalta-Logo" fill className="object-contain" />
                )}
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-700 dark:text-gray-200"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </Button>
            </motion.div>

            {/* Contenido del menú */}
            <motion.div className="p-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              {/* Botón de acción móvil */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-3 pb-4 border-b border-gray-200 dark:border-gray-700"
              >
                <Button
                  className="w-full justify-center bg-primary hover:bg-primary/90 rounded-xl"
                  asChild
                  onClick={closeMobileMenu}
                >
                  <Link
                    href="https://www.unp.auladm.com/"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#90007e] to-[#680080] text-white dark:text-white"
                  >
                    <GraduationCap size={18} />
                    Aula Virtual
                  </Link>
                </Button>
              </motion.div>

              {/* Enlaces de navegación */}
              <div className="space-y-3">
                {commonRoutes.map((item, index) => {
                  const fullHref = item.href === "" ? `/${country}` : `/${country}${item.href}`
                
                  // Definir isActive para el menú móvil
                  const isActive =
                    item.href === ""
                      ? pathname === `/${country}`
                      : pathname === `/${country}${item.href}`
                
                  return (
                    <motion.div
                      key={`mobile-${item.label}-${index}`}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        href={fullHref}
                        className={`
                          block px-6 py-3 rounded-2xl bg-transparent border dark:border-gray-50/30 text-lg font-medium transition-all duration-300
                          transform hover:scale-105 hover:shadow-md text-center
                          ${
                            isActive
                              ? "text-white bg-gradient-to-b from-[#CF0072] to-[#90007e] dark:from-[#CF0072]/90 dark:to-[#CF0072]/40"
                              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                          }
                        `}
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* Divisor */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-gray-600/50 to-transparent" />

              {/* Country Switcher Mobile y controles */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300 whitespace-nowrap">País:</span>
                  <CountrySwitcher currentCountryCode={country} size="default" />
                </div>

                {/* Indicador de conexión */}
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">Conectado</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
