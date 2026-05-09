"use client";

import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "@/lib/data/testimonials";

interface MarqueeTrackProps {
  testimonials: Testimonial[];
  direction: "left" | "right";
  speed?: number;
}

// 4 copies so there is always enough content to fill any viewport at every
// animation position. One loop = 1/4 of total width (one original set).
const COPIES = 4;
const SHIFT = 100 / COPIES; // 25%

export default function MarqueeTrack({
  testimonials,
  direction,
  speed = 40,
}: MarqueeTrackProps) {
  const items = Array.from({ length: COPIES }, () => testimonials).flat();

  // Left:  0% → -25%  (content moves left, cards enter from right)
  // Right: -25% → 0%  (content moves right, cards enter from left)
  //        Both start with a full, visible row — no blank space.
  const from = direction === "left" ? 0 : -SHIFT;
  const to = direction === "left" ? -SHIFT : 0;

  return (
    <>
      <style>{`
        @keyframes marquee-kf-left {
          from { transform: translateX(0%); }
          to   { transform: translateX(-${SHIFT}%); }
        }
        @keyframes marquee-kf-right {
          from { transform: translateX(-${SHIFT}%); }
          to   { transform: translateX(0%); }
        }
        .marquee-scroll-left {
          animation: marquee-kf-left ${speed}s linear infinite;
        }
        .marquee-scroll-right {
          animation: marquee-kf-right ${speed}s linear infinite;
        }
        .marquee-track-outer:hover .marquee-scroll-left,
        .marquee-track-outer:hover .marquee-scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="marquee-track-outer overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className={`flex gap-6 marquee-scroll-${direction}`}
          style={{ width: "max-content" }}
        >
          {items.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </>
  );
}
