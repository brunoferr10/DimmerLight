import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

export default function HomePortal() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white p-8">

      {/* Cabeçalho com perfil/resumo */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-gray-400 text-sm">Bem-vindo(a)</p>
          <h2 className="text-xl font-semibold">Usuário Dimmer Light</h2>
        </div>
        <img src={logo} className="w-14 rounded-full border border-[#3b82f6]"/>
      </div>

      {/* MENU PRINCIPAL — estilo cartão de app */}
      <div className="grid grid-cols-2 gap-5">

        <button onClick={() => nav("/eventosDaniel")}
          className="bg-[#111827] p-6 rounded-xl border border-[#3b82f6] shadow-lg hover:scale-105 transition">
          📅 Eventos Daniel
        </button>

        <button className="bg-[#111827] p-6 rounded-xl border border-[#3b82f6] shadow-lg hover:scale-105 transition">
          ➕ Novo Evento
        </button>

        <button className="bg-[#111827] p-6 rounded-xl border border-[#3b82f6] shadow-lg hover:scale-105 transition">
          📄 Meus Eventos
        </button>

        <button className="bg-[#111827] p-6 rounded-xl border border-[#3b82f6] shadow-lg hover:scale-105 transition">
          💰 Valores & Pagamentos
        </button>

      </div>

    </div>
  );
}
