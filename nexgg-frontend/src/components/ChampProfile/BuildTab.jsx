// src/components/ChampProfile/BuildTab.jsx
import React from "react";
import ItemGrid from "./ItemGrid";
import RuneBlock from "./RuneBlock";
import StatModifiers from "./StatModifiers";
import SpellList from "./SpellList";
import SkillOrder from "./SkillOrder";

const BuildTab = ({ build }) => {
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-[#D9D9D9]">
                    Recommended Build
                </h2>

                {/* Winrate / Pickrate */}
                <div className="flex gap-5 mb-5">
                    <StatCard label="Win Rate" value={`${build.winRate}%`} />
                    <StatCard label="Pick Rate" value={`${build.pickRate}%`} />
                </div>

                {/* Items */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4 text-[#D9D9D9]">
                        Item Build
                    </h3>
                    <ItemGrid items={build.items} />
                </div>

                {/* Runes */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4 text-[#D9D9D9]">
                        Runes
                    </h3>
                    <div className="flex flex-col md:flex-row gap-8 mb-5">
                        <RuneBlock
                            title={build.runes.primary.tree}
                            runes={build.runes.primary}
                        />
                        <RuneBlock
                            title={build.runes.secondary.tree}
                            runes={build.runes.secondary}
                        />
                    </div>
                    <StatModifiers mods={build.runes.statMods} />
                </div>

                {/* Summoner Spells */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4 text-[#D9D9D9]">
                        Summoner Spells
                    </h3>
                    <SpellList spells={build.summonerSpells} />
                </div>

                {/* Skill Order */}
                <div>
                    <h3 className="text-lg font-medium mb-4 text-[#D9D9D9]">
                        Skill Order
                    </h3>
                    <SkillOrder order={build.skillOrder} />
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ label, value }) => (
    <div className="flex flex-col bg-[#282A2F] px-4 py-2 rounded-md">
        <span className="text-xs text-[#898989] mb-1">{label}</span>
        <span className="text-lg font-semibold">{value}</span>
    </div>
);

export default BuildTab;
