import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import ThemeSwitch from "./ThemeSwitch";
import { Menu, X } from "lucide-react";

export default function HeaderPainel() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const links = [
    { to: "/painel/clientes", label: "Clientes" },
    { to: "/painel/servicos", label: "Serviços" },
    { to: "/painel/contratados", label: "Contratados" },
    { to: "/painel/pagamentos", label: "Pagamentos" },
    { to: "/painel/seguros", label: "Seguros" },
    { to: "/painel/feedback", label: "Feedback" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/login";
  };

  return (
    <>
      {/* BOTÃO MOBILE */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-4 left-4 z-[60] bg-[#ff6600] p-2 rounded-lg shadow-lg"
      >
        <Menu size={26} className="text-black" />
      </button>

      {/* OVERLAY MOBILE */}
      {open && (
        <div
          onClick={closeMenu}
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-[#0d0d0d] text-white 
          shadow-2xl border-r border-[#1f1f1f] 
          flex flex-col z-50 transition-all duration-300

          ${open ? "translate-x-0 w-60" : "-translate-x-full w-60"}
          lg:translate-x-0 lg:w-60
        `}
      >

        {/* TOPO / LOGO */}
        <div className="flex flex-col items-center py-6 gap-3">

          {/* BOTÃO FECHAR MOBILE */}
          <button
            onClick={closeMenu}
            className="lg:hidden text-white hover:bg-[#222] p-2 rounded-lg"
          >
            <X size={26} />
          </button>

          <img
            src={Logo}
            className="w-24 h-24 object-cover rounded-full border-2 border-[#ff6600] shadow-lg"
          />

          <h1 className="text-lg font-bold tracking-wide">
            <span className="text-[#ff6600]">ARRUM</span>AI
          </h1>
        </div>

        {/* LINKS */}
        <nav className="flex-1 px-4 mt-2 space-y-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium block transition ${
                  isActive
                    ? "bg-[#ff6600] text-black"
                    : "hover:bg-[#1f1f1f] hover:text-[#ff6600]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* RODAPÉ */}
        <div className="p-4 border-t border-[#1f1f1f] flex flex-col items-center gap-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Sair
          </button>

          <ThemeSwitch />
        </div>
      </aside>
    </>
  );
}
