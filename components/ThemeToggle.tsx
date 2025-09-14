"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure hydration is safe
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors flex items-center"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center 
                   bg-white dark:bg-black shadow-md
                   ${isDark ? "translate-x-6" : "translate-x-0"}`}
      >
        {isDark ? (
          <Moon size={16} className="text-yellow-300" />
        ) : (
          <Sun size={16} className="text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
}
