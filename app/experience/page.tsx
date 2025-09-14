"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedTitle from "@/components/AnimatedTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const experienceData = {
  education: [
    {
      title: { en: "National School of Applied Sciences", fr: "École Nationale des Sciences Appliquées de Safi" },
      subtitle: { en: "Computer Science & AI Engineering", fr: "Informatique et Intelligence Artificielle" },
      period: "2021-présent",
      location: "Safi, Morocco",
      description: { 
        en: "Engineering program specializing in Artificial Intelligence & Software Engineering with focus on machine learning, data science, and full-stack development.",
        fr: "Programme d'ingénierie spécialisé en Intelligence Artificielle et Génie Logiciel avec un focus sur l'apprentissage automatique, la science des données et le développement full-stack."
      },
      skills: ["Machine Learning", "Full-Stack Development", "Data Science", "Software Architecture"]
    },
    {
      title: { en: "Preparatory Classes", fr: "Classes Préparatoires pour l'Économie et le Commerce" },
      subtitle: { en: "CPGE Prince Moulay El Hassan", fr: "CPGE Prince Moulay El Hassan" },
      period: "2020-2021",
      location: "Ouarzazate, Morocco",
      description: {
        en: "Intensive preparatory classes for economics and commerce with advanced mathematics and analytical skills development.",
        fr: "Classes préparatoires intensives en économie et commerce avec développement avancé des mathématiques et des compétences analytiques."
      },
      skills: ["Advanced Mathematics", "Economics", "Analytics", "Problem Solving"]
    },
  ],
  experience: [
    {
      title: { en: "Final Year Project Intern", fr: "Stagiaire PFE" },
      subtitle: { en: "OCP Group", fr: "Groupe OCP" },
      period: "Jan 2025 – Jun 2025",
      location: "Jorf Lasfar, Morocco",
      description: {
        en: "Built an HSE inspection app with AI for PPE detection, delivered real-time dashboards with Power BI, and improved reporting efficiency by 40%.",
        fr: "Développement d'une application d'inspection HSE avec IA pour la détection des EPI, création de tableaux de bord en temps réel avec Power BI, et amélioration de l'efficacité des rapports de 40%."
      },
      skills: ["AI/Computer Vision", "Power BI", "React", "Python", "HSE Systems"]
    },
    {
      title: { en: "Software Development Intern", fr: "Stagiaire Développeur" },
      subtitle: { en: "Super Auto Distribution", fr: "Super Auto Distribution" },
      period: "Jul 2024 – Sep 2024",
      location: "Agadir, Morocco",
      description: {
        en: "Assisted in maintaining automotive systems, worked with diagnostic tools and technical documentation, and supported digital transformation initiatives.",
        fr: "Assistance dans la maintenance des systèmes automobiles, travail avec des outils de diagnostic et documentation technique, et soutien aux initiatives de transformation numérique."
      },
      skills: ["System Maintenance", "Technical Documentation", "Diagnostic Tools", "Digital Transformation"]
    },
  ],
  activities: [
    {
      title: { en: "Tech Community Leader", fr: "Leader Communauté Tech" },
      subtitle: { en: "ENSA Safi Student Association", fr: "Association Étudiante ENSA Safi" },
      period: "2022-présent",
      location: "Safi, Morocco",
      description: {
        en: "Organized coding workshops, hackathons, and tech talks. Led a team of 15+ students in various technology initiatives and mentored junior developers.",
        fr: "Organisation d'ateliers de programmation, hackathons et conférences tech. Direction d'une équipe de 15+ étudiants dans diverses initiatives technologiques et mentorat de développeurs juniors."
      },
      skills: ["Leadership", "Event Organization", "Mentoring", "Public Speaking"]
    },
    {
      title: { en: "Freelance Developer", fr: "Développeur Freelance" },
      subtitle: { en: "Independent", fr: "Indépendant" },
      period: "2023-présent",
      location: "Remote",
      description: {
        en: "Developed web applications for local businesses using React, Node.js, and modern web technologies. Delivered 5+ projects with 100% client satisfaction.",
        fr: "Développement d'applications web pour des entreprises locales utilisant React, Node.js et des technologies web modernes. Livraison de 5+ projets avec 100% de satisfaction client."
      },
      skills: ["React", "Node.js", "Client Management", "Project Delivery"]
    },
  ],
  certifications: [
    {
      title: { en: "AWS Cloud Practitioner", fr: "AWS Cloud Practitioner" },
      subtitle: { en: "Amazon Web Services", fr: "Amazon Web Services" },
      period: "2024",
      location: "Online",
      description: {
        en: "Foundational understanding of AWS cloud services, security, and architectural best practices for cloud computing solutions.",
        fr: "Compréhension fondamentale des services cloud AWS, de la sécurité et des meilleures pratiques architecturales pour les solutions de cloud computing."
      },
      skills: ["AWS Services", "Cloud Architecture", "Security", "Best Practices"]
    },
    {
      title: { en: "React Developer Certification", fr: "Certification Développeur React" },
      subtitle: { en: "Meta (Facebook)", fr: "Meta (Facebook)" },
      period: "2023",
      location: "Online",
      description: {
        en: "Advanced React development skills including hooks, context API, state management, and modern React patterns and best practices.",
        fr: "Compétences avancées en développement React incluant les hooks, l'API de contexte, la gestion d'état et les modèles et meilleures pratiques React modernes."
      },
      skills: ["React Hooks", "Context API", "State Management", "Modern Patterns"]
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

