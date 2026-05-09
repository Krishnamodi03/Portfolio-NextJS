"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <span className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-3 block">
        {label}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
      {subtitle && (
        <p className="mt-4 text-secondary-foreground max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
