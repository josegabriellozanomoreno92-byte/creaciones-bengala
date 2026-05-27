"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* Glow fondo */}
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
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <motion.img
          src="/logo.png"
          alt="Creaciones Bengala"
          className="w-80 md:w-[500px] mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.h1
          className="max-w-5xl text-5xl md:text-8xl font-light leading-[1.1]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Construimos aquello que todavía no existe.
        </motion.h1>

        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >

          {/* BOTÓN 1 */}
          <button className="group relative overflow-hidden border border-white/20 px-10 py-5 uppercase tracking-[0.3em] text-sm">

            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Explorar proyectos
            </span>

            <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

          </button>

          {/* BOTÓN 2 */}
          <button className="rounded-full border border-orange-500/30 bg-white/5 px-10 py-5 text-sm uppercase tracking-[0.3em] backdrop-blur-md hover:bg-orange-500/20 transition-all duration-500">

            Quiénes somos

          </button>

          {/* BOTÓN 3 */}
          <button className="bg-orange-500 px-10 py-5 text-sm uppercase tracking-[0.3em] text-black hover:scale-105 hover:bg-orange-400 transition-all duration-500 shadow-[0_0_40px_rgba(249,115,22,0.35)]">

            Cuéntanos tu proyecto

          </button>

        </motion.div>

      </section>

      {/* PROYECTOS */}
      <section className="relative z-10 px-6 pb-40">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 flex items-end justify-between">

            <h2 className="text-5xl md:text-7xl font-light">
              Proyectos destacados
            </h2>

            <div className="hidden md:block text-zinc-500 uppercase tracking-[0.3em] text-sm">
              Selección premium
            </div>

          </div>

          <div className="grid gap-10 md:grid-cols-2">

            {/* PROYECTO 1 */}
            <div className="group overflow-hidden rounded-[40px] bg-zinc-900">

              <div className="overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop"
                  className="h-[700px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-10">

                <div className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
                  Carrozas Temáticas
                </div>

                <h3 className="mb-6 text-4xl font-light">
                  Escenografía visual a gran escala
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  Construcciones artesanales desarrolladas para transformar
                  espacios, eventos y recorridos en experiencias visuales únicas.
                </p>

              </div>

            </div>

            {/* PROYECTO 2 */}
            <div className="group overflow-hidden rounded-[40px] bg-zinc-900">

              <div className="overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
                  className="h-[700px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-10">

                <div className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
                  Tematización de Espacios
                </div>

                <h3 className="mb-6 text-4xl font-light">
                  Diseñamos atmósferas inmersivas
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  Materiales, volumen, iluminación y composición visual para
                  crear experiencias memorables y completamente personalizadas.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}