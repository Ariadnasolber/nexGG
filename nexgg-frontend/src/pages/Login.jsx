import { useState, useEffect } from "react";
import { api } from "../services/api"; // Axios configurado

export default function Login() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [emailExists, setEmailExists] = useState(null);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // 🔁 Si el email se borra, volvemos al paso 1
    useEffect(() => {
        if (email.trim() === "") {
            setStep(1);
            setEmailExists(null);
            setMessage("");
            setError("");
        }
    }, [email]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (step === 1) {
            try {
                const res = await api.post("/check-email", { email });
                setEmailExists(res.data.exists);
                setStep(2);
            } catch (err) {
                setError(err.response?.data?.error || "Error al comprobar el correo");
            }
        } else {
            if (emailExists) {
                try {
                    const res = await api.post("/login", { email, password });
                    setMessage("Login exitoso");
                    console.log(res.data);
                } catch (err) {
                    setError("Email o contraseña incorrectos");
                }
            } else {
                try {
                    const res = await api.post("/register", { email, password, username });
                    setMessage("Registro exitoso. Revisa tu correo.");
                    console.log(res.data);
                } catch (err) {
                    setError("No se pudo registrar el usuario.");
                }
            }
        }
    };

    return (
        <div className="flex items-center justify-start h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/talon-bg.jpg')" }}>
            <div className="bg-[#0F1015]/60 px-30 shadow-xl w-160 h-screen pt-70 mt-[104px] rounded-tr-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-300">
                    {step === 1 ? "Login" : emailExists ? "Login" : "Register"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 text-white placeholder-gray-500 w-[402.24px] h-[50.08px] bg-[#16171b] rounded-sm border-[0.40px] border-[#363636]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {step === 2 && emailExists === false && (
                            <p className="text-sm text-yellow-400 mt-1">
                                No se ha encontrado ninguna cuenta vinculada a este correo. Si deseas crear una cuenta, sigue rellenando los datos.
                            </p>
                        )}
                    </div>

                    {step === 2 && !emailExists && (
                        <div>
                            <input
                                type="text"
                                placeholder="Nombre de usuario"
                                className="w-full p-3 text-white placeholder-gray-500 w-[402.24px] h-[50.08px] bg-[#16171b] rounded-sm border-[0.40px] border-[#363636]"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                className="w-full p-3 text-white placeholder-gray-500 w-[402.24px] h-[50.08px] bg-[#16171b] rounded-sm border-[0.40px] border-[#363636]"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-md font-medium hover:bg-blue-700 transition duration-200"
                    >
                        {step === 1 ? "Siguiente" : emailExists ? "Login" : "Register"}
                    </button>

                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {message && <p className="text-green-500 text-sm">{message}</p>}
                </form>
            </div>
        </div>
    );
}
