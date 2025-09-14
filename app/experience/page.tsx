"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedTitle from "@/components/AnimatedTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const experienceData = {
  education: [
    {
      title: { en: "Engineering Degree - Computer Science and Artificial Intelligence", fr: "Diplôme d'Ingénieur – Génie Informatique et Intelligence Artificielle" },
      subtitle: { en: "ENSA Safi - National School of Applied Sciences", fr: "ENSA Safi – École Nationale des Sciences Appliquées" },
      period: "2021 – Présent",
      location: "Safi, Morocco",
      description: { 
        en: "3rd year engineering student in Computer Science and Artificial Intelligence (Preparatory cycle + Engineering cycle). Passionate about software development, AI, and data science, seeking to apply skills in innovative projects.",
        fr: "Étudiante en 3ème année du Cycle Ingénieur en Génie Informatique et Intelligence Artificielle (Cycle préparatoire + Cycle ingénieur). Passionnée par le développement logiciel, l'IA et la data science, cherchant à appliquer mes compétences dans des projets innovants."
      },
      skills: ["Artificial Intelligence", "Software Development", "Data Science", "Machine Learning", "Full-Stack Development"]
    },
    {
      title: { en: "Physics Sciences Baccalaureate", fr: "Bac Sciences Physiques" },
      subtitle: { en: "Akensous High School, Essaouira", fr: "Lycée Akensous, Essaouira" },
      period: "2019 – 2020",
      location: "Essaouira, Morocco",
      description: {
        en: "High school diploma specializing in Physical Sciences, providing a strong foundation in mathematics, physics, and scientific methodology.",
        fr: "Baccalauréat spécialisé en Sciences Physiques, fournissant une base solide en mathématiques, physique et méthodologie scientifique."
      },
      skills: ["Mathematics", "Physics", "Chemistry", "Scientific Method"]
    },
  ],
  experience: [
    {
      title: { en: "Cross-Platform Development Intern", fr: "Stagiaire Développement Cross-Plateforme" },
      subtitle: { en: "OCP Group", fr: "Groupe OCP" },
      period: "Jul 2025 – Aug 2025",
      location: "Jorf Lasfar, El Jadida, Morocco",
      description: {
        en: "Developed a cross-platform HSE management application with custom checklists, inspections with photo evidence and comments, and PDF report generation. Implemented AI for automatic PPE detection (helmets, vests) and non-compliance reporting.",
        fr: "Développement d'une application cross-plateforme de gestion HSE avec check-lists personnalisées, inspections avec preuves photos et commentaires, et génération de rapports PDF. Implémentation d'IA pour détection automatique d'EPI (casques, gilets) et signalement des non-conformités."
      },
      skills: ["React Native (Expo)", "Supabase", "YOLOv8", "Edge Functions", "Computer Vision", "HSE Management"]
    },
    {
      title: { en: "Software Development Intern", fr: "Stagiaire Développement Logiciel" },
      subtitle: { en: "OCP Group", fr: "Groupe OCP" },
      period: "Jun 2024",
      location: "Jorf Lasfar, El Jadida, Morocco",
      description: {
        en: "Developed a web application for static equipment management including inventory operations (add, modify, delete). Built comprehensive equipment tracking system for industrial operations.",
        fr: "Développement d'une application web pour la gestion des équipements statiques : inventaire (ajout, modification, suppression). Construction d'un système complet de suivi d'équipements pour les opérations industrielles."
      },
      skills: ["Spring Boot", "React", "PostgreSQL", "Web Development", "Database Management"]
    },
  ],
  activities: [
    {
      title: { en: "Active Member - ByteBrigade Club", fr: "Membre Actif - Club ByteBrigade" },
      subtitle: { en: "Computer Science Club - ENSA Safi", fr: "Club d'Informatique - ENSA Safi" },
      period: "2024 - Present",
      location: "Safi, Morocco",
      description: {
        en: "Active participant in a dynamic computer science club focused on technology innovation and programming excellence. Engage in collaborative projects, technical workshops, coding competitions, and knowledge sharing sessions. Contribute to organizing tech events, hackathons, and programming tutorials for fellow students.",
        fr: "Participant actif dans un club d'informatique dynamique axé sur l'innovation technologique et l'excellence en programmation. Participation à des projets collaboratifs, ateliers techniques, compétitions de codage et sessions de partage de connaissances. Contribution à l'organisation d'événements tech, hackathons et tutoriels de programmation pour les étudiants."
      },
      skills: ["Team Collaboration", "Event Organization", "Technical Workshops", "Programming Mentoring", "Leadership", "Community Building"]
    },
  ],
  certifications: [
    {
      title: { en: "Cisco Networking Academy Certificate", fr: "Certificat Cisco Networking Academy" },
      subtitle: { en: "Cisco Systems", fr: "Cisco Systems" },
      period: "2024",
      location: "ENSA Safi",
      description: {
        en: "Comprehensive networking fundamentals including network protocols, routing, switching, and network security. Hands-on experience with Cisco networking equipment and configuration.",
        fr: "Fondamentaux complets du réseau incluant protocoles réseau, routage, commutation et sécurité réseau. Expérience pratique avec équipements et configuration réseau Cisco."
      },
      skills: ["Network Protocols", "Routing & Switching", "Network Security", "Cisco IOS", "Network Configuration"]
    },
    {
      title: { en: "Flutter Development Certificate", fr: "Certificat Développement Flutter" },
      subtitle: { en: "Flutter Academy", fr: "Flutter Academy" },
      period: "2024",
      location: "Online",
      description: {
        en: "Advanced mobile development with Flutter framework including state management, API integration, custom widgets, and cross-platform deployment strategies.",
        fr: "Développement mobile avancé avec framework Flutter incluant gestion d'état, intégration API, widgets personnalisés et stratégies déploiement cross-platform."
      },
      skills: ["Flutter", "Dart", "State Management", "API Integration", "Cross-platform Development", "Mobile UI/UX"]
    },
  ]
};

