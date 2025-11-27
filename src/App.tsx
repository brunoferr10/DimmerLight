import { Routes, Route, useLocation } from "react-router-dom";
import Splash from "./pages/Splash/Splash"; // 👈 adicione
import Login from "./pages/Login/Login";
import HomePortal from "./pages/Home/Home"; // Novo Dashboard pós login
import EventosDaniel from "./pages/EventosDaniel/EventosDaniel";

export default function App() {
  return (
    <Routes>
      
      {/* PRIMEIRA TELA */}
      <Route path="/" element={<Splash />} />

      {/* LOGIN */}
      <Route path="/login" element={<Login />} />

      {/* PORTAL PRINCIPAL PÓS-LOGIN */}
      <Route path="/portal" element={<HomePortal />} />

      {/* AÇÕES INTERNAS */}
      <Route path="/eventosDaniel" element={<EventosDaniel />} />

      {/* (Depois adicionaremos históricos, pagamentos etc) */}

    </Routes>
  );
}
