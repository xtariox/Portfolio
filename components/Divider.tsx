"use client";

import { motion } from "framer-motion";

interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return (
    <div className={`flex items-center justify-center py-16 ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="max-w-md"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30"></div>
      </motion.div>
    </div>
  );
}
