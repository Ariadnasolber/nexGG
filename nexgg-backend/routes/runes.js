// routes/runes.js
const express = require("express");
const router = express.Router();

const {
    getRunes,
    getRuneById,
    createRune,
    updateRune,
    deleteRune,
} = require("../controllers/runeController");

// GET    /api/runes
router.get("/", getRunes);

// GET    /api/runes/:id
router.get("/:id", getRuneById);

// POST   /api/runes
router.post("/", createRune);

// PUT    /api/runes/:id
router.put("/:id", updateRune);

// DELETE /api/runes/:id
router.delete("/:id", deleteRune);

module.exports = router;
