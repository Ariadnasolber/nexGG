import { champions } from "../lib/champions";

export default function ChampionCard({ champion }) {
    const difficultyClass = {
        Easy: "text-green-400",
        Moderate: "text-yellow-400",
        Hard: "text-red-400",
    };

    const roleClass = {
        Top: "bg-blue-500",
        Jungle: "bg-green-500",
        Mid: "bg-purple-500",
        Bot: "bg-red-500",
        Support: "bg-yellow-400",
    };

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-40 w-full overflow-hidden">
                <img
                    src={champion.splash || `/placeholder.svg?height=160&width=300`}
                    alt={champion.name}
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3">
                    <h3 className="text-lg font-bold">{champion.name}</h3>
                    <p className="text-sm text-gray-300">{champion.title}</p>
                </div>
                <div className="absolute top-2 right-2 flex gap-1">
                    {champion.roles.map((role) => (
                        <span
                            key={role}
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${roleClass[role]}`}
                            title={role}
                        >
                            {role.charAt(0)}
                        </span>
                    ))}
                </div>
            </div>
            <div className="p-3">
                <div className="flex justify-between mb-2 text-xs">
                    <div>
                        <span className="text-gray-400">Difficulty: </span>
                        <span className={`${difficultyClass[champion.difficulty]} font-medium`}>
                            {champion.difficulty}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-400">Win Rate: </span>
                        <span className="text-white font-medium">{champion.winRate}%</span>
                    </div>
                </div>
                <div className="flex justify-between text-xs">
                    <div>
                        <span className="text-gray-400">Pick Rate: </span>
                        <span className="text-white font-medium">{champion.pickRate}%</span>
                    </div>
                    <div>
                        <span className="text-gray-400">Ban Rate: </span>
                        <span className="text-white font-medium">{champion.banRate}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
