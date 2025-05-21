// services/championService.js
const { supabase } = require('../supabaseClient');

const fetchChampions = async () => {
  const { data, error } = await supabase
    .from('champions')
    .select('*');
  if (error) throw error;
  return data; // Devuelve un array de campeones con abilities, stats y metadatos
};

module.exports = { fetchChampions };
