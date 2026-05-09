import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Background Verification Platform",
    description:
      "B2B SaaS platform for background verification. Built responsive, modular UI components, dynamic validated forms with React Hook Form + Zod, and integrated APIs via Axios and TanStack Query with global error management. Wrote end-to-end tests with Cypress.",
    tech: ["React", "Vite", "TanStack Query", "Axios", "Tailwind CSS", "ShadCN UI", "Cypress"],
    gradient: "from-blue-600/20 to-cyan-600/20",
    github: "#",
  },
  {
    title: "Tribute Website",
    description:
      "Memorial platform where parents can submit tributes for their children via a validated form. Features an admin dashboard for managing and updating submissions with remark management, built with accessible and consistent UI components.",
    tech: ["React", "TypeScript", "TanStack Query", "ShadCN UI", "Tailwind CSS", "Zod"],
    gradient: "from-purple-600/20 to-pink-600/20",
    github: "#",
  },
];
