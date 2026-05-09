"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import TypewriterText from "./TypewriterText";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      {/* Three.js canvas background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background/80 via-background/40 to-transparent pointer-events-none" />

      {/* Text content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-secondary"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-4 text-5xl font-bold leading-none tracking-tight md:text-7xl lg:text-8xl"
            >
              <span className="text-foreground">Krishna</span>
              <br />
              <span
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Modi
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <TypewriterText />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-glow-primary"
                style={{ background: "var(--gradient-brand)" }}
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 font-semibold text-foreground text-center transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-secondary-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
