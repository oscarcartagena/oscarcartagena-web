"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/lib/content";

export default function ContactPage({ locale }: { locale: Locale }) {
  const title = locale === "en" ? "Contact me" : "Contáctame";
  const heading = locale === "en" ? "Send me an email" : "Envíame un correo";
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-paper">
      <div className="bg-[#eee] py-10">
        <h1 className="site-container text-[36px] font-bold text-ink">{title}</h1>
      </div>
      <section className="site-container py-16 grid lg:grid-cols-[1fr_80px_1fr] items-center gap-6">
        <div className="flex justify-center">
          <Image
            src="/images/2021/03/cropped-logo-oc-1.png"
            alt="Oscar Cartagena"
            width={480}
            height={150}
            className="w-full max-w-[420px]"
          />
        </div>
        <div />
        <div>
          <h2 className="text-[28px] font-bold text-ink mb-6">{heading}</h2>
          <form onSubmit={onSubmit} className="space-y-5">
            <label className="block">
              <span className="block mb-1 text-ink">
                Nombre <span className="text-coral">*</span>
              </span>
              <input
                required
                name="name"
                className="w-full border border-black/15 bg-white px-3 py-2 outline-none focus:border-coral"
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-ink">
                Correo electrónico <span className="text-coral">*</span>
              </span>
              <input
                required
                type="email"
                name="email"
                className="w-full border border-black/15 bg-white px-3 py-2 outline-none focus:border-coral"
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-ink">
                Comentario o mensaje <span className="text-coral">*</span>
              </span>
              <textarea
                required
                name="message"
                rows={6}
                className="w-full border border-black/15 bg-white px-3 py-2 outline-none focus:border-coral"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-coral text-white font-semibold px-6 py-2.5"
            >
              {status === "sending" ? "Enviando..." : "Enviar"}
            </button>
            {status === "ok" ? (
              <p className="text-green-700">Gracias. Te responderé a la brevedad.</p>
            ) : null}
            {status === "error" ? (
              <p className="text-red-700">
                No se pudo enviar. Escríbeme a oscar at augexp.com
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </div>
  );
}
