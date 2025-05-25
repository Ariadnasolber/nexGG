import React from "react";

export default function Overwatch() {
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
          src="https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/Video%20Wallpapers/Overwatch-Wallpaper-video.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9WaWRlbyBXYWxscGFwZXJzL092ZXJ3YXRjaC1XYWxscGFwZXItdmlkZW8ubXA0IiwiaWF0IjoxNzQ3OTMxMzY3LCJleHAiOjE3Nzk0NjczNjd9.CIwSixvZFohpkwv46XoOXQFSsoyaHno5Wmauj4hWvaI"
          type="video/mp4"
        />
        Tu navegador no soporta vídeos HTML5.
      </video>

      {/* Capa oscura encima del vídeo */}
      <div className="absolute inset-0 bg-black opacity-75 z-10" />

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <img
          src="https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/Logos/Overwatch_2_logo.svg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9Mb2dvcy9PdmVyd2F0Y2hfMl9sb2dvLnN2Zy5wbmciLCJpYXQiOjE3NDc5MzA4MjksImV4cCI6MTc3OTQ2NjgyOX0.Jq7Xcx3uC8ZXyzyGmqNoejH94f7yCV-MvqL6aXvEb6c"
          alt="Overwatch Logo"
          className="w-32 mb-6"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-orange-400 uppercase tracking-wider mb-4">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-xl mb-8">
          Estamos preparando contenido especial para Overwatch. ¡Muy pronto!
        </p>
        <button
          type="button"
          className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-lg transition"
        >
          Notificarme
        </button>
      </div>
    </div>
  );
}
