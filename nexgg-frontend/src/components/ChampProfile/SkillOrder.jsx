import React from "react";

const SkillOrder = ({ order }) => {
    return (
        <div className="overflow-x-auto">
            {/* Header fila: Level */}
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

            {/* Fila: habilidades */}
            <div className="flex min-w-max">
                <div className="w-[60px] h-[30px] flex items-center justify-center text-xs bg-[#282A2F] border border-[#282A2F]">
                    Skill
                </div>
                {order.map((skill, i) => (
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
    );
};

export default SkillOrder;
