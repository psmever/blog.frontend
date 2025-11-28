import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LoaderProps = HTMLAttributes<HTMLSpanElement>;

export function Loader({ className, ...props }: LoaderProps) {
    return <span className={cn("inline-block h-5 w-5 animate-spin rounded-full border-2 border-foreground/25 border-t-foreground", className)} aria-hidden {...props} />;
}
