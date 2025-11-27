import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom"; // 👈 necessário para redirecionar

type User = {
  name: string;
  email: string;
  role: "admin" | "montador"; // 🔥 dois perfis disponíveis
};

type AuthContextValue = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

// CONTEXTO
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// 🔐 STORAGE KEY
const STORAGE_KEY = "dimmer-user-login";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate(); // 👈 agora o logout navega corretamente

  const isAuthenticated = !!user;

  // LOGIN COM PERMISSÕES
  async function login(email: string, password: string): Promise<boolean> {
    try {

      // 🔥 ADMINISTRADOR
      if (email === "admin@dimmer.com" && password === "123456") {
        const admin: User = { name: "Admin Dimmer Light", email, role: "admin" };
        setUser(admin);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(admin));
        navigate("/portal");  // 👈 vai para página principal
        return true;
      }

      // 🔥 FUNCIONÁRIO (montador)
      if (email === "montador@dimmer.com" && password === "123456") {
        const montador: User = { name: "Funcionário Dimmer Light", email, role: "montador" };
        setUser(montador);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(montador));
        navigate("/portal"); // 👈 tela inicial personalizada
        return true;
      }

      return false;
    } catch (err) {
      console.error("Erro no login:", err);
      return false;
    }
  }

  // LOGOUT → VOLTA PARA LOGIN
  function logout() {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    navigate("/login");  // 🔥 agora sai corretamente
  }

  // Mantém sessão ativa ao reabrir o app
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// HOOK PARA ACESSAR O CONTEXTO
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}
