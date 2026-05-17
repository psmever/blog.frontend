import type { HTMLAttributes } from "react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

type MarkdownViewerProps = HTMLAttributes<HTMLDivElement> & {
    content: string;
    surface?: boolean;
};

export function MarkdownViewer({ content, className, surface = true, ...props }: MarkdownViewerProps) {
    return (
        <div className={cn(surface && "rounded-xl border border-foreground/10 bg-card p-6 shadow-sm", className)} {...props}>
            <div className="markdown">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
}
