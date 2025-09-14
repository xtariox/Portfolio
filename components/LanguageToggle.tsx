"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-1">
      <motion.div
        className="absolute top-1 bottom-1 bg-[var(--accent)] rounded-md"
        animate={{
          left: language === 'en' ? '4px' : 'calc(50% + 2px)',
          width: 'calc(50% - 6px)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
          language === 'en'
            ? 'text-white'
            : 'text-[var(--text-secondary)] hover:text-[var(--text)]'
        }`}
      >
        EN
      </button>
      
      <button
        onClick={() => setLanguage('fr')}
        className={`relative z-10 px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
          language === 'fr'
            ? 'text-white'
            : 'text-[var(--text-secondary)] hover:text-[var(--text)]'
        }`}
      >
        FR
      </button>
    </div>
  );
}
