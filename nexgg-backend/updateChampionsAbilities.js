// updateChampionsAbilities.js
require("dotenv").config();
const axios = require("axios");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SERVICE_ROLE_KEY
);

async function run() {
    // 1) Saca todos los IDs de campeones
    const { data: champs, error: err1 } = await supabase
        .from("champions")
        .select("id");
    if (err1) throw err1;

    // 2) Obtén la última versión de DD
    const versions = await axios.get(
        "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const VERSION = versions.data[0];
    const LANG = "en_US";
    const BASE = `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/${LANG}`;

    for (const { id } of champs) {
        try {
            // 3) Descarga datos del campeón
            const res = await axios.get(`${BASE}/champion/${id}.json`);
            const champ = res.data.data[id];

            // 4) Construye el JSON de abilities
            const abilities = {
                passive: {
                    name: champ.passive.name,
                    description: champ.passive.description,
                    icon: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/passive/${champ.passive.image.full}`,
                },
                Q: {
                    name: champ.spells[0].name,
                    description: champ.spells[0].description.replace(
                        /<[^>]+>/g,
                        ""
                    ),
                    icon: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${champ.spells[0].image.full}`,
                },
                W: {
                    name: champ.spells[1].name,
                    description: champ.spells[1].description.replace(
                        /<[^>]+>/g,
                        ""
                    ),
                    icon: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${champ.spells[1].image.full}`,
                },
                E: {
                    name: champ.spells[2].name,
                    description: champ.spells[2].description.replace(
                        /<[^>]+>/g,
                        ""
                    ),
                    icon: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${champ.spells[2].image.full}`,
                },
                R: {
                    name: champ.spells[3].name,
                    description: champ.spells[3].description.replace(
                        /<[^>]+>/g,
                        ""
                    ),
                    icon: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${champ.spells[3].image.full}`,
                },
            };

            // 5) Actualiza Supabase solo ese campo
            const { error: err2 } = await supabase
                .from("champions")
                .update({ abilities })
                .eq("id", id);

            if (err2) {
                console.error(
                    `❌ Error updating abilities for ${id}:`,
                    err2.message
                );
            } else {
                console.log(`✅ Updated abilities for ${id}`);
            }
        } catch (e) {
            console.error(`⚠️ Failed to fetch/update ${id}:`, e.message);
        }
    }
}

run();
