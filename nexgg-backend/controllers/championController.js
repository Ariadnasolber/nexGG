const { fetchChampions } = require('../services/championService');

const getChampions = async (req, res) => {
  try {
    const champions = await fetchChampions();
    res.json(champions);  // Devuelve el array de campeones al frontend
  } catch (error) {
    console.error('Error al obtener campeones:', error.message);
    res.status(500).json({ message: 'Error al obtener campeones' });
  }
};

module.exports = { getChampions };
