"use client";
import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedTitle from "@/components/AnimatedTitle";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <SectionWrapper id="contact">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedTitle>
          {t("contact-title", { en: "04. Contact", fr: "04. Contact" })}
        </AnimatedTitle>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text)] mb-4">
                {t('contact-heading', {
                  en: "Let's talk about your project",
                  fr: "Parlons de votre projet"
                })}
              </h3>
              <p className="text-[var(--muted-text)] leading-relaxed text-sm sm:text-base">
                {t('contact-description', {
                  en: "I'm always interested in new challenges and opportunities. Don't hesitate to contact me to discuss your project or just say hello!",
                  fr: "Je suis toujours intéressé par de nouveaux défis et opportunités. N'hésitez pas à me contacter pour discuter de votre projet ou simplement dire bonjour !"
                })}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text)]">Email</h4>
                  <a 
                    href="mailto:cv.haida.wissal@gmail.com"
                    className="text-[var(--muted-text)] hover:text-[var(--accent)] transition-colors text-sm sm:text-base"
                  >
                    cv.haida.wissal@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              {/* <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text)]">
                    {t('phone', { en: 'Phone', fr: 'Téléphone' })}
                  </h4>
                  <a 
                    href="tel:+212695221162"
                    className="text-[var(--muted-text)] hover:text-[var(--accent)] transition-colors text-sm sm:text-base"
                  >
                    (+212) 695-221-162
                  </a>
                </div>
              </div> */}

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text)]">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/a-haida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--muted-text)] hover:text-[var(--accent)] transition-colors text-sm sm:text-base"
                  >
                    linkedin.com/in/a-haida
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text)]">GitHub</h4>
                  <a 
                    href="https://github.com/xtariox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--muted-text)] hover:text-[var(--accent)] transition-colors text-sm sm:text-base"
                  >
                    github.com/xtariox
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text)]">
                    {t('location', { en: 'Location', fr: 'Localisation' })}
                  </h4>
                  <p className="text-[var(--muted-text)] text-sm sm:text-base">
                    Safi, Morocco
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0V6a2 2 0 00-2 2v6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text)]">
                    {t('status', { en: 'Status', fr: 'Statut' })}
                  </h4>
                  <p className="text-[var(--muted-text)] text-sm sm:text-base">
                    {t('internship-status', { 
                      en: 'Looking for 5-6 month PFE internship',
                      fr: 'Recherche stage PFE 5-6 mois'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          {/* <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text)] mb-2">
                  {t('name-label', { en: 'Name', fr: 'Nom' })}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg text-[var(--text)] placeholder-[var(--muted-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  placeholder={t('name-placeholder', { en: 'Your name', fr: 'Votre nom' })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg text-[var(--text)] placeholder-[var(--muted-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  placeholder={t('email-placeholder', { en: 'your@email.com', fr: 'votre@email.com' })}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[var(--text)] mb-2">
                {t('subject-label', { en: 'Subject', fr: 'Sujet' })}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg text-[var(--text)] placeholder-[var(--muted-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder={t('subject-placeholder', { en: 'Subject of your message', fr: 'Sujet de votre message' })}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg text-[var(--text)] placeholder-[var(--muted-text)] resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder={t('message-placeholder', { en: 'Your message...', fr: 'Votre message...' })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
            >
              {t('send-message', { en: 'Send Message', fr: 'Envoyer le message' })}
            </button>
          </motion.form> */}
        </div>
      </div>
    </SectionWrapper>
  );
}
