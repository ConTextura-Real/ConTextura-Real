import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/layout/SiteNav";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { spaces, upcomingEpisodes } from "@/data/content";
import { siteConfig } from "@/data/site";

const pillars = ["mujer", "abogada", "derecho", "fe"];
const lifeStages = ["ninos", "jovenes", "adultos", "adultos-mayores"];
const manFacets = ["Hombre siendo padre", "Hombre siendo hijo", "Hombre siendo esposo", "Hombre siendo amigo", "Hombre siendo hermano", "Hombre siendo profesional", "Hombre siendo creyente", "Hombre siendo él mismo"];

function SpaceCard({ slug, space, index = 0 }) {
  return (
    <Reveal className="h-full" style={{ "--reveal-delay": `${Math.min(index, 4) * 90}ms` }}>
    <Link href={`/${space.section}/${slug}`} className="group block overflow-hidden rounded-2xl bg-[#FFFDF9] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9B6B2D]">
      <div className="overflow-hidden"><Image src={space.image} alt="" width={600} height={480} className="h-72 w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03]" sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" /></div>
      <div className="px-6 pb-7 pt-6"><h3 className="font-serif text-3xl text-[#1A1A2E] transition-colors duration-300 group-hover:text-[#9B6B2D] group-focus-visible:text-[#9B6B2D]">{space.title}</h3><p className="mt-3 line-clamp-2 text-sm leading-6 text-[#5E5760]">{space.intro}</p></div>
    </Link>
    </Reveal>
  );
}

function SocialIcon({ href, label, children }) {
  return <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="rounded-full border border-[#C9A84C] p-3 text-[#76563d] transition hover:bg-[#E8C985]/30">{children}</a>;
}

