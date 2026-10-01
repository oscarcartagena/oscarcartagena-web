import ConferencesPage from "@/components/ConferencesPage";
import SiteShell from "@/components/SiteShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conferencias",
};

export default function Page() {
  return (
    <SiteShell locale="es">
      <ConferencesPage locale="es" />
    </SiteShell>
  );
}
