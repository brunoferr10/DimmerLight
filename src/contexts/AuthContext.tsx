import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type User = {
  name: string;
  email: string;
};

type AuthContextValue = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

// CONTEXTO
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// STORAGE atualizado
const STORAGE_KEY = "dimmer-user-login";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  // LOGIN ATUALIZADO + SIMPLIFICADO
  async function login(email: string, password: string): Promise<boolean> {
    try {

      // LOGIN LOCAL — por enquanto sem API
      if (email === "admin@dimmer.com" && password === "123456") {
        const loggedUser = { name: "Admin Dimmer Light", email };
        setUser(loggedUser);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser));
        return true;
      }

      return false;
    } catch {
      return false;
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  // Mantém usuário logado ao reabrir app
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

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}
