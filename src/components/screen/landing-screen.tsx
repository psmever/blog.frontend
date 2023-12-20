export default function LandingScreen() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col">
                <div className="flex flex-nowrap gap-2">
                    <span className="text-5xl font-extrabold">서버</span>
                    <span className="text-xs font-semibold">점검 중입니다</span>
                </div>
            </div>
        </div>
    );
}
