import ContactPage from "@/components/ContactPage";
import SiteShell from "@/components/SiteShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact me",
};

export default function Page() {
  return (
    <SiteShell locale="en">
      <ContactPage locale="en" />
    </SiteShell>
  );
}
