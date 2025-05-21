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
                className="w-full pl-10 pr-4 py-2 bg-[#0D1117] border border-gray-800 rounded text-sm text-white focus:outline-none focus:border-[#ff7762] focus:ring-2 focus:ring-[#ff7146]/30"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search champions..."
        className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
      />
    </div>
  );
}