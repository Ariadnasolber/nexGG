"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import FilterBar from "../ui/FilterBar"

// Placeholder champion data
const championData = {
    id: "aatrox",
    name: "Aatrox",
    title: "the Darkin Blade",
    image: "/champions/aatrox.png",
    roles: ["Fighter", "Tank"],
    difficulty: 3,
    stats: {
        winRate: 49.8,
        pickRate: 4.2,
        banRate: 2.1,
        matches: 125789,
    },
    abilities: {
        passive: {
            name: "Deathbringer Stance",
            description:
                "Periodically, Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's max health.",
            image: "/abilities/aatrox/passive.png",
        },
        q: {
            name: "The Darkin Blade",
            description:
                "Aatrox slams his greatsword, dealing physical damage. He can reactivate this ability twice, each with different areas of effect.",
            image: "/abilities/aatrox/q.png",
            video: "/videos/aatrox-q.mp4",
        },
        w: {
            name: "Infernal Chains",
            description:
                "Aatrox smashes the ground, dealing damage to the first enemy hit and slowing them. If they don't leave the impact area, they are dragged back and damaged again.",
            image: "/abilities/aatrox/w.png",
            video: "/videos/aatrox-w.mp4",
        },
        e: {
            name: "Umbral Dash",
            description: "Passively, Aatrox heals when damaging enemy champions. When activated, he dashes in a direction.",
            image: "/abilities/aatrox/e.png",
            video: "/videos/aatrox-e.mp4",
        },
        r: {
            name: "World Ender",
            description:
                "Aatrox reveals his true demonic form, fearing nearby minions and gaining attack damage, increased healing, and movement speed. This effect extends on champion takedowns.",
            image: "/abilities/aatrox/r.png",
            video: "/videos/aatrox-r.mp4",
        },
    },
    builds: {
        standard: {
            winRate: 51.2,
            pickRate: 68.5,
            items: [
                { id: "goredrinker", name: "Goredrinker", image: "/items/goredrinker.png" },
                { id: "black_cleaver", name: "Black Cleaver", image: "/items/black_cleaver.png" },
                { id: "deaths_dance", name: "Death's Dance", image: "/items/deaths_dance.png" },
                { id: "steraks_gage", name: "Sterak's Gage", image: "/items/steraks_gage.png" },
                { id: "guardian_angel", name: "Guardian Angel", image: "/items/guardian_angel.png" },
                { id: "spirit_visage", name: "Spirit Visage", image: "/items/spirit_visage.png" },
            ],
            runes: {
                primary: {
                    tree: "Precision",
                    keystone: "Conqueror",
                    slot1: "Triumph",
                    slot2: "Legend: Tenacity",
                    slot3: "Last Stand",
                },
                secondary: {
                    tree: "Resolve",
                    slot1: "Second Wind",
                    slot2: "Revitalize",
                },
                statMods: ["Adaptive Force", "Adaptive Force", "Armor"],
            },
            summonerSpells: ["Flash", "Teleport"],
            skillOrder: ["Q", "E", "W", "Q", "Q", "R", "Q", "E", "Q", "E", "R", "E", "E", "W", "W", "R", "W", "W"],
        },
        aram: {
            winRate: 53.7,
            pickRate: 5.2,
            items: [
                { id: "eclipse", name: "Eclipse", image: "/items/eclipse.png" },
                { id: "black_cleaver", name: "Black Cleaver", image: "/items/black_cleaver.png" },
                { id: "serylda_grudge", name: "Serylda's Grudge", image: "/items/serylda_grudge.png" },
                { id: "deaths_dance", name: "Death's Dance", image: "/items/deaths_dance.png" },
                { id: "maw_of_malmortius", name: "Maw of Malmortius", image: "/items/maw_of_malmortius.png" },
                { id: "guardian_angel", name: "Guardian Angel", image: "/items/guardian_angel.png" },
            ],
            runes: {
                primary: {
                    tree: "Precision",
                    keystone: "Conqueror",
                    slot1: "Triumph",
                    slot2: "Legend: Tenacity",
                    slot3: "Last Stand",
                },
                secondary: {
                    tree: "Domination",
                    slot1: "Taste of Blood",
                    slot2: "Ravenous Hunter",
                },
                statMods: ["Adaptive Force", "Adaptive Force", "Armor"],
            },
            summonerSpells: ["Flash", "Snowball"],
            skillOrder: ["Q", "E", "W", "Q", "Q", "R", "Q", "E", "Q", "E", "R", "E", "E", "W", "W", "R", "W", "W"],
        },
    },
    synergies: {
        strongWith: [
            { id: "diana", name: "Diana", image: "/champions/diana.png", winRate: 54.2 },
            { id: "yasuo", name: "Yasuo", image: "/champions/yasuo.png", winRate: 53.8 },
            { id: "amumu", name: "Amumu", image: "/champions/amumu.png", winRate: 53.5 },
        ],
        weakAgainst: [
            { id: "fiora", name: "Fiora", image: "/champions/fiora.png", winRate: 45.2 },
            { id: "jax", name: "Jax", image: "/champions/jax.png", winRate: 46.1 },
            { id: "irelia", name: "Irelia", image: "/champions/irelia.png", winRate: 46.8 },
        ],
    },
}

