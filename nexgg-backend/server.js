const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { supabase } = require("./supabaseClient");
const authRoutes = require("./routes/auth.routes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
    cors({
        origin: ["http://localhost:5173", "http://localhost:5174"],
        credentials: true,
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API de NexGG funcionando 🎯 prueba /test-connection");
});

app.get("/test-connection", async (req, res) => {
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) return res.status(500).json({ error: error.message });
    res.json({ data });
});

// Rutas de auth/login/register
app.use("/api", authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
