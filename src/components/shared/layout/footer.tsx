"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { countries, commonRoutes } from "@/config/countries";
import { Mail, Phone, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export function Footer({ countryCode = "" }: { countryCode?: string }) {
  const pathname = usePathname();
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [logoSrc, setLogoSrc] = useState("/es/logos/referencia-color.png");
  const [mounted, setMounted] = useState(false);

  // Determinar el código de país
  let currentCountryCode = countryCode;
  if (!currentCountryCode) {
    const countryFromPath = Object.keys(countries).find((code) =>
      pathname.includes(`/${code}`)
    );
    currentCountryCode = countryFromPath || "pe";
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Esperar a que el componente esté montado para evitar problemas de hidratación
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      setLogoSrc("/es/logos/promas_logo_dark.png");
    } else {
      setLogoSrc("/es/logos/referencia-color.png");
    }
  }, [theme, systemTheme]);

  // Obtener la configuración del país
  const country = countries[currentCountryCode];

  if (!mounted) return null;

  return (
    <footer className="bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#070717] dark:via-[#070717] dark:to-[#070717] py-16 px-6 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#CF0072] to-[#E82769] rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-[#680080] to-[#90007e] rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <Link href="/" className="inline-block group">
                <Image
                  src={logoSrc || "/placeholder.svg"}
                  alt="SAYAN Logo"
                  width={200}
                  height={32}
                  priority
                  className="transition-all duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            <div
              className={`text-sm leading-relaxed ${
                currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              &quot;Gracias por visitarnos. En SAYAN, estamos comprometidos con
              tu desarrollo profesional. ¡Esperamos verte pronto!&quot;
            </div>

            {/* Información de contacto */}
            <div className="space-y-3">
              {country.whatsapp && (
                <div className="flex items-center space-x-3">
                  <Phone
                    className={`h-4 w-4 ${
                      currentTheme === "dark"
                        ? "text-pink-400"
                        : "text-purple-600"
                    }`}
                  />
                  <a
                    href={`https://wa.me/${country.whatsapp.replace(
                      /[^0-9]/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm ${
                      currentTheme === "dark"
                        ? "text-gray-300"
                        : "text-gray-700"
                    }`}
                  >
                    {country.whatsapp}
                  </a>
                </div>
              )}

              {country.email && (
                <div className="flex items-center space-x-3">
                  <Mail
                    className={`h-4 w-4 ${
                      currentTheme === "dark"
                        ? "text-pink-400"
                        : "text-purple-600"
                    }`}
                  />
                  <a
                    href={`mailto:${country.email}`}
                    className={`text-sm ${
                      currentTheme === "dark"
                        ? "text-gray-300"
                        : "text-gray-700"
                    }`}
                  >
                    {country.email}
                  </a>
                </div>
              )}

              {/* Badge del país */}
              <div className="flex items-center gap-3 mt-4">
                <div className="relative">
                  <Image
                    src={country.flag || "/placeholder.svg"}
                    alt={country.name}
                    width={24}
                    height={18}
                    className="rounded-sm"
                  />
                  <div className="absolute inset-0 rounded-sm ring-1 ring-black/20 dark:ring-white/20" />
                </div>
                <span
                  className={`font-semibold text-sm ${
                    currentTheme === "dark"
                      ? "text-pink-400"
                      : "text-purple-600"
                  }`}
                >
                  {country.name}
                </span>
              </div>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3
              className={`text-lg font-semibold mb-6 ${
                currentTheme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              NAVEGACIÓN
            </h3>
            <ul className="space-y-3">
              {commonRoutes.map((route, index) => (
                <li key={index}>
                  <Link
                    href={
                      route.href === ""
                        ? `/${currentCountryCode}`
                        : `/${currentCountryCode}${route.href}`
                    }
                    className={`text-sm transition-colors hover:text-pink-500 ${
                      currentTheme === "dark"
                        ? "text-gray-300 hover:text-pink-400"
                        : "text-gray-600 hover:text-purple-600"
                    }`}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Legalidad */}
          <div>
            <h3
              className={`text-lg font-semibold mb-6 ${
                currentTheme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              LEGALIDAD
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${currentCountryCode}/terminos`}
                  className={`text-sm transition-colors hover:text-pink-500 ${
                    currentTheme === "dark"
                      ? "text-gray-300 hover:text-pink-400"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentCountryCode}/privacidad`}
                  className={`text-sm transition-colors hover:text-pink-500 ${
                    currentTheme === "dark"
                      ? "text-gray-300 hover:text-pink-400"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentCountryCode}/cookies`}
                  className={`text-sm transition-colors hover:text-pink-500 ${
                    currentTheme === "dark"
                      ? "text-gray-300 hover:text-pink-400"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  Configuración de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Libro de Reclamaciones y Redes Sociales */}
          <div>
            <h3
              className={`text-lg font-semibold mb-6 ${
                currentTheme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              LIBRO DE RECLAMACIONES
            </h3>

            <div
              className={`p-4 rounded-lg border-2 border-dashed mb-4 ${
                currentTheme === "dark"
                  ? "border-pink-400/50 bg-white/5"
                  : "border-purple-300 bg-purple-50/50"
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <FileText
                  className={`h-5 w-5 ${
                    currentTheme === "dark"
                      ? "text-pink-400"
                      : "text-purple-600"
                  }`}
                />
                <span
                  className={`font-medium ${
                    currentTheme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  Presenta tu reclamo
                </span>
              </div>
              <p
                className={`text-xs mb-4 ${
                  currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Registra tu queja o sugerencia de manera oficial
              </p>
              <Link
                href={`/${currentCountryCode}/libro-de-reclamaciones`}
                className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-block text-center ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-r from-[#CF0072]/90 to-[#CF0072]/40 text-white hover:shadow-2xl dark:hover:shadow-[#CF0072]/30"
                    : "bg-gradient-to-r from-[#CF0072] to-[#90007e] text-white hover:shadow-2xl hover:shadow-[#360b7f]/30"
                }`}
              >
                Acceder al Libro
              </Link>
            </div>

            {/* Redes Sociales */}
            <div>
              <h4
                className={`text-sm font-medium mb-3 ${
                  currentTheme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                REDES SOCIALES
              </h4>
              {country.socialMedia && (
                <div className="flex space-x-3">
                  {country.socialMedia.facebook && (
                    <a
                      href={country.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        currentTheme === "dark"
                          ? "bg-white/10 text-gray-300 hover:bg-[#E42569] hover:text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-purple-500 hover:text-white"
                      }`}
                    >
                      <FaFacebookF className="h-4 w-4" />
                    </a>
                  )}

                  {country.socialMedia.instagram && (
                    <a
                      href={country.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        currentTheme === "dark"
                          ? "bg-white/10 text-gray-300 hover:bg-[#E42569] hover:text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-purple-500 hover:text-white"
                      }`}
                    >
                      <FaInstagram className="h-4 w-4" />
                    </a>
                  )}

                  {country.socialMedia.youtube && (
                    <a
                      href={country.socialMedia.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        currentTheme === "dark"
                          ? "bg-white/10 text-gray-300 hover:bg-[#E42569] hover:text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-purple-500 hover:text-white"
                      }`}
                    >
                      <FaYoutube className="h-4 w-4" />
                    </a>
                  )}

                  {country.socialMedia.tiktok && (
                    <a
                      href={country.socialMedia.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        currentTheme === "dark"
                          ? "bg-white/10 text-gray-300 hover:bg-[#E42569] hover:text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-purple-500 hover:text-white"
                      }`}
                    >
                      <FaTiktok className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`pt-8 border-t text-center ${
            currentTheme === "dark"
              ? "border-white/20 text-gray-400"
              : "border-gray-200 text-gray-600"
          }`}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <p className="text-sm">
              © {new Date().getFullYear()} - Todos los derechos reservados.{" "}
              <span
                className={`font-medium ${
                  currentTheme === "dark" ? "text-pink-400" : "text-purple-600"
                }`}
              >
                PROMÁS
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
