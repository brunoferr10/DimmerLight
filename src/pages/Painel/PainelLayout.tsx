// src/pages/Painel/PainelLayout.tsx
import { Outlet } from "react-router-dom";
import HeaderPainel from "../../components/HeaderPainel";

export default function PainelLayout() {
  return (
    <div className="min-h-screen flex bg-[#f5f6fa] dark:bg-[#0a0a0a] transition-colors">
      {/* Sidebar */}
      <HeaderPainel />

      {/* Conteúdo */}
      <main className="flex-1 ml-60 p-10 flex justify-center">
        <div className="w-full max-w-6xl bg-white dark:bg-[#111] shadow-lg rounded-xl p-8 border border-gray-200 dark:border-[#222] transition-colors">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
