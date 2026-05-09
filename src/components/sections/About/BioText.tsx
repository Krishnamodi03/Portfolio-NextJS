"use client";

import { motion } from "framer-motion";

const STATS = [
  { label: "CGPA", value: "8.55" },
  { label: "Experience", value: "1+ yr" },
  { label: "Stack", value: "MERN" },
];

export default function BioText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-secondary-foreground leading-relaxed mb-6 text-base md:text-lg">
        I&apos;m a passionate{" "}
        <span className="text-primary font-semibold">MERN Stack Developer</span>{" "}
        with hands-on experience building production-grade web applications at
        Web4next, Ahmedabad. I specialize in crafting responsive, accessible
        UIs using React and Next.js, while also building robust backend services
        with Node.js and MongoDB.
      </p>
      <p className="text-secondary-foreground leading-relaxed mb-8 text-base md:text-lg">
        Beyond the MERN stack, I&apos;ve gained exposure to Golang, gRPC
        microservices, and cloud deployments on GKE — always eager to pick up
        new technologies and ship clean, performant code.
      </p>

      {/* Stat pills */}
      <div className="flex flex-wrap gap-4">
        {STATS.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-xl border border-primary/20 bg-primary/10 px-5 py-3"
          >
            <div className="text-2xl font-bold text-primary">{value}</div>
            <div className="text-xs text-secondary-foreground">{label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
