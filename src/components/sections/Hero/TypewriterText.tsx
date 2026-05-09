"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ROLES = [
  "MERN Stack Developer",
  "Frontend Engineer",
  "React Specialist",
  "Full Stack Developer",
];

export default function TypewriterText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-9 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute left-0 text-lg md:text-xl font-semibold"
          style={{
            background: "var(--gradient-brand)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
