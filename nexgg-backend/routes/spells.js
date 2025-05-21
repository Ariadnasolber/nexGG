// routes/spells.js
const express = require('express');
const router  = express.Router();

const {
  getSpells,
  getSpellById,
  createSpell,
  updateSpell,
  deleteSpell
} = require('../controllers/spellController');

// GET    /api/summoner_spells
router.get('/', getSpells);

// GET    /api/summoner_spells/:id
router.get('/:id', getSpellById);

// POST   /api/summoner_spells
router.post('/', createSpell);

// PUT    /api/summoner_spells/:id
router.put('/:id', updateSpell);

// DELETE /api/summoner_spells/:id
router.delete('/:id', deleteSpell);

module.exports = router;
