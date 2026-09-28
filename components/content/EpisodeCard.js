import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { hasYoutubeVideo } from "@/data/content";

export default function EpisodeCard({ episode, index = episode.number - 1, tone = "default", seasonName, hideDetailsLink = false, hideUnavailableLabel = false }) {
  const olive = tone === "olive";
  return (
    <Reveal className="h-full" style={{ "--reveal-delay": `${Math.min(index, 4) * 90}ms` }}>
    <article className={`group overflow-hidden rounded-2xl border ${olive ? "border-[#C8B08A] bg-[#FFF8EE]" : "border-[#E6D8C5] bg-white"} shadow-md shadow-[#21170f]/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg`}>
      <Image src={episode.image} alt="" width={720} height={440} className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
      <div className="p-6">
        <p className={`text-xs font-bold uppercase tracking-[0.18em] ${olive ? "text-[#59624A]" : "text-[#9B6B2D]"}`}>{episode.category} · Temporada {seasonName || episode.season} · Episodio {episode.number}</p>
        <h3 className={`mt-3 font-serif text-3xl leading-tight transition-colors duration-200 ${olive ? "text-[#46513D] group-hover:text-[#68705A]" : "text-[#21170f] group-hover:text-[#9B6B2D]"}`}>{episode.title}</h3>
        <p className="mt-3 leading-7 text-[#5E5760]">{episode.excerpt}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          {!hideDetailsLink && <Link href={`/episodios/${episode.slug}`} className={`inline-block text-sm font-bold transition duration-200 hover:translate-x-1 ${olive ? "text-[#59624A] hover:text-[#46513D]" : "text-[#9B6B2D] hover:text-[#21170f]"}`}>Detalles →</Link>}
          {hasYoutubeVideo(episode) ? <a href={episode.youtubeUrl} target="_blank" rel="noreferrer" className={`inline-block text-sm font-bold transition-colors ${olive ? "text-[#59624A] hover:text-[#46513D]" : "text-[#9B6B2D] hover:text-[#21170f]"}`}>Ver en YouTube ↗</a> : !hideUnavailableLabel && <span className="text-sm text-[#81776D]">Próximamente</span>}
        </div>
      </div>
    </article>
    </Reveal>
  );
}
