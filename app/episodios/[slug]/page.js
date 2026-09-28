import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/layout/SiteNav";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import EpisodeCard from "@/components/content/EpisodeCard";
import { episodes, getEpisode, hasYoutubeVideo } from "@/data/content";

export default async function EpisodePage({ params }) {
  const { slug } = await params;
  const episode = getEpisode(slug);
  if (!episode) notFound();
  const related = episodes.filter((item) => item.space === episode.space && item.slug !== slug).slice(0, 3);
  return <main className="min-h-screen bg-[#F5F0E8] text-[#1A1A2E]"><SiteNav /><section className="bg-[#FFF8EE] px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_0.85fr] md:items-center"><div><Link href="/episodios" className="text-sm font-semibold text-[#9B6B2D] transition hover:text-[#21170f]">← Todos los episodios</Link><p className="mb-4 mt-10 text-xs font-bold uppercase tracking-[0.24em] text-[#9B6B2D]">{episode.category} · Temporada {episode.season} · Episodio {episode.number}</p><h1 className="font-serif text-5xl leading-tight text-[#21170f] md:text-6xl">{episode.title}</h1>{episode.space !== "hombre" && <p className="mt-5 text-sm font-semibold text-[#9B6B2D]">{episode.date}</p>}<p className="mt-6 text-xl leading-8 text-[#5E5760]">{episode.description}</p>{(episode.country || episode.jurisdiction) && <p className="mt-4 text-sm text-[#5E5760]">{[episode.country, episode.jurisdiction].filter(Boolean).join(" · ")}</p>}{episode.quote && <blockquote className="mt-8 border-l-4 border-[#B99145] pl-5 font-serif text-2xl leading-9 text-[#4F4950]">“{episode.quote}”</blockquote>}{episode.verse && <p className="mt-5 text-sm font-semibold text-[#722F37]">{episode.verse}</p>}{hasYoutubeVideo(episode) ? <Button as="a" href={episode.youtubeUrl} target="_blank" rel="noreferrer" className="mt-9 px-8 py-4 text-base">Ver en YouTube</Button> : episode.space !== "hombre" && <p className="mt-9 text-sm font-semibold text-[#81776D]">Este episodio estará disponible próximamente.</p>}</div><Image src={episode.image} alt="" width={780} height={520} className="h-80 w-full rounded-2xl object-cover shadow-xl shadow-[#21170f]/10 md:h-[30rem]" priority /></div></section><section className="px-5 py-16 md:px-8 md:py-20"><div className="mx-auto max-w-6xl"><h2 className="font-serif text-4xl text-[#21170f]">Episodios relacionados</h2>{related.length ? <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <EpisodeCard key={item.slug} episode={item} />)}</div> : <p className="mt-5 leading-7 text-[#5E5760]">Pronto encontrarás más episodios de esta temporada.</p>}</div></section><Footer /></main>;
}
