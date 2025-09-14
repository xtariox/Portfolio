"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedTitle from "@/components/AnimatedTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const sections = [
  {
    title: { en: "Who I am", fr: "Qui je suis" },
    content: {
      en: "I'm Wissal, a final-year engineering student at ENSA Safi specializing in AI & Software Engineering.",
      fr: "Je suis Wissal, étudiante en dernière année d'ingénierie à l'ENSA Safi, spécialisée en IA et Génie Logiciel."
    }
  },
  {
    title: { en: "What I do", fr: "Ce que je fais" },
    content: {
      en: "I build fullstack apps integrating AI & Data. Examples: IoT predictive maintenance platform, Moodify app, HSE app with OCP.",
      fr: "Je développe des applications fullstack intégrant l'IA et les données. Exemples : plateforme IoT de maintenance prédictive, app Moodify, app HSE avec l'OCP."
    }
  },
  {
    title: { en: "Skills", fr: "Compétences" },
    content: {
      en: "Strong in Python (ML/Data), React, Node.js, Spring Boot, SQL/NoSQL, Docker, GitHub Actions.",
      fr: "Forte en Python (ML/Data), React, Node.js, Spring Boot, SQL/NoSQL, Docker, GitHub Actions."
    }
  },
  {
    title: { en: "Goals", fr: "Objectifs" },
    content: {
      en: "Looking for a 5–6 month PFE internship in AI, Data, Fullstack or DevOps.",
      fr: "Je cherche un stage PFE de 5-6 mois en IA, Data, Fullstack ou DevOps."
    }
  },
  {
    title: { en: "Fun fact", fr: "Fait amusant" },
    content: {
      en: "Outside coding, I enjoy reading Thriller novels and watching fantasy series.",
      fr: "En dehors du code, j'aime lire des romans Thriller et regarder des séries fantastiques."
    }
  },
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about">
      <div className="w-full max-w-4xl mx-auto">
        <AnimatedTitle>
          {t('about-title', { en: 'About Me', fr: 'À propos de moi' })}
        </AnimatedTitle>

        <div className="border border-[var(--border)] rounded-3xl py-16 px-6 bg-[var(--section-bg)] text-[var(--section-text)]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            {/* Left list */}
            <ul className="space-y-3">
              {sections.map((s, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition bg-[var(--card-border)] hover:cursor-pointer
                      ${
                        activeIndex === index
                          ? "bg-[var(--navbar-hover)] text-[var(--bg)]"
                          : "bg-[var(--bg)] text-[var(--text)] hover:bg-[var(--subtle-bg)]"
                      }`}
                  >
                    {t(`about-section-${index}-title`, s.title)}
                  </button>

                  {/* Mobile accordion */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        key="accordion"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-2 bg-[var(--card-bg)] p-4 rounded-lg shadow-sm"
                      >
                        <p className="text-sm text-[var(--text)]">
                          {t(`about-section-${index}-content`, s.content)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            {/* Right detail panel (desktop only) */}
            <div className="hidden md:flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[var(--card-bg)] rounded-2xl shadow-lg p-8 text-[var(--text)]"
                >
                  <p className="text-lg leading-relaxed max-w-md">
                    {t(`about-section-${activeIndex}-content`, sections[activeIndex].content)}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
