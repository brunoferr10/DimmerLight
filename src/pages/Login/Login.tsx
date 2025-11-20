import { FormEvent, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [email, setEmail] = useState("admin@arrumai.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const ok = await login(email, password);

    if (ok) {
      const redirectTo = location.state?.from || "/painel";
      navigate(redirectTo, { replace: true });
    } else {
      setError("Credenciais inválidas. Use admin@arrumai.com / 123456");
    }
  }

  return (
    <section className="flex items-center justify-center min-h-screen px-4 bg-slate-100 dark:bg-[#0a0a0a]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-[#111] border border-slate-300 dark:border-[#222] rounded-2xl p-8 shadow-xl space-y-4"
      >
        {/* TÍTULO */}
        <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white">
          Acessar o Painel
        </h2>

        <p className="text-xs text-center text-slate-500 dark:text-slate-400">
          Login local apenas para fins acadêmicos.
        </p>

        {/* CAMPO EMAIL */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-700 dark:text-slate-300">
            E-mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm bg-slate-50 dark:bg-[#1a1a1a] 
              border-slate-300 dark:border-[#333] text-slate-800 dark:text-white"
          />
        </div>

        {/* CAMPO SENHA */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-700 dark:text-slate-300">
            Senha
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm bg-slate-50 dark:bg-[#1a1a1a] 
              border-slate-300 dark:border-[#333] text-slate-800 dark:text-white"
          />
        </div>

        {/* ERRO */}
        {error && <p className="text-xs text-red-500">{error}</p>}

        {/* BOTÃO */}
        <button
          type="submit"
          className="w-full rounded-lg bg-orange-600 dark:bg-orange-500 
            hover:bg-orange-700 dark:hover:bg-orange-400 
            text-white text-sm font-semibold py-2 transition-all"
        >
          Entrar
        </button>

        {/* ACESSO PADRÃO */}
        <div className="mt-4 p-3 rounded-lg bg-slate-200 dark:bg-[#1a1a1a] border border-slate-300 dark:border-[#222] text-center">
          <p className="text-xs text-slate-600 dark:text-slate-400">
            🔐 <strong>Acesso padrão:</strong>
          </p>
          <p className="text-xs text-slate-700 dark:text-white mt-1">
            <strong>Email:</strong> admin@arrumai.com
          </p>
          <p className="text-xs text-slate-700 dark:text-white">
            <strong>Senha:</strong> 123456
          </p>
        </div>
      </form>
    </section>
  );
}
