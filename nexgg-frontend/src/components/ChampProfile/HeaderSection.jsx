import React from "react";

const HeaderSection = ({ champion }) => {
    return (
        <div
            className="relative h-160 bg-cover rounded-b-lg bg-no-repeat flex items-center justify-end flex-col text-center"
            style={{ backgroundImage: `url('/high-noon-yone.jpg')` }}
        >
            <div className="flex flex-col md:flex-row items-start md:items-center px-10 py-5 bg-[#1c1c21]/90 rounded-b-lg w-full text-[#e4e4e4]">
                <div className="w-full flex flex-col items-center md:items-start justify-between">
                    <h1 className="text-2xl font-bold mb-1 text-[#FC555C]">{champion.name}</h1>
                    <p className="text-base mb-2">{champion.title}</p>

                    <div className="flex gap-2 mb-2">
                        {champion.roles.map((role) => (
                            <span key={role} className="px-2 py-1 bg-[#e2e2e224] rounded text-xs">
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
                                    className={`w-4 h-1.5 rounded-sm ${i < champion.difficulty ? "bg-[#FC555C]" : "bg-[#282A2F]"
                                        }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-[#282A2F] rounded-lg mt-4 md:mt-0 w-full md:w-auto">
                    <Stat label="Win Rate" value={`${champion.stats.winRate}%`} />
                    <Stat label="Pick Rate" value={`${champion.stats.pickRate}%`} />
                    <Stat label="Ban Rate" value={`${champion.stats.banRate}%`} />
                    <Stat label="Matches" value={champion.stats.matches.toLocaleString()} />
                </div>
            </div>
        </div>
    );
};

const Stat = ({ label, value }) => (
    <div className="flex flex-col items-center">
        <span className="text-xs text-[#898989] mb-1">{label}</span>
        <span className="text-lg font-semibold">{value}</span>
    </div>
);

export default HeaderSection;
