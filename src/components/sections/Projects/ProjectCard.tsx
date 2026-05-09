"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import TechBadge from "@/components/ui/TechBadge";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 6;
    const y = -((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 6;
    setRotate({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-primary/40 transition-colors duration-300"
    >
      {/* Gradient header */}
      <div
        className={`h-36 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
      >
        <span className="text-4xl opacity-30 font-bold text-foreground select-none">
          {project.title.charAt(0)}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-lg font-bold text-foreground leading-snug">
            {project.title}
          </h3>
          <div className="flex shrink-0 gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-secondary-foreground leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
