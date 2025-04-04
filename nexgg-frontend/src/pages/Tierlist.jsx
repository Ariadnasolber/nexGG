import { useState } from "react";
import { Search, ChevronDown, Info } from "lucide-react";
import { champions } from "../lib/champions";

export default function TierListPage() {
    const [selectedRole, setSelectedRole] = useState("All");
    const [selectedRegion, setSelectedRegion] = useState("Global");
    const [selectedRank, setSelectedRank] = useState("All Ranks");

    const roles = ["All", "Top", "Jungle", "Mid", "Bot", "Support"];
    const regions = ["Global", "NA", "EUW", "KR", "CN"];
    const ranks = ["All Ranks", "Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master+"];

    const tierS = champions.filter((champ) => champ.winRate > 52);
    const tierA = champions.filter((champ) => champ.winRate > 50 && champ.winRate <= 52);
    const tierB = champions.filter((champ) => champ.winRate > 48 && champ.winRate <= 50);
    const tierC = champions.filter((champ) => champ.winRate <= 48);

    const tiers = [
        { name: "S", color: "#FF4E50", champions: tierS },
        { name: "A", color: "#FC913A", champions: tierA },
        { name: "B", color: "#F9D423", champions: tierB },
        { name: "C", color: "#99B898", champions: tierC },
    ];

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
        <div className="min-h-screen bg-[#0D1117] text-white">
            <div className="max-w-[1200px] mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold mb-2">LoL Tier List</h1>
                <p className="text-gray-400 mb-6">
                    Champion tier list based on win rate, pick rate, and ban rate data.
                </p>

                {/* Filtros */}
                <div className="flex flex-wrap gap-4 mb-6">
                    <Dropdown label="Role" options={roles} selected={selectedRole} setSelected={setSelectedRole} />
                    <Dropdown label="Region" options={regions} selected={selectedRegion} setSelected={setSelectedRegion} />
                    <Dropdown label="Rank" options={ranks} selected={selectedRank} setSelected={setSelectedRank} />
                </div>

                {/* Barra de búsqueda */}
                <div className="relative w-full max-w-md mb-6">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                        <Search size={16} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search Champions..."
                        className="w-full pl-10 pr-4 py-2 bg-[#0D1117] border border-gray-600 rounded text-sm text-white focus:outline-none focus:border-[#FF4655] focus:ring-2 focus:ring-[#FF4655]/30"
                    />
                </div>

                {/* Leyenda */}
                <div className="flex items-center gap-2 mb-6 text-gray-400 text-sm">
                    <Info size={16} />
                    <span>Champions are ranked based on win rate, pick rate, and ban rate data.</span>
                </div>

                {/* Tier List */}
                <div className="flex flex-col gap-2">
                    {tiers.map((tier) => (
                        <div key={tier.name} className="flex rounded overflow-hidden">
                            <div
                                className="flex items-center justify-center min-w-[60px] w-[60px] text-2xl font-bold text-white p-3"
                                style={{ backgroundColor: tier.color }}
                            >
                                {tier.name}
                            </div>
                            <div className="flex flex-wrap bg-gray-800 flex-grow p-2 gap-2">
                                {tier.champions.map((champion) => (
                                    <div
                                        key={champion.id}
                                        className="flex flex-col w-[80px] bg-[#111827] rounded transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <div className="relative w-full h-[80px] overflow-hidden">
                                            <img
                                                src={champion.splash || "/placeholder.svg"}
                                                alt={champion.name}
                                                className="w-full h-full object-cover object-[center_20%]"
                                            />
                                        </div>
                                        <div className="px-2 py-1">
                                            <div className="text-xs font-medium truncate">{champion.name}</div>
                                            <div className="flex justify-between text-[10px] mt-1">
                                                <span className="text-green-400">{champion.winRate}%</span>
                                                <span className="text-blue-400">{champion.pickRate}%</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
