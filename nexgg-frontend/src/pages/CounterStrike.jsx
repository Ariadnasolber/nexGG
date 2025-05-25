import React from "react";

export default function CounterStrike() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Vídeo de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/Video%20Wallpapers/livewallpaper%202.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9WaWRlbyBXYWxscGFwZXJzL2xpdmV3YWxscGFwZXIgMi5tcDQiLCJpYXQiOjE3NDc5MzI2ODksImV4cCI6MTc3OTQ2ODY4OX0.Zs8_3utCX_rhNUyumFNZCfIeoM-BbxGkJGiCjpf6Eik"
          type="video/mp4"
        />
        Tu navegador no soporta vídeos HTML5.
      </video>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black opacity-75 z-10" />

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <img
          src="https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/Logos/logo%20countyer%20white.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9Mb2dvcy9sb2dvIGNvdW50eWVyIHdoaXRlLnBuZyIsImlhdCI6MTc0NzkzMjk2NiwiZXhwIjoxNzc5NDY4OTY2fQ.odnFwmUpsA7nJBIfE__rXpnPEig6N_fG5EbInzB0vHw"
          alt="CS Logo"
          className="w-32 mb-6"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFD700] uppercase tracking-wider mb-4">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-xl mb-8">
          CS:GO estará disponible con estadísticas, mapas y builds próximamente.
        </p>
        <button
          type="button"
          className="px-6 py-3 bg-[#FFD700] hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-lg transition"
        >
          Notificarme
        </button>
      </div>
    </div>
  );
}
