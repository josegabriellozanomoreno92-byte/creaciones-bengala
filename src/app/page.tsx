"use client";

import { motion } from "framer-motion";

const projects = [
  {
    category: "Carrozas Temáticas",
    title: "Escenografía visual a gran escala",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop",
  },
  {
    category: "Tematización de Espacios",
    title: "Creamos atmósferas inmersivas",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
  },
  {
    category: "Experiencias para Eventos",
    title: "Diseñamos experiencias memorables",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
  },
  {
    category: "Figuras Artísticas a Medida",
    title: "Volumen, detalle y artesanía",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* GLOW */}
      <div className="absolute top-[-250px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full px-8 py-6">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <div className="text-xs uppercase tracking-[0.4em] text-zinc-500">
            Creaciones Bengala
          </div>

          <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.3em] text-zinc-400">

            <button className="hover:text-white transition-colors duration-500">
              Proyectos
            </button>

            <button className="hover:text-white transition-colors duration-500">
              Quiénes somos
            </button>

            <button className="hover:text-white transition-colors duration-500">
              Contacto
            </button>

          </nav>

        </div>

      </header>

      {/* HERO + PROYECTOS */}
      <section className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-32 pb-16">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[420px_1fr] items-center">

          {/* IZQUIERDA */}
          <div>

            <motion.img
              src="/logo.png"
              alt="Creaciones Bengala"
              className="w-72 mb-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            />

            <motion.h1
              className="text-4xl md:text-5xl font-light leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Convertimos tus ideas en experiencias reales.
            </motion.h1>

            {/* BOTONES */}
            <motion.div
              className="mt-12 flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >

              <button className="group relative overflow-hidden border border-white/20 px-8 py-4 uppercase tracking-[0.3em] text-xs text-left">

                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                  Explorar proyectos
                </span>

                <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

              </button>

              <button className="group relative overflow-hidden border border-white/20 px-8 py-4 uppercase tracking-[0.3em] text-xs text-left">

                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                  Quiénes somos
                </span>

                <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

              </button>

              <button className="group relative overflow-hidden border border-white/20 px-8 py-4 uppercase tracking-[0.3em] text-xs text-left">

                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                  Cuéntanos tu proyecto
                </span>

                <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

              </button>

            </motion.div>

          </div>

          {/* DERECHA */}
          <div>

            <div className="mb-6 text-xs uppercase tracking-[0.4em] text-zinc-500">
              Selección de proyectos
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

              {projects.map((project, index) => (

                <motion.div
                  key={index}
                  className="group relative min-w-[340px] overflow-hidden rounded-[32px] bg-zinc-900"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >

                  <div className="overflow-hidden">

                    <img
                      src={project.image}
                      className="h-[520px] w-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-0 p-8">

                    <div className="mb-3 text-xs uppercase tracking-[0.3em] text-orange-400">
                      {project.category}
                    </div>

                    <h3 className="max-w-[260px] text-3xl font-light leading-tight">
                      {project.title}
                    </h3>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}