import React from "react";
import ChampionCard from "./ChampionCard";

export default function ChampionGrid({ champions }) {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 sm:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] xs:grid-cols-[repeat(auto-fill,minmax(140px,1fr))] p-5">
            {champions.map((champion) => (
                <ChampionCard key={champion.id} champion={champion} />
            ))}
        </div>
    );
}