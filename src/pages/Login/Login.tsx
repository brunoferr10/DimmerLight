import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpeg";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@dimmer.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const result = await login(email, password);

    if (result.ok) {
      navigate("/portal");
    } else {
      setError(result.msg);
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
        className="w-full max-w-md bg-[#111827] border border-[#334155] p-10 rounded-3xl shadow-xl text-white space-y-6"
      >

        <div className="text-center flex flex-col items-center">
          <img src={logo} className="w-24 h-24 rounded-full border-4 border-[#3b82f6]" />
          <h2 className="text-2xl font-bold mt-4">Dimmer Light</h2>
        </div>

        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="E-mail"
          className="w-full p-3 rounded bg-[#1e293b] border border-[#334155]"
        />

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
          className="w-full p-3 rounded bg-[#1e293b] border border-[#334155]"
        />

        {error && <p className="text-red-400 text-center">{error}</p>}

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full p-3 rounded bg-[#3b82f6] font-bold"
        >
          Entrar
        </motion.button>

      </motion.form>
    </motion.section>
  );
}
