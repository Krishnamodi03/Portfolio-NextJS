import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "./TimelineItem";
import { experiences } from "@/lib/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading label="My Journey" title="Experience & Education" />

        {/* Mobile: simple stacked list */}
        <div className="flex flex-col gap-6 md:hidden">
          {experiences.map((entry) => (
            <TimelineItem key={entry.company} entry={{ ...entry, side: "left" }} />
          ))}
        </div>

        {/* Desktop: two-column timeline */}
        <div className="relative hidden md:block">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "var(--gradient-brand)" }}
          />

          <div className="flex flex-col gap-10">
            {experiences.map((entry) => (
              <TimelineItem key={entry.company} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
