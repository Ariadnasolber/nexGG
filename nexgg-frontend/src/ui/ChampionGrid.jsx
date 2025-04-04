import { champions } from "../lib/champions";
import ChampionCard from "./ChampionCard";

export default function ChampionGrid() {
    const filteredChampions = champions; // si más adelante filtrás, podés recibir `champions` como prop

    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 sm:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] xs:grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
            {filteredChampions.map((champion) => (
                <ChampionCard key={champion.id} champion={champion} />
            ))}
        </div>
    );
}
