import { Outlet } from "react-router-dom";
import HeaderPainel from "../../components/HeaderPainel";

export default function PainelLayout() {
  return (
    <div className="min-h-screen flex bg-[#f5f6fa] dark:bg-[#0a0a0a] transition-colors">

      <HeaderPainel />

      {/* Conteúdo */}
      <main
        className="
          flex-1 
          p-4 sm:p-6 md:p-10
          ml-0 lg:ml-60 
          transition-all
        "
      >
        <div className="
          w-full 
          max-w-6xl 
          mx-auto 
          bg-white dark:bg-[#111] 
          shadow-lg rounded-xl 
          p-4 sm:p-6 md:p-8 
          border border-gray-200 dark:border-[#222]
          transition-colors
        ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
