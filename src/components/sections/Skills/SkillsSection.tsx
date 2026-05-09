import SectionHeading from "@/components/ui/SectionHeading";
import SkillCategory from "./SkillCategory";
import { skillCategories } from "@/lib/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          label="What I Know"
          title="Skills & Technologies"
          subtitle="From pixel-perfect UIs to scalable backend services — here's my full toolkit."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
