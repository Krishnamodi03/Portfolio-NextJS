"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import BioText from "./BioText";

const AvatarCanvas = dynamic(() => import("./AvatarCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  ),
});

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading label="Get To Know Me" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Bio */}
          <BioText />

          {/* Right: 3D Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="hidden lg:flex items-center justify-center h-[400px] relative"
          >
            {/* Glow backdrop */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl" />
            <div className="relative w-full h-full">
              <AvatarCanvas />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
