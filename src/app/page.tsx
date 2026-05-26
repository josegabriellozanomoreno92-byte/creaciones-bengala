export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        
        <img
          src="/logo.png"
          alt="Creaciones Bengala"
          className="w-80 mx-auto mb-8"
        />

        <h1 className="text-5xl font-bold tracking-wide mb-4">
          Creaciones Bengala
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Diseño artesanal de piezas únicas con carácter, precisión y alma.
        </p>

      </div>
    </main>
  );
}