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
  const [active, setActive] = useState(2);

  return (
    <main className="relative h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* CENTRAL LIGHT */}
        <div className="absolute left-1/2 top-[-25vh] h-[55vw] w-[55vw] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        {/* TOP LIGHT */}
        <div className="absolute left-1/2 top-[0vh] h-[22vw] w-[22vw] -translate-x-1/2 rounded-full bg-orange-400/10 blur-3xl" />

        {/* LOWER DEPTH */}
        <div className="absolute bottom-[-25vh] left-[-10vw] h-[30vw] w-[30vw] rounded-full bg-red-500/5 blur-3xl" />

        {/* VIGNETTE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,black_90%)]" />

      </div>

      {/* NAV */}
      <header className="absolute top-0 z-50 w-full px-[5vw] py-[2.2vh]">

        <div className="mx-auto flex max-w-[1450px] items-center justify-between">

          <div className="text-[0.68rem] uppercase tracking-[0.45em] text-zinc-500">
            Creaciones Bengala
          </div>

          <nav className="hidden md:flex gap-12 text-[0.68rem] uppercase tracking-[0.35em] text-zinc-400">

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
      <section className="relative z-10 flex h-full flex-col px-[5vw] pt-[10vh] pb-[4vh]">

        <div className="mx-auto flex h-full w-full max-w-[1450px] flex-col">

          {/* HERO */}
          <div className="flex flex-col items-center">

            {/* LOGO */}
            <motion.img
              src="/logo.png"
              alt="Creaciones Bengala"
              className="w-[clamp(280px,26vw,520px)] object-contain"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />

            {/* SLOGAN */}
            <motion.h1
              className="mt-[1vh] max-w-[780px] text-center text-[clamp(1.5rem,2.4vw,3.4rem)] font-light leading-[1.02] text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Construimos aquello que todavía no existe.
            </motion.h1>

          </div>

          {/* CONTENT */}
          <div className="mt-[4vh] flex flex-1 gap-[2vw] overflow-hidden">

            {/* LEFT PANEL */}
            <div className="flex w-[220px] min-w-[220px] flex-col justify-end pb-[2vh]">

              <div className="flex flex-col gap-3">

                <button className="group relative overflow-hidden border border-white/10 bg-white/[0.02] px-7 py-5 text-left uppercase tracking-[0.28em] text-[0.68rem] backdrop-blur-sm transition-all duration-500 hover:border-white/30">

                  <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                    Explorar proyectos
                  </span>

                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

                </button>

                <button className="group relative overflow-hidden border border-white/10 bg-white/[0.02] px-7 py-5 text-left uppercase tracking-[0.28em] text-[0.68rem] backdrop-blur-sm transition-all duration-500 hover:border-white/30">

                  <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                    Quiénes somos
                  </span>

                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

                </button>

                <button className="group relative overflow-hidden border border-orange-500/20 bg-orange-500/90 px-7 py-5 text-left uppercase tracking-[0.28em] text-[0.68rem] text-black shadow-[0_0_40px_rgba(255,115,0,0.18)] transition-all duration-500 hover:bg-orange-400">

                  <span className="relative z-10">
                    Cuéntanos tu proyecto
                  </span>

                </button>

              </div>

              {/* SOCIAL */}
              <div className="mt-8 flex gap-5 text-[0.7rem] uppercase tracking-[0.28em] text-zinc-600">

                <button className="transition hover:text-white">
                  Instagram
                </button>

                <button className="transition hover:text-white">
                  WhatsApp
                </button>

              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-1 flex-col overflow-hidden">

              <div className="mb-[1.5vh] pl-1 text-[0.68rem] uppercase tracking-[0.45em] text-zinc-500">
                Proyectos destacados
              </div>

              {/* CAROUSEL */}
              <div className="flex h-full gap-4 overflow-hidden">

                {projects.map((project, index) => {

                  const isActive = active === index;

                  return (

                    <motion.div
                      key={index}
                      onMouseEnter={() => setActive(index)}
                      animate={{
                        width: isActive ? "52%" : "12%",
                      }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                      }}
                      className="group relative h-full cursor-pointer overflow-hidden rounded-[2.2rem] bg-zinc-900"
                    >

                      {/* IMAGE */}
                      <img
                        src={project.image}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />

                      {/* DARK OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      {/* HOVER LIGHT */}
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                        <div className="absolute bottom-0 h-[45%] w-full bg-orange-500/10 blur-3xl" />

                      </div>

                      {/* CONTENT */}
                      <div
                        className={`absolute bottom-0 left-0 w-full p-[2vw] transition-all duration-500 ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >

                        <div className="mb-3 text-[0.68rem] uppercase tracking-[0.3em] text-orange-400">
                          {project.category}
                        </div>

                        <h3 className="max-w-[420px] text-[clamp(1.5rem,2vw,3rem)] font-light leading-[1.02]">
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