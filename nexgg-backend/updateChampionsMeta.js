// updateChampionsMeta.js
require("dotenv").config();
const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SERVICE_ROLE_KEY;
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function updateMeta() {
    const meta = JSON.parse(fs.readFileSync("champion_meta.json", "utf-8"));
    const keys = Object.keys(meta);

    for (const id of keys) {
        const { species, region, position, gender, range_type, release_year } =
            meta[id];
        const updates = {
            species,
            region,
            position,
            gender,
            range_type,
            release_year,
        };

        const { error } = await supabase
            .from("champions")
            .update(updates)
            .eq("id", id);

        if (error) {
            console.error(`❌ Error updating ${id}:`, error);
        } else {
            console.log(`✅ Updated ${id}`);
        }
    }
}

updateMeta();
