import { siteConfig } from "@/data/site";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <Reveal as="footer" className="bg-[#76563d] px-6 py-12 text-[#FFF9F0]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <h2 className="text-2xl font-semibold">{siteConfig.name}</h2>
          <p className="mt-2 text-sm text-[#FFF9F0]/75">Mujer | Abogada | Derecho | Fe</p>
        </div>

        <a
          href={`mailto:${siteConfig.email}`}
          className="text-sm font-medium text-[#E8C985] transition hover:text-white"
        >
          {siteConfig.email}
        </a>
      </div>
    </Reveal>
  );
}
