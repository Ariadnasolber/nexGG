import React from "react";

export default function ApexLegends() {
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
          src="https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/Video%20Wallpapers/ApexLiveWallpaper.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9WaWRlbyBXYWxscGFwZXJzL0FwZXhMaXZlV2FsbHBhcGVyLm1wNCIsImlhdCI6MTc0NzkzMTc5MCwiZXhwIjoxNzc5NDY3NzkwfQ.Kj0UrQhqtsFyzTrBWkqLk4YOxmPEkcZ401SBkYrYZIA"
          type="video/mp4"
        />
        Tu navegador no soporta vídeos HTML5.
      </video>

      {/* Capa oscura encima del vídeo */}
      <div className="absolute inset-0 bg-black opacity-75 z-10" />

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <img src="https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/Logos/logoapexblanco.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9Mb2dvcy9sb2dvYXBleGJsYW5jby5wbmciLCJpYXQiOjE3NDc5MzIwMDgsImV4cCI6MTc3OTQ2ODAwOH0.b_lS9z592xrWUzmZuPjC72yF8lwzAj42uevyo-f8tdE" alt="Apex Logo" className="w-32 mb-6" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFF] uppercase tracking-wider mb-4">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
          Próximamente podrás acceder a estadísticas y builds de Apex Legends.
        </p>
        <button
          type="button"
          className="px-6 py-3 bg-[#E43F5A] hover:bg-[#c6344a] text-white font-semibold rounded-lg shadow-lg transition"
        >
          Notificarme
        </button>
      </div>
    </div>
  );
}
