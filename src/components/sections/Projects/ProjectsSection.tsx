import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          label="What I've Built"
          title="Projects"
          subtitle="A selection of projects I've worked on — from B2B SaaS platforms to public-facing websites."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
