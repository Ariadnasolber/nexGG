const { supabase } = require("../supabaseClient");

const fetchChampions = async () => {
  // 1) Carga todos los campeones
  const { data: champs, error: champErr } = await supabase
    .from("champions")
    .select("*");
  if (champErr) throw champErr;

  // 2) Carga todas las stats dinámicas
  const { data: stats, error: statsErr } = await supabase
    .from("dynamic_stats")
    .select("champion_id, win_rate, pick_rate, ban_rate");
  if (statsErr) throw statsErr;

  // 3) Construye un mapa { [champion_id]: statObj }
  const statsMap = stats.reduce((acc, s) => {
    acc[s.champion_id] = s;
    return acc;
  }, {});

  // 4) Devuelve el array de campeones, inyectando los campos de stats
  return champs.map((champ) => {
    const s = statsMap[champ.id] || { win_rate: 0, pick_rate: 0, ban_rate: 0 };
    return {
      ...champ,
      // renombramos para mantener la consistencia con tu frontend
      win_rate: s.win_rate,
      pick_rate: s.pick_rate,
      ban_rate: s.ban_rate,
    };
  });
};

module.exports = { fetchChampions };