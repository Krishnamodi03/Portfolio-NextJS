import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Primary Stack",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Tailwind CSS" },
      { name: "Redux" },
      { name: "TanStack Query" },
      { name: "ShadCN UI" },
      { name: "PrimeReact" },
      { name: "React Hook Form" },
      { name: "Framer Motion" },
      { name: "Cypress" },
    ],
  },
  {
    title: "Backend & DevOps",
    skills: [
      { name: "Golang" },
      { name: "gRPC" },
      { name: "REST APIs" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Java" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "VS Code" },
      { name: "Vite" },
      { name: "Postman" },
      { name: "Figma" },
    ],
  },
];
