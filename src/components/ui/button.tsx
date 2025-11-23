import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  }
>;

export function Button({ className, variant = "solid", size = "md", ...props }: ButtonProps) {
  const variantClass = {
    solid:
      "bg-foreground text-background hover:opacity-90 focus:ring-2 focus:ring-foreground/30 border border-transparent",
    outline:
      "border border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-foreground/5 focus:ring-2 focus:ring-foreground/15",
    ghost:
      "text-foreground hover:bg-foreground/5 focus:ring-2 focus:ring-foreground/10 border border-transparent",
  }[variant];

  const sizeClass = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-3.5 text-sm",
    lg: "h-11 px-4 text-base",
  }[size];

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-semibold transition focus:outline-none disabled:cursor-not-allowed disabled:opacity-55",
        variantClass,
        sizeClass,
        className,
      )}
      {...props}
    />
  );
}
