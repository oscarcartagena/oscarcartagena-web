import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Locale } from "@/lib/content";

export default function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header locale={locale} />
      <main className="flex-1 pt-[83px]">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
