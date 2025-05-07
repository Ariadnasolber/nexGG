import React from "react";

const StatModifiers = ({ mods }) => {
    return (
        <div className="mt-5">
            <h4 className="text-base font-medium mb-2 text-[#D9D9D9]">Stat Modifiers</h4>
            <div className="flex gap-4 flex-wrap">
                {mods.map((mod, index) => (
                    <div key={index} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-[#0F0F12] mr-2"></div>
                        <div className="text-xs text-[#898989]">{mod}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatModifiers;
