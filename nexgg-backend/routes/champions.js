const express = require('express');
const router = express.Router();
const { getChampions } = require('../controllers/championController');

router.get('/', getChampions);  // La ruta para obtener todos los campeones

module.exports = router;
