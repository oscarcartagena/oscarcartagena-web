import HomePage from "@/components/HomePage";
import SiteShell from "@/components/SiteShell";
import { getPostsByCategory } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Oscar Cartagena",
};

export default function Page() {
  const posts = getPostsByCategory(96);
  return (
    <SiteShell locale="en">
      <HomePage locale="en" posts={posts} />
    </SiteShell>
  );
}
