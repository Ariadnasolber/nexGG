import React from "react";

const RuneBlock = ({ title, runes }) => {
    const { keystone, slot1, slot2, slot3 } = runes;

    // Construimos una lista dinámica de runas a mostrar
    const runeList = [keystone, slot1, slot2];
    if (slot3) runeList.push(slot3); // solo primaria tendrá 4

    return (
        <div className="flex-1 bg-[#d3d7e312] p-4 rounded-lg">
            <h4 className="text-base font-medium mb-4 text-[#D9D9D9]">{title}</h4>
            {runeList.map((rune, i) => (
                <div key={i} className="flex items-center mb-2 last:mb-0">
                    <div className="w-7 h-7 rounded-full bg-[#0F0F12] mr-2"></div>
                    <div className="text-sm text-[#D9D9D9]">{rune}</div>
                </div>
            ))}
        </div>
    );
};

export default RuneBlock;
