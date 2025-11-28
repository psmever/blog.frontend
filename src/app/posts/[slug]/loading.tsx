import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader } from "@/components/ui/loader";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPostDetail() {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-4/5" />
            </div>

            <Card className="border border-foreground/10">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                        <Loader />
                        본문을 불러오는 중입니다...
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Skeleton key={index} className="h-4 w-full" />
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
