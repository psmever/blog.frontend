"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AlertVariant = "info" | "success" | "warning" | "danger";

type AlertDialogProps = {
    open: boolean;
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    variant?: AlertVariant;
    onConfirm?: () => void;
    onCancel?: () => void;
    dismissible?: boolean;
    showCancel?: boolean;
};

const VARIANT_STYLES: Record<AlertVariant, { accent: string; dot: string }> = {
    info: { accent: "text-foreground", dot: "bg-foreground" },
    success: { accent: "text-emerald-600", dot: "bg-emerald-500" },
    warning: { accent: "text-amber-600", dot: "bg-amber-500" },
    danger: { accent: "text-red-600", dot: "bg-red-500" },
};

const VARIANT_BUTTONS: Record<AlertVariant, { confirm: string; cancel: string }> = {
    info: {
        confirm: "bg-foreground text-background shadow-sm shadow-foreground/15 hover:shadow-foreground/25 hover:-translate-y-[1px]",
        cancel: "border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-foreground/5",
    },
    success: {
        confirm: "bg-emerald-600 text-white shadow-sm shadow-emerald-500/25 hover:bg-emerald-500 hover:-translate-y-[1px]",
        cancel: "border-emerald-200 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-500/10",
    },
    warning: {
        confirm: "bg-amber-500 text-white shadow-sm shadow-amber-500/30 hover:bg-amber-400 hover:-translate-y-[1px]",
        cancel: "border-amber-200 text-amber-700 hover:border-amber-300 hover:bg-amber-400/10",
    },
    danger: {
        confirm: "bg-red-600 text-white shadow-sm shadow-red-500/25 hover:bg-red-500 hover:-translate-y-[1px]",
        cancel: "border-red-200 text-red-700 hover:border-red-300 hover:bg-red-500/10",
    },
};

export function AlertDialog({ open, title, description, confirmText = "확인", cancelText = "취소", variant = "info", onConfirm, onCancel, dismissible = true, showCancel = true }: AlertDialogProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!open) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && dismissible) {
                onCancel?.();
            }
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [dismissible, onCancel, open]);

    if (!mounted || !open) {
        return null;
    }

    const { accent, dot } = VARIANT_STYLES[variant];
    const { confirm: confirmClass, cancel: cancelClass } = VARIANT_BUTTONS[variant];
    const handleClose = dismissible ? (onCancel ?? onConfirm) : undefined;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" aria-hidden onClick={handleClose} />
            <div role="alertdialog" aria-modal="true" aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" className="relative w-full max-w-md overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-2xl transition">
                <div className="flex items-center gap-2 px-6 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
                    <span className={cn("h-2 w-2 rounded-full", dot)} aria-hidden />
                    Alert
                </div>
                <div className="space-y-2 px-6 py-4">
                    <h3 id="alert-dialog-title" className={cn("text-lg font-semibold", accent)}>
                        {title}
                    </h3>
                    {description && (
                        <p id="alert-dialog-description" className="text-sm leading-relaxed text-foreground/80">
                            {description}
                        </p>
                    )}
                </div>
                <div className="flex items-center justify-end gap-2 bg-foreground/5 px-6 py-4">
                    {showCancel && onCancel && (
                        <Button type="button" variant="outline" size="sm" onClick={onCancel} className={cn("min-w-[6.5rem] rounded-full transition-transform duration-200", cancelClass)}>
                            {cancelText}
                        </Button>
                    )}
                    <Button type="button" size="sm" onClick={onConfirm} className={cn("min-w-[6.5rem] rounded-full transition-transform duration-200", confirmClass)}>
                        {confirmText}
                    </Button>
                </div>
            </div>
        </div>,
        document.body,
    );
}
