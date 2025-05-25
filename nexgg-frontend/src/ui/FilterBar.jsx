import { useState } from "react";
import { ChevronDown, Filter } from 'lucide-react';

const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function FilterBar({ 
  selectedRole, 
  setSelectedRole, 
  selectedDifficulty, 
  setSelectedDifficulty 
}) {
  const roles = ["All", "Top", "Jungle", "Mid", "Bot", "Support"];
  const difficulties = ["All", "Easy", "Moderate", "Hard"];

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <FilterDropdown
        label="Role"
        options={roles}
        selected={selectedRole}
        setSelected={setSelectedRole}
      />
      <FilterDropdown
        label="Difficulty"
        options={difficulties}
        selected={selectedDifficulty}
        setSelected={setSelectedDifficulty}
      />
    </div>
  );
}

export function FilterDropdown({ label, options, selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white border border-zinc-800 rounded-md hover:bg-zinc-700 text-sm font-medium"
      >
        <Filter size={14} />
        <span>{label}: {selected}</span>
        <ChevronDown size={14} />
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-40 bg-zinc-800 border border-zinc-900 rounded-md shadow-lg z-10">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setSelected(opt);
                setIsOpen(false);
              }}
              className={cn(
                "block w-full text-left px-4 py-2 text-sm text-white hover:bg-zinc-700",
                selected === opt && "bg-zinc-700 font-medium"
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}