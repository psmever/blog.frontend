import type { HTMLAttributes } from "react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

type MarkdownViewerProps = HTMLAttributes<HTMLDivElement> & {
    content: string;
};

export function MarkdownViewer({ content, className, ...props }: MarkdownViewerProps) {
    return (
        <div className={cn("rounded-xl border border-foreground/10 bg-card p-6 shadow-sm", className)} {...props}>
            <div className="markdown">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
}
