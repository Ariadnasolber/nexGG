const fs = require("fs");
const axios = require("axios");

async function getRunes() {
    // obtiene la última versión de las runas
    const versionsRes = await axios.get(
        "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const VERSION = versionsRes.data[0];
    const URL = `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/en_US/runesReforged.json`;

    // descarga el JSON
    const res = await axios.get(URL);
    const data = res.data;

    // lo transforma a un array 
    const runes = [];
    data.forEach((style) => {
        const styleName = style.name; // e.g. "Domination"
        style.slots.forEach((slot, slotIndex) => {
            slot.runes.forEach((rune) => {
                runes.push({
                    id: rune.id,
                    name: rune.name,
                    description: rune.shortDesc.replace(/<[^>]+>/g, ""), // quita etiquetas HTML
                    icon_url: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/perk/${rune.icon}`,
                    style: styleName,
                    keystone: slotIndex === 0,
                });
            });
        });
    });

    // lo guarda en runes_data.json
    fs.writeFileSync("runes_data.json", JSON.stringify(runes, null, 2));
    console.log(`✅ Generated ${runes.length} runes in runes_data.json`);
}

getRunes().catch(console.error);
