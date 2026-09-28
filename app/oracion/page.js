import SiteNav from "@/components/layout/SiteNav";
import Footer from "@/components/layout/Footer";
import PrayerForm from "@/components/PrayerForm";
import Reveal from "@/components/ui/Reveal";

export default function Oracion() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] text-[#1A1A2E]">
      <SiteNav />

      <section className="px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.84fr_1fr] md:items-start">
          <Reveal as="div">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#9B6B2D]">
              Oración
            </p>
            <h1 className="font-serif text-5xl leading-tight text-[#21170f] md:text-7xl">
              Comparte tu petición con calma.
            </h1>
            <p className="mt-6 text-xl leading-8 text-[#5E5760]">
              Este es un espacio de confianza y esperanza. Puedes compartir tu
              intención de oración y será recibida con respeto.
            </p>
          </Reveal>

          <Reveal><PrayerForm /></Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
