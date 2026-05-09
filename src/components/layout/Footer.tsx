import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const SOCIALS = [
  {
    icon: GithubIcon,
    href: "https://github.com/Krishnamodi03",
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/krishna-modi-658a7623a",
    label: "LinkedI",
  },
  { icon: Mail, href: "mailto:modikrishna32@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Krishna Modi. Built with Next.js &
          Three.js.
        </p>
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
