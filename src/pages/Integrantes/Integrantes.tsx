import { useTheme } from "@/contexts/ThemeContext";
import Bruno from "@/assets/Bruno.jpeg";
import Gabriel from "@/assets/Gabriel.jpeg";
import Leonardo from "@/assets/Leonardo.jpeg";

export default function Integrantes() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const membros = [
    {
      nome: "Bruno Ferreira",
      rm: "RM563489",
      turma: "1TDSR",
      github: "https://github.com/brunoferreira",
      linkedin: "https://www.linkedin.com/in/bruno-ferreira-4837a0207/",
      img: Bruno,
    },
    {
      nome: "Gabriel Robertoni Padilha",
      rm: "RM566293",
      turma: "1TDSR",
      github: "https://github.com/gabrielrobertoni",
      linkedin: "https://www.linkedin.com/in/gabriel-robertoni-a15885322/",
      img: Gabriel,
    },
    {
      nome: "Leonardo Aragaki Rodrigues",
      rm: "RM562944",
      turma: "1TDSR",
      github: "https://github.com/leonardoaragaki",
      linkedin: "https://br.linkedin.com/in/leonardo-aragaki-rodrigues-066a5aa1",
      img: Leonardo,
    },
  ];

  return (
    <section
      className={`min-h-[calc(100vh-60px)] flex flex-col items-center justify-center px-6 py-12 transition-all duration-500 ${
        isDark
          ? "bg-[#0b0b0b] text-white"
          : "bg-[#ffffff] text-gray-900"
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 text-[#ff6600]">
          Nossa Equipe
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Conheça os desenvolvedores por trás do projeto{" "}
          <span className="text-[#ff6600] font-semibold">ArrumAi</span>.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {membros.map((m) => (
          <div
            key={m.rm}
            className={`rounded-2xl shadow-xl border transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-[#141414] border-[#2a2a2a]"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex flex-col items-center p-8 text-center">
              <img
                src={m.img}
                alt={m.nome}
                className="w-32 h-32 rounded-full object-cover border-4 border-[#ff6600] shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{m.nome}</h3>
              <p className="text-sm text-gray-400 mb-1">RM: {m.rm}</p>
              <p className="text-sm text-gray-400 mb-3">Turma: {m.turma}</p>
              <div className="flex gap-4 mt-2">
                <a
                  href={m.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff6600] hover:text-white hover:bg-[#ff6600] border border-[#ff6600] px-3 py-1 rounded-lg text-sm transition"
                >
                  GitHub
                </a>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff6600] hover:text-white hover:bg-[#ff6600] border border-[#ff6600] px-3 py-1 rounded-lg text-sm transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
