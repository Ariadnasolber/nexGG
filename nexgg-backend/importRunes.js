// importRunes.js
require("dotenv").config();
const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

// Inicializa el cliente
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SERVICE_ROLE_KEY
);

async function importRunes() {
    const runes = JSON.parse(fs.readFileSync("runes_data.json", "utf-8"));

    const { data, error } = await supabase
        .from("runes")
        .upsert(runes, { onConflict: ["id"] })
        .select();

    if (error) {
        console.error("❌ Import error:", error);
    } else {
        console.log(`✅ Imported ${data.length} runes`);
    }
}

importRunes();