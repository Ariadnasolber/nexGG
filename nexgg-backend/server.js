// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { supabase } = require("./supabaseClient");

// Importar rutas
const authRoutes = require("./routes/auth.routes");
const championRoutes = require("./routes/champions");
const profileRouter = require("./routes/profileRouter");
const runesRouter = require("./routes/runes");
const spellsRouter = require("./routes/spells");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware de CORS
app.use(
    cors({
        origin: ["http://localhost:5173", "http://localhost:5174"],
        credentials: true,
    })
);

// Middleware para parsear JSON
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
    res.send("API de NexGG funcionando 🎯 prueba /test-connection");
});

// Test Supabase
app.get("/test-connection", async (req, res) => {
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) return res.status(500).json({ error: error.message });
    res.json({ data });
});

// Rutas de autenticación (login, register, etc.)
app.use("/api", authRoutes);

// Rutas de la API
app.use("/api/champions", championRoutes);
app.use("/api/profiles", profileRouter);
app.use("/api/runes", runesRouter);
app.use("/api/summoner_spells", spellsRouter);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
