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

      {/* GLOW */}
      <div className="absolute top-[-20vh] left-1/2 h-[65vw] w-[65vw] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="absolute bottom-[-15vh] left-0 h-[30vw] w-[30vw] bg-red-500/10 blur-3xl" />

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full px-[4vw] py-[2vh]">

        <div className="mx-auto flex max-w-[1700px] items-center justify-between">

          <div className="text-[0.65rem] uppercase tracking-[0.45em] text-zinc-500">
            Creaciones Bengala
          </div>

          <nav className="hidden md:flex gap-10 text-[0.65rem] uppercase tracking-[0.35em] text-zinc-400">

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

      {/* CONTENIDO */}
      <section className="relative z-10 flex h-full flex-col items-center justify-center px-[4vw] pt-[6vh]">

        <div className="mx-auto flex w-full max-w-[1700px] flex-col items-center">

          {/* LOGO */}
          <motion.img
            src="/logo.png"
            alt="Creaciones Bengala"
            className="mb-[1vh] w-[clamp(420px,38vw,760px)]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          {/* SLOGAN */}
          <motion.h1
            className="max-w-[1200px] text-center text-[clamp(1.2rem,2vw,2.4rem)] font-light leading-[1.15]"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Convertimos tus ideas en experiencias reales.
          </motion.h1>

          {/* BOTONES */}
          <motion.div
            className="mt-[2.5vh] flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >

            {[
              "Explorar proyectos",
              "Quiénes somos",
              "Cuéntanos tu proyecto",
            ].map((item) => (

              <button
                key={item}
                className="group relative overflow-hidden border border-white/20 px-10 py-4 uppercase tracking-[0.3em] text-[0.65rem]"
              >

                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                  {item}
                </span>

                <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

              </button>

            ))}

          </motion.div>

          {/* TITULO */}
          <div className="mt-[4vh] mb-[2vh] text-[0.7rem] uppercase tracking-[0.45em] text-zinc-500">
            Proyectos destacados
          </div>

          {/* GALERÍA */}
          <div className="flex h-[clamp(360px,50vh,620px)] w-full gap-4 overflow-hidden">

            {projects.map((project, index) => {

              const isActive = active === index;

              return (

                <motion.div
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  animate={{
                    width: isActive ? "44%" : "14%",
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="group relative h-full cursor-pointer overflow-hidden rounded-[2.2rem] bg-zinc-900"
                >

                  {/* IMAGEN */}
                  <img
                    src={project.image}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* TEXTO */}
                  <div
                    className={`absolute bottom-0 p-[2vw] transition-all duration-500 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
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

          {/* REDES */}
          <div className="mt-[3vh] flex items-center gap-8 text-zinc-500">

            <button className="hover:text-white transition-colors duration-500 text-sm tracking-[0.3em] uppercase">
              Instagram
            </button>

            <button className="hover:text-white transition-colors duration-500 text-sm tracking-[0.3em] uppercase">
              Facebook
            </button>

            <button className="hover:text-white transition-colors duration-500 text-sm tracking-[0.3em] uppercase">
              WhatsApp
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}