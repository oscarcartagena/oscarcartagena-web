import SiteShell from "@/components/SiteShell";
import Link from "next/link";

export default function NotFound() {
  return (
    <SiteShell locale="en">
      <div className="site-container py-24 text-center">
        <h1 className="section-title">Page not found</h1>
        <p className="mt-4">The page you requested does not exist.</p>
        <Link href="/" className="inline-block mt-6 text-coral font-semibold">
          Back home
        </Link>
      </div>
    </SiteShell>
  );
}
