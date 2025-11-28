import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { wakeBackend } from "./utils/warmup";  // ⬅ WAKE UP BACK-END

/* PÁGINAS */
import Splash from "./pages/Splash/Splash";
import Login from "./pages/Login/Login";
import Portal from "./pages/Home/Home";
import Usuarios from "./pages/Usuarios/Usuarios";
import NovoEvento from "./pages/NovoEvento/NovoEvento";
import MeusEventos from "./pages/MeusEventos/MeusEventos";
import FuncionariosEquipe from "./pages/Funcionarios/FuncionariosEquipe";
import Artistas from "./pages/Artistas/Artistas";

/* CONTEXTO */
import { useAuth } from "./contexts/AuthContext";

/* ========================== TRANSIÇÃO VISUAL ========================== */
function PageTransition({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
}

/* ======================= PROTEÇÃO POR LOGIN ======================= */
function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

/* ======================= APENAS ADMIN ======================= */
function AdminRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  return user?.role === "admin" ? children : <Navigate to="/portal" replace />;
}

/* ============================= APP ============================= */
export default function App() {
  const location = useLocation();

  /* ⬇ AUTO WAKE BACKEND (Render não dorme mais 💙) */
  useEffect(() => {
    wakeBackend();                         // Acorda na entrada
    const interval = setInterval(wakeBackend, 5 * 60 * 1000); // mantém vivo
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#060b15] text-white overflow-hidden">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          {/* ROTAS LIVRES */}
          <Route path="/" element={<PageTransition><Splash /></PageTransition>} />
          <Route path="/login" element={<PageTransition><Login /></PageTransition>} />

          {/* ROTAS PRIVADAS */}
          <Route path="/portal" element={<PrivateRoute><PageTransition><Portal /></PageTransition></PrivateRoute>} />
          <Route path="/novo-evento" element={<PrivateRoute><PageTransition><NovoEvento /></PageTransition></PrivateRoute>} />
          <Route path="/meus-eventos" element={<PrivateRoute><PageTransition><MeusEventos /></PageTransition></PrivateRoute>} />

          {/* ADMIN ONLY */}
          <Route path="/usuarios" element={<AdminRoute><PageTransition><Usuarios /></PageTransition></AdminRoute>} />
          <Route path="/funcionarios" element={<AdminRoute><PageTransition><FuncionariosEquipe /></PageTransition></AdminRoute>} />
          <Route path="/artistas" element={<AdminRoute><PageTransition><Artistas /></PageTransition></AdminRoute>} />

          {/* DEFAULT */}
          <Route path="*" element={<Navigate to="/login" replace />} />

        </Routes>
      </AnimatePresence>
    </div>
  );
}
