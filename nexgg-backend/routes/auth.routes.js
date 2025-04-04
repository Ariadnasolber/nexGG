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
    const { email, password, username } = req.body;

    // 1. Validación de campos requeridos
    if (!email || !password || !username) {
        return res.status(400).json({ error: "Email, password, and username are required" });
    }

    try {
        // 2. Registro en Supabase Auth
        const { data, error: authError } = await supabase.auth.signUp({
            email,
            password,
        });

        if (authError) {
            console.error("Error en auth:", authError);
            return res.status(400).json({ error: authError.message });
        }

        // 3. Verificar si el usuario se creó correctamente
        if (!data?.user) {
            return res.status(400).json({ 
                error: "User created but requires email verification. Profile will be created after verification." 
            });
        }

        // 4. Crear perfil en la tabla 'profiles'
        const { error: profileError } = await supabase
            .from("profiles")
            .insert({
                user_id: data.user.id, // UUID del usuario
                email: email,
                username: username,
                role: 'user', // Rol por defecto
                created_at: new Date().toISOString() // Campo opcional
            });

        if (profileError) {
            console.error("Error insertando en profiles:", profileError);
            await supabase.auth.admin.deleteUser(data.user.id);
            return res.status(500).json({ error: profileError.message });
        }

        // 5. Respuesta exitosa
        res.json({ 
            user: data.user,
            message: "User registered and profile created successfully" 
        });

    } catch (err) {
        console.error("Error inesperado:", err);
        res.status(500).json({ error: "Internal server error" });
    }
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
