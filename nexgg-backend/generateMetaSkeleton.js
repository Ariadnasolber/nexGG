// generateMetaSkeleton.js
const fs = require("fs");

// Lee todos los campeones que ya importaste
const champions = JSON.parse(fs.readFileSync("champions_data.json", "utf-8"));
const meta = {};

// Crea la estructura vacía para cada campeón
for (const champ of champions) {
    meta[champ.id] = {
        species: null,
        region: null,
        position: [], // e.g. ["Mid"]
        gender: null,
        range_type: null,
        release_year: null,
    };
}

// Guarda el skeleton
fs.writeFileSync("champion_meta.json", JSON.stringify(meta, null, 2));
console.log("✅ Skeleton champion_meta.json generado");
