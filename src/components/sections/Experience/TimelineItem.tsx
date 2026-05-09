"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import type { ExperienceEntry } from "@/types";
import GlassCard from "@/components/ui/GlassCard";

export default function TimelineItem({ entry }: { entry: ExperienceEntry }) {
  const isLeft = entry.side === "left";

  return (
    <div className={`relative flex w-full md:w-1/2 ${isLeft ? "md:pr-12 md:self-start" : "md:pl-12 md:ml-auto md:self-start"}`}>
      {/* Dot on the timeline line */}
      <div
        className={`absolute hidden md:flex top-6 w-4 h-4 rounded-full border-2 border-primary bg-primary/30 items-center justify-center ${
          isLeft ? "-right-2" : "-left-2"
        }`}
      />

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <GlassCard className="p-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {entry.type === "education" ? (
                <GraduationCap className="w-4 h-4" />
              ) : (
                <Briefcase className="w-4 h-4" />
              )}
            </div>
            <div>
              <h3 className="font-bold text-foreground">{entry.role}</h3>
              <p className="text-sm text-primary">{entry.company}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{entry.period}</p>
            </div>
          </div>
          <ul className="space-y-1.5">
            {entry.points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-secondary-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                {point}
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>
    </div>
  );
}
