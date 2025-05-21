import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Importación de componentes
import HeaderSection from "../components/ChampProfile/HeaderSection";
import TabNavigation from "../components/ChampProfile/TabNavigation";
import BuildTab from "../components/ChampProfile/BuildTab";
import AramTab from "../components/ChampProfile/AramTab";
import SynergiesTab from "../components/ChampProfile/SynergiesTab";
import AbilitiesTab from "../components/ChampProfile/AbilitiesTab";
import FilterBar from "../ui/FilterBar";

// Datos simulados de campeón
import championData from "../data/ChampionData";

const ChampProfile = () => {
    const { championId } = useParams();
    const [champion, setChampion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("build");
    const [activeAbility, setActiveAbility] = useState("passive");

    useEffect(() => {
        // En producción harías fetch, aquí usamos datos simulados
        setChampion(championData);
        setLoading(false);
    }, [championId]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[300px] text-lg text-[#898989]">
                Loading champion data...
            </div>
        );
    }

    if (!champion) {
        return (
            <div className="flex items-center justify-center h-[300px] text-lg text-[#898989]">
                Champion not found
            </div>
        );
    }

    return (
        <div className="w-full max-w-[1300px] mx-auto text-[#e4e4e4] bg-[#0F0F12]">
            <HeaderSection champion={champion} />
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <FilterBar />

            <div className="bg-[#1c1c21] rounded-lg p-5">
                {activeTab === "build" && <BuildTab build={champion.builds.standard} />}
                {activeTab === "aram" && <AramTab build={champion.builds.aram} />}
                {activeTab === "synergies" && <SynergiesTab synergies={champion.synergies} />}
                {activeTab === "abilities" && (
                    <AbilitiesTab
                        abilities={champion.abilities}
                        activeAbility={activeAbility}
                        setActiveAbility={setActiveAbility}
                    />
                )}
            </div>
        </div>
    );
};

export default ChampProfile;
