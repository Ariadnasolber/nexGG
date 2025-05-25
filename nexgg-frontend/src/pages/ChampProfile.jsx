import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getChampionById } from "../services/api";

import HeaderSection from "../components/ChampProfile/HeaderSection";
import TabNavigation from "../components/ChampProfile/TabNavigation";
import BuildTab from "../components/ChampProfile/BuildTab";
import AramTab from "../components/ChampProfile/AramTab";
import AbilitiesTab from "../components/ChampProfile/AbilitiesTab";

const ChampProfile = () => {
    const { championId } = useParams();

    const [champion, setChampion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("build");
    const [activeAbility, setActiveAbility] = useState("passive");

    useEffect(() => {
        setLoading(true);
        getChampionById(championId)
            .then((data) => {
                // Normalizamos los campos para los componentes
                const champ = {
                    ...data,
                    // HeaderSection espera champ.roles (array de strings)
                    roles: data.role || [],

                    // HeaderSection espera un objeto stats con winRate, pickRate, banRate y matches
                    stats: {
                        winRate: data.win_rate != null ? data.win_rate.toFixed(1) : 0,
                        pickRate: data.pick_rate != null ? data.pick_rate.toFixed(1) : 0,
                        banRate: data.ban_rate != null ? data.ban_rate.toFixed(1) : 0,
                        matches: data.stats?.matches || 0,
                    },

                    // Por ahora dejamos los builds vacíos; más adelante los cargaremos con getBuilds()
                    builds: {
                        standard: {
                            winRate: 0,
                            pickRate: 0,
                            items: [],
                            runes: { primary: [], secondary: [], statMods: [] },
                            summonerSpells: [],
                            skillOrder: [],
                        },
                        aram: {
                            winRate: 0,
                            pickRate: 0,
                            items: [],
                            runes: { primary: [], secondary: [], statMods: [] },
                            summonerSpells: [],
                        },
                    },

                    // Abilities vienen en JSONB; si aún no las tienes en la API, lo dejamos vacío
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
                {activeTab === "build" && (
                    <BuildTab {...champion.builds.standard} />
                )}
                {activeTab === "aram" && (
                    <AramTab {...champion.builds.aram} />
                )}
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
