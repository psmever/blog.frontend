import { NextResponse } from "next/server";
import { resolveShortUrl } from "@/services/short-urls";

type ShortUrlRouteContext = {
    params: Promise<{ code: string }>;
};

export async function GET(_request: Request, { params }: ShortUrlRouteContext) {
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

    const frontendBaseURL = process.env.NEXT_PUBLIC_BASE_URL;

    if (!frontendBaseURL) {
        return NextResponse.json(
            {
                status: false,
                message: "NEXT_PUBLIC_BASE_URL 환경 변수가 설정되지 않았습니다.",
                data: null,
            },
            { status: 500 },
        );
    }

    return NextResponse.redirect(new URL(result.data.original_url, frontendBaseURL));
}
