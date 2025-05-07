import React from "react";

const SpellList = ({ spells }) => {
    return (
        <div className="flex gap-5 flex-wrap">
            {spells.map((spell, index) => (
                <div key={index} className="flex items-center">
                    <div className="w-10 h-10 rounded-md bg-[#282A2F] mr-2"></div>
                    <div className="text-sm text-[#D9D9D9]">{spell}</div>
                </div>
            ))}
        </div>
    );
};

export default SpellList;
