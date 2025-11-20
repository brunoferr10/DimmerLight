import { NavLink, Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "@/assets/logo.jpeg";

export default function Header() {
  const linkBase =
    "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition";

  return (
    <aside className="fixed left-0 top-0 h-full w-60 bg-[#0d0d0d] text-[#f5f5f5] flex flex-col justify-between shadow-2xl border-r border-[#1f1f1f] z-50">
      {/* LOGO */}
      <div className="flex flex-col items-center py-6 gap-2">
        <img
          src={Logo}
          alt="ArrumAi"
          className="w-28 h-28 object-cover rounded-full border-2 border-[#ff6600] shadow-lg"
        />
        <h1 className="text-lg font-bold mt-2 tracking-wide">
          <span className="text-[#ff6600]">ARRUM</span>
          <span className="text-white">AI</span>
        </h1>
      </div>

      {/* NAVEGAÇÃO */}
      <nav className="flex-1 px-4 mt-4 space-y-2">
        {[
          { path: "/", label: "Home" },
          { path: "/integrantes", label: "Integrantes" },
          { path: "/sobre", label: "Sobre" },
          { path: "/faq", label: "FAQ" },
          { path: "/contato", label: "Contato" },
        ].map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-[#ff6600] text-black"
                  : "hover:bg-[#1f1f1f] hover:text-[#ff6600]"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* BOTÃO DE LOGIN E TEMA */}
      <div className="p-4 border-t border-[#1f1f1f] flex flex-col gap-3 items-center">
        <Link
          to="/login"
          className="w-full text-center bg-[#ff6600] text-black py-2 font-semibold rounded-lg hover:bg-[#ff8533] transition-all duration-300 shadow-md"
        >
          Login
        </Link>
        <ThemeSwitch />
      </div>
    </aside>
  );
}
