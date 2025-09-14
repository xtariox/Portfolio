"use client";

import SectionWrapper from "@/components/SectionWrapper";
import AnimatedTitle from "@/components/AnimatedTitle";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const projectsData = [
  {
    title: { en: "HSE Inspection App with AI", fr: "Application d'Inspection HSE avec IA" },
    description: { 
      en: "AI-powered PPE detection system with real-time dashboards built with Power BI for OCP Group.",
      fr: "Système de détection d'EPI alimenté par l'IA avec tableaux de bord en temps réel créés avec Power BI pour le Groupe OCP."
    },
    tech: ["React", "Python", "AI/ML", "Power BI"],
    status: { en: "In Development", fr: "En Développement" },
    year: "2025",
  },
  {
    title: { en: "IoT Predictive Maintenance System", fr: "Système IoT de Maintenance Prédictive" }, 
    description: { 
      en: "Full-stack IoT solution for predictive maintenance with sensor data analysis and alerts.",
      fr: "Solution IoT full-stack pour la maintenance prédictive avec analyse des données de capteurs et alertes."
    },
    tech: ["React", "Node.js", "IoT", "MongoDB"],
    status: { en: "Completed", fr: "Terminé" },
    year: "2024",
  },
  {
    title: { en: "Portfolio Website", fr: "Site Web Portfolio" },
    description: { 
      en: "Modern, responsive portfolio website built with Next.js and TypeScript with dark/light theme support.",
      fr: "Site web portfolio moderne et responsive construit avec Next.js et TypeScript avec support des thèmes sombre/clair."
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: { en: "In Progress", fr: "En Cours" },
    year: "2024",
  },
  {
    title: { en: "E-Commerce Platform", fr: "Plateforme E-Commerce" },
    description: { 
      en: "Full-featured e-commerce solution with admin dashboard, payment integration, and inventory management.",
      fr: "Solution e-commerce complète avec tableau de bord admin, intégration de paiement et gestion d'inventaire."
    },
    tech: ["React", "Express", "PostgreSQL", "Stripe API"],
    status: { en: "Completed", fr: "Terminé" },
    year: "2024",
  },
];

export default function ProjectsPage() {
  const { t } = useLanguage();
  
  return (
    <SectionWrapper id="projects">
      <div className="w-full max-w-6xl mx-auto">
        <AnimatedTitle>{t('projects-title', { en: '03. Projects', fr: '03. Projets' })}</AnimatedTitle>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg"
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                    {t(`project-${index}-title`, project.title)}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                      t(`project-${index}-status`, project.status) === (t('status-completed', { en: 'Completed', fr: 'Terminé' }))
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : t(`project-${index}-status`, project.status) === (t('status-in-progress', { en: 'In Progress', fr: 'En Cours' }))
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {t(`project-${index}-status`, project.status)}
                    </span>
                    <span className="text-sm text-[var(--muted-text)]">{project.year}</span>
                  </div>
                </div>
                <div className="text-2xl">📁</div>
              </div>

              {/* Project description */}
              <p className="text-[var(--text)] mb-4 leading-relaxed">
                {t(`project-${index}-description`, project.description)}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-[var(--subtle-bg)] text-[var(--accent)] rounded-md border border-[var(--border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project links */}
              <div className="flex gap-4 mt-6">
                <button className="flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--text)] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t('live-demo', { en: 'Live Demo', fr: 'Démo Live' })}
                </button>
                <button className="flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--text)] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  {t('code', { en: 'Code', fr: 'Code' })}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-[var(--muted-text)] mb-4">
            {t('collaboration-interest', { 
              en: 'Interested in collaboration? Contact me!',
              fr: 'Intéressé par une collaboration ? Contactez-moi !'
            })}
          </p>
          <button className="px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
            {t('see-more-projects', { 
              en: 'See More Projects',
              fr: 'Voir plus de projets'
            })}
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
