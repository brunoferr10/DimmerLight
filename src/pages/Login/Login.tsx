import { FormEvent, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpeg";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [email, setEmail] = useState("admin@dimmer.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const ok = await login(email, password);

    if (ok) {
      const redirectTo = location.state?.from || "/portal";
      navigate(redirectTo, { replace: true });
    } else {
      setError("Credenciais inválidas. Tente novamente.");
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex items-center justify-center px-6
      bg-gradient-to-b from-[#0a0d14] to-[#0f172a]"
    >

      <motion.form
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#0f172a]/50 border border-[#203454]
        backdrop-blur-xl rounded-3xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.35)]
        text-white space-y-6"
      >

        {/* LOGO REDONDO */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center gap-4 mb-3"
        >
          <img
            src={logo}
            className="w-24 h-24 rounded-full border-4 border-[#3b82f6] shadow-xl
            drop-shadow-[0_0_25px_#3b82f6] animate-[pulse_3s_ease-in-out_infinite]"
          />

          <h2 className="text-2xl font-bold tracking-wide text-center text-gray-200">
            Bem-vindo ao Sistema<br />
            <span className="text-[#3b82f6] font-extrabold">Dimmer Light</span>
          </h2>
        </motion.div>

        {/* CAMPO EMAIL */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-[#b7c4dd]">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 rounded-lg bg-[#1a2335] border border-[#334155]
            focus:border-[#3b82f6] outline-none text-sm"
            required
          />
        </div>

        {/* CAMPO SENHA */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-[#b7c4dd]">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 rounded-lg bg-[#1a2335] border border-[#334155]
            focus:border-[#3b82f6] outline-none text-sm"
            required
          />
        </div>

        {/* ERRO */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-red-400 text-center"
          >
            {error}
          </motion.p>
        )}

        {/* BOTÃO */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          type="submit"
          className="w-full py-3 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb]
          font-semibold text-sm tracking-wide shadow-lg transition-all"
        >
          Entrar
        </motion.button>

      </motion.form>
    </motion.section>
  );
}
