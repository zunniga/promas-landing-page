"use client"

import { useState, useEffect } from "react"
import { IoIosArrowUp } from "react-icons/io"

function  ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const isBrowser = () => typeof window !== "undefined"

  function scrollToTop() {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    if (!isBrowser()) return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      setScrollProgress(scrollPercent)

      if (scrollTop > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>   
      {/* Botón de scroll to top mejorado */}
      <button
        className={`
                    fixed bottom-24 right-6 z-50 
                    w-14 h-14 rounded-full  
                  bg-gradient-to-r from-[#CF0072] to-[#90007e] dark:from-[#360b7f] dark:to-[#110d40] border dark:border-white-50/20
                    text-white shadow-2xl
                    flex items-center justify-center
                    transition-all duration-500 ease-out
                    hover:scale-110 hover:shadow-[0_0_30px_rgba(207,0,114,0.5)]
                    active:scale-95
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
                    animate-slow-bounce
                `}
        onClick={scrollToTop}
      
      >
        {/* Círculo de progreso */}
        <div className="absolute inset-0 rounded-full">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - scrollProgress / 100)}`}
              className="transition-all duration-300 ease-out"
            />
          </svg>
        </div>

        {/* Icono de flecha */}
        <IoIosArrowUp className="w-6 h-6 relative z-10" />

        {/* Efecto de brillo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </button>

      {/* Estilos CSS personalizados */}
      <style jsx>{`
                @keyframes slow-bounce {
                    0%, 100% {
                        transform: translateY(0);
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                    50% {
                        transform: translateY(-8px);
                        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    }
                }
                
                .animate-slow-bounce {
                    animation: slow-bounce 3s infinite;
                }
                
                @keyframes pulse-glow {
                    0%, 100% {
                        box-shadow: 0 0 20px rgba(207, 0, 114, 0.3);
                    }
                    50% {
                        box-shadow: 0 0 40px rgba(207, 0, 114, 0.6);
                    }
                }
            `}</style>
    </>
  )
}

export default ScrollToTopButton
