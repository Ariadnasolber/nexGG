
import SearchBar from "../ui/SearchBar";
import FilterBar from "../ui/FilterBar";
import ChampionGrid from "../ui/ChampionGrid";


export default function CampeonesPage() {
    return (
        <div className="min-h-screen bg-[#0D1117] text-white">
            {/* Cabecera con imagen de fondo */}
            <div className="relative h-200 bg-cover bg-no-repeat bg-[center_0%] flex items-center justify-center flex-col text-center" 
                style={{ backgroundImage: `url('/bg-missfortune.jpeg')` }} // Cambia esta ruta por la de tu imagen
            >
                {/* Capa oscura */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Contenido de la cabecera */}
                <div className="relative z-10 flex items-center justify-center flex-col">
                    <h1 className="text-4xl font-bold text-white px-4 py-2">
                        Champions
                    </h1>
                    <p className="text-white mb-6">
                        View all League of Legends champions, their stats, and performance data.
                    </p>
                    <SearchBar placeholder="Search Champions..." />
                </div>
            </div>

            {/* Contenido principal */}
            <div className="max-w-[1200px] mx-auto px-4 py-6">
                <FilterBar />
                <ChampionGrid />
            </div>
        </div>
    );
}