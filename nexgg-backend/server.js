const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { supabase } = require("./supabaseClient");

// Importar rutas
const authRoutes = require("./routes/auth.routes");
const championRoutes = require("./routes/champions"); // ← NUEVO: importamos las rutas de campeones

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

// Ruta base
app.get("/", (req, res) => {
    res.send("API de NexGG funcionando 🎯 prueba /test-connection");
});

// Test Supabase
app.get("/test-connection", async (req, res) => {
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) return res.status(500).json({ error: error.message });
    res.json({ data });
});

// Rutas de auth/login/register
app.use("/api", authRoutes);

// Rutas de campeones
app.use("/api/champions", championRoutes); // ← NUEVO: activamos la ruta de campeones

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
