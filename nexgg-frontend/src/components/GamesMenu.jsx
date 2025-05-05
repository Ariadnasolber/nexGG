import React from "react";

const games = [
    { name: "League of Legends", image: "/lol.jpg" },
    { name: "Valorant", image: "/valorant.jpg" },
    { name: "Apex Legends", image: "/apex.jpg" },
    { name: "Overwatch", image: "/overwatch.png" },
    { name: "Counter-Strike", image: "/cs.jpg" },
    { name: "Marvel Rivals", image: "/marvel.jpg" },
];

export default function GamesMenu() {
    return (
        <div className="absolute left-8 top-[115px] w-[95vw] max-w-[500px] z-50 bg-[#16171bcc] backdrop-blur-md p-4 rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-4">
            {games.map((game, index) => (
                <div
                    key={index}
                    className="group bg-[#191a1f] p-2 rounded-lg w-full cursor-pointer overflow-hidden hover:outline-2 hover:outline-[#ff7762]"
                >
                    <div className="flex flex-col items-center transition-transform duration-600 hover:scale-[1.02]">
                        <img
                            src={game.image}
                            alt={game.name}
                            className="w-full h-[120px] object-cover rounded-md"
                        />
                        <span className="text-white text-sm uppercase mt-2 text-center">
                            {game.name}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
