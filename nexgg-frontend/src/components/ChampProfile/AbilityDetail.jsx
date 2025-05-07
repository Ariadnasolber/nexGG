import React from "react";

const AbilityDetail = ({ ability, activeKey }) => {
    return (
        <div className="bg-[#282A2F] p-5 rounded-lg">
            <div className="flex items-center mb-4">
                <h2 className="text-xl font-semibold mr-2 text-[#D9D9D9]">{ability.name}</h2>
                <div className="px-2 py-1 bg-[#0F0F12] rounded text-xs uppercase">
                    {activeKey === "passive" ? "Passive" : activeKey}
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <div className="w-full aspect-video bg-[#0F0F12] rounded-lg flex items-center justify-center text-[#898989]">
                    <span>Ability Video Placeholder</span>
                </div>
                <p className="text-base leading-relaxed text-[#D9D9D9]">{ability.description}</p>
            </div>
        </div>
    );
};

export default AbilityDetail;
