import ConferencesPage from "@/components/ConferencesPage";
import SiteShell from "@/components/SiteShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conferences",
};

export default function Page() {
  return (
    <SiteShell locale="en">
      <ConferencesPage locale="en" />
    </SiteShell>
  );
}
