"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* GLOWS */}
      <div className="absolute top-[-200px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-red-500/10 blur-3xl" />

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full px-8 py-6">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <div className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            Creaciones Bengala
          </div>

          <nav className="hidden md:flex gap-10 text-sm text-zinc-300">

            <button className="hover:text-orange-400 transition-colors duration-500">
              Proyectos
            </button>

            <button className="hover:text-orange-400 transition-colors duration-500">
              Quiénes somos
            </button>

            <button className="hover:text-orange-400 transition-colors duration-500">
              Contacto
            </button>

          </nav>

        </div>

      </header>

      {/* HERO */}
      <section className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">

        <motion.img
          src="/logo.png"
          alt="Creaciones Bengala"
          className="w-72 md:w-[420px] mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.h1
          className="max-w-4xl text-3xl md:text-5xl font-light leading-[1.2]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Convertimos tus ideas en experiencias reales.
        </motion.h1>

        {/* BOTONES */}
        <motion.div
          className="mt-12 flex flex-col md:flex-row items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >

          {/* BOTÓN */}
          <button className="group relative overflow-hidden border border-white/20 px-8 py-4 uppercase tracking-[0.3em] text-xs">

            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Explorar proyectos
            </span>

            <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

          </button>

          {/* BOTÓN */}
          <button className="group relative overflow-hidden border border-white/20 px-8 py-4 uppercase tracking-[0.3em] text-xs">

            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Quiénes somos
            </span>

            <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

          </button>

          {/* BOTÓN */}
          <button className="group relative overflow-hidden border border-white/20 px-8 py-4 uppercase tracking-[0.3em] text-xs">

            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Cuéntanos tu proyecto
            </span>

            <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

          </button>

        </motion.div>

      </section>

      {/* PROYECTOS */}
      <section className="relative z-10 px-6 pb-32 -mt-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 flex items-end justify-between">

            <h2 className="text-4xl md:text-6xl font-light">
              Proyectos destacados
            </h2>

            <div className="hidden md:block text-zinc-500 uppercase tracking-[0.3em] text-xs">
              Selección premium
            </div>

          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {/* PROYECTO 1 */}
            <div className="group overflow-hidden rounded-[32px] bg-zinc-900">

              <div className="overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop"
                  className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-8">

                <div className="mb-3 text-xs uppercase tracking-[0.3em] text-orange-400">
                  Carrozas Temáticas
                </div>

                <h3 className="mb-4 text-3xl font-light">
                  Escenografía visual a gran escala
                </h3>

                <p className="text-sm leading-relaxed text-zinc-400">
                  Construcciones artesanales desarrolladas para transformar
                  espacios, eventos y recorridos en experiencias visuales únicas.
                </p>

              </div>

            </div>

            {/* PROYECTO 2 */}
            <div className="group overflow-hidden rounded-[32px] bg-zinc-900">

              <div className="overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
                  className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-8">

                <div className="mb-3 text-xs uppercase tracking-[0.3em] text-orange-400">
                  Tematización de Espacios
                </div>

                <h3 className="mb-4 text-3xl font-light">
                  Diseñamos atmósferas inmersivas
                </h3>

                <p className="text-sm leading-relaxed text-zinc-400">
                  Materiales, volumen e iluminación para crear experiencias
                  visuales completamente personalizadas.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}