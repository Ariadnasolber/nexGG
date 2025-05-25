import React from "react";

export default function LeagueOfLegends() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Imagen de fondo (puedes cambiar por vídeo si tienes uno) */}
      <img
        src="https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt255b4d1f3dff88b2/63f6cf61e9f54a0ff63b10e7/lol-default.png"
        alt="League of Legends"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black opacity-75 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <img src="/public/lol-logo.png" alt="LoL Logo" className="w-32 mb-6" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#D4AF37] uppercase tracking-wider mb-4">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-xl mb-8">
          League of Legends estará disponible próximamente en NEX.GG.
        </p>
        <button
          type="button"
          className="px-6 py-3 bg-[#D4AF37] hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition"
        >
          Notificarme
        </button>
      </div>
    </div>
  );
}
