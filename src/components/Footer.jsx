import React from "react";
import { FaTwitter, FaDiscord, FaTwitch, FaYoutube, FaWindows } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0e0e10] text-gray-300 py-12 px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between">
                {/* Logo y Botón de Descarga */}
                <div className="flex flex-col items-center lg:items-start space-y-4">
                    <div className="flex items-center space-x-2">
                        <span className="text-red-500 text-3xl font-bold"></span>

                        <img className="h-5" src="/NEXGGLOGO.png" alt="" />
                    </div>

                    <p className="text-gray-500 text-xs">Hecho con mucho amor en Barcelona</p>
                </div>

                {/* Sección central (Links) */}
                <div className="grid grid-cols-3 gap-6 mt-10 lg:mt-0 text-sm">
                    <div>
                        <h3 className="text-gray-400 uppercase font-semibold mb-2">Compañía</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-white">Sobre nosotros</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-400 uppercase font-semibold mb-2">Sociales</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-white">Facebook</a></li>
                            <li><a href="#" className="hover:text-white">Twitter</a></li>
                            <li><a href="#" className="hover:text-white">Instagram</a></li>
                            <li><a href="#" className="hover:text-white">TikTok</a></li>
                            <li><a href="#" className="hover:text-white">Nuestro Discord</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-400 uppercase font-semibold mb-2">Juegos Disponibles</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-white">League of Legends</a></li>
                            <li><a href="#" className="hover:text-white">VALORANT</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Redes Sociales */}
            <div className="flex justify-center mt-10 space-x-4 text-gray-400">
                <a href="#" className="hover:text-white"><FaTwitter size={24} /></a>
                <a href="#" className="hover:text-white"><FaDiscord size={24} /></a>
                <a href="#" className="hover:text-white"><FaTwitch size={24} /></a>
                <a href="#" className="hover:text-white"><FaYoutube size={24} /></a>
            </div>


            {/* Copyright */}
            <div className="text-center text-gray-500 text-xs mt-4 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Nex.gg - Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;