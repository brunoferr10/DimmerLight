import { useTheme } from "@/contexts/ThemeContext";
import { useNavigate } from "react-router-dom";
import fotoHome from "@/assets/fotoHome.jpeg";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  const handleSaibaMais = () => {
    navigate("/sobre");
  };

  return (
    <section
      className={`min-h-screen w-full flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 transition-all duration-500 ${
        isDark ? "bg-[#0b0b0b] text-white" : "bg-[#ffffff] text-gray-900"
      }`}
    >
      {/* CONTAINER GERAL */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 py-20">

        {/* TEXTO */}
        <div className="flex-1 text-center lg:text-left px-2 lg:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-[#ff6600]">Construa</span> com confiança.
            <br />
            Reformas e serviços <br /> de forma inteligente.
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-gray-400 mb-6">
            O <span className="text-[#ff6600] font-semibold">ArrumAi</span>{" "}
            conecta clientes a profissionais de obras com transparência e
            segurança.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-400 mb-8">
            Profissionais avaliados, suporte dedicado e orçamentos rápidos.
          </p>

          <button
            onClick={handleSaibaMais}
            className="border border-[#ff6600] hover:bg-[#ff6600] hover:text-white text-[#ff6600] font-semibold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            Saiba Mais
          </button>
        </div>

        {/* IMAGEM */}
        <div className="flex-1 flex justify-center mt-8 lg:mt-0">
          <img
            src={fotoHome}
            alt="Profissional de obras"
            className="rounded-2xl shadow-xl border border-[#2a2a2a] w-[300px] sm:w-[380px] md:w-[480px] lg:w-[520px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
