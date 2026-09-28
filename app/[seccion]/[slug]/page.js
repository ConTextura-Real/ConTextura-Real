import Image from "next/image";
import { notFound } from "next/navigation";
import SiteNav from "@/components/layout/SiteNav";
import Footer from "@/components/layout/Footer";
import EpisodeCard from "@/components/content/EpisodeCard";
import Reveal from "@/components/ui/Reveal";
import { getEpisodesForSpace, getSeasonTitles, getSpace, seasonTitlesBySpace } from "@/data/content";

export default async function ContentSection({ params }) {
  const { seccion, slug } = await params;
  const space = getSpace(seccion, slug);
  if (!space) notFound();

  const episodes = getEpisodesForSpace(slug);
  const seasonImage = space.seasonImage || space.image;
  const seasonTitles = seasonTitlesBySpace[slug];
  const catalogTitles = getSeasonTitles(slug);
  const seasons = catalogTitles.length
    ? catalogTitles.map((_, index) => index + 1)
    : [...new Set(episodes.map((episode) => episode.season))]
    .filter((season) => Number.isInteger(season) && season >= 1 && season <= 10)
    .sort((first, second) => first - second);

  return (
    <main className="min-h-screen bg-[#FFF8EE] text-[#1A1A2E]">
      <SiteNav />
      <section className="relative bg-[#FFF8EE]">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="pb-9 pt-24 text-center md:pb-12 md:pt-28">
            <Reveal as="h1" className="font-serif text-6xl leading-[0.95] text-[#21170f] sm:text-7xl md:text-8xl lg:text-9xl" style={{ "--reveal-delay": "60ms", letterSpacing: "0.08em", textTransform: "uppercase" }}>{space.title}</Reveal>
          </div>
        </div>
        <div className="relative left-1/2 h-72 w-screen -translate-x-1/2 overflow-hidden md:h-[34rem]">
          {space.headerImage ? <Image src={space.headerImage} alt={`Banner de ${space.title}`} fill priority className="object-cover" sizes="100vw" /> : <div className="h-full bg-[#C2A18C]" />}
          <div className="absolute inset-0 bg-[#21170f]/15" />
        </div>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex items-center justify-center px-4 py-5 text-center md:px-8 md:py-6">
            <Reveal as="p" className="text-lg leading-7 text-[#5E5760] md:whitespace-nowrap md:text-[clamp(1rem,1.55vw,1.5rem)]" style={{ "--reveal-delay": "100ms" }}>{space.intro}</Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F0E8] px-5 py-16 text-[#21170f] md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <Reveal as="p" className="text-xs font-bold uppercase tracking-[0.24em] text-[#9B6B2D]" style={{ "--reveal-delay": "40ms" }}>Una pausa para mirar más hondo</Reveal>
          <Reveal as="h2" className="mt-4 font-serif text-5xl leading-tight md:text-6xl" style={{ "--reveal-delay": "100ms" }}>Un espacio para profundizar</Reveal>
          <Reveal as="p" className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-[#21170f]/80 md:text-2xl md:leading-10" style={{ "--reveal-delay": "180ms" }}>{space.description}</Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {space.topics.map((topic, index) => <Reveal key={topic} as="span" className="inline-block rounded-full border border-[#B99145]/35 bg-[#FFF8EE] px-5 py-3 text-lg" style={{ "--reveal-delay": `${260 + index * 70}ms` }}>{topic}</Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8EE] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal as="p" className="text-xs font-bold uppercase tracking-[0.24em] text-[#9B6B2D]" style={{ "--reveal-delay": "40ms" }}>Colección del espacio</Reveal>
          <Reveal as="h2" className="mt-3 font-serif text-4xl text-[#21170f] md:text-5xl" style={{ "--reveal-delay": "100ms" }}>{space.seasonTitle ? `Temporada ${space.seasonTitle}` : seasons.length ? "Temporadas" : "Conversaciones por llegar"}</Reveal>
          {catalogTitles.length ? (
            <div className="mt-10 grid gap-7 sm:grid-cols-2">
              {catalogTitles.map((title, index) => {
                const season = index + 1;
                const seasonEpisodes = episodes.filter((episode) => episode.season === season);
                return <Reveal key={`${season}-${title}`} style={{ "--reveal-delay": `${Math.min(index, 4) * 90}ms` }}>
                <details className="group h-full overflow-hidden rounded-2xl border border-[#E6D8C5] bg-white shadow-md shadow-[#21170f]/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <summary className="cursor-pointer list-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#9B6B2D]">
                    <div className="relative aspect-video overflow-hidden">
                      <Image src={seasonImage} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#21170f]/75 via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Temporada {season}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-2xl leading-tight text-[#21170f] transition-colors group-hover:text-[#9B6B2D]">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#5E5760]">{seasonEpisodes.length ? `${seasonEpisodes.length} episodio${seasonEpisodes.length === 1 ? "" : "s"}` : "Próximamente"}</p>
                    </div>
                  </summary>
                  <div className="border-t border-[#E6D8C5] px-6 py-5">
                    {seasonEpisodes.length ? <div className="grid gap-5">{seasonEpisodes.map((episode, episodeIndex) => <EpisodeCard key={episode.slug} episode={episode} index={episodeIndex} tone={space.seasonTitle ? "olive" : "default"} seasonName={space.seasonTitle} />)}</div> : <p className="text-sm leading-7 text-[#5E5760]">Los episodios de esta temporada estarán disponibles próximamente.</p>}
                  </div>
                </details>
                </Reveal>
              })}
            </div>
          ) : seasonTitles ? (
            <div className="mt-10 grid gap-7 sm:grid-cols-2">
              {seasonTitles.map((title, index) => <Reveal key={title} style={{ "--reveal-delay": `${Math.min(index, 4) * 90}ms` }}><article className="h-full overflow-hidden rounded-2xl border border-[#E6D8C5] bg-white shadow-md shadow-[#21170f]/5"><div className="relative aspect-video overflow-hidden"><Image src={seasonImage} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" /><span className="absolute bottom-3 right-3 rounded bg-black/75 px-2 py-1 text-xs font-semibold text-white">Próximamente</span></div><div className="p-6"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B6B2D]">Tema por venir</p><h3 className="mt-3 font-serif text-2xl leading-tight text-[#21170f]">{title}</h3></div></article></Reveal>)}
            </div>
          ) : space.seasonTitle ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {episodes.map((episode, index) => (
                <Reveal key={episode.slug} className="h-full" style={{ "--reveal-delay": `${Math.min(index, 4) * 90}ms` }}>
                  <article className="h-full overflow-hidden rounded-2xl border border-[#C8B08A]/55 bg-[#FFF8EE]">
                    <div className="relative aspect-[16/7] overflow-hidden">
                      <Image src={seasonImage} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <div className="p-5 sm:p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#59624A]">Episodio {String(episode.number).padStart(2, "0")}</p>
                      <h3 className="mt-3 font-serif text-2xl leading-tight text-[#46513D]">{episode.title}</h3>
                      <p className="mt-4 leading-7 text-[#5E5760]">{episode.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-10 space-y-4">
              {!seasons.length && <p className="leading-7 text-[#5E5760]">Los episodios de este espacio estarán disponibles próximamente.</p>}
              {seasons.map((season) => {
                const seasonEpisodes = episodes.filter((episode) => episode.season === season);
                return <Reveal key={season}><details open={season === 1} className="overflow-hidden rounded-2xl border border-[#E6D8C5] bg-white"><summary className="cursor-pointer font-serif text-3xl text-[#21170f]"><span className="relative block aspect-video"><Image src={seasonImage} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" /><span className={`absolute inset-0 flex items-end bg-gradient-to-t ${space.seasonTitle ? "from-[#46513D]/80" : "from-[#21170f]/75"} via-transparent to-transparent p-6 text-white`}>{space.seasonTitle ? `${space.seasonTitle} · Temporada ${season}` : `Temporada ${season}`}</span></span></summary><div className="p-6">{seasonEpisodes.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{seasonEpisodes.map((episode, index) => <EpisodeCard key={episode.slug} episode={episode} index={index} tone={space.seasonTitle ? "olive" : "default"} seasonName={space.seasonTitle} hideDetailsLink={Boolean(space.seasonTitle)} hideUnavailableLabel={Boolean(space.seasonTitle)} />)}</div> : <p className="leading-7 text-[#5E5760]">Esta temporada estará disponible próximamente.</p>}</div></details></Reveal>;
              })}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
