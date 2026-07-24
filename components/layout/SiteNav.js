import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function SiteNav({ tone = "light", action = null }) {
  const isDark = tone === "dark";

  return (
    <header className="absolute left-0 right-0 top-0 z-30 px-4 py-4 md:px-8">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border px-4 py-3 shadow-sm backdrop-blur-xl ${
          isDark
            ? "border-white/25 bg-[#21170f]/40 text-white"
            : "border-white/70 bg-white/75 text-[#1A1A2E]"
        }`}
      >
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo-nav.webp"
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0 rounded-full bg-white"
            sizes="40px"
          />
          <span className="truncate text-sm font-bold md:text-base">
            {siteConfig.name}
          </span>
        </Link>

        <div className="flex items-center gap-1 text-xs font-semibold md:gap-2 md:text-sm">
          <div className="flex items-center gap-1 md:gap-2">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 transition md:px-4 ${
                  isDark ? "hover:bg-white/15" : "hover:bg-[#F5F0E8]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {action && (
            <div className="ml-1 border-l border-current/15 pl-2 md:ml-2 md:pl-3">
              {action}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
