import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  className?: string;
}

export default function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        "bg-primary/10 text-primary border border-primary/20",
        className
      )}
    >
      {label}
    </span>
  );
}
