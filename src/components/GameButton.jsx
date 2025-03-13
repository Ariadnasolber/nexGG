import React from "react";

const GameButton = () => {
    return (
        <button className="m-0 rounded-full bg-[#0F0F12] text-white text-sm font-thin focus:outline-none hover:bg-gray-950 h-7 w-fit cursor-pointer ring-1 ring-gray-800 flex items-center justify-start gap-1 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                <path fill="#ddd" fill-opacity="0.25" d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0" />
                <circle cx="12" cy="10" r="4" fill="#ddd" />
                <path fill="#ddd" fill-rule="evenodd" d="M18.22 18.246c.06.097.041.22-.04.297A8.97 8.97 0 0 1 12 21a8.97 8.97 0 0 1-6.18-2.457a.24.24 0 0 1-.04-.297C6.942 16.318 9.291 15 12 15s5.057 1.318 6.22 3.246" clip-rule="evenodd" />
            </svg>
            <span className="pr-2">Iniciar sesión</span>
        </button>
    );
};

export default GameButton;