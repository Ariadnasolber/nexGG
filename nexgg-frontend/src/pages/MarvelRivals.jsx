import React from "react";

export default function MarvelRivals() {
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
          src="https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/Video%20Wallpapers/livewallpaper.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9WaWRlbyBXYWxscGFwZXJzL2xpdmV3YWxscGFwZXIubXA0IiwiaWF0IjoxNzQ3OTMyNjAwLCJleHAiOjE3Nzk0Njg2MDB9.6qQz5g3FhZQj0-_8qRXhH4GzHOebWEwjy1byWjxq68c"
          type="video/mp4"
        />
        Tu navegador no soporta vídeos HTML5.
      </video>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black opacity-75 z-10" />

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <img
          src="https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/Logos/logomarvelrivalsblanco.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9Mb2dvcy9sb2dvbWFydmVscml2YWxzYmxhbmNvLnBuZyIsImlhdCI6MTc0NzkzMjMzMywiZXhwIjoxNzc5NDY4MzMzfQ.YVF-AxP2IhgKh8j8WxRRX6gjyEk_RvHIHj3T5KUPNBE"
          alt="Marvel Logo"
          className="w-32 mb-6"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#FF4747] uppercase tracking-wider mb-4">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
          Prepárate para la llegada de Marvel Rivals en NEX.GG.
        </p>
        <button
          type="button"
          className="px-6 py-3 bg-[#FF4747] hover:bg-[#d43c3c] text-white font-semibold rounded-lg shadow-lg transition"
        >
          Notificarme
        </button>
      </div>
    </div>
  );
}
