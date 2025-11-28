import { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpeg";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");         // ❗ LIMPO
  const [password, setPassword] = useState("");   // ❗ LIMPO
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);  // 🔥 Estado de carregamento

  // 🚀 Acorda a API automaticamente quando abrir a tela
  useEffect(() => {
    fetch("https://dimmerlight.onrender.com/login").catch(() => {});
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true); // 🔥 Ativa animação

    const result = await login(email, password);

    setLoading(false);

    if (result.ok) {
      navigate("/portal");
    } else {
      setError(result.msg || "Erro ao fazer login.");
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex items-center justify-center px-6 bg-[#0a0d14]"
    >

      <motion.form
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9 }}
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#111827] border border-[#334155] p-10 
        rounded-3xl shadow-xl text-white space-y-6"
      >

        <div className="text-center flex flex-col items-center">
          <img src={logo} className="w-24 h-24 rounded-full border-4 border-[#3b82f6]" />
          <h2 className="text-2xl font-bold mt-4">Dimmer Light</h2>
        </div>

        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          className="w-full p-3 rounded bg-[#1e293b] border border-[#334155]"
          required
        />

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Digite sua senha"
          className="w-full p-3 rounded bg-[#1e293b] border border-[#334155]"
          required
        />

        {error && <p className="text-red-400 text-center">{error}</p>}

        <motion.button
          whileHover={{ scale: !loading ? 1.05 : 1 }}
          disabled={loading}
          className={`w-full p-3 rounded font-bold transition-all 
          ${loading ? "bg-[#1d4ed8]" : "bg-[#3b82f6] hover:bg-[#2563eb]"}`}
        >
          {loading ? "🔄 Entrando..." : "Entrar"} {/* 🔥 ANIMAÇÃO */}
        </motion.button>

      </motion.form>
    </motion.section>
  );
}
