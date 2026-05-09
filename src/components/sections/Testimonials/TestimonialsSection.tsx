"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import MarqueeTrack from "./MarqueeTrack";
import { testimonialsRow1, testimonialsRow2 } from "@/lib/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          label="Social Proof"
          title="What the Team Says"
          subtitle="Feedback from colleagues at Web4next who've worked alongside me every day."
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-6"
      >
        <MarqueeTrack testimonials={testimonialsRow1} direction="left" speed={45} />
        <MarqueeTrack testimonials={testimonialsRow2} direction="right" speed={38} />
      </motion.div>
    </section>
  );
}
