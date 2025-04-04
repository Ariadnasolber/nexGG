const axios = require('axios');

const fetchChampions = async () => {
  const response = await axios.get(
    'https://ddragon.leagueoflegends.com/cdn/14.7.1/data/en_US/champion.json'
  );
  return Object.values(response.data.data); // Devuelve un array de campeones
};

module.exports = { fetchChampions };
