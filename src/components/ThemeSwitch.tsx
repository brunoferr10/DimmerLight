import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-full bg-[#111827] hover:bg-[#1f2937] text-[#f9fafb] w-10 h-10 shadow-lg transition-transform hover:scale-105"
      aria-label="Alternar tema claro/escuro"
      type="button"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
