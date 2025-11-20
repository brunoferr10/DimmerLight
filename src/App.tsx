// App.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import Integrantes from "./pages/Integrantes/Integrantes";
import Sobre from "./pages/Sobre/Sobre";
import FAQ from "./pages/FAQ/FAQ";
import Contato from "./pages/Contato/Contato";
import Login from "./pages/Login/Login";

import PainelLayout from "./pages/Painel/PainelLayout";
import Clientes from "./pages/Painel/Cliente/Clientes";
import Servicos from "./pages/Painel/Servicos/Servicos";
import Contratados from "./pages/Painel/Contratados/Contratados";
import Pagamentos from "./pages/Painel/Pagamentos/Pagamentos";
import Seguros from "./pages/Painel/Seguros/Seguros";
import Feedback from "./pages/Painel/Feedback/Feedback";
import HomePainel from "./pages/Painel/HomePainel";

import { useTheme } from "./contexts/ThemeContext";

export default function App() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const location = useLocation();
  const isPainel = location.pathname.startsWith("/painel");

  return (
    <div
      className={`min-h-screen w-full ${
        isDark ? "bg-[#050505] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {!isPainel && <Header />}

      <main className={!isPainel ? "ml-60 flex flex-col min-h-screen" : ""}>
        <Routes>

          {/* SITE */}
          <Route path="/" element={<Home />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />

          {/* PAINEL COM ROTAS INTERNAS */}
          <Route path="/painel" element={<PainelLayout />}>
            <Route index element={<HomePainel />} />
            <Route path="clientes" element={<Clientes />} />
            <Route path="servicos" element={<Servicos />} />
            <Route path="contratados" element={<Contratados />} />
            <Route path="pagamentos" element={<Pagamentos />} />
            <Route path="seguros" element={<Seguros />} />
            <Route path="feedback" element={<Feedback />} />
          </Route>

        </Routes>
      </main>

      {!isPainel && <Footer />}
    </div>
  );
}
