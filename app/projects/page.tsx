"use client";

import SectionWrapper from "@/components/SectionWrapper";
import AnimatedTitle from "@/components/AnimatedTitle";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const projectsData = [
  {
    title: { 
      en: "IoT and Cloud for Predictive Maintenance", 
      fr: "IoT et Cloud appliqués à la Maintenance Prédictive" 
    },
    description: { 
      en: "Web platform integrating Machine Learning models for anomaly detection and failure prediction. IoT system based on ESP32 and sensors for real-time data collection and transmission.",
      fr: "Plateforme Web intégrant des modèles de Machine Learning pour la détection d'anomalies et la prédiction de pannes. Système IoT basé sur ESP32 et capteurs pour collecte et transmission temps réel."
    },
    tech: ["ESP32", "React", "Python", "scikit-learn", "TensorFlow", "Flask", "Firebase"],
    status: { en: "Completed", fr: "Terminé" },
    year: "2025",
    location: "ENSA Safi, Morocco"
  },
  {
    title: { 
      en: "Moodify - Mood Detection and Music Recommendation", 
      fr: "Moodify – Détection d'Humeur et Recommandation Musicale" 
    },
    description: { 
      en: "Cross-platform mobile application integrating AI and facial recognition to generate personalized playlists based on mood analysis from text or selfies.",
      fr: "Application mobile cross-platform intégrant IA et reconnaissance faciale pour générer des playlists personnalisées selon l'humeur (texte ou selfies)."
    },
    tech: ["Flutter", "DeepSeek LLM", "DeepFace", "Supabase", "AI", "Facial Recognition"],
    status: { en: "Completed", fr: "Terminé" },
    year: "2025",
    location: "ENSA Safi, Morocco"
  },
  {
    title: { 
      en: "Online Pharmacy Mobile App", 
      fr: "Application Mobile : Pharmacie en Ligne" 
    },
    description: { 
      en: "Android e-pharmacy application offering a digital storefront for medications and pharmaceutical products with secure authentication and local database.",
      fr: "Application Android de e-pharmacie offrant une vitrine digitale pour médicaments et parapharmaceutiques avec authentification sécurisée et base de données locale."
    },
    tech: ["Kotlin", "Jetpack Compose", "Firebase Auth", "Room Database", "Android"],
    status: { en: "Completed", fr: "Terminé" },
    year: "2024",
    location: "ENSA Safi, Morocco"
  },
  {
    title: { 
      en: "Olive Tree Sap Flow Prediction - Machine Learning", 
      fr: "Prédiction du Débit de Sève des Oliviers – Machine Learning" 
    },
    description: { 
      en: "Comparative evaluation of multiple ML models (Random Forest, Gradient Boosting, XGBoost, LightGBM, CatBoost, SVR, ANN, DNN) for predicting olive tree sap flow from environmental data with advanced preprocessing and Grid Search optimization.",
      fr: "Évaluation comparative de plusieurs modèles ML pour la prédiction du débit de sève des oliviers à partir de données environnementales, avec prétraitement avancé et optimisation par Grid Search."
    },
    tech: ["Python", "scikit-learn", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "Machine Learning"],
    status: { en: "Completed", fr: "Terminé" },
    year: "2024",
    location: "ENSA Safi, Morocco"
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
                  {project.location && (
                    <p className="text-xs text-[var(--muted-text)] mb-2">
                      📍 {project.location}
                    </p>
                  )}
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
                <a 
                  href="https://github.com/xtariox" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--text)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {t('github', { en: 'GitHub', fr: 'GitHub' })}
                </a>
                <a 
                  href="https://github.com/xtariox" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--text)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t('view-project', { en: 'View Project', fr: 'Voir Projet' })}
                </a>
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
              en: 'Want to see more of my work? Check out my GitHub!',
              fr: 'Vous voulez voir plus de mes travaux ? Consultez mon GitHub !'
            })}
          </p>
          <a 
            href="https://github.com/xtariox" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {t('visit-github', { 
              en: 'Visit My GitHub',
              fr: 'Visiter Mon GitHub'
            })}
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
