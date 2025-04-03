const express = require("express");
const router = express.Router();
const { supabase } = require("../supabaseClient");

// Check if email exists
router.post("/check-email", async (req, res) => {
    const { email } = req.body;

    const { data, error } = await supabase
        .from("profiles")
        .select("id")
        .eq("email", email)
        .maybeSingle();

    if (error) return res.status(500).json({ error: error.message });

    res.json({ exists: !!data });
});

// Register user
router.post("/register", async (req, res) => {
    const { email, password, username, role } = req.body;

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) return res.status(400).json({ error: error.message });

    const user_id = data.user.id;
    const user_role = 'user';

    const { error: profileError } = await supabase.from("profiles").insert([
        {
            user_id,
            email,
            username,
            role: user_role,
        },
    ]);

    if (profileError) {
        console.error("Error insertando en profiles:", profileError);
        return res.status(500).json({ error: profileError.message });
    }

    res.json({ user: data.user });
});

// Login user
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) return res.status(400).json({ error: error.message });

    res.json({ user: data.user, session: data.session });
});

module.exports = router;
