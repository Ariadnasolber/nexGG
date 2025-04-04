import React, { useEffect, useState } from "react";
import { getChampions } from "../services/api";
import { Search, ChevronDown } from "lucide-react";

export default function CampeonesPage() {
  const [champions, setChampions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getChampions()
      .then((data) => {
        setChampions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener campeones:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-8">Cargando campeones...</p>;

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">LoL Champions</h1>
      <p className="text-gray-600 mb-6">
        View all League of Legends champions, their stats, and performance data.
      </p>

      <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      <FilterBar
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
      />
      <ChampionGrid
        champions={champions}
        query={searchQuery}
        role={selectedRole}
        difficulty={selectedDifficulty}
      />
    </div>
  );
}

// ------------------------ Search Bar ------------------------
function SearchBar({ query, setQuery }) {
  return (
    <div className="flex items-center border rounded mb-4 px-3 py-2 shadow-sm max-w-md">
      <Search size={16} className="text-gray-500 mr-2" />
      <input
        type="text"
        className="w-full outline-none"
        placeholder="Search Champions..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

// ------------------------ Filter Bar ------------------------
function FilterBar({ selectedRole, setSelectedRole, selectedDifficulty, setSelectedDifficulty }) {
  const roles = ["All", "Top", "Jungle", "Mid", "Bot", "Support"];
  const difficulties = ["All", "Easy", "Moderate", "Hard"];

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Dropdown label="Role" selected={selectedRole} options={roles} onSelect={setSelectedRole} />
      <Dropdown label="Difficulty" selected={selectedDifficulty} options={difficulties} onSelect={setSelectedDifficulty} />
    </div>
  );
}

function Dropdown({ label, selected, options, onSelect }) {
  return (
    <div className="relative group">
      <button className="flex items-center border rounded px-3 py-1 shadow-sm bg-white">
        <span className="mr-1">{label}: {selected}</span>
        <ChevronDown size={16} />
      </button>
      <div className="absolute z-10 hidden group-hover:block bg-white border rounded shadow-md mt-1 w-full">
        {options.map(option => (
          <button
            key={option}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

// ------------------------ Champion Card ------------------------
function ChampionCard({ champion }) {
  const difficultyColor = {
    Easy: "text-green-600",
    Moderate: "text-yellow-500",
    Hard: "text-red-600",
  };

  return (
    <div className="border rounded shadow hover:shadow-lg transition overflow-hidden bg-white">
      <div className="relative">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          alt={champion.name}
          className="w-full h-40 object-cover"
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 w-full">
          <h3 className="text-white text-lg font-bold">{champion.name}</h3>
          <p className="text-white text-sm">{champion.title}</p>
        </div>
      </div>
      <div className="p-3 text-sm">
        <div className="flex justify-between mb-1">
          <span className="font-medium">Difficulty:</span>
          <span className={difficultyColor[champion.difficulty]}>
            {champion.difficulty}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Win Rate:</span>
          <span>{champion.winRate}%</span>
        </div>
        <div className="flex justify-between">
          <span>Pick Rate:</span>
          <span>{champion.pickRate}%</span>
        </div>
        <div className="flex justify-between">
          <span>Ban Rate:</span>
          <span>{champion.banRate}%</span>
        </div>
      </div>
    </div>
  );
}

// ------------------------ Champion Grid ------------------------
function ChampionGrid({ champions, query, role, difficulty }) {
  const filtered = champions.filter((champion) => {
    const matchesQuery = champion.name.toLowerCase().includes(query.toLowerCase());
    const matchesRole = role === "All" || champion.roles?.includes(role);
    const matchesDifficulty = difficulty === "All" || champion.difficulty === difficulty;
    return matchesQuery && matchesRole && matchesDifficulty;
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
      {filtered.map((champion) => (
        <ChampionCard key={champion.id} champion={champion} />
      ))}
    </div>
  );
}
