// src/pages/ChampProfile.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getChampionById } from "../services/api";

import HeaderSection from "../components/ChampProfile/HeaderSection";
import TabNavigation from "../components/ChampProfile/TabNavigation";
// import BuildTab from "../components/ChampProfile/BuildTab";
// import AramTab from "../components/ChampProfile/AramTab";
import AbilitiesTab from "../components/ChampProfile/AbilitiesTab";

const ChampProfile = () => {
    const { championId } = useParams();

    const [champion, setChampion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("abilities");
    const [activeAbility, setActiveAbility] = useState("passive");

    useEffect(() => {
        setLoading(true);
        getChampionById(championId)
            .then((data) => {
                const champ = {
                    ...data,
                    roles: data.role || [],
                    stats: {
                        winRate: data.win_rate != null ? data.win_rate.toFixed(1) : 0,
                        pickRate: data.pick_rate != null ? data.pick_rate.toFixed(1) : 0,
                        banRate: data.ban_rate != null ? data.ban_rate.toFixed(1) : 0,
                        matches: data.stats?.matches || 0,
                    },
                    builds: {
                        standard: {
                            winRate: 0,
                            pickRate: 0,
                            items: [],
                            runes: { primary: [], secondary: [], statMods: [] },
                            summonerSpells: [],
                            skillOrder: [],
                        },
                        aram: {},
                    },
                    abilities: data.abilities || {},
                };
                setChampion(champ);
            })
            .catch((err) => {
                console.error("Error cargando perfil de campeón:", err);
                setChampion(null);
            })
            .finally(() => {
                setLoading(false);
            });
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

            <TabNavigation
                activeTab={activeTab}
                setActiveTab={(tab) => {
                    setActiveTab(tab);
                    if (tab === "abilities") setActiveAbility("passive");
                }}
            />

            <div className="bg-[#1c1c21] rounded-lg p-5">
                {/*BUILD TAB*/}
                {activeTab === "build" && (
                    <>
                        {/* Banner placeholder */}
                        <div className="flex items-center justify-center h-40 bg-[#282A2F] rounded-md mb-6">
                            <p className="text-center text-[#D9D9D9] text-lg font-semibold">
                                🚧 We are working on it! 🚧<br />
                                Coming soon: build recommendations and stats.
                            </p>
                        </div>

                        {/*
            <BuildTab build={champion.builds.standard} />
            */}
                    </>
                )}

                {/*ARAM TAB*/}
                {activeTab === "aram" && (
                    <>
                        {/* Banner placeholder */}
                        <div className="flex items-center justify-center h-40 bg-[#282A2F] rounded-md mb-6">
                            <p className="text-center text-[#D9D9D9] text-lg font-semibold">
                                🚧 ¡We are working on it! 🚧<br />
                                Coming soon: ARAM builds and stats.
                            </p>
                        </div>

                        {/*
            <AramTab build={champion.builds.aram} />
            */}
                    </>
                )}

                {/*ABILITIES TAB*/}
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
