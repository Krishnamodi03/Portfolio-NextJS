export interface Testimonial {
  id: string;
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  quote: string;
}

export const testimonialsRow1: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    role: "Senior Full Stack Developer",
    initials: "RS",
    avatarColor: "from-blue-500 to-cyan-500",
    quote:
      "Krishna consistently writes clean, maintainable React code the whole team can build on. He picked up our TanStack Query patterns in the first sprint and refactored two legacy components that were causing performance issues. His attention to component architecture is well beyond what you'd expect from a junior developer.",
  },
  {
    id: "2",
    name: "Priya Patel",
    role: "Project Manager",
    initials: "PP",
    avatarColor: "from-violet-500 to-purple-500",
    quote:
      "What sets Krishna apart is his proactive communication. He never waits to be asked for updates — if he hits a blocker, he flags it immediately with a proposed solution. We shipped our background verification module two weeks ahead of schedule largely because of how responsibly he managed his deliverables.",
  },
  {
    id: "3",
    name: "Arjun Mehta",
    role: "Backend Developer",
    initials: "AM",
    avatarColor: "from-emerald-500 to-teal-500",
    quote:
      "I work primarily on the Node.js and gRPC layer, and integrating with Krishna's frontend is always smooth. He reads API contracts carefully, asks the right questions upfront, and handles edge cases most frontend devs overlook. Our error-state handling in the dashboard is some of the best code in the codebase.",
  },
];

export const testimonialsRow2: Testimonial[] = [
  {
    id: "4",
    name: "Sneha Joshi",
    role: "UI/UX Designer",
    initials: "SJ",
    avatarColor: "from-rose-500 to-pink-500",
    quote:
      "Translating Figma designs to pixel-perfect components is something most developers struggle with, but Krishna gets it right the first time. He respects spacing systems and doesn't cut corners on responsive behaviour. The client portal we shipped together looked exactly how I designed it — which rarely happens.",
  },
  {
    id: "5",
    name: "Vikram Desai",
    role: "Tech Lead",
    initials: "VD",
    avatarColor: "from-orange-500 to-amber-500",
    quote:
      "In under a year, Krishna has grown from handling isolated tickets to owning entire feature modules end-to-end. He introduced Cypress for E2E testing on the verification platform entirely on his own initiative, and it has already caught two production-bound bugs. That kind of ownership is rare at this career stage.",
  },
  {
    id: "6",
    name: "Neha Kapoor",
    role: "Frontend Developer",
    initials: "NK",
    avatarColor: "from-sky-500 to-indigo-500",
    quote:
      "Krishna and I pair-programmed through the PrimeReact migration and his debugging instincts are sharp. He isolates problems methodically rather than guessing, which saves a lot of back-and-forth. He's quietly become the team's go-to for anything involving form validation and complex state management — everyone asks him first.",
  },
];
