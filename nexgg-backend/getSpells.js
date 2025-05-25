const fs = require("fs");
const axios = require("axios");

async function getSpells() {

    const versionsRes = await axios.get(
        "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const VERSION = versionsRes.data[0];
    const URL = `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/en_US/summoner.json`;
    const res = await axios.get(URL);
    const data = res.data.data;


    const spells = Object.values(data).map((spell) => ({
        id: parseInt(spell.key, 10), // ID como entero
        name: spell.name,
        description: spell.description.replace(/<[^>]+>/g, ""),
        cooldown: Array.isArray(spell.cooldown) ? spell.cooldown : null,
        icon_url: `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${spell.image.full}`,
        created_at: new Date().toISOString(),
    }));


    fs.writeFileSync("spells_data.json", JSON.stringify(spells, null, 2));
    console.log(`✅ Generated ${spells.length} spells in spells_data.json`);
}

getSpells().catch(console.error);
