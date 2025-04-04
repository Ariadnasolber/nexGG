import { useEffect, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { getChampions } from "../services/api";

export default function CampeonesPage() {
  const [champions, setChampions] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  useEffect(() => {
    getChampions()
      .then((data) => setChampions(data))
      .catch((err) => console.error("Error al obtener campeones:", err));
  }, []);

  const filteredChampions = champions.filter((champion) => {
    const matchesQuery = champion.name.toLowerCase().includes(query.toLowerCase());
    const matchesRole = selectedRole === "All" || champion.roles?.includes(selectedRole);
    const matchesDifficulty = selectedDifficulty === "All" || champion.difficulty === selectedDifficulty;
    return matchesQuery && matchesRole && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      {/* Cabecera con imagen de fondo */}
      <div
        className="relative h-200 bg-cover bg-no-repeat bg-[center_0%] flex items-center justify-center flex-col text-center"
        style={{ backgroundImage: `url('/bg-missfortune.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold text-white px-4 py-2">Champions</h1>
          <p className="text-white mb-6">
            View all League of Legends champions, their stats, and performance data.
          </p>
          <SearchBar query={query} setQuery={setQuery} />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <FilterBar
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        />
        <ChampionGrid champions={filteredChampions} />
      </div>
    </div>
  );
}

function SearchBar({ query, setQuery }) {
  return (
    <div className="relative w-full max-w-md mb-6">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
        <Search size={16} />
      </div>
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 bg-[#0D1117] border border-gray-600 rounded text-sm text-white focus:outline-none focus:border-[#FF4655] focus:ring-2 focus:ring-[#FF4655]/30"
        placeholder="Search Champions..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

function FilterBar({ selectedRole, setSelectedRole, selectedDifficulty, setSelectedDifficulty }) {
  const roles = ["All", "Top", "Jungle", "Mid", "Bot", "Support"];
  const difficulties = ["All", "Easy", "Moderate", "Hard"];

  const Dropdown = ({ label, options, selected, setSelected }) => (
    <div className="relative group">
      <button className="flex items-center gap-2 bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded">
        <span>{label}: {selected}</span>
        <ChevronDown size={16} />
      </button>
      <div className="absolute left-0 mt-1 w-40 bg-gray-800 rounded shadow-lg z-10 hidden group-hover:block hover:block">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Dropdown label="Role" options={roles} selected={selectedRole} setSelected={setSelectedRole} />
      <Dropdown label="Difficulty" options={difficulties} selected={selectedDifficulty} setSelected={setSelectedDifficulty} />
    </div>
  );
}

function ChampionGrid({ champions }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
      {champions.map((champion) => (
        <ChampionCard key={champion.id} champion={champion} />
      ))}
    </div>
  );
}

function ChampionCard({ champion }) {
  const difficultyClass = {
    Easy: "text-green-400",
    Moderate: "text-yellow-400",
    Hard: "text-red-400",
  };

  const roleClass = {
    Top: "bg-blue-500",
    Jungle: "bg-green-500",
    Mid: "bg-purple-500",
    Bot: "bg-red-500",
    Support: "bg-yellow-400",
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          alt={champion.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-3">
          <h3 className="text-lg font-bold">{champion.name}</h3>
          <p className="text-sm text-gray-300">{champion.title}</p>
        </div>
        <div className="absolute top-2 right-2 flex gap-1">
          {champion.roles?.map((role) => (
            <span
              key={role}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${roleClass[role]}`}
              title={role}
            >
              {role.charAt(0)}
            </span>
          ))}
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-between mb-2 text-xs">
          <div>
            <span className="text-gray-400">Difficulty: </span>
            <span className={`${difficultyClass[champion.difficulty]} font-medium`}>
              {champion.difficulty}
            </span>
          </div>
          <div>
            <span className="text-gray-400">Win Rate: </span>
            <span className="text-white font-medium">{champion.winRate}%</span>
          </div>
        </div>
        <div className="flex justify-between text-xs">
          <div>
            <span className="text-gray-400">Pick Rate: </span>
            <span className="text-white font-medium">{champion.pickRate}%</span>
          </div>
          <div>
            <span className="text-gray-400">Ban Rate: </span>
            <span className="text-white font-medium">{champion.banRate}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
