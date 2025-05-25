import React from "react";

const difficultyClass = {
    Easy: "text-green-400",
    Moderate: "text-yellow-400",
    Hard: "text-red-400",
};

const roleClasses = {
    Assassin: "bg-red-500/20 text-red-400",
    Mage: "bg-purple-500/20 text-purple-400",
    Fighter: "bg-blue-500/20 text-blue-400",
    Tank: "bg-green-500/20 text-green-400",
    Marksman: "bg-yellow-500/20 text-yellow-400",
    Support: "bg-pink-500/20 text-pink-400",
};

const HeaderSection = ({ champion }) => {
    return (
        <div
            className="relative h-160 bg-cover rounded-b-lg bg-no-repeat flex items-center justify-end flex-col text-center mt-24"
            style={{ backgroundImage: `url('${champion.splash_url}')` }}
        >
            <div className="flex flex-col md:flex-row items-start md:items-center px-10 py-5 bg-[#1c1c21]/90 rounded-b-lg w-full text-[#e4e4e4]">

                {/* IZQUIERDA: Nombre, título, roles y dificultad */}
                <div className="w-full flex flex-col items-center md:items-start justify-between">
                    <h1 className="text-2xl font-bold mb-1 text-white">
                        {champion.name}
                    </h1>
                    <p className="text-base mb-2">{champion.title}</p>

                    <div className="flex gap-2 mb-2">
                        {champion.roles.map((role) => (
                            <span
                                key={role}
                                className={`px-2 py-1 rounded text-xs ${roleClasses[role] ?? "bg-gray-500/20 text-gray-300"}`}
                            >
                                {role}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        <span>Difficulty:</span>
                        <span className={`${difficultyClass[champion.difficulty]} font-medium`}>
                            {champion.difficulty}
                        </span>
                    </div>
                </div>

                {/* DERECHA: Stats dinámicos */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-[#282A2F] rounded-lg mt-4 md:mt-0 w-full md:w-[500px]">
                    <Stat label="Win Rate" raw={champion.stats.winRate} suffix="%" />
                    <Stat label="Pick Rate" raw={champion.stats.pickRate} suffix="%" />
                    <Stat label="Ban Rate" raw={champion.stats.banRate} suffix="%" />
                    <Stat label="Matches" raw={champion.stats.matches.toLocaleString()} suffix="" />
                </div>

            </div>
        </div>
    );
};

const Stat = ({ label, raw, suffix }) => {
    // intentamos parsear el número para colorear
    const num = parseFloat(raw);
    let colorClass = "text-gray-200";
    if (!isNaN(num) && suffix === "%") {
        colorClass = num > 50 ? "text-green-400" : num < 50 ? "text-red-400" : "text-gray-200";
    }
    return (
        <div className="flex flex-col items-center">
            <span className="text-xs text-[#898989] mb-1">{label}</span>
            <span className={`text-lg font-semibold ${colorClass}`}>
                {raw}{suffix}
            </span>
        </div>
    );
};

export default HeaderSection;