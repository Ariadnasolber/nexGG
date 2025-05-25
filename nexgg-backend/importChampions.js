require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SERVICE_ROLE_KEY;
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function importChampions() {
    //busca la última versión de los assets
    const versionsRes = await axios.get(
        "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const VERSION = versionsRes.data[0];
    const LANG = "en_US";
    const BASE_URL = `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/${LANG}`;

    // lo descarga
    const listRes = await axios.get(`${BASE_URL}/champion.json`);
    const keys = Object.keys(listRes.data.data);

    const champions = [];
    // crea un array de objetos con la info
    for (const key of keys) {
        const champRes = await axios.get(`${BASE_URL}/champion/${key}.json`);
        const champ = champRes.data.data[key];

        champions.push({
            id: champ.id,
            name: champ.name,
            title: champ.title,
            species: null,
            region: null,
            position: [],
            gender: null,
            resource: champ.partype,
            range_type: null,
            tags: champ.tags,
            icon_url: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/champion/${champ.image.full}`,
            splash_url: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`,
            abilities: {
                passive: {
                    name: champ.passive.name,
                    description: champ.passive.description,
                    icon: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/passive/${champ.passive.image.full}`,
                },
                Q: {
                    /* … */
                },
                W: {
                    /* … */
                },
                E: {
                    /* … */
                },
                R: {
                    /* … */
                },
            },
            stats: champ.stats,
            release_year: null,
            created_at: new Date().toISOString(),
        });
    }

    // inserta o actualiza los campeones en la base de datos
    const { data, error } = await supabase
        .from("champions")
        .upsert(champions, { onConflict: ["id"] })
        .select();

    if (error) console.error("Import error:", error);
    else console.log(`✅ Imported ${data.length} champions`);
}

importChampions();
