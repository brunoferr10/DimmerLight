import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import ThemeSwitch from "./ThemeSwitch";

export default function HeaderPainel() {

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/login";
  };

  const links = [
    { to: "/painel/clientes", label: "Clientes" },
    { to: "/painel/servicos", label: "Serviços" },
    { to: "/painel/contratados", label: "Contratados" },
    { to: "/painel/pagamentos", label: "Pagamentos" },
    { to: "/painel/seguros", label: "Seguros" },
    { to: "/painel/feedback", label: "Feedback" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-60 bg-[#0d0d0d] text-[#f5f5f5] flex flex-col shadow-2xl border-r border-[#1f1f1f] z-50">

      {/* LOGO */}
      <div className="flex flex-col items-center pt-6 pb-8 gap-2">
        <img
          src={Logo}
          className="w-28 h-28 object-cover rounded-full border-2 border-[#ff6600] shadow-lg"
        />
        <h1 className="text-lg font-bold tracking-wide">
          <span className="text-[#ff6600]">ARRUM</span>AI
        </h1>
      </div>

      {/* LINKS */}
      <nav className="flex-1 flex flex-col gap-2 px-4">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `px-4 py-2 text-sm font-medium rounded-lg transition ${
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

      {/* ÁREA INFERIOR FIXA */}
      <div className="p-4 border-t border-[#1f1f1f] flex flex-col items-center gap-4">

        {/* Botão Sair */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg"
        >
          Sair
        </button>

        {/* Botão de Tema */}
        <ThemeSwitch />
      </div>
    </aside>
  );
}
