"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import type { SkillCategory as SkillCategoryType } from "@/types";

export default function SkillCategory({ category }: { category: SkillCategoryType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
}
