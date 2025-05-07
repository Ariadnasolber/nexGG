import React from "react";

const AbilitySelector = ({ abilities, activeAbility, setActiveAbility }) => {
    const keys = Object.keys(abilities);

    return (
        <div className="flex gap-2 mb-5">
            {keys.map((key) => (
                <button
                    key={key}
                    onClick={() => setActiveAbility(key)}
                    className={`flex flex-col items-center ${activeAbility === key ? "text-[#FC555C]" : "text-[#898989]"
                        }`}
                >
                    <div className="w-10 h-10 rounded-md bg-[#282A2F] mb-1"></div>
                    <span className="text-xs">{key === "passive" ? "Passive" : key.toUpperCase()}</span>
                </button>
            ))}
        </div>
    );
};

export default AbilitySelector;
