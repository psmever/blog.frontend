"use client";

import { type ReactNode, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

type ModalProps = {
    open: boolean;
    title: string;
    description?: string;
    children: ReactNode;
    footer?: ReactNode;
    onClose?: () => void;
    dismissible?: boolean;
    className?: string;
};

export function Modal({ open, title, description, children, footer, onClose, dismissible = true, className }: ModalProps) {
    const [mounted, setMounted] = useState(false);
    const titleId = useId();
    const descriptionId = useId();

    useEffect(() => {
        const frameId = window.requestAnimationFrame(() => {
            setMounted(true);
        });

        return () => {
            window.cancelAnimationFrame(frameId);
        };
    }, []);

    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && dismissible) {
                onClose?.();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [dismissible, onClose, open]);

    if (!mounted || !open) {
        return null;
    }

    const handleClose = dismissible ? onClose : undefined;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" aria-hidden onClick={handleClose} />
            <div role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={description ? descriptionId : undefined} className={cn("relative w-full max-w-lg overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-2xl", className)}>
                <div className="space-y-2 border-b border-foreground/10 px-6 py-5">
                    <h2 id={titleId} className="text-lg font-semibold text-foreground">
                        {title}
                    </h2>
                    {description && (
                        <p id={descriptionId} className="text-sm leading-relaxed text-foreground/70">
                            {description}
                        </p>
                    )}
                </div>
                <div className="px-6 py-5">{children}</div>
                {footer && <div className="flex items-center justify-end gap-2 bg-foreground/5 px-6 py-4">{footer}</div>}
            </div>
        </div>,
        document.body,
    );
}
