import { NextResponse, type NextRequest } from "next/server";
import { resolveShortUrl } from "@/services/short-urls";

type ShortUrlRouteContext = {
    params: Promise<{ code: string }>;
};

export async function GET(request: NextRequest, { params }: ShortUrlRouteContext) {
    const { code } = await params;
    const result = await resolveShortUrl(code);

    if (!result.status || !result.data?.original_url) {
        return NextResponse.json(
            {
                status: false,
                message: result.message || "단축 URL을 찾을 수 없습니다.",
                data: null,
            },
            { status: 404 },
        );
    }

    return NextResponse.redirect(new URL(result.data.original_url, request.url));
}
