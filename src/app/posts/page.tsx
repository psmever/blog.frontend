import type { Metadata } from "next";
import { HomeContent } from "../home-content";

export const metadata: Metadata = {
    title: "블로그",
};

export const dynamic = "force-dynamic";

export default function PostsPage() {
    return <HomeContent />;
}
