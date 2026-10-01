import ContactPage from "@/components/ContactPage";
import SiteShell from "@/components/SiteShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctame",
};

export default function Page() {
  return (
    <SiteShell locale="es">
      <ContactPage locale="es" />
    </SiteShell>
  );
}
