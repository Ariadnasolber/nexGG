import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { champions } from "../lib/champions";

export default function FilterBar() {
    const [selectedRole, setSelectedRole] = useState("All");
    const [selectedDifficulty, setSelectedDifficulty] = useState("All");

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
        <div className="flex flex-wrap gap-4 mb-6 group">
            <Dropdown label="Role" options={roles} selected={selectedRole} setSelected={setSelectedRole} />
            <Dropdown label="Difficulty" options={difficulties} selected={selectedDifficulty} setSelected={setSelectedDifficulty} />
        </div>
    );
}
