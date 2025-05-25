// pages/ValorantComingSoon.jsx
import React from "react";

export default function ValorantComingSoon() {
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
          src="https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/valorant-assets/animated/valo_animated-bg.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy92YWxvcmFudC1hc3NldHMvYW5pbWF0ZWQvdmFsb19hbmltYXRlZC1iZy5tcDQiLCJpYXQiOjE3NDc5Mjg5NTEsImV4cCI6MTc3OTQ2NDk1MX0.wi8ym2u4_NeqJCRHVIXjhkd-CWi70XzIk_ncsBfI7Hw"
          type="video/mp4"
        />
        Tu navegador no soporta vídeos HTML5.
      </video>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black opacity-75 z-10" />

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <img
          src="/public/valorant-logo.svg"
          alt="Valorant Logo"
          className="w-32 mb-6"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFF] uppercase tracking-wider mb-4">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
          Preparados para entrar en acción. Valorant llegará muy pronto. ¡Mantente alerta!
        </p>
        <button
          type="button"
          className="px-6 py-3 bg-[#FF4655] hover:bg-[#E03D4A] text-white font-semibold rounded-lg shadow-lg transition"
        >
          Notificarme
        </button>
      </div>
    </div>
  );
}
