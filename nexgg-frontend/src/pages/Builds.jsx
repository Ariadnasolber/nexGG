"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Search,
  Filter,
  RefreshCw,
  Info,
  Sword,
  Zap,
  Shield,
  Star,
  Clock
} from "lucide-react";

import { getChampions, getBuilds } from "../services/api";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function Builds() {
  const navigate = useNavigate();

  // Estados principales
  const [champions, setChampions] = useState([]);
  const [filteredChampions, setFilteredChampions] = useState([]);
  const [selectedChampion, setSelectedChampion] = useState(null);
  const [selectedBuild, setSelectedBuild] = useState(null);

  const [selectedRole, setSelectedRole] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const roles = ["All", "Top", "Jungle", "Mid", "Bot", "Support"];

  // 1) Traer campeones al montar
  useEffect(() => {
    getChampions()
      .then((data) => {
        setChampions(data);
        setFilteredChampions(data);
      })
      .catch(console.error);
  }, []);

  // 2) Filtrar por rol y búsqueda
  useEffect(() => {
    let list = champions;
    if (selectedRole !== "All") {
      list = list.filter((c) => c.role?.includes(selectedRole));
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q));
    }
    setFilteredChampions(list);
  }, [champions, selectedRole, searchQuery]);

  // 3) Selección de campeón → cargar builds
  const handleChampionSelect = (champ) => {
    setSelectedChampion(champ);
    setSelectedBuild(null);
    getBuilds(champ.id)
      .then((builds) => {
        if (builds.length) setSelectedBuild(builds[0]);
      })
      .catch(console.error);
  };

  // 4) Simular actualización
  const handleUpdateBuilds = async () => {
    setIsUpdating(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLastUpdated(new Date());
    setIsUpdating(false);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-200">

      <div
        className="relative h-200 bg-cover bg-no-repeat bg-[center_0%] flex items-center justify-center flex-col text-center"
        style={{
          backgroundImage: `url('https://srnziivmkegvqguausey.supabase.co/storage/v1/object/sign/imagenes/lol-assets/champions/Yasuo/truth-dragon-yasuo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzUyMDg3Y2FlLWM1MzMtNGFlOS1hMTVjLWEyNTM0MGQ3NzZlMSJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2wtYXNzZXRzL2NoYW1waW9ucy9ZYXN1by90cnV0aC1kcmFnb24teWFzdW8uanBnIiwiaWF0IjoxNzQ4MjA5NjQ4LCJleHAiOjE3Nzk3NDU2NDh9.NmahXB92xevWuqOBAwfUW2H1c8C15esDY0Uh14mZBP8')`
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-4 py-2">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
            LoL Best Builds
          </h1>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Search for the best builds for your champion
          </p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats banner */}
        <div className="bg-zinc-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Champion Builds – Patch 14.10
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard title="Champions" value={champions.length} />
            <StatCard
              title="Builds Fetched"
              value={selectedChampion ? (selectedBuild ? 1 : 0) : "-"}
            />
            <StatCard
              title="Last Updated"
              value={lastUpdated.toLocaleDateString()}
            />
            <StatCard title="Data Source" value="Riot API" />
          </div>
        </div>

        {/* Controls */}
        <div className="bg-zinc-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
            {/* Filtro por rol */}
            <div className="relative">
              <button
                onClick={() => setShowRoleDropdown((v) => !v)}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md hover:bg-zinc-600"
              >
                <Filter className="w-4 h-4" />
                <span>Role: {selectedRole}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showRoleDropdown && (
                <div className="absolute mt-1 w-40 bg-zinc-700 border border-zinc-600 rounded-md shadow-lg z-10">
                  {roles.map((r) => (
                    <button
                      key={r}
                      onClick={() => {
                        setSelectedRole(r);
                        setShowRoleDropdown(false);
                      }}
                      className={cn(
                        "block w-full text-left px-4 py-2 text-sm hover:bg-zinc-600",
                        selectedRole === r && "bg-zinc-600 font-medium"
                      )}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Búsqueda y actualizar */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search champions..."
                  className="w-full md:w-64 pl-10 pr-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-500"
                />
              </div>
              <button
                onClick={handleUpdateBuilds}
                disabled={isUpdating}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md hover:bg-zinc-600",
                  isUpdating && "opacity-50 cursor-not-allowed"
                )}
              >
                <RefreshCw
                  size={16}
                  className={isUpdating ? "animate-spin" : ""}
                />
                Update
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-zinc-400 text-sm">
            <Info size={16} />
            <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de campeones */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-800 rounded-lg overflow-hidden">
              <div className="p-4 bg-zinc-700 border-b border-zinc-600">
                <h3 className="text-lg font-bold">Champions</h3>
              </div>
              <div className="max-h-[600px] overflow-y-auto">
                {filteredChampions.length ? (
                  filteredChampions.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => handleChampionSelect(c)}
                      className={cn(
                        "flex items-center gap-3 p-4 cursor-pointer border-b border-zinc-600 hover:bg-zinc-700 transition-colors",
                        selectedChampion?.id === c.id && "bg-zinc-700"
                      )}
                    >
                      <div className="h-12 w-12 rounded-full overflow-hidden bg-zinc-700 flex-shrink-0">
                        <img
                          src={c.icon_url}
                          alt={c.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{c.name}</div>
                        <div className="text-xs text-zinc-400">
                          {c.role?.join(", ")}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-zinc-400">
                    No champions found.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Detalles de build */}
          <div className="lg:col-span-2">
            {!selectedChampion ? (
              <PlaceholderBox text="Select a champion to view builds." />
            ) : !selectedBuild ? (
              <PlaceholderBox text="No builds available for this champion." />
            ) : (
              <>
                {/* Header del campeón */}
                <div className="bg-zinc-800 rounded-lg p-6 mb-6 flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden bg-zinc-700 flex-shrink-0">
                    <img
                      src={selectedChampion.icon_url}
                      alt={selectedChampion.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      {selectedChampion.name}
                    </h2>
                    <div className="text-zinc-400">
                      {selectedChampion.role?.join(", ")}
                    </div>
                  </div>
                </div>

                {/* Pestañas de builds */}
                <div className="bg-zinc-800 rounded-lg overflow-hidden mb-6">
                  <div className="flex overflow-x-auto border-b border-zinc-600">
                    {getBuilds(selectedChampion.id).map((b) => (
                      <button
                        key={b.title}
                        onClick={() => setSelectedBuild(b)}
                        className={cn(
                          "px-6 py-3 whitespace-nowrap",
                          selectedBuild.title === b.title
                            ? "bg-zinc-700 font-medium"
                            : "hover:bg-zinc-700 text-zinc-400"
                        )}
                      >
                        {b.role} – {b.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Métricas del build */}
                <div className="bg-zinc-800 rounded-lg p-6 mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <MetricCard
                    label="Win Rate"
                    value={`${selectedBuild.winRate}%`}
                    highlight={selectedBuild.winRate > 50}
                  />
                  <MetricCard
                    label="Pick Rate"
                    value={`${selectedBuild.pickRate}%`}
                    highlight={selectedBuild.pickRate > 50}
                  />
                  <MetricCard label="Difficulty" value={selectedBuild.difficulty} />
                  <MetricCard label="Patch" value={selectedBuild.patch} />
                </div>

                {/* Aquí irían Items, Runes, Summoner Spells, Skill Order... */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Componentes auxiliares
const StatCard = ({ title, value }) => (
  <div className="bg-zinc-700 p-4 rounded-md">
    <div className="text-sm text-zinc-400">{title}</div>
    <div className="text-2xl font-bold">{value}</div>
  </div>
);

const PlaceholderBox = ({ text }) => (
  <div className="bg-zinc-800 rounded-lg p-6 text-center text-zinc-400">
    {text}
  </div>
);

const MetricCard = ({ label, value, highlight }) => (
  <div className="bg-zinc-700 p-4 rounded-md">
    <div className="text-sm text-zinc-400 mb-1">{label}</div>
    <div className={`text-xl font-bold ${highlight ? "text-green-400" : "text-zinc-200"}`}>
      {value}
    </div>
  </div>
);
