"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

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

      {/* GLOW */}
      <div className="absolute top-[-20vh] left-1/2 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="absolute bottom-[-10vh] left-0 h-[30vw] w-[30vw] bg-red-500/10 blur-3xl" />

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full px-[4vw] py-[2vh]">

        <div className="mx-auto flex max-w-[1600px] items-center justify-between">

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
      <section className="relative z-10 flex h-full flex-col justify-center px-[4vw] pt-[12vh] pb-[6vh]">

        <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col items-center justify-between">

          {/* PARTE SUPERIOR */}
          <div className="flex flex-col items-center">

            {/* LOGO */}
            <motion.img
              src="/logo.png"
              alt="Creaciones Bengala"
              className="mb-[3vh] w-[clamp(240px,26vw,420px)]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />

            {/* SLOGAN */}
            <motion.h1
              className="max-w-[1100px] text-center text-[clamp(2rem,4vw,5rem)] font-light leading-[1.05]"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Convertimos tus ideas en experiencias reales.
            </motion.h1>

            {/* BOTONES */}
            <motion.div
              className="mt-[4vh] flex flex-wrap items-center justify-center gap-4"
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
                  className="group relative overflow-hidden border border-white/20 px-8 py-4 uppercase tracking-[0.3em] text-[0.65rem]"
                >

                  <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                    {item}
                  </span>

                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

                </button>

              ))}

            </motion.div>

          </div>

          {/* GALERÍA */}
          <div className="w-full">

            <div className="mb-[2vh] text-[0.65rem] uppercase tracking-[0.45em] text-zinc-500">
              Proyectos destacados
            </div>

            <div className="flex h-[clamp(260px,38vh,420px)] w-full gap-4 overflow-hidden">

              {projects.map((project, index) => {

                const isActive = active === index;

                return (

                  <motion.div
                    key={index}
                    onMouseEnter={() => setActive(index)}
                    animate={{
                      width: isActive ? "42%" : "14%",
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="group relative h-full cursor-pointer overflow-hidden rounded-[2rem] bg-zinc-900"
                  >

                    {/* IMAGEN */}
                    <img
                      src={project.image}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {/* GLOW */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                      <div className="absolute bottom-0 h-1/2 w-full bg-orange-500/20 blur-3xl" />

                    </div>

                    {/* TEXTO */}
                    <div
                      className={`absolute bottom-0 p-[2vw] transition-all duration-500 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }`}
                    >

                      <div className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-orange-400">
                        {project.category}
                      </div>

                      <h3 className="max-w-[320px] text-[clamp(1.3rem,2vw,2.8rem)] font-light leading-tight">
                        {project.title}
                      </h3>

                    </div>

                  </motion.div>

                );

              })}

            </div>

          </div>

          {/* REDES SOCIALES */}
          <div className="mt-[3vh] flex w-full items-center justify-end gap-5 text-zinc-500">

            <button className="hover:text-white transition-colors duration-500">
              <Instagram size={18} />
            </button>

            <button className="hover:text-white transition-colors duration-500">
              <Facebook size={18} />
            </button>

            <button className="hover:text-white transition-colors duration-500">
              <MessageCircle size={18} />
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}