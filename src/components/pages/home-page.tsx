"use client";

import React from "react";
import HeroCarousel from "@/components/sections/inicio/hero-carousel";
import { FirstSection } from "@/components/sections/inicio/certificate-section";
import { FeaturedCourses } from "@/components/sections/inicio/featured-courses";
import CounterStats from "@/components/sections/inicio/counter-number";
import ContactForm from "@/components/sections/inicio/contact-view";
import Testimonials from "@/components/sections/inicio/testimonials";
import { FeaturedDiplomas } from "@/components/sections/inicio/featured-diplomas";
import type { HeroSlide, Testimonial } from "@/types";
import type { CourseData } from "@/types/course";
import type { GraduateData } from "@/types/graduate";
import type { StatItem } from "@/components/sections/inicio/stats";

interface HomeLayoutProps {
  countryCode: string;
  countryName: string;
  heroSlides: HeroSlide[];
  featuredCourses: CourseData[];
  testimonials: Testimonial[];
  stats: StatItem[];
  featuredDiplomas: GraduateData[];
  ctaBackgroundImage?: string;
}

export default function HomeLayout({
  countryCode,
  featuredCourses,
  featuredDiplomas,
}: HomeLayoutProps) {
  return (
    <>
      {/* Hero Section - Full screen */}
      <section className="bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#070717] dark:via-[#070717] dark:to-[#070717]">
        <HeroCarousel />
      </section>

      <div className=" mx-auto">
        {/* Certificate Section - Nueva sección */}
        <section className="bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#070717] dark:via-[#070717] dark:to-[#070717]">
          <FirstSection />
        </section>

        {/* Featured Courses */}

        <section className="bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#070717] dark:via-[#070717] dark:to-[#070717]">
          <FeaturedDiplomas
            countryCode={countryCode}
            graduates={featuredDiplomas}
          />
        </section>

        <section className="bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#070717] dark:via-[#070717] dark:to-[#070717]">
          <Testimonials />
        </section>
        <section className="bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#070717] dark:via-[#070717] dark:to-[#070717]">
          <FeaturedCourses
            countryCode={countryCode}
            courses={featuredCourses}
          />
        </section>
        <section className=" bg-gradient-to-r from-[#CC0072]/45 to-[#360b7f]/45  dark:from-[#080718]/70 dark:via-[#080717]/70 dark:to-[#080717]/70">
          <CounterStats />
        </section>
        <section className="bg-gradient-to-t from-gray-100 via-white to-gray-100 dark:from-[#070717] dark:via-[#070717] dark:to-[#070717]">
          <ContactForm />
        </section>
      </div>
    </>
  );
}
