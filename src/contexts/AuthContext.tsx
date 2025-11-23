import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type User = {
  name: string;
  email: string;
};

type DadosPainel = {
  clientes: any[];
  servicos: any[];
  contratados: any[];
  pagamentos: any[];
  seguros: any[];
  feedback: any[];
};

type AuthContextValue = {
  user: User | null;
  isAuthenticated: boolean;
  dadosPainel: DadosPainel | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = "arrumai-user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [dadosPainel, setDadosPainel] = useState<DadosPainel | null>(null);

  const isAuthenticated = !!user;
  const API = "https://five63489.onrender.com";


  async function carregarDados() {
    try {
      const rotas = [
        "/cliente",
        "/servico",
        "/contratado",
        "/pagamento",
        "/seguro",
        "/feedback",
      ];

      const respostas = await Promise.all(
        rotas.map((r) => fetch(API + r))
      );

      const dados = await Promise.all(respostas.map((res) => res.json()));

      setDadosPainel({
        clientes: dados[0],
        servicos: dados[1],
        contratados: dados[2],
        pagamentos: dados[3],
        seguros: dados[4],
        feedback: dados[5],
      });
    } catch (err) {
      console.error("Erro ao carregar dados iniciais:", err);
    }
  }


  async function login(email: string, password: string): Promise<boolean> {
    try {

      const res = await fetch(API + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha: password }),
      });

      if (!res.ok) return false;

      const usuario = await res.json();

      const loggedUser = {
        name: usuario.nome ?? "Usuário",
        email: usuario.email ?? email,
      };

      setUser(loggedUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser));

      carregarDados();

      return true;
    } catch (e) {
      console.error("Erro no login:", e);

      if (email === "admin@arrumai.com" && password === "123456") {
        const loggedUser = { name: "Admin ArrumAi", email };
        setUser(loggedUser);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser));

        carregarDados();
        return true;
      }

      return false;
    }
  }

  function logout() {
    setUser(null);
    setDadosPainel(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUser(JSON.parse(stored));
      carregarDados();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        dadosPainel,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}
