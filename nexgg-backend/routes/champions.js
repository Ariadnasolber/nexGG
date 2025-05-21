// routes/champions.js
const express = require("express");
const router = express.Router();
const {
    getChampions,
    getChampionById,
} = require("../controllers/championController");

router.get("/", getChampions);
router.get("/:id", getChampionById);

module.exports = router;
