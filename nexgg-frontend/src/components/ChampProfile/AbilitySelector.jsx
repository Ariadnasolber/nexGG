// src/components/ChampProfile/AbilitySelector.jsx
import React from "react";

const AbilitySelector = ({ abilities, activeAbility, setActiveAbility }) => {
    const keys = Object.keys(abilities);

    return (
        <div className="flex gap-4 mb-6">
            {keys.map((key) => {
                const ability = abilities[key];
                if (!ability) return null;

                const isActive = activeAbility === key;
                return (
                    <button
                        key={key}
                        onClick={() => setActiveAbility(key)}
                        className={`
                            flex flex-col items-center
                            cursor-pointer                               
                            transform transition-transform duration-200
                            ${isActive ? "text-[#FC555C]" : "text-[#898989]"}
                            ${isActive ? "scale-105" : "hover:scale-105"}
            `}
                    >
                        <div
                            className={`
                            w-12 h-12 mb-1 rounded-md overflow-hidden border-2
                            ${isActive ? "border-[#FC555C]" : "border-transparent"}
                            bg-[#282A2F] flex items-center justify-center
                            transform transition-transform duration-200
                            ${isActive ? "scale-110" : "hover:scale-110"}
              `}
                        >
                            <img
                                src={ability.icon}
                                alt={ability.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-xs uppercase select-none">
                            {key === "passive" ? "Passive" : key}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default AbilitySelector;
