import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/content";

const companies = [
  { href: "https://augmented-experiences.com/", label: "Augmented Experiences" },
  { href: "https://nvivo.cl/", label: "NVIVO" },
  { href: "https://posterity.cl/", label: "Posterity" },
  { href: "https://multiversica.com/", label: "Multiversica" },
];

export default function Footer({ locale }: { locale: Locale }) {
  const home = locale === "en" ? "/" : "/es/home/";

  return (
    <footer className="bg-[#333] text-white/60">
      <div className="site-container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <h5 className="mb-4 text-[13px] font-extrabold tracking-[0.18em] uppercase text-white">
            Empresas
          </h5>
          <ul className="space-y-2 text-[15px]">
            {companies.map((c) => (
              <li key={c.href}>
                <a href={c.href} target="_blank" rel="noreferrer" className="hover:text-white">
                  {c.label}
                </a>
              </li>
            ))}
            <li>
              <a href="https://rageketing.com" target="_blank" rel="noreferrer" className="hover:text-white">
                Rageketing – Buy the book!
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 text-[13px] font-extrabold tracking-[0.18em] uppercase text-white">
            Sitemap
          </h5>
          <ul className="space-y-2 text-[15px]">
            <li>
              <Link href={home} className="hover:text-white">
                Inicio
              </Link>
            </li>
            <li>
              <Link href={`${home}#quien-soy`} className="hover:text-white">
                ¿Quien soy?
              </Link>
            </li>
            <li>
              <Link href={`${home}#que-he-hecho`} className="hover:text-white">
                ¿Qué he hecho?
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 text-[13px] font-extrabold tracking-[0.18em] uppercase text-white">
            Conversemos
          </h5>
          <p className="text-[15px]">
            <a href="mailto:oscar@augexp.com" className="hover:text-white">
              oscar at augexp.com
            </a>
          </p>
          <p className="mt-2 text-[15px]">Santiago, Chile</p>
          <div className="mt-5 flex gap-4 text-white">
            <a href="https://twitter.com/elcartagena" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M22 5.8c-.7.3-1.5.5-2.2.6a3.9 3.9 0 0 0 1.7-2.1c-.8.5-1.6.8-2.5 1A3.9 3.9 0 0 0 12 8.8c0 .3 0 .6.1.9A11 11 0 0 1 3 5.2a3.9 3.9 0 0 0 1.2 5.2 3.8 3.8 0 0 1-1.8-.5v.1a3.9 3.9 0 0 0 3.1 3.8 3.9 3.9 0 0 1-1.8.1 3.9 3.9 0 0 0 3.6 2.7A7.8 7.8 0 0 1 2 18.4 11 11 0 0 0 8 20c7.2 0 11.1-6 11.1-11.1v-.5A7.8 7.8 0 0 0 22 5.8z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/oscarcartagena"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <Image
          src="/images/2019/08/oscarsignw.png"
          alt=""
          width={180}
          height={123}
          className="opacity-90"
        />
      </div>
    </footer>
  );
}
