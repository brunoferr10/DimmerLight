import { NavLink, Link } from "react-router-dom";
import Logo from "@/assets/logo.jpeg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const itens = [
    { path: "/", label: "Pagina Inicial" },
  ];

  const linkBase =
    "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition";

  return (
    <>
      {/* BOTÃO HAMBURGER - MOBILE */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-4 left-4 z-[60] bg-[#1e3a8a] p-2 rounded-lg shadow-lg"
      >
        <Menu size={25} className="text-white" />
      </button>

      {/* FUNDO CLICK PARA FECHAR MENU */}
      {open && (
        <div
          onClick={closeMenu}
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      {/* SIDEBAR ORIGINAL */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-[#0d0d0d] text-white 
          shadow-2xl border-r border-[#1f1f1f] flex flex-col 
          z-50 transition-all duration-300
          ${open ? "translate-x-0 w-60" : "-translate-x-full w-60"}
          lg:translate-x-0 lg:w-60
        `}
      >
        {/* LOGO + TÍTULO */}
        <div className="flex flex-col items-center py-6 gap-3">

          <button
            onClick={closeMenu}
            className="lg:hidden text-white hover:bg-[#222] p-2 rounded-lg"
          >
            <X size={26} />
          </button>

          <img
            src={Logo}
            alt="Dimmer Light"
            className="w-24 h-24 object-cover rounded-full border-2 border-[#1e3a8a] shadow-lg"
          />

          <h1 className="text-lg font-bold tracking-wide">
            <span className="text-[#1e3a8a]">DIMMER</span>LIGHT
          </h1>
        </div>

        {/* MENU LINKS */}
        <nav className="flex-1 px-4 mt-2 space-y-1">
          {itens.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? "bg-[#1e3a8a] text-white"                // 🔥 Destaque azul ativo
                    : "hover:bg-[#1e3a8a]/30 hover:text-[#3b82f6]" // 🔥 Hover azul suave
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* BOTÃO LOGIN */}
        <div className="p-4 border-t border-[#1f1f1f] flex flex-col gap-3 items-center">
          <Link
            to="/login"
            onClick={closeMenu}
            className="w-full bg-[#1e3a8a] text-white py-2 rounded-lg font-semibold text-center hover:bg-[#3b82f6] transition"
          >
            Login
          </Link>
        </div>
      </aside>
    </>
  );
}
