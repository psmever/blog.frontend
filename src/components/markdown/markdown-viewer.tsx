import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { MarkdownContent } from "./markdown-content";

type MarkdownViewerProps = HTMLAttributes<HTMLDivElement> & {
    content: string;
    surface?: boolean;
};

export function MarkdownViewer({ content, className, surface = true, ...props }: MarkdownViewerProps) {
    return (
        <div className={cn(surface && "rounded-xl border border-foreground/10 bg-card p-6 shadow-sm", className)} {...props}>
            <div className="markdown markdown-body">
                <MarkdownContent content={content} />
            </div>
        </div>
    );
}
