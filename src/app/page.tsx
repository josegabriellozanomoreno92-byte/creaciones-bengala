"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

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
  {
    category: "Rotulación",
    title: "Identidad visual con presencia",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Home() {

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const container = scrollRef.current;

    if (!container) return;

    const handleWheel = (e: WheelEvent) => {

      e.preventDefault();

      container.scrollLeft += e.deltaY;

    };

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };

  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* GLOW */}
      <div className="absolute top-[-300px] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-red-500/10 blur-3xl" />

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full px-8 py-6 backdrop-blur-md">

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

      {/* HERO */}
      <section className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-32 pb-20">

        <div className="mx-auto max-w-7xl w-full">

          {/* LOGO + SLOGAN */}
          <div className="mb-20 text-center">

            <motion.img
              src="/logo.png"
              alt="Creaciones Bengala"
              className="mx-auto w-80 md:w-[520px] mb-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            />

            <motion.h1
              className="mx-auto max-w-4xl text-4xl md:text-6xl font-light leading-[1.05]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Convertimos tus ideas en experiencias reales.
            </motion.h1>

          </div>

          {/* CONTENIDO */}
          <div className="grid gap-10 lg:grid-cols-[260px_1fr] items-start">

            {/* BOTONES */}
            <motion.div
              className="flex flex-col gap-4"
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

            {/* GALERÍA */}
            <div>

              <div className="mb-8 text-xs uppercase tracking-[0.4em] text-zinc-500">
                Proyectos destacados
              </div>

              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-8"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >

                {projects.map((project, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.12,
                      y: -16,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="group relative min-w-[360px] overflow-hidden rounded-[42px] bg-zinc-900"
                  >

                    {/* IMAGEN */}
                    <div className="overflow-hidden">

                      <img
                        src={project.image}
                        className="h-[640px] w-[360px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                    </div>

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* GLOW */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                      <div className="absolute bottom-0 h-1/2 w-full bg-orange-500/20 blur-3xl" />

                    </div>

                    {/* TEXTO */}
                    <div className="absolute bottom-0 p-8">

                      <div className="mb-3 text-xs uppercase tracking-[0.3em] text-orange-400">
                        {project.category}
                      </div>

                      <h3 className="max-w-[280px] text-3xl font-light leading-tight">
                        {project.title}
                      </h3>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* OCULTAR SCROLLBAR */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>

    </main>
  );
}