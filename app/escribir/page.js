"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import SiteNav from "@/components/layout/SiteNav";
import Button from "@/components/ui/Button";
import { TextArea, TextInput } from "@/components/ui/FormField";

export default function Escribir() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [musicaActiva, setMusicaActiva] = useState(false);

  const audioRef = useRef(null);

  async function alternarMusica() {
    if (!audioRef.current) return;

    if (musicaActiva) {
      audioRef.current.pause();
      setMusicaActiva(false);
    } else {
      audioRef.current.volume = 0.24;
      await audioRef.current.play();
      setMusicaActiva(true);
    }
  }

  async function enviarMensaje() {
    if (!mensaje.trim()) {
      alert("Antes de enviar, escribe lo que deseas compartir.");
      return;
    }

    try {
      setEnviando(true);

      const respuesta = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, mensaje }),
      });

      const data = await respuesta.json();

      if (data.success) {
        alert("Tu mensaje fue recibido con cuidado. Gracias por compartirlo.");
        setNombre("");
        setCorreo("");
        setMensaje("");
      } else {
        alert("No fue posible enviar el mensaje en este momento.");
      }
    } catch (error) {
      console.error(error);
      alert("Hubo un error al enviar. Inténtalo nuevamente.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#21170f] text-white">
      <audio ref={audioRef} loop src="/audio/sala-tranquila.aac" />
      <SiteNav
        tone="dark"
        action={
          <button
            type="button"
            onClick={alternarMusica}
            aria-pressed={musicaActiva}
            aria-label={musicaActiva ? "Pausar ambiente" : "Activar ambiente"}
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/30 bg-white/14 text-white backdrop-blur-md transition hover:bg-white/24 sm:w-auto sm:gap-2 sm:px-3"
          >
            {musicaActiva ? (
              <span className="flex items-center gap-1" aria-hidden="true">
                <span className="h-3.5 w-1 rounded-sm bg-current" />
                <span className="h-3.5 w-1 rounded-sm bg-current" />
              </span>
            ) : (
              <span
                className="ml-0.5 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-current"
                aria-hidden="true"
              />
            )}
            <span className="hidden sm:inline">
              {musicaActiva ? "Pausar" : "Ambiente"}
            </span>
          </button>
        }
      />

      <section className="relative min-h-screen overflow-hidden bg-[#21170f] px-5 pb-10 pt-28 md:px-10 md:pt-30">
        <Image
          src="/images/sala-escritura.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={75}
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,27,14,0.22),rgba(44,27,14,0.06)_42%,rgba(44,27,14,0.42))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,22,12,0.18),transparent_25%,transparent_75%,rgba(35,22,12,0.18))]" />

        <div className="relative z-20 mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#E8C985] md:text-sm">
            Sala virtual de escritura
          </p>

          <h1 className="font-serif text-5xl leading-[0.95] md:text-7xl lg:text-[5.5rem]">
            Este espacio es para ti
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/90 md:text-2xl">
            Entra con calma. Mira alrededor. Escribe lo que necesitas soltar.
          </p>
        </div>

        <section className="relative z-20 mx-auto mt-10 w-full max-w-xl rounded-2xl border border-white/55 bg-[#FFF8EE]/92 p-6 text-[#292436] shadow-2xl backdrop-blur-xl md:mt-12 md:p-8 lg:mt-14">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9B6B2D]">
              Comparte tu historia
            </p>

            <h2 className="mt-2 font-serif text-4xl leading-tight md:text-5xl">
              Escribe sin máscaras
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#625B61] md:text-base">
              Este lugar fue creado para desahogarte, agradecer, preguntar o
              dejar un pensamiento que necesita salir con cuidado.
            </p>
          </div>

          <TextArea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribe aquí lo que llevas en tu corazón..."
            className="h-60 md:h-64"
          />

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <TextInput
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre (opcional)"
            />

            <TextInput
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Correo electrónico (opcional)"
            />
          </div>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs leading-6 text-[#696168]">
              Tu mensaje será recibido con respeto, calma y cuidado.
            </p>

            <Button
              onClick={enviarMensaje}
              disabled={enviando}
              className="px-7 py-3.5 text-[#292436]"
            >
              {enviando ? "Enviando..." : "Compartir mi mensaje"}
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
}
