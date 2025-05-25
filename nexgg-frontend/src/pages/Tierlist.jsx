// src/pages/TierList.jsx
import React, { useState, useEffect, useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getChampions } from "../services/api";

// Utility para concatenar clases
const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function TierList() {
  const [champions, setChampions] = useState([]);

  // 1) Carga campeones (usa splash_url ahora)
  useEffect(() => {
    getChampions()
      .then((data) => {
        setChampions(
          data.map((c) => ({
            id:       c.id,
            name:     c.name,
            splash:   c.splash_url,           // ← splash en lugar de icon
            winRate:  parseFloat(c.win_rate),
            pickRate: parseFloat(c.pick_rate),
          }))
        );
      })
      .catch(console.error);
  }, []);

  // 2) Dividir en tiers
  const tiers = useMemo(() => {
    const S = champions.filter((c) => c.winRate > 52);
    const A = champions.filter((c) => c.winRate > 50 && c.winRate <= 52);
    const B = champions.filter((c) => c.winRate > 48 && c.winRate <= 50);
    const C = champions.filter((c) => c.winRate <= 48);
    return [
      { name: "S", label: "Overpowered", color: "bg-zinc-600", list: S },
      { name: "A", label: "Strong",       color: "bg-zinc-500", list: A },
      { name: "B", label: "Balanced",     color: "bg-zinc-400", list: B },
      { name: "C", label: "Weak",         color: "bg-zinc-300", list: C },
    ];
  }, [champions]);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* HERO */}
      <div
        className="relative h-150 bg-cover bg-no-repeat bg-[center_0%] flex items-center justify-center flex-col text-center"
        style={{
          backgroundImage: `url('https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Yasuo/truth-dragon-yasuo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9ZYXN1by90cnV0aC1kcmFnb24teWFzdW8uanBnIiwiaWF0IjoxNzQ4MjA5NjQ4LCJleHAiOjE3Nzk3NDU2NDh9.NmahXB92xevWuqOBAwfUW2H1c8C15esDY0Uh14mZBP8')`
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-4 py-2">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
            LoL TierList
          </h1>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            See the rating of all champions based on their win rate and pick rate.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {tiers.map(({ name, label, color, list }) => (
          <TierRow
            key={name}
            tier={name}
            label={label}
            color={color}
            champions={list}
          />
        ))}
      </div>
    </div>
  );
}

function TierRow({ tier, label, color, champions }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-zinc-800 rounded-md overflow-hidden">
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-zinc-700 transition"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-10 h-10 flex items-center justify-center text-lg font-bold text-zinc-100 rounded",
              color
            )}
          >
            {tier}
          </div>
          <span className="font-medium">
            {champions.length} Champion
            {champions.length !== 1 && "s"} – {label}
          </span>
        </div>
        {open ? <ChevronUp /> : <ChevronDown />}
      </div>

      {open && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 p-4 bg-zinc-700">
          {champions.map((c) => (
            <ChampionCard key={c.id} champion={c} />
          ))}
        </div>
      )}
    </div>
  );
}

function ChampionCard({ champion }) {
  return (
    <div className="bg-zinc-800 rounded-md overflow-hidden text-center group hover:shadow-lg transition-transform hover:-translate-y-1">
      <div className="h-24 flex items-center justify-center bg-zinc-900">
        <img
          src={champion.splash}
          alt={champion.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-2">
        <div className="font-medium truncate">{champion.name}</div>
        <div className="mt-1 flex justify-center gap-2 text-sm">
          <span
            className={
              champion.winRate >= 50 ? "text-green-400" : "text-red-400"
            }
          >
            {champion.winRate.toFixed(1)}%
          </span>
          <span className="text-zinc-500">|</span>
          <span className="text-blue-400">
            {champion.pickRate.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}
