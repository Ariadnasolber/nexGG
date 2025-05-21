// controllers/spellController.js
const { supabase } = require("../supabaseClient");

/**
 * GET /api/summoner_spells
 */
async function getSpells(req, res) {
    const { data, error } = await supabase.from("summoner_spells").select("*");
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
}

/**
 * GET /api/summoner_spells/:id
 */
async function getSpellById(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase
        .from("summoner_spells")
        .select("*")
        .eq("id", id)
        .single();
    if (error) return res.status(404).json({ error: "Spell not found" });
    res.json(data);
}

/**
 * POST /api/summoner_spells
 */
async function createSpell(req, res) {
    const spell = req.body;
    const { data, error } = await supabase
        .from("summoner_spells")
        .insert(spell)
        .select();
    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data[0]);
}

/**
 * PUT /api/summoner_spells/:id
 */
async function updateSpell(req, res) {
    const { id } = req.params;
    const updates = req.body;
    const { data, error } = await supabase
        .from("summoner_spells")
        .update(updates)
        .eq("id", id)
        .select();
    if (error) return res.status(400).json({ error: error.message });
    res.json(data[0]);
}

/**
 * DELETE /api/summoner_spells/:id
 */
async function deleteSpell(req, res) {
    const { id } = req.params;
    const { error } = await supabase
        .from("summoner_spells")
        .delete()
        .eq("id", id);
    if (error) return res.status(400).json({ error: error.message });
    res.status(204).send();
}

module.exports = {
    getSpells,
    getSpellById,
    createSpell,
    updateSpell,
    deleteSpell,
};
