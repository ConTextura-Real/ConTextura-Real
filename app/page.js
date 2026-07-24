import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/layout/SiteNav";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { lifeStages, pillars, youtubeTopics } from "@/data/home";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <main className="bg-[#F5F0E8] text-[#1A1A2E]">
      <SiteNav />

      <section className="relative overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32">
        <div className="absolute inset-x-0 top-0 h-40 bg-white/55" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_0.86fr] md:gap-14">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#9B6B2D]">
              Hombre | Mujer | Derecho | Fe
            </p>

            <h1 className="font-serif text-5xl leading-[0.96] text-[#21170f] md:text-7xl">
              {siteConfig.name}
            </h1>

            <p className="mt-5 max-w-xl text-2xl italic leading-snug text-[#B76032]">
              Porque la vida tiene textura. Y hoy empieza a mostrarse tal como es.
              es.
            </p>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4F4950]">
              Una mirada auténtica sobre la vida desde la experiencia de una
              mujer, abogada y creyente. Un espacio donde la fe, el derecho y la
              realidad cotidiana se encuentran.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button as="a" href="/escribir" className="px-8 py-4 text-base">
                Compartir mi historia
              </Button>

              <Button
                as="a"
                href="/oracion"
                variant="outline"
                className="px-8 py-4 text-base"
              >
                Solicitar oración
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="absolute -left-5 top-8 h-36 w-36 rounded-full bg-[#E8C985]/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-[#FFF8EE] shadow-2xl shadow-[#21170f]/10">
              <Image
                src="/images/abogada.png"
                alt="Mujer abogada de Con-Textura Real"
                width={600}
                height={700}
                className="h-auto w-full object-cover"
                sizes="(min-width: 768px) 440px, calc(100vw - 40px)"
                quality={75}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21170f]/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#9B6B2D]">
              Ejes del espacio
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Una conversación honesta entre experiencia, justicia y fe.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={`/ejes/${pillar.slug}`}
                className="overflow-hidden rounded-2xl border border-[#E6D8C5] bg-white shadow-lg shadow-[#21170f]/5"
              >
                <Image
                src={pillar.image}
                alt={pillar.title}
                width={600}
                height={400}
                className="h-56 w-full object-cover"
                sizes="(min-width: 768px) 33vw, calc(100vw - 40px)"
                quality={75}
              />
                <div className="p-6">
                  <h3 className="font-serif text-3xl">{pillar.title}</h3>
                  <p className="mt-4 leading-7 text-[#5E5760]">
                    {pillar.text}
                  </p>
                  <span className="mt-5 inline-block text-sm font-bold text-[#9B6B2D]">Explorar este eje →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8EE] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.72fr_1fr] md:items-start">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#9B6B2D]">
              Etapas
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Un espacio para cada etapa de la vida.
            </h2>
          </div>

          <div className="grid gap-4">
            {lifeStages.map((stage) => (
              <Link
                key={stage.title}
                href={`/etapas/${stage.slug}`}
                className={`rounded-2xl border-l-4 bg-white p-6 shadow-sm ${stage.color}`}
              >
                <h3 className="text-2xl font-semibold">{stage.title}</h3>
                <p className="mt-3 leading-7 text-[#5E5760]">{stage.text}</p>
                <span className="mt-4 inline-block text-sm font-bold text-[#9B6B2D]">Ver contenidos →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#9B6B2D]">
                Próximamente
              </p>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Conversaciones para YouTube.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#5E5760]">
              Temas pensados para mirar la vida real con profundidad, calma y
              esperanza práctica.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {youtubeTopics.map((topic, index) => (
              <Link
                key={topic.slug}
                href={`/episodios/${topic.slug}`}
                className="min-h-52 rounded-2xl border border-[#E6D8C5] bg-[#21170f] p-6 text-white shadow-lg shadow-[#21170f]/10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8C985]">
                  Episodio {index + 1}
                </p>
                <h3 className="mt-10 font-serif text-3xl leading-tight">
                  {topic.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#21170f] px-5 py-16 text-white md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#E8C985]">
            Sala virtual
          </p>
          <h2 className="font-serif text-5xl leading-tight">
            Tu voz tiene valor.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl leading-8 text-white/78">
            Aquí puedes escribir sin miedo, sin juicio y sin máscaras.
          </p>
          <Button as="a" href="/escribir" className="mt-9 px-8 py-4 text-base">
            Compartir mi historia
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
