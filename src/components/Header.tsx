"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { counterpartPath, navByLocale } from "@/lib/nav";
import type { Locale } from "@/lib/content";

function FlagES() {
  return (
    <svg width="16" height="11" viewBox="0 0 16 11" aria-hidden>
      <rect width="16" height="11" fill="#c60b1e" />
      <rect y="3" width="16" height="5" fill="#ffc400" />
    </svg>
  );
}

function FlagGB() {
  return (
    <svg width="16" height="11" viewBox="0 0 16 11" aria-hidden>
      <rect width="16" height="11" fill="#012169" />
      <path d="M0 0l16 11M16 0L0 11" stroke="#fff" strokeWidth="2" />
      <path d="M0 0l16 11M16 0L0 11" stroke="#c8102e" strokeWidth="1" />
      <path d="M8 0v11M0 5.5h16" stroke="#fff" strokeWidth="3.4" />
      <path d="M8 0v11M0 5.5h16" stroke="#c8102e" strokeWidth="2" />
    </svg>
  );
}

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const items = navByLocale[locale];
  const [open, setOpen] = useState(false);
  const other = locale === "en" ? "es" : "en";
  const switchHref = counterpartPath(pathname.endsWith("/") ? pathname : `${pathname}/`, locale);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[83px] bg-white">
      <div className="site-container flex h-full items-center justify-between gap-6">
        <button
          type="button"
          className="lg:hidden grid place-items-center w-10 h-10 text-ink"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block w-5 h-0.5 bg-ink" />
            <span className="block w-5 h-0.5 bg-ink" />
            <span className="block w-5 h-0.5 bg-ink" />
          </span>
        </button>

        <Link href={locale === "en" ? "/" : "/es/home/"} className="shrink-0">
          <Image
            src="/images/2021/03/cropped-logo-oc-1.png"
            alt="Oscar Cartagena"
            width={121}
            height={38}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-auto font-[family-name:var(--font-lato)]">
          {items.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-[16px] font-bold ${
                  active ? "text-coral" : "text-ink hover:text-coral"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={switchHref}
            className="ml-2 grid place-items-center px-2"
            title={other === "es" ? "Español" : "English"}
          >
            {other === "es" ? <FlagES /> : <FlagGB />}
          </Link>
        </nav>

        <span className="lg:hidden w-10" />
      </div>

      {open ? (
        <div className="lg:hidden bg-white border-t border-black/5 shadow-lg">
          <nav className="flex flex-col py-4 font-[family-name:var(--font-lato)]">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-3 text-ink font-bold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href={switchHref} className="px-6 py-3 flex items-center gap-2 text-ink font-bold">
              {other === "es" ? <FlagES /> : <FlagGB />}
              {other === "es" ? "Español" : "English"}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
