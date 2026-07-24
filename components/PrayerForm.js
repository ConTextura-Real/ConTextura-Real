"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { TextArea, TextInput } from "@/components/ui/FormField";

export default function PrayerForm() {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setEnviando(true);
    setEnviado(false);

    const form = e.target;
    const datos = {
      nombre: form.nombre.value,
      correo: form.correo.value,
      mensaje: form.mensaje.value,
    };

    const respuesta = await fetch("/api/pray", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    const resultado = await respuesta.json();

    if (resultado.success) {
      setEnviado(true);
      form.reset();
    }

    setEnviando(false);
  }

  return (
    <div className="rounded-2xl border border-[#E6D8C5] bg-[#FFF8EE] p-6 shadow-2xl shadow-[#21170f]/8 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#3E3740]">
            Nombre
          </label>
          <TextInput name="nombre" type="text" placeholder="Tu nombre (Opcional)"/>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#3E3740]">
            Correo electrónico
          </label>
          <TextInput name="correo" type="email" placeholder="Tu correo (Opcional)" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#3E3740]">
            Petición de oración
          </label>
          <TextArea
            name="mensaje"
            rows="7"
            placeholder="Escribe tu intención de oración..."
            required
          />
        </div>

        <Button
          type="submit"
          disabled={enviando}
          className="w-full px-8 py-4 text-base"
        >
          {enviando ? "Enviando..." : "Enviar solicitud de oración"}
        </Button>
      </form>

      {enviado && (
        <p className="mt-6 rounded-2xl bg-white p-4 text-center text-sm font-medium text-[#4A6741]">
          Tu solicitud de oración fue enviada. Gracias por compartirla.
        </p>
      )}
    </div>
  );
}
