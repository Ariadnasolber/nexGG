import { useEffect, useState } from "react";
import { getChampions } from "../services/api";
import  SearchBar  from "../ui/SearchBar";
import  FilterBar  from "../ui/FilterBar";
import  ChampionGrid  from "../ui/ChampionGrid";


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
        <div className="min-h-screen bg-[#0F0F12] text-white">
            {/* Cabecera con imagen de fondo */}
            <div
                className="relative h-200 bg-cover bg-no-repeat bg-[center_0%] flex items-center justify-center flex-col text-center"
                style={{ backgroundImage: `url('/bg-missfortune.jpeg')` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex items-center justify-center flex-col">
                    <h1 className="text-4xl font-bold text-white px-4 py-2 uppercase tracking-wide">Champions</h1>
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
