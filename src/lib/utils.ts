const rawApiAssetBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
const apiAssetBaseURL = rawApiAssetBaseURL.endsWith("/api") ? rawApiAssetBaseURL.slice(0, -4) : rawApiAssetBaseURL;

export function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export function formatPublishedDate(value: string | null | undefined) {
    if (!value) {
        return "발행일 미정";
    }

    const parsedDate = new Date(value);
    if (Number.isNaN(parsedDate.getTime())) {
        return "발행일 미정";
    }

    return new Intl.DateTimeFormat("ko", { dateStyle: "medium" }).format(parsedDate);
}

export function resolveApiAssetUrl(value: string) {
    try {
        return new URL(value).toString();
    } catch {
        return new URL(value, `${apiAssetBaseURL.replace(/\/$/, "")}/`).toString();
    }
}
