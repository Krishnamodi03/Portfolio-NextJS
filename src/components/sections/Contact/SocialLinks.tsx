"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const SOCIALS = [
  {
    icon: Github,
    href: "https://github.com/krishnaWeb4next",
    label: "GitHub",
    value: "krishnaWeb4next",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/krishna-modi",
    label: "LinkedIn",
    value: "linkedin.com/in/krishna-modi",
  },
  {
    icon: Mail,
    href: "mailto:modikrishna32@gmail.com",
    label: "Email",
    value: "modikrishna32@gmail.com",
  },
  {
    icon: Phone,
    href: "tel:+919724854518",
    label: "Phone",
    value: "+91 9724854518",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-4">
      {SOCIALS.map(({ icon: Icon, href, label, value }, i) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ x: 6 }}
          className="flex items-center gap-4 group"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-secondary-foreground group-hover:border-primary/40 group-hover:text-primary transition-colors duration-200">
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {value}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
