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
      className={`h-[calc(100vh-60px)] w-full flex items-center justify-center px-10 transition-all duration-500 overflow-hidden ${
        isDark ? "bg-[#0b0b0b] text-white" : "bg-[#ffffff] text-gray-900"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto principal */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-[#ff6600]">Construa</span> com confiança.
            <br />
            Reformas e serviços <br /> de forma inteligente.
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-gray-400 mb-6">
            O <span className="text-[#ff6600] font-semibold">ArrumAi</span> é a
            plataforma que conecta clientes a profissionais de obras, reformas e
            serviços gerais — com total transparência, acompanhamento e
            segurança. Nossa missão é simplificar o processo de contratação,
            garantindo qualidade e praticidade do início ao fim da obra.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-400 mb-8">
            Seja uma pequena reforma, um serviço de acabamento ou uma obra
            completa — no ArrumAi você encontra os melhores profissionais
            avaliados, com orçamentos rápidos e suporte dedicado em todas as
            etapas.
          </p>

          {/* Botão único */}
          <div>
            <button
              onClick={handleSaibaMais}
              className="border border-[#ff6600] hover:bg-[#ff6600] hover:text-white text-[#ff6600] font-semibold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex-1 flex justify-center">
          <img
            src={fotoHome}
            alt="Profissional de obras"
            className="rounded-2xl shadow-xl border border-[#2a2a2a] w-[420px] md:w-[520px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
