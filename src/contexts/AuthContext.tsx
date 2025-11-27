import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

// Tipo padrão vindo do backend
type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "montador";
};

type AuthContextValue = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; msg: string }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// STORAGE
const STORAGE_KEY = "dimmer-user-login";

// URL do login
const API_URL = "https://dimmerlight.onrender.com/login/auth";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const isAuthenticated = !!user;

  // LOGIN CORRIGIDO ✔
  async function login(email: string, password: string) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dsEmail: email, dsSenha: password })
      });

      if (!response.ok) return { ok: false, msg: "E-mail ou senha inválidos" };

      const data = await response.json();

      const loggedUser: User = {
        id: data.idLogin,
        name: data.nmUsuario,
        email: data.dsEmail,
        role: data.tpRole.toUpperCase() === "ADMIN" ? "admin" : "montador"
      };

      setUser(loggedUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser));

      navigate("/portal");
      return { ok: true, msg: "Login bem-sucedido!" };

    } catch (e) {
      return { ok: false, msg: "Erro ao conectar ao servidor!" };
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    navigate("/login");
  }

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setUser(JSON.parse(saved));
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro do AuthProvider");
  return ctx;
}
