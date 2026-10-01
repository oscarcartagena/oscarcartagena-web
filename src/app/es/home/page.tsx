import HomePage from "@/components/HomePage";
import SiteShell from "@/components/SiteShell";
import { getPostsByCategory } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
};

export default function Page() {
  const posts = getPostsByCategory(68);
  return (
    <SiteShell locale="es">
      <HomePage locale="es" posts={posts} />
    </SiteShell>
  );
}
