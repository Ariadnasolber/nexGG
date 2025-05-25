const fs = require("fs");
const axios = require("axios");

const VERSION = "14.10.1";
const LANG = "en_US";
const BASE_URL = `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/${LANG}`;

async function getChampions() {
    // obtiene la lista de campeones
    const response = await axios.get(`${BASE_URL}/champion.json`);
    const champions = response.data.data;
    const result = [];

    // itera sobre cada campeón y obtiene sus detalles
    for (const key of Object.keys(champions)) {
        const res = await axios.get(`${BASE_URL}/champion/${key}.json`);
        const champ = res.data.data[key];

        const abilities = {
            passive: {
                name: champ.passive.name,
                description: champ.passive.description,
                icon: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/passive/${champ.passive.image.full}`,
            },
            Q: {
                name: champ.spells[0].name,
                description: champ.spells[0].description,
                icon: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${champ.spells[0].image.full}`,
            },
            W: {
                name: champ.spells[1].name,
                description: champ.spells[1].description,
                icon: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${champ.spells[1].image.full}`,
            },
            E: {
                name: champ.spells[2].name,
                description: champ.spells[2].description,
                icon: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${champ.spells[2].image.full}`,
            },
            R: {
                name: champ.spells[3].name,
                description: champ.spells[3].description,
                icon: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${champ.spells[3].image.full}`,
            },
        };

        // crea el objeto del campeón
        result.push({
            id: champ.id,
            name: champ.name,
            title: champ.title,
            species: null,
            region: null,
            position: [], // Completarás manualmente
            gender: null,
            resource: champ.partype,
            range_type: null,
            tags: champ.tags,
            icon_url: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/champion/${champ.image.full}`,
            splash_url: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`,
            abilities,
            stats: champ.stats,
            release_year: null,
            created_at: new Date().toISOString(),
        });
    }

    // lo guarda en el JSON
    fs.writeFileSync("champions_data.json", JSON.stringify(result, null, 2));
    console.log("✅ Campeones guardados en champions_data.json");
}


getChampions();
