import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ placeholder = "Search...", onChange, value }) {
    return (
        <div className="relative w-full max-w-md mb-6">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                <Search size={16} />
            </div>
            <input
                type="text"
                className="w-full pl-10 pr-4 py-2 bg-[#0D1117] border border-gray-800 rounded text-sm text-white focus:outline-none focus:border-[#FF4655] focus:ring-2 focus:ring-[#FF4655]/30"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
