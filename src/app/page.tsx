"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Luz ambiental superior */}
      <div className="absolute top-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

      {/* Luz lateral */}
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-red-500/10 blur-3xl" />

      {/* Contenido principal */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <motion.img
          src="/logo.png"
          alt="Creaciones Bengala"
          className="w-80 md:w-[450px] mb-10"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.h1
          className="text-6xl md:text-8xl font-light tracking-wide mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Creaciones Bengala
        </motion.h1>

        <motion.button
          className="mt-10 border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          Explorar proyectos
        </motion.button>

        <motion.p
          className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          Diseño artesanal de piezas únicas con una estética premium,
          cinematográfica y contemporánea.
        </motion.p>

        <motion.button
          className="mt-10 border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          Explorar proyectos
        </motion.button>

      </div>
    <section className="relative z-10 px-6 py-40">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl md:text-7xl font-light mb-20">
          Proyectos Destacados
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="overflow-hidden rounded-3xl bg-zinc-900">
            <img
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop"
              className="h-[500px] w-full object-cover hover:scale-105 transition-transform duration-700"
            />

            <div className="p-8">
              <h3 className="text-3xl mb-4">Proyecto Artesanal 01</h3>

              <p className="text-zinc-400 leading-relaxed">
                Diseño y fabricación de piezas únicas con acabados premium
                y una dirección artística contemporánea.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-zinc-900">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
              className="h-[500px] w-full object-cover hover:scale-105 transition-transform duration-700"
            />

            <div className="p-8">
              <h3 className="text-3xl mb-4">Proyecto Artesanal 02</h3>

              <p className="text-zinc-400 leading-relaxed">
                Procesos artesanales desarrollados con precisión,
                materiales nobles y estética cinematográfica.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
    </main>
  );
}