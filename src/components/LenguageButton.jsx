import React from "react";

const LenguageButton = () => {
    return (
        <button className="ml-2 px-4 py-1 rounded bg-[#282A2F] text-white text-sm font-thin font-sans focus:outline-none hover:bg-gray-950 h-7 w-fit cursor-pointer ring-1 ring-gray-700 flex items-center justify-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <g fill="none" stroke="#ddd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
                        <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
                    </g>
                </svg>
            Español
        </button>
    );
};

export default LenguageButton;