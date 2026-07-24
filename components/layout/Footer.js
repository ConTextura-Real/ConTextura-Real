import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#12121f] px-6 py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <h2 className="text-2xl font-semibold">{siteConfig.name}</h2>
          <p className="mt-2 text-sm text-white/65">Hombre | Mujer | Derecho | Fe</p>
        </div>

        <a
          href={`mailto:${siteConfig.email}`}
          className="text-sm font-medium text-[#E8C985] transition hover:text-white"
        >
          {siteConfig.email}
        </a>
      </div>
    </footer>
  );
}
