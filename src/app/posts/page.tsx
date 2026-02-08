import type { Metadata } from "next";
import { HomeContent } from "../home-content";

export const metadata: Metadata = {
    title: "홈",
};

export default function PostsPage() {
    return <HomeContent />;
}