export default function Home() {
  return (
    <main className="bg-[#F5F0E8] text-[#1A1A2E]">
      <SiteNav tone="cover" />
      <section className="home-hero px-5 pb-14 pt-28 md:px-8 md:pb-10 md:pt-32">
        <div className="home-hero-content"><div className="hero-copy w-full text-left">
          <p className="hero-eyebrow">MUJER · ABOGADA · DERECHO · FE</p>
          <h1 className="hero-title">{siteConfig.name}</h1>
          <p className="hero-tagline">Porque la vida tiene textura. Y hoy empieza a mostrarse tal como es.</p>
          <p className="hero-description">Una mirada auténtica sobre la vida, el derecho y la fe, desde la experiencia de una mujer abogada.</p>
          <p className="home-copy mt-8 text-[1.03rem] font-bold leading-8 text-[#5E5760] md:text-lg md:leading-9">Una mirada auténtica sobre la vida desde la experiencia de una mujer, abogada y creyente. Un espacio donde la fe, el derecho y la realidad cotidiana se encuentran.</p>
          <p className="home-copy mt-8 text-base leading-8 text-[#5E5760]">Hay historias que buscan ser escuchadas y corazones que necesitan descanso. Aquí puedes acercarte con calma.</p>
          <div className="hero-actions mt-11 flex flex-wrap justify-center gap-4"><Button as="a" href="/escribir" className="border border-[#4A6741] bg-[#4A6741] px-8 py-4 text-base text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3E5837] hover:bg-[#3E5837] hover:shadow-md">Compartir mi historia</Button><Button as="a" href="/oracion" variant="outline" className="border border-[#4A6741] bg-[#4A6741] px-8 py-4 text-base text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3E5837] hover:bg-[#3E5837] hover:shadow-md">Solicitar oración</Button></div>
        </div></div>
        <div className="hero-mobile-photo">
          <Image
            src="/images/portada.webp"
            alt="La creadora de ConTextura Real sonríe sentada en un sillón"
            width={1717}
            height={916}
            priority
            unoptimized
            sizes="100vw"
            className="hero-mobile-photo-image"
          />
        </div>
      </section>
      <section className="bg-[#F5F0E8] px-5 py-24 md:px-8 md:py-32"><div className="mx-auto max-w-7xl"><Reveal as="div" className="mb-14 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A84C]">Ejes del espacio</p><h2 className="mt-4 font-serif text-5xl leading-tight text-[#1A1A2E] md:text-6xl">Cuatro miradas para habitar la vida con más verdad.</h2><p className="mt-5 max-w-xl leading-8 text-[#5E5760]">Espacios para detenernos, escuchar y conversar desde aquello que somos y vivimos.</p></Reveal><div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{pillars.map((key, index) => <SpaceCard key={key} slug={key} space={spaces[key]} index={index} />)}</div></div></section>
      <section className="bg-[#EEE7DA] px-5 py-24 md:px-8 md:py-32"><div className="mx-auto max-w-7xl"><Reveal as="div" className="mb-14 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9B6B2D]">Etapas de la vida</p><h2 className="mt-4 font-serif text-5xl leading-tight text-[#1A1A2E] md:text-6xl">Un lugar para cada momento.</h2><p className="mt-5 leading-8 text-[#5E5760]">La vida cambia de ritmo, de preguntas y de horizonte. Aquí cada etapa encuentra su propia conversación.</p></Reveal><div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{lifeStages.map((key, index) => { const stage = spaces[key]; return <Reveal key={key} className="h-full" style={{ "--reveal-delay": `${Math.min(index, 4) * 90}ms` }}><Link href={`/${stage.section}/${key}`} className="group block overflow-hidden rounded-2xl bg-[#F8F5EF] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9B6B2D]"><div className="overflow-hidden"><Image src={stage.image} alt="" width={600} height={480} className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]" sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" /></div><div className="px-6 pb-7 pt-6"><h3 className="font-serif text-3xl text-[#1A1A2E] transition-colors duration-300 group-hover:text-[#9B6B2D] group-focus-visible:text-[#9B6B2D]">{stage.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-[#5E5760]">{stage.intro}</p></div></Link></Reveal>; })}</div></div></section>
      <section className="bg-[#F5F0E8] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal as="div" className="mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">Algo que no debe ser superficial</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight text-[#1A1A2E] md:text-6xl">Una cabeza, muchas historias</h2>
          </Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-4 lg:gap-x-20">
            <SpaceCard slug="hombre" space={spaces.hombre} />
            <div className="lg:col-span-3 lg:pl-12">
              <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {manFacets.map((role, index) => (
                  <Reveal as="li" key={role} className={`home-man-facet flex items-start gap-3 font-serif text-[clamp(1.5rem,2.2vw,2.3rem)] leading-snug text-[#46513D] ${index % 2 === 0 ? "lg:translate-x-8" : ""}`} style={{ "--reveal-delay": `${index * 90}ms` }}>
                    <span>{role}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#21170f] px-5 py-24 text-white md:px-8 md:py-32"><div className="mx-auto max-w-7xl"><Reveal as="div" className="mb-14 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#E8C985]">Próximamente</p><h2 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">Conversaciones por llegar.</h2><p className="mt-5 leading-8 text-white/70">Nuevas miradas para seguir descubriendo la vida con profundidad y esperanza.</p></Reveal><div className="grid gap-7 md:grid-cols-3">{upcomingEpisodes.map((episode, index) => <Reveal key={episode.slug} style={{ "--reveal-delay": `${Math.min(index, 4) * 90}ms` }}><article className="h-full overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04]"><Image src={episode.image} alt="" width={600} height={360} className="h-52 w-full object-cover opacity-85" /><div className="p-7"><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E8C985]">Próximamente</p><h3 className="mt-4 font-serif text-3xl">{episode.title}</h3><p className="mt-3 text-sm leading-6 text-white/65">{episode.date}</p></div></article></Reveal>)}</div></div></section>
      <section className="bg-[#F5F0E8] px-5 py-32 md:px-8 md:py-40"><Reveal as="div" className="mx-auto max-w-4xl text-center"><div className="mx-auto mb-10 h-px w-16 bg-[#C9A84C]" /><h2 className="font-serif text-5xl leading-tight text-[#1A1A2E] md:text-6xl">Cada historia merece ser escuchada.<br />Cada persona merece ser acompañada.</h2><p className="mt-8 text-lg text-[#5E5760]">Gracias por formar parte de este espacio.</p><div className="mt-12"><p className="text-xl font-bold text-[#1A1A2E]">Únete a nuestra comunidad:</p><div className="mt-5 flex justify-center gap-5"><SocialIcon href="https://www.instagram.com/contexturareal/" label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-current"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg></SocialIcon><SocialIcon href="https://www.youtube.com/@ConTexturaReal" label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-current"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg></SocialIcon></div></div></Reveal></section>
      <Footer />
    </main>
  );
}
