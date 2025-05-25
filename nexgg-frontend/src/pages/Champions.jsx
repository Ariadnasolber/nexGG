import React, { useState, useEffect } from "react";
import ChampionGrid from "../ui/ChampionGrid";
import { getChampions } from "../services/api";

export default function Champions() {
    const [champions, setChampions] = useState([]);

    useEffect(() => {
        getChampions()
            .then((data) => {
                const normalized = data.map((champ) => ({
                    ...champ,
                    roles: champ.role || [],
                    positions: champ.position || [],
                    splash: champ.splash_url,
                    icon: champ.icon_url,

                    winRate: champ.win_rate != null ? champ.win_rate.toFixed(1) : "0.0",
                    pickRate: champ.pick_rate != null ? champ.pick_rate.toFixed(1) : "0.0",
                    banRate: champ.ban_rate != null ? champ.ban_rate.toFixed(1) : "0.0",
                }));
                setChampions(normalized);
            })
            .catch((err) => console.error("Error fetching champions:", err));
    }, []);

    return (
        <div className="min-h-screen bg-[#0F0F12] text-white">
            {/* Cabecera con imagen de fondo */}
            <div
                className="relative h-200 bg-cover bg-no-repeat bg-[center_0%] flex items-center justify-center flex-col text-center"
                style={{
                    backgroundImage: `url('https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/MissFortune/bg-missfortune.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9NaXNzRm9ydHVuZS9iZy1taXNzZm9ydHVuZS5qcGVnIiwiaWF0IjoxNzQ3ODQyNTM2LCJleHAiOjE3NzkzNzg1MzZ9.ZrLCYHMrmZ5lHTS5-6cune0XhTJoCINZt5sDrYG3Adk')`,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 px-4 py-2 flex justify-center items-center flex-col">
                    <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
                        Champions
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                        View all League of Legends champions, their stats, and performance data.
                    </p>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="p-6">
                <ChampionGrid champions={champions} />
            </div>
        </div>
    );
}
