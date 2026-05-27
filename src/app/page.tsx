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

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* MAIN SOFT GLOW */}
        <div className="absolute left-1/2 top-[-35vh] h-[70vw] w-[70vw] -translate-x-1/2 rounded-full bg-orange-500/12 blur-3xl" />

        {/* TOP FOCUS */}
        <div className="absolute left-1/2 top-[5vh] h-[28vw] w-[28vw] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        {/* BOTTOM DEPTH */}
        <div className="absolute bottom-[-20vh] left-[-10vw] h-[35vw] w-[35vw] rounded-full bg-red-500/8 blur-3xl" />

        {/* DARK VIGNETTE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,black_90%)]" />

      </div>

      {/* NAVBAR */}
      <header className="absolute top-0 z-50 w-full px-[4vw] py-[2.2vh]">

        <div className="mx-auto flex max-w-[1600px] items-center justify-between">

          <div className="text-[0.7rem] uppercase tracking-[0.45em] text-zinc-500">
            Creaciones Bengala
          </div>

          <nav className="hidden md:flex gap-12 text-[0.7rem] uppercase tracking-[0.35em] text-zinc-400">

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
      <section className="relative z-10 flex h-full flex-col px-[4vw] pt-[11vh] pb-[4vh]">

        <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col">

          {/* HERO */}
          <div className="flex flex-col items-center">

            {/* LOGO */}
            <motion.img
              src="/logo.png"
              alt="Creaciones Bengala"
              className="w-[clamp(380px,34vw,760px)] object-contain"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />

            {/* SLOGAN */}
            <motion.h1
              className="mt-[1vh] max-w-[1000px] text-center text-[clamp(1.8rem,3vw,5rem)] font-light leading-[1.02] text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Construimos aquello que todavía no existe.
            </motion.h1>

          </div>

          {/* CONTENT */}
          <div className="mt-[4vh] flex flex-1 gap-[2.2vw] overflow-hidden">

            {/* SIDEBAR */}
            <div className="flex w-[250px] min-w-[250px] flex-col justify-center">

              {/* BUTTONS */}
              <div className="flex flex-col gap-4">

                <button className="group relative overflow-hidden border border-white/15 bg-white/[0.02] px-8 py-5 text-left uppercase tracking-[0.28em] text-[0.68rem] backdrop-blur-sm transition-all duration-500 hover:border-white/40">

                  <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                    Explorar proyectos
                  </span>

                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

                </button>

                <button className="group relative overflow-hidden rounded-full border border-orange-500/30 bg-orange-500/5 px-8 py-5 text-left uppercase tracking-[0.28em] text-[0.68rem] backdrop-blur-sm transition-all duration-500 hover:border-orange-400">

                  <span className="relative z-10">
                    Quiénes somos
                  </span>

                </button>

                <button className="group relative overflow-hidden bg-orange-500 px-8 py-5 text-left uppercase tracking-[0.28em] text-[0.68rem] text-black shadow-[0_0_40px_rgba(255,115,0,0.25)] transition-all duration-500 hover:bg-orange-400">

                  <span className="relative z-10">
                    Cuéntanos tu proyecto
                  </span>

                </button>

              </div>

              {/* SOCIAL */}
              <div className="mt-8 flex gap-6 text-[0.7rem] uppercase tracking-[0.28em] text-zinc-500">

                <button className="transition hover:text-white">
                  Instagram
                </button>

                <button className="transition hover:text-white">
                  WhatsApp
                </button>

              </div>

            </div>

            {/* GALLERY */}
            <div className="flex flex-1 flex-col overflow-hidden">

              <div className="mb-[1.8vh] text-[0.68rem] uppercase tracking-[0.45em] text-zinc-500">
                Proyectos destacados
              </div>

              <div className="flex h-full gap-4 overflow-hidden">

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
                      className="group relative h-full cursor-pointer overflow-hidden rounded-[2.2rem] bg-zinc-900"
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

                        <div className="mb-3 text-[0.7rem] uppercase tracking-[0.3em] text-orange-400">
                          {project.category}
                        </div>

                        <h3 className="max-w-[420px] text-[clamp(1.4rem,2vw,3rem)] font-light leading-tight">
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