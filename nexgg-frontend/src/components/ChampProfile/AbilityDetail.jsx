// src/components/ChampProfile/AbilityDetail.jsx
import React from "react";

const AbilityDetail = ({ ability, activeKey }) => {
    if (!ability) return null;

    return (
        <div className="bg-[#282A2F] p-6 rounded-lg flex flex-col gap-4">
            {/* Header: icon + name + tag */}
            <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-md overflow-hidden bg-[#0F0F12] flex-shrink-0">
                    <img
                        src={ability.icon}
                        alt={ability.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-[#D9D9D9]">
                        {ability.name}
                    </h2>
                    <span className="px-2 py-1 bg-[#0F0F12] rounded text-xs uppercase text-[#898989]">
                        {activeKey === "passive" ? "Passive" : activeKey}
                    </span>
                </div>
            </div>

            {/* Description first */}
            <p className="text-base leading-relaxed text-[#D9D9D9]">
                {ability.description}
            </p>

            {/* Smaller video placeholder */}
            <div className="w-full h-40 bg-[#0F0F12] rounded-lg flex items-center justify-center text-[#898989]">
                <span>🚧 Ability video preview coming soon 🚧</span>
            </div>
        </div>
    );
};

export default AbilityDetail;
