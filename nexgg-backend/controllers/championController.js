// controllers/championController.js
const { fetchChampions } = require('../services/championService');

const getChampions = async (req, res) => {
  try {
    const champions = await fetchChampions();
    res.json(champions);
  } catch (error) {
    console.error('Error al obtener campeones:', error.message);
    res.status(500).json({ message: 'Error al obtener campeones' });
  }
};

// Añadimos getChampionById
const getChampionById = async (req, res) => {
  try {
    const { id } = req.params;
    const champions = await fetchChampions();
    const champ = champions.find(c => c.id.toLowerCase() === id.toLowerCase());
    if (!champ) {
      return res.status(404).json({ message: `Champion ${id} not found` });
    }
    res.json(champ);
  } catch (error) {
    console.error(`Error al obtener campeón ${req.params.id}:`, error.message);
    res.status(500).json({ message: 'Error al obtener campeón' });
  }
};

module.exports = { getChampions, getChampionById };

