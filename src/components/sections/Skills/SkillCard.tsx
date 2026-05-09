"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      className="group relative flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-secondary-foreground backdrop-blur-sm cursor-default transition-colors duration-300 hover:border-primary/40 hover:text-primary"
      style={{
        boxShadow: "0 0 0 0 rgba(59,130,246,0)",
        transition: "box-shadow 0.3s ease",
      }}
      onHoverStart={(e) => {
        (e.target as HTMLElement).style.boxShadow =
          "0 0 20px rgba(59,130,246,0.2)";
      }}
      onHoverEnd={(e) => {
        (e.target as HTMLElement).style.boxShadow =
          "0 0 0 0 rgba(59,130,246,0)";
      }}
    >
      {skill.name}
    </motion.div>
  );
}
