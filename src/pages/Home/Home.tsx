import { motion } from "framer-motion";
import { Calendar, PlusCircle, ClipboardList, DollarSign, Users, Mic, LogOut } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { useAuth } from "../../contexts/AuthContext";
import { Link, Navigate } from "react-router-dom";

export default function Portal() {
  const { logout, user } = useAuth();

  // 🔒 impede acesso ao portal sem login
  if (!user) return <Navigate to="/login" replace />;

  /** 🔥 MENU DO ADMIN */
  const cardsAdmin = [
    { label: "Funcionários / Equipe", icon: <Users size={28} />, to: "/funcionarios" },
    { label: "Valores & Pagamentos", icon: <DollarSign size={28} />, to: "/pagamentos" },
    { label: "Gerenciar Usuários", icon: <Users size={28} />, to: "/usuarios" },
    { label: "Artistas & Cachês", icon: <Mic size={28} />, to: "/artistas" } // 🔥 NOVO CARD ADICIONADO
  ];

  /** 🔥 MENU DO MONTADOR */
  const cardsMontador = [
    { label: "Novo Evento", icon: <PlusCircle size={28} />, to: "/novo-evento" },
    { label: "Meus Eventos", icon: <ClipboardList size={28} />, to: "/meus-eventos" }
  ];

  const menu = user.role === "admin" ? cardsAdmin : cardsMontador;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen w-full bg-[#070d18] text-white px-10 py-10 overflow-hidden"
    >
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-14">
        <div>
          <p className="text-sm text-gray-400">Bem-vindo(a)</p>
          <h1 className="text-xl font-bold">{user.name}</h1>
        </div>

        <div className="flex items-center gap-5">
          <img src={logo} className="w-12 h-12 rounded-full border border-[#3b82f6] shadow-lg" />

          <button
            onClick={logout}
            className="px-5 py-2 flex items-center gap-2 bg-red-600 hover:bg-red-700
            rounded-lg text-white font-medium transition"
          >
            <LogOut size={18}/> Sair
          </button>
        </div>
      </div>

      {/* MENU */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        {menu.map((card,i)=>(
          <motion.div
            key={i}
            whileHover={{scale:1.04}}
            transition={{type:"spring",stiffness:160}}
            className="bg-[#0f172a] border border-[#1e3a8a]/60 p-9 rounded-2xl shadow-xl
            hover:border-[#3b82f6] hover:shadow-[0_0_25px_#3b82f6] cursor-pointer"
          >
            <Link to={card.to} className="flex items-center gap-6">
              <span className="text-[#3b82f6]">{card.icon}</span>
              <h2 className="text-lg font-semibold">{card.label}</h2>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
