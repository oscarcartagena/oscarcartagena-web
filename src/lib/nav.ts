import type { Locale } from "./content";

export const navByLocale: Record<
  Locale,
  { href: string; label: string }[]
> = {
  en: [
    { href: "/", label: "Home" },
    { href: "/conferences/", label: "Conferences" },
    { href: "/category/blog-en/", label: "Blog" },
    { href: "/contact-me/", label: "Contact me" },
  ],
  es: [
    { href: "/es/home/", label: "Inicio" },
    { href: "/es/conferencias/", label: "Conferencias" },
    { href: "/es/category/blog-es/", label: "Blog" },
    { href: "/es/contacto/", label: "Contáctame" },
  ],
};

export function counterpartPath(pathname: string, locale: Locale) {
  const pairs: [string, string][] = [
    ["/", "/es/home/"],
    ["/conferences/", "/es/conferencias/"],
    ["/contact-me/", "/es/contacto/"],
    ["/category/blog-en/", "/es/category/blog-es/"],
    ["/blog-en/", "/es/blog-es/"],
    ["/speaker/", "/es/charlas/"],
  ];

  if (locale === "en") {
    const match = pairs.find(([en]) => pathname === en || pathname.startsWith(en));
    if (match) {
      if (pathname === match[0]) return match[1];
      return pathname.replace(match[0], match[1]);
    }
    return "/es/home/";
  }

  const match = pairs.find(([, es]) => pathname === es || pathname.startsWith(es));
  if (match) {
    if (pathname === match[1]) return match[0];
    return pathname.replace(match[1], match[0]);
  }
  return "/";
}
