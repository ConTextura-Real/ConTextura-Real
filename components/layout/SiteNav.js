"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

export default function SiteNav({ tone = "light", action = null }) {
  const isDark = tone === "dark";
  const isCover = tone === "cover";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const linkTone = isDark
    ? "text-white hover:bg-white/15"
    : isCover
      ? "text-[#1A1A2E] hover:bg-[#D8DFC9]"
      : "text-[#1A1A2E] hover:bg-[#F5F0E8]";

  return (
    <header className={`absolute left-0 right-0 top-0 z-30 px-4 py-4 md:px-8 md:py-5 ${isCover ? "cover-navigation" : ""}`}>
      <nav
        aria-label="Navegación principal"
        className={`relative mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full border px-2 py-2.5 shadow-[0_6px_24px_rgba(68,47,26,0.05)] backdrop-blur-md sm:gap-4 sm:px-4 ${
          isDark
            ? "border-white/25 bg-[#21170f]/40 text-white"
            : isCover
              ? "border-[#C7CFB8]/80 bg-[#E7EBDD]/95 text-[#1A1A2E]"
              : "border-white/70 bg-white/75 text-[#1A1A2E]"
        }`}
      >
        <Link href="/" className="flex min-w-0 items-center gap-2 whitespace-nowrap transition-opacity duration-200 hover:opacity-80 sm:gap-3">
          <Image
            src="/logo-nav.webp"
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0 rounded-full bg-white"
            sizes="40px"
          />
          <span className={`text-xs leading-tight min-[360px]:text-sm md:text-base ${isCover ? "font-normal" : "font-semibold"}`}>
            {siteConfig.name}
          </span>
        </Link>

        <div className={`hidden items-center gap-1 text-xs sm:text-sm md:flex md:gap-2 md:text-base ${isCover ? "font-normal" : "font-medium"}`}>
          <div className="flex items-center gap-1 md:gap-2">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-1.5 py-1.5 transition duration-200 ease-out sm:px-3 md:px-4 ${linkTone}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {action && <div className="ml-1 border-l border-current/15 pl-2 md:ml-2 md:pl-3">{action}</div>}
        </div>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          {action && <div>{action}</div>}
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="site-navigation-links"
            onClick={() => setMenuOpen((open) => !open)}
            className={`inline-flex size-10 items-center justify-center rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${isDark ? "text-white focus-visible:outline-white hover:bg-white/15" : "text-[#46513D] focus-visible:outline-[#59624A] hover:bg-black/5"}`}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-none stroke-current stroke-2">
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-none stroke-current stroke-2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        <div
          id="site-navigation-links"
          className={`absolute left-0 right-0 top-[calc(100%+0.5rem)] z-40 rounded-2xl border p-2 shadow-lg md:hidden ${menuOpen ? "block" : "hidden"} ${
            isDark
              ? "border-white/25 bg-[#21170f] text-white"
              : isCover
                ? "border-[#C7CFB8]/80 bg-[#E7EBDD] text-[#1A1A2E]"
                : "border-white/70 bg-[#FFFDF9] text-[#1A1A2E]"
          }`}
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-xl px-4 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] ${linkTone}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
