"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  download?: boolean;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className,
  href,
  download,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.35,
      y: (e.clientY - rect.top - rect.height / 2) * 0.35,
    });
  };

  const inner = (
    <motion.div
      ref={ref}
      animate={pos}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className={cn("cursor-pointer", className)}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} download={download} className="inline-block">
        {inner}
      </a>
    );
  }

  return inner;
}
