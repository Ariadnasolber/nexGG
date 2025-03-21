import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LenguageButton from "./LenguageButton";
import LolButton from "./LolButton";
import ValoButton from "./ValoButton";


const Navbar = () => {
    return (
        <nav className="bg-[#0F1015]/80 text-gray-300 px-0 flex justify-between items-center flex-col fixed top-0 left-0 w-full z-50 shadow-lg">
            <div className="flex items-center justify-between h-12 w-full pl-8 py-2">
                <div className="flex items-center space-x-4">
                    <img className="h-5 pr-8" src="/NEXGGLOGO.png" alt="" />
                    <Link to="/" className="hover:underline underline-offset-3 text-grey-100 text-sm font-thin">Inicio</Link>
                    <Link to="/campeones" className="hover:underline underline-offset-3 text-sm font-thin text-grey-100 ">Campeones</Link>
                    <Link to="/tierlist" className="hover:underline underline-offset-3 text-sm font-thin text-grey-100 ">Tier List</Link>
                    <Link to="/overlay" className="hover:underline underline-offset-3 text-sm font-thin text-grey-100 ">Build</Link>
                </div>
                <div className="flex items-center justify-end">
                    <LolButton />
                    <ValoButton />
                </div>
            </div>


            <div className="h-14 w-full bg-[#16171B] px-10 py-1 grid grid-cols-3 gap-2 gap-5">
                <div className="flex items-center justify-start gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024">
                        <path fill="#fff" d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z" />
                    </svg>
                </div>
                <div className="flex items-center justify-center">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="px-2 py-1 rounded bg-[#282A2F] text-white text-sm font-thin ring-1 ring-gray-700 hover:bg-gray-950 focus:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-700 w-150 h-7 font-sans"
                    />
                    <LenguageButton />
                </div>
                <div className="flex items-center justify-end">
                    <LoginButton />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;