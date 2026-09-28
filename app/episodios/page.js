import SiteNav from "@/components/layout/SiteNav";
import Footer from "@/components/layout/Footer";
import EpisodeCard from "@/components/content/EpisodeCard";
import { episodes } from "@/data/content";

export default function EpisodesPage() {
  return <main className="min-h-screen bg-[#F5F0E8] text-[#1A1A2E]"><SiteNav /><section className="bg-[#FFF8EE] px-5 pb-16 pt-28 md:px-8 md:pt-32"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9B6B2D]">Colección</p><h1 className="mt-4 font-serif text-5xl text-[#21170f] md:text-7xl">Todos los episodios</h1><p className="mt-6 max-w-2xl text-xl leading-8 text-[#5E5760]">Una colección que irá creciendo con nuevas temporadas, conversaciones y miradas sobre la vida real.</p></div></section><section className="px-5 py-16 md:px-8 md:py-20"><div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">{episodes.map((episode) => <EpisodeCard key={episode.slug} episode={episode} />)}</div></section><Footer /></main>;
}
