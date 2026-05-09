import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data/testimonials";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="w-80 shrink-0 rounded-2xl border border-border bg-surface/60 backdrop-blur-md p-6 flex flex-col gap-4 shadow-card">
      {/* Quote icon */}
      <Quote className="w-7 h-7 text-primary/30 fill-primary/10" />

      {/* Quote text */}
      <p className="text-secondary-foreground text-sm leading-relaxed flex-1">
        {testimonial.quote}
      </p>

      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-border" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full bg-linear-to-br ${testimonial.avatarColor} flex items-center justify-center text-white text-sm font-bold shrink-0`}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-foreground text-sm font-semibold leading-tight">
            {testimonial.name}
          </p>
          <p className="text-muted-foreground text-xs mt-0.5">
            {testimonial.role} · Web4next
          </p>
        </div>
      </div>
    </div>
  );
}
