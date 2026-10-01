"use client";

import { useState } from "react";

export type AccordionItem = {
  title: string;
  body: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-black/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className="border-b border-black/10">
            <button
              type="button"
              className="w-full text-left py-4 flex items-center justify-between gap-4"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-ink font-bold text-[18px]">{item.title}</span>
              <span className="text-coral text-xl leading-none">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen ? <p className="pb-5 text-[15px] leading-relaxed">{item.body}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