const ChampProfile = () => {
    const { championId } = useParams()
    const [activeTab, setActiveTab] = useState("build")
    const [activeAbility, setActiveAbility] = useState("passive")
    const [champion, setChampion] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // In a real app, you would fetch the champion data from your API
        // For now, we'll use the placeholder data
        setChampion(championData)
        setLoading(false)
    }, [championId])

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[300px] text-lg text-[#898989]">Loading champion data...</div>
        )
    }

    if (!champion) {
        return <div className="flex items-center justify-center h-[300px] text-lg text-[#898989]">Champion not found</div>
    }

    return (
        <div className="w-full max-w-[1200px] mx-auto p-5 text-[#D9D9D9] bg-[#0F0F12]">
            {/* Champion Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-8 p-5 bg-[#182123] rounded-lg">
                <div className="w-[120px] h-[120px] rounded-lg overflow-hidden mr-5 mb-4 md:mb-0 border-2 border-[#266F64]">
                    <img
                        src={champion.image || "/placeholder.svg?height=120&width=120"}
                        alt={champion.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex-1">
                    <h1 className="text-2xl font-bold mb-1 text-[#FC555C]">{champion.name}</h1>
                    <p className="text-base text-[#898989] mb-2">{champion.title}</p>

                    <div className="flex gap-2 mb-2">
                        {champion.roles.map((role) => (
                            <span key={role} className="px-2 py-1 bg-[#282A2F] rounded text-xs">
                                {role}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        <span>Difficulty: </span>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-4 h-1.5 rounded-sm ${i < champion.difficulty ? "bg-[#FC555C]" : "bg-[#282A2F]"}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-[#282A2F] rounded-lg mt-4 md:mt-0 w-full md:w-auto">
                    <div className="flex flex-col items-center">
                        <span className="text-xs text-[#898989] mb-1">Win Rate</span>
                        <span className="text-lg font-semibold">{champion.stats.winRate}%</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xs text-[#898989] mb-1">Pick Rate</span>
                        <span className="text-lg font-semibold">{champion.stats.pickRate}%</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xs text-[#898989] mb-1">Ban Rate</span>
                        <span className="text-lg font-semibold">{champion.stats.banRate}%</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xs text-[#898989] mb-1">Matches</span>
                        <span className="text-lg font-semibold">{champion.stats.matches.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b-2 border-[#282A2F] mb-5">
                <button
                    className={`px-5 py-2 text-base font-medium ${activeTab === "build" ? "text-[#FC555C] border-b-2 border-[#FC555C] -mb-0.5" : "text-[#898989]"
                        }`}
                    onClick={() => setActiveTab("build")}
                >
                    Build
                </button>
                <button
                    className={`px-5 py-2 text-base font-medium ${activeTab === "aram" ? "text-[#FC555C] border-b-2 border-[#FC555C] -mb-0.5" : "text-[#898989]"
                        }`}
                    onClick={() => setActiveTab("aram")}
                >
                    ARAM
                </button>
                <button
                    className={`px-5 py-2 text-base font-medium ${activeTab === "synergies" ? "text-[#FC555C] border-b-2 border-[#FC555C] -mb-0.5" : "text-[#898989]"
                        }`}
                    onClick={() => setActiveTab("synergies")}
                >
                    Synergies
                </button>
                <button
                    className={`px-5 py-2 text-base font-medium ${activeTab === "abilities" ? "text-[#FC555C] border-b-2 border-[#FC555C] -mb-0.5" : "text-[#898989]"
                        }`}
                    onClick={() => setActiveTab("abilities")}
                >
                    Abilities
                </button>
            </div>

            {/* Filter Bar */}
            <FilterBar />

            {/* Tab Content */}
            <div className="bg-[#182123] rounded-lg p-5">
                {/* Build Tab */}
                {activeTab === "build" && (
                    <div>
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 text-[#D9D9D9]">Recommended Build</h2>
                            <div className="flex gap-5 mb-5">
                                <div className="flex flex-col bg-[#282A2F] px-4 py-2 rounded-md">
                                    <span className="text-xs text-[#898989] mb-1">Win Rate</span>
                                    <span className="text-lg font-semibold">{champion.builds.standard.winRate}%</span>
                                </div>
                                <div className="flex flex-col bg-[#282A2F] px-4 py-2 rounded-md">
                                    <span className="text-xs text-[#898989] mb-1">Pick Rate</span>
                                    <span className="text-lg font-semibold">{champion.builds.standard.pickRate}%</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-medium mb-4 text-[#D9D9D9]">Item Build</h3>
                                <div className="flex flex-wrap gap-4">
                                    {champion.builds.standard.items.map((item, index) => (
                                        <div key={item.id} className="relative w-20 text-center">
                                            <div className="absolute -top-2 -left-2 w-5 h-5 bg-[#FC555C] rounded-full flex items-center justify-center text-xs font-semibold">
                                                {index + 1}
                                            </div>
                                            <img
                                                src={item.image || "/placeholder.svg?height=50&width=50"}
                                                alt={item.name}
                                                className="w-[50px] h-[50px] rounded-md mb-1 mx-auto bg-[#282A2F]"
                                            />
                                            <div className="text-xs text-[#898989]">{item.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-medium mb-4 text-[#D9D9D9]">Runes</h3>
                                <div className="flex flex-col md:flex-row gap-8 mb-5">
                                    <div className="flex-1 bg-[#282A2F] p-4 rounded-lg">
                                        <h4 className="text-base font-medium mb-4 text-[#D9D9D9]">
                                            {champion.builds.standard.runes.primary.tree}
                                        </h4>
                                        <div className="flex items-center mb-2">
                                            <div className="w-10 h-10 rounded-full bg-[#0F0F12] mr-2"></div>
                                            <div className="text-sm text-[#D9D9D9]">{champion.builds.standard.runes.primary.keystone}</div>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <div className="w-7 h-7 rounded-full bg-[#0F0F12] mr-2"></div>
                                            <div className="text-sm text-[#D9D9D9]">{champion.builds.standard.runes.primary.slot1}</div>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <div className="w-7 h-7 rounded-full bg-[#0F0F12] mr-2"></div>
                                            <div className="text-sm text-[#D9D9D9]">{champion.builds.standard.runes.primary.slot2}</div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-7 h-7 rounded-full bg-[#0F0F12] mr-2"></div>
                                            <div className="text-sm text-[#D9D9D9]">{champion.builds.standard.runes.primary.slot3}</div>
                                        </div>
                                    </div>

                                    <div className="flex-1 bg-[#282A2F] p-4 rounded-lg">
                                        <h4 className="text-base font-medium mb-4 text-[#D9D9D9]">
                                            {champion.builds.standard.runes.secondary.tree}
                                        </h4>
                                        <div className="flex items-center mb-2">
                                            <div className="w-7 h-7 rounded-full bg-[#0F0F12] mr-2"></div>
                                            <div className="text-sm text-[#D9D9D9]">{champion.builds.standard.runes.secondary.slot1}</div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-7 h-7 rounded-full bg-[#0F0F12] mr-2"></div>
                                            <div className="text-sm text-[#D9D9D9]">{champion.builds.standard.runes.secondary.slot2}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h4 className="text-base font-medium mb-2 text-[#D9D9D9]">Stat Modifiers</h4>
                                    <div className="flex gap-4">
                                        {champion.builds.standard.runes.statMods.map((mod, index) => (
                                            <div key={index} className="flex items-center">
                                                <div className="w-5 h-5 rounded-full bg-[#0F0F12] mr-2"></div>
                                                <div className="text-xs text-[#898989]">{mod}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-medium mb-4 text-[#D9D9D9]">Summoner Spells</h3>
                                <div className="flex gap-5">
                                    {champion.builds.standard.summonerSpells.map((spell, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-10 h-10 rounded-md bg-[#282A2F] mr-2"></div>
                                            <div className="text-sm text-[#D9D9D9]">{spell}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-4 text-[#D9D9D9]">Skill Order</h3>
                                <div className="overflow-x-auto">
                                    <div className="flex min-w-max">
                                        <div className="w-[60px] h-[30px] flex items-center justify-center text-xs bg-[#282A2F] border border-[#282A2F]">
                                            Level
                                        </div>
                                        {[...Array(18)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-[30px] h-[30px] flex items-center justify-center text-xs border border-[#282A2F]"
                                            >
                                                {i + 1}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex min-w-max">
                                        <div className="w-[60px] h-[30px] flex items-center justify-center text-xs bg-[#282A2F] border border-[#282A2F]">
                                            Skill
                                        </div>
                                        {champion.builds.standard.skillOrder.map((skill, i) => (
                                            <div
                                                key={i}
                                                className={`w-[30px] h-[30px] flex items-center justify-center text-xs border border-[#282A2F] ${skill === "Q"
                                                        ? "bg-[#266F64]"
                                                        : skill === "W"
                                                            ? "bg-[#490716]"
                                                            : skill === "E"
                                                                ? "bg-[#FC555C]"
                                                                : "bg-[#898989]"
                                                    }`}
                                            >
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ARAM Tab */}
                {activeTab === "aram" && (
                    <div>
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 text-[#D9D9D9]">ARAM Build</h2>
                            <div className="flex gap-5 mb-5">
                                <div className="flex flex-col bg-[#282A2F] px-4 py-2 rounded-md">
                                    <span className="text-xs text-[#898989] mb-1">Win Rate</span>
                                    <span className="text-lg font-semibold">{champion.builds.aram.winRate}%</span>
                                </div>
                                <div className="flex flex-col bg-[#282A2F] px-4 py-2 rounded-md">
                                    <span className="text-xs text-[#898989] mb-1">Pick Rate</span>
                                    <span className="text-lg font-semibold">{champion.builds.aram.pickRate}%</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-medium mb-4 text-[#D9D9D9]">Item Build</h3>
                                <div className="flex flex-wrap gap-4">
                                    {champion.builds.aram.items.map((item, index) => (
                                        <div key={item.id} className="relative w-20 text-center">
                                            <div className="absolute -top-2 -left-2 w-5 h-5 bg-[#FC555C] rounded-full flex items-center justify-center text-xs font-semibold">
                                                {index + 1}
                                            </div>
                                            <img
                                                src={item.image || "/placeholder.svg?height=50&width=50"}
                                                alt={item.name}
                                                className="w-[50px] h-[50px] rounded-md mb-1 mx-auto bg-[#282A2F]"
                                            />
                                            <div className="text-xs text-[#898989]">{item.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-medium mb-4 text-[#D9D9D9]">Runes</h3>
                                <div className="flex flex-col md:flex-row gap-8 mb-5">
                                    <div className="flex-1 bg-[#282A2F] p-4 rounded-lg">
                                        <h4 className="text-base font-medium mb-4 text-[#D9D9D9]">
                                            {champion.builds.aram.runes.primary.tree}
                                        </h4>
                                        <div className="flex items-center mb-2">
                                            <div className="w-10 h-10 rounded-full bg-[#0F0F12] mr-2"></div>
                                            <div className="text-sm text-[#D9D9D9]">{champion.builds.aram.runes.primary.keystone}</div>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <div className="w-7 h-7 rounded-full bg-[#0F0F12] mr-2"></div>
                                            <div className="text-sm text-[#D9D9D9]">{champion.builds.aram.runes.primary.slot1}</div>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <div className="w-7 h-7 rounded-full bg-[#0F0F12] mr-2"></div>
                                            <div className="text-sm text-[#D9D9D9]">{champion.builds.aram.runes.primary.slot2}</div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-7 h-7 rounded-full bg-[#0F0F12] mr-2"></div>
                                            <div className="text-sm text-[#D9D9D9]">{champion.builds.aram.runes.primary.slot3}</div>
                                        </div>
                                    </div>

                                    <div className="flex-1 bg-[#282A2F] p-4 rounded-lg">
                                        <h4 className="text-base font-medium mb-4 text-[#D9D9D9]">
                                            {champion.builds.aram.runes.secondary.tree}
                                        </h4>
                                        <div className="flex items-center mb-2">
                                            <div className="w-7 h-7 rounded-full bg-[#0F0F12] mr-2"></div>
                                            <div className="text-sm text-[#D9D9D9]">{champion.builds.aram.runes.secondary.slot1}</div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-7 h-7 rounded-full bg-[#0F0F12] mr-2"></div>
                                            <div className="text-sm text-[#D9D9D9]">{champion.builds.aram.runes.secondary.slot2}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-medium mb-4 text-[#D9D9D9]">Summoner Spells</h3>
                                <div className="flex gap-5">
                                    {champion.builds.aram.summonerSpells.map((spell, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-10 h-10 rounded-md bg-[#282A2F] mr-2"></div>
                                            <div className="text-sm text-[#D9D9D9]">{spell}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Synergies Tab */}
                {activeTab === "synergies" && (
                    <div>
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 text-[#D9D9D9]">Strong With</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {champion.synergies.strongWith.map((champ) => (
                                    <div key={champ.id} className="flex items-center bg-[#282A2F] p-2 rounded-md">
                                        <img
                                            src={champ.image || "/placeholder.svg?height=60&width=60"}
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
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4 text-[#D9D9D9]">Weak Against</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {champion.synergies.weakAgainst.map((champ) => (
                                    <div key={champ.id} className="flex items-center bg-[#282A2F] p-2 rounded-md">
                                        <img
                                            src={champ.image || "/placeholder.svg?height=60&width=60"}
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
                        </div>
                    </div>
                )}

                {/* Abilities Tab */}
                {activeTab === "abilities" && (
                    <div>
                        <div className="flex gap-2 mb-5">
                            <button
                                className={`flex flex-col items-center ${activeAbility === "passive" ? "text-[#FC555C]" : "text-[#898989]"}`}
                                onClick={() => setActiveAbility("passive")}
                            >
                                <div className="w-10 h-10 rounded-md bg-[#282A2F] mb-1"></div>
                                <span className="text-xs">Passive</span>
                            </button>
                            <button
                                className={`flex flex-col items-center ${activeAbility === "q" ? "text-[#FC555C]" : "text-[#898989]"}`}
                                onClick={() => setActiveAbility("q")}
                            >
                                <div className="w-10 h-10 rounded-md bg-[#282A2F] mb-1"></div>
                                <span className="text-xs">Q</span>
                            </button>
                            <button
                                className={`flex flex-col items-center ${activeAbility === "w" ? "text-[#FC555C]" : "text-[#898989]"}`}
                                onClick={() => setActiveAbility("w")}
                            >
                                <div className="w-10 h-10 rounded-md bg-[#282A2F] mb-1"></div>
                                <span className="text-xs">W</span>
                            </button>
                            <button
                                className={`flex flex-col items-center ${activeAbility === "e" ? "text-[#FC555C]" : "text-[#898989]"}`}
                                onClick={() => setActiveAbility("e")}
                            >
                                <div className="w-10 h-10 rounded-md bg-[#282A2F] mb-1"></div>
                                <span className="text-xs">E</span>
                            </button>
                            <button
                                className={`flex flex-col items-center ${activeAbility === "r" ? "text-[#FC555C]" : "text-[#898989]"}`}
                                onClick={() => setActiveAbility("r")}
                            >
                                <div className="w-10 h-10 rounded-md bg-[#282A2F] mb-1"></div>
                                <span className="text-xs">R</span>
                            </button>
                        </div>

                        <div className="bg-[#282A2F] p-5 rounded-lg">
                            <div className="flex items-center mb-4">
                                <h2 className="text-xl font-semibold mr-2 text-[#D9D9D9]">{champion.abilities[activeAbility].name}</h2>
                                <div className="px-2 py-1 bg-[#0F0F12] rounded text-xs">
                                    {activeAbility === "passive" ? "Passive" : activeAbility.toUpperCase()}
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="w-full aspect-video bg-[#0F0F12] rounded-lg flex items-center justify-center text-[#898989]">
                                    <span>Ability Video Placeholder</span>
                                </div>

                                <div className="text-base leading-relaxed text-[#D9D9D9]">
                                    <p>{champion.abilities[activeAbility].description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChampProfile
