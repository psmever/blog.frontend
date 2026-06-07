import { NextResponse, type NextRequest } from "next/server";
import { resolveShortUrl } from "@/services/short-urls";

type ShortUrlRouteContext = {
    params: Promise<{ code: string }>;
};

export async function GET(request: NextRequest, { params }: ShortUrlRouteContext) {
    const { code } = await params;
    const result = await resolveShortUrl(code);

    if (!result.status || !result.data?.original_url) {
        const status = result.statusCode === 404 ? 404 : 502;

        return NextResponse.json(
            {
                status: false,
                message: result.statusCode === 404 ? result.message || "단축 URL을 찾을 수 없습니다." : "단축 URL 처리 중 upstream API 요청에 실패했습니다.",
                data: null,
            },
            { status },
        );
    }

    return NextResponse.redirect(new URL(result.data.original_url, request.url));
}
