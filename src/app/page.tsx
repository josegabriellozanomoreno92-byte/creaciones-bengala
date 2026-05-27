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
          className="text-5xl md:text-7xl font-bold tracking-wide mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Creaciones Bengala
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          Diseño artesanal de piezas únicas con una estética premium,
          cinematográfica y contemporánea.
        </motion.p>

      </div>
    </main>
  );
}