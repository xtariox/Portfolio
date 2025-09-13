"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper"

const sections = [
  {
    title: "Who I am",
    content:
      "I’m Wissal, a final-year engineering student at ENSA Safi specializing in AI & Software Engineering.",
  },
  {
    title: "What I do",
    content:
      "I build fullstack apps integrating AI & Data. Examples: IoT predictive maintenance platform, Moodify app, HSE app with OCP.",
  },
  {
    title: "Skills",
    content:
      "Strong in Python (ML/Data), React, Node.js, Spring Boot, SQL/NoSQL, Docker, GitHub Actions.",
  },
  {
    title: "Goals",
    content:
      "Looking for a 5–6 month PFE internship in AI, Data, Fullstack or DevOps.",
  },
  {
    title: "Fun fact",
    content:
      "Outside coding, I enjoy design, drawing, and continuous learning.",
  },
];

export default function AboutPage() {
  const [active, setActive] = useState(sections[0].title);

    return (
        <SectionWrapper id ="about">
            <div className=" bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                {/* Left list */}
                <ul className="space-y-3">
                  {sections.map((s) => (
                    <li key={s.title}>
                      <button
                        onClick={() => setActive(s.title)}
                        className={`w-full text-left px-4 py-3 rounded-xl font-medium transition 
                          ${
                            active === s.title
                              ? "bg-gray-900 text-white"
                              : "bg-white text-gray-800 hover:bg-gray-100"
                          }`}
                      >
                        {s.title}
                      </button>

                      {/* Mobile accordion */}
                      <AnimatePresence>
                        {active === s.title && (
                          <motion.div
                            key="accordion"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-2 bg-white p-4 rounded-lg shadow-sm"
                          >
                            <p className="text-gray-600 text-sm">{s.content}</p>
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
                      key={active}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl shadow-lg p-8 text-gray-700"
                    >
                      <p className="text-lg leading-relaxed max-w-md">
                        {sections.find((s) => s.title === active)?.content}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
        </SectionWrapper>
    );    
}   
