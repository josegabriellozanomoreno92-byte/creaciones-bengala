"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
  const [active, setActive] = useState(4);

  return (
    <main className="relative h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-[-25vh] h-[70vw] w-[70vw] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="absolute bottom-[-10vh] left-[-5vw] h-[30vw] w-[30vw] rounded-full bg-red-500/10 blur-3xl" />

      </div>

      {/* NAVBAR */}
      <header className="absolute top-0 z-50 w-full px-[3vw] py-[2vh]">

        <div className="mx-auto flex max-w-[1800px] items-center justify-between">

          <div className="text-[0.65rem] uppercase tracking-[0.45em] text-zinc-500">
            Creaciones Bengala
          </div>

          <nav className="hidden md:flex gap-10 text-[0.65rem] uppercase tracking-[0.35em] text-zinc-400">

            <button className="transition hover:text-white">
              Proyectos
            </button>

            <button className="transition hover:text-white">
              Quiénes somos
            </button>

            <button className="transition hover:text-white">
              Contacto
            </button>

          </nav>

        </div>

      </header>

      {/* MAIN */}
      <section className="relative z-10 flex h-full flex-col px-[3vw] pt-[9vh] pb-[3vh]">

        <div className="mx-auto flex h-full w-full max-w-[1800px] flex-col">

          {/* HERO */}
          <div className="flex flex-col items-center">

            {/* LOGO */}
            <motion.img
              src="/logo.png"
              alt="Creaciones Bengala"
              className="w-[clamp(380px,34vw,760px)] object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />

            {/* SLOGAN */}
            <motion.h1
              className="mt-[1vh] max-w-[900px] text-center text-[clamp(1.2rem,2vw,2.8rem)] font-light leading-[1.15] text-white/90"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Convertimos tus ideas en experiencias reales.
            </motion.h1>

          </div>

          {/* CONTENT */}
          <div className="mt-[4vh] flex flex-1 gap-[2vw] overflow-hidden">

            {/* BOTONES */}
            <div className="flex w-[260px] min-w-[260px] flex-col justify-center gap-4">

              {[
                "Explorar proyectos",
                "Quiénes somos",
                "Cuéntanos tu proyecto",
              ].map((item) => (

                <button
                  key={item}
                  className="group relative overflow-hidden border border-white/15 bg-white/[0.02] px-8 py-5 text-left uppercase tracking-[0.28em] text-[0.68rem] backdrop-blur-sm transition-all duration-500 hover:border-white/40"
                >

                  <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                    {item}
                  </span>

                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

                </button>

              ))}

              {/* REDES */}
              <div className="mt-4 flex gap-5 text-[0.7rem] uppercase tracking-[0.3em] text-zinc-500">

                <button className="transition hover:text-white">
                  Instagram
                </button>

                <button className="transition hover:text-white">
                  WhatsApp
                </button>

              </div>

            </div>

            {/* GALERÍA */}
            <div className="flex flex-1 flex-col overflow-hidden">

              <div className="mb-[1.5vh] text-[0.65rem] uppercase tracking-[0.45em] text-zinc-500">
                Proyectos destacados
              </div>

              <div className="flex flex-1 gap-4 overflow-hidden">

                {projects.map((project, index) => {

                  const isActive = active === index;

                  return (

                    <motion.div
                      key={index}
                      onMouseEnter={() => setActive(index)}
                      animate={{
                        width: isActive ? "46%" : "13.5%",
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                      className="group relative h-full cursor-pointer overflow-hidden rounded-[2rem] bg-zinc-900"
                    >

                      {/* IMAGE */}
                      <img
                        src={project.image}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      {/* CONTENT */}
                      <div
                        className={`absolute bottom-0 left-0 w-full p-[2vw] transition-all duration-500 ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >

                        <div className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-orange-400">
                          {project.category}
                        </div>

                        <h3 className="max-w-[420px] text-[clamp(1.3rem,2vw,3rem)] font-light leading-tight">
                          {project.title}
                        </h3>

                      </div>

                    </motion.div>

                  );

                })}

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}