// importSpells.js
require("dotenv").config();
const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SERVICE_ROLE_KEY
);

async function importSpells() {
    const spells = JSON.parse(fs.readFileSync("spells_data.json", "utf-8"));

    const { data, error } = await supabase
        .from("summoner_spells")
        .upsert(spells, { onConflict: ["id"] })
        .select();

    if (error) {
        console.error("❌ Import error:", error);
    } else {
        console.log(`✅ Imported ${data.length} spells`);
    }
}

importSpells();
