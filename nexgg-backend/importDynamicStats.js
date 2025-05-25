require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

// inicializa Supabase con service Role Key
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SERVICE_ROLE_KEY
);

async function importStats() {
    // lee el json local de dynamic_stats_data.json
    const file = path.join(__dirname, "dynamic_stats_data.json");
    const raw = fs.readFileSync(file, "utf-8");
    const dynamic = JSON.parse(raw);

    // prepara los datos para el upsert
    const rows = dynamic.map((item) => ({
        champion_id: item.id,
        win_rate: item.winRate,
        pick_rate: item.pickRate,
        ban_rate: item.banRate,
        // updated_at se llenará con DEFAULT now()
    }));
    

    // hace el upsert en la tabla dynamic_stats
    const { data, error } = await supabase
        .from("dynamic_stats")
        .upsert(rows, { onConflict: ["champion_id"] })
        .select();

    if (error) {
        console.error("❌ Error importing dynamic stats:", error);
    } else {
        console.log(`✅ Upserted ${data.length} rows into dynamic_stats`);
    }
}

importStats().catch((err) => {
    console.error("Fatal error:", err);
    process.exit(1);
});