const tabs = [
  { 
    key: 'education', 
    label: { en: 'Education', fr: 'Éducation' }, 
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
    color: 'blue'
  },
  { 
    key: 'experience', 
    label: { en: 'Experience', fr: 'Expérience' }, 
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconPath: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    color: 'green'
  },
  { 
    key: 'activities', 
    label: { en: 'Activities', fr: 'Activités' }, 
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    color: 'purple'
  },
  { 
    key: 'certifications', 
    label: { en: 'Certifications', fr: 'Certifications' }, 
    gradient: 'from-orange-500/20 to-red-500/20',
    iconPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    color: 'orange'
  },
];

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState('education');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { language } = useLanguage();

  const currentData = experienceData[activeTab as keyof typeof experienceData];

  return (
    <SectionWrapper id="experience">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <AnimatedTitle>02. {language === 'fr' ? 'Expérience' : 'Experience'}</AnimatedTitle>
        </div>
        
        <div className="mt-12">
          {/* Sophisticated Tab Navigation */}
          <div className="relative mb-12">
            <div className="flex flex-wrap gap-3">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`group relative flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-500 overflow-hidden ${
                    activeTab === tab.key
                      ? 'bg-[var(--card-bg)] text-[var(--text)] shadow-lg border border-[var(--accent)]/20'
                      : 'bg-[var(--subtle-bg)] text-[var(--muted-text)] hover:text-[var(--text)] hover:bg-[var(--card-bg)] border border-[var(--card-border)]'
                  }`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${tab.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    initial={false}
                  />
                  
                  {/* Icon */}
                  <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.iconPath} />
                  </svg>
                  
                  <span className="relative z-10">{tab.label[language]}</span>
                  
                  {/* Active indicator line */}
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent)]"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Enhanced Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${language}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Section Stats */}
              <motion.div 
                className="flex items-center gap-6 mb-8 text-sm text-[var(--muted-text)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
                  <span>{currentData.length} {language === 'fr' ? 'éléments' : 'items'}</span>
                </div>
                <div className="h-4 w-px bg-[var(--border)]"></div>
                <div>{language === 'fr' ? 'Mise à jour récente' : 'Recently updated'}</div>
              </motion.div>

              {/* Items Grid with Advanced Interactions */}
              <div className="space-y-6">
                {currentData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <div className="relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-[var(--accent)]/50 hover:shadow-xl">
                      {/* Animated background effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/5 via-transparent to-[var(--accent)]/5 opacity-0 group-hover:opacity-100"
                        initial={{ x: '-100%' }}
                        animate={{ x: hoveredCard === index ? '100%' : '-100%' }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                      
                      {/* Side accent bar */}
                      <motion.div
                        className="absolute left-0 top-8 bottom-8 w-1 bg-[var(--accent)] rounded-r-full"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: hoveredCard === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative z-10">
                        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
                          <div className="flex-1 space-y-4">
                            <div>
                              <motion.h4 
                                className="text-xl font-bold text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300"
                                whileHover={{ x: 4 }}
                              >
                                {item.title[language]}
                              </motion.h4>
                              <p className="text-[var(--accent)] font-semibold text-lg">
                                {item.subtitle[language]}
                              </p>
                            </div>
                            
                            <p className="text-[var(--text)] leading-relaxed">
                              {item.description[language]}
                            </p>
                            
                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, skillIndex) => (
                                <motion.span
                                  key={skillIndex}
                                  className="px-3 py-1 text-xs font-medium bg-[var(--subtle-bg)] text-[var(--accent)] rounded-full border border-[var(--border)] hover:border-[var(--accent)] transition-colors cursor-default"
                                  whileHover={{ scale: 1.05 }}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.3 + skillIndex * 0.1 }}
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="xl:text-right text-sm text-[var(--muted-text)] flex-shrink-0">
                            <motion.div 
                              className="font-semibold text-[var(--text)] mb-2"
                              whileHover={{ scale: 1.05 }}
                            >
                              {item.period}
                            </motion.div>
                            <div className="flex items-center gap-2 xl:justify-end">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span>{item.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}

