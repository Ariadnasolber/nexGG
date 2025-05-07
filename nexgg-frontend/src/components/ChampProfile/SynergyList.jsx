import React from "react";

const SynergyList = ({ champions }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {champions.map((champ) => (
                <div key={champ.id} className="flex items-center bg-[#282A2F] p-2 rounded-md">
                    <img
                        src={champ.image || "/placeholder.svg"}
                        alt={champ.name}
                        className="w-[60px] h-[60px] rounded-full mr-4 bg-[#0F0F12]"
                    />
                    <div>
                        <div className="text-base font-medium mb-1 text-[#D9D9D9]">{champ.name}</div>
                        <div className="text-sm text-[#FC555C]">{champ.winRate}% WR</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SynergyList;
