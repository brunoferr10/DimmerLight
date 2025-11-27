import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

export default function Splash() {
  const navigate = useNavigate();

  // Redireciona após 2.5s
  useEffect(() => {
    const timer = setTimeout(() => navigate("/login"), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-[#0a0d14] flex flex-col items-center justify-center overflow-hidden">

      {/* LOGO ANIMADO */}
      <img
        src={logo}
        className="w-40 animate-[spin_3s_linear_infinite] 
        drop-shadow-[0_0_25px_#3b82f6] rounded-full"
      />

      {/* TEXTO COM ANIMAÇÃO */}
      <h1 className="
        text-white font-bold text-3xl mt-4 tracking-wider
        animate-[fadeInUp_1.3s_ease]
      ">
        DIMMER <span className="text-[#3b82f6]">LIGHT</span>
      </h1>

      {/* EFEITO GLOW DE FUNDO */}
      <div className="absolute blur-[120px] w-[350px] h-[350px] 
      bg-[#3b82f6]/20 rounded-full -z-10"></div>
    </div>
  );
}
