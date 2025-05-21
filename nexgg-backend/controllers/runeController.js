// controllers/runeController.js
const { supabase } = require("../supabaseClient");

/**
 * GET /api/runes
 */
async function getRunes(req, res) {
    const { data, error } = await supabase.from("runes").select("*");
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
}

/**
 * GET /api/runes/:id
 */
async function getRuneById(req, res) {
    const { id } = req.params;
    const { data, error } = await supabase
        .from("runes")
        .select("*")
        .eq("id", id)
        .single();
    if (error) return res.status(404).json({ error: "Rune not found" });
    res.json(data);
}

/**
 * POST /api/runes
 */
async function createRune(req, res) {
    const rune = req.body;
    const { data, error } = await supabase.from("runes").insert(rune).select();
    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data[0]);
}

/**
 * PUT /api/runes/:id
 */
async function updateRune(req, res) {
    const { id } = req.params;
    const updates = req.body;
    const { data, error } = await supabase
        .from("runes")
        .update(updates)
        .eq("id", id)
        .select();
    if (error) return res.status(400).json({ error: error.message });
    res.json(data[0]);
}

/**
 * DELETE /api/runes/:id
 */
async function deleteRune(req, res) {
    const { id } = req.params;
    const { error } = await supabase.from("runes").delete().eq("id", id);
    if (error) return res.status(400).json({ error: error.message });
    res.status(204).send();
}

module.exports = {
    getRunes,
    getRuneById,
    createRune,
    updateRune,
    deleteRune,
};
