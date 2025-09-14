"use client";

import { motion } from "framer-motion";

export default function AnimatedTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-center mb-6 text-[var(--text)]"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.h2>
  );
}
