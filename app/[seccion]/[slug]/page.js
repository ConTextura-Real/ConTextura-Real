import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/layout/SiteNav";
import Footer from "@/components/layout/Footer";
import { sectionContent } from "@/data/sections";

export default async function ContentSection({ params }) {
  const { seccion, slug } = await params;
  const content = sectionContent[seccion]?.[slug];

  if (!content) notFound();

  return (
    <main className="min-h-screen bg-[#F5F0E8] text-[#1A1A2E]">
      <SiteNav />
      <section className="px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-5xl">
          <Link href="/" className="text-sm font-semibold text-[#9B6B2D] transition hover:text-[#21170f]">
            ← Volver al inicio
          </Link>
          <p className="mb-4 mt-10 text-xs font-bold uppercase tracking-[0.28em] text-[#9B6B2D]">{content.eyebrow}</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight text-[#21170f] md:text-7xl">{content.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#5E5760]">{content.intro}</p>
        </div>
      </section>
      <section className="bg-[#FFF8EE] px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="font-serif text-4xl text-[#21170f]">Contenido de este espacio</h2>
            <p className="mt-5 max-w-2xl leading-8 text-[#5E5760]">{content.description}</p>
            <p className="mt-8 rounded-xl border border-[#E6D8C5] bg-white p-5 text-sm leading-6 text-[#5E5760]">Los episodios y recursos de esta sección aparecerán aquí próximamente.</p>
          </div>
          <aside className="rounded-2xl bg-[#21170f] p-7 text-white shadow-lg shadow-[#21170f]/10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8C985]">Temas del espacio</p>
            <ul className="mt-6 space-y-4">
              {content.topics.map((topic) => <li key={topic} className="border-b border-white/15 pb-4 text-lg">{topic}</li>)}
            </ul>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
