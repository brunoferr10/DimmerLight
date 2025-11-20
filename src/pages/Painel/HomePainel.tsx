import logo from "../../assets/logo.jpeg";

export default function HomePainel() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-transparent">
      
      {/* Logo Redondo */}
      <img
        src={logo}
        alt="Logo"
        className="w-[320px] h-[320px] object-contain rounded-full shadow-xl"
      />

      {/* Nome da Marca */}
      <h1 className="text-white text-3xl font-bold mt-6 tracking-wide">
        <span className="text-[#ff6600]">ARRUM</span>AI
      </h1>

      {/* Subtítulo */}
      <p className="text-gray-300 text-sm mt-2">
        Reformas & Obras Inteligentes
      </p>
    </div>
  );
}
