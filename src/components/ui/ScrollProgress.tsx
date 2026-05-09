"use client";

import { motion } from "framer-motion";
import useScrollProgress from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-0.5"
      style={{
        width: `${progress}%`,
        background: "var(--gradient-brand)",
      }}
    />
  );
}
