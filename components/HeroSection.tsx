"use client";

import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="home">
      <div className="mx-auto my-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        {/* Title */}
        <div className="mx-auto text-center max-w-xl">
          <h1
            className="relative font-semibold max-w-max mx-auto pb-2 font-display"
            style={{
              fontSize: "var(--hero-title-size)",
              color: "var(--hero-title)",
            }}
          >
            HAIDA Wissal
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="mt-10 grid md:grid-cols-2 gap-x-6 lg:gap-x-14 gap-y-8 md:items-center">
          {/* Left Side */}
          <div className="space-y-4 md:space-y-6 w-full max-w-3xl lg:max-w-none mx-auto lg:mx-0 text-left">
            <h2
              className="font-display font-semibold"
              style={{
                fontSize: "var(--hero-subtitle-size)",
                color: "var(--hero-subtitle)",
              }}
            >
              {t('hero-subtitle', {
                en: '3rd Year Computer Engineering & AI Student',
                fr: 'Étudiante en 3ème année Génie Informatique & IA'
              })}
            </h2>

            <div
              className="space-y-3 mx-auto max-w-2xl lg:max-w-none"
              style={{ color: "var(--hero-muted)" }}
            >
              <p>
                {t('hero-description', {
                  en: '3rd year student at ENSA Safi specializing in Computer Engineering and AI. Passionate about software development, artificial intelligence, and data science. Currently seeking a PFE internship.',
                  fr: 'Étudiante en 3ème année du Cycle Ingénieur en Génie Informatique et Intelligence Artificielle à l\'ENSA Safi. Passionnée par le développement logiciel, l\'IA et la data science. Recherche actuellement un stage PFE.'
                })}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Link
                href="#contact"
                className="px-6 h-11 flex items-center rounded-lg text-sm transition ease-linear hover:opacity-90"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--bg)",
                }}
              >
                <b>{t('hero-cta', { en: 'Hire me', fr: 'Embauchez-moi' })}</b>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 w-full gap-y-3">
              <div className="lg:col-span-2">
                <h3
                  className="font-display font-semibold"
                  style={{
                    fontSize: "var(--hero-stat-size)",
                    color: "var(--hero-text)",
                  }}
                >
                  4+ {t('hero-years', { en: 'years', fr: 'ans' })}
                </h3>
                <span style={{ color: "var(--hero-muted)" }}>
                  {t('hero-engineering-bg', {
                    en: 'Engineering Studies',
                    fr: 'Études d\'Ingénierie'
                  })}
                </span>
              </div>
              <div>
                <h3
                  className="font-display font-semibold"
                  style={{
                    fontSize: "var(--hero-stat-size)",
                    color: "var(--hero-text)",
                  }}
                >
                  15+
                </h3>
                <span style={{ color: "var(--hero-muted)" }}>
                  {t('hero-projects', { en: 'Projects', fr: 'Projets' })}
                </span>
              </div>
              <div>
                <h3
                  className="font-display font-semibold"
                  style={{
                    fontSize: "var(--hero-stat-size)",
                    color: "var(--hero-text)",
                  }}
                >
                  2
                </h3>
                <span style={{ color: "var(--hero-muted)" }}>
                  {t('hero-internships', {
                    en: 'Internships',
                    fr: 'Stages'
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="flex justify-center mt-4 md:mt-6">
            <div className="relative max-w-full sm:max-w-lg md:max-w-xl">
              {/* Background gradient layer */}
              <span
                className="absolute inset-0 rounded-xl scale-[1.06] z-0"
                style={{ background: "linear-gradient(to bottom, var(--border), transparent)" }}
              />

              {/* Solid background layer */}
              <span
                className="absolute inset-0 rounded-xl scale-[1.05] z-0"
                style={{ backgroundColor: "var(--subtle-bg)" }}
              />

              {/* Portrait */}
              <Image
                src="/Untitled design (2).png"
                width={1400}
                height={1376}
                alt="Portrait"
                className="relative z-10 w-full h-auto object-contain rounded-xl lg:max-h-[26rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
