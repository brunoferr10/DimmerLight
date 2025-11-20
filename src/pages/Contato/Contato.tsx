import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

type Form = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

export default function Contato() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [form, setForm] = useState<Form>({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", form);
    setEnviado(true);
  };

  return (
    <section
      className={`min-h-[calc(100vh-60px)] px-6 py-12 transition-all duration-500 ${
        isDark ? "bg-[#0b0b0b] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-[#ff6600] text-center">
          Fale Conosco
        </h2>
        <p
          className={`text-center mb-10 max-w-xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Preencha o formulário abaixo e nossa equipe do{" "}
          <span className="text-[#ff6600] font-semibold">ArrumAi</span> entrará
          em contato com você o mais breve possível.
        </p>

        {!enviado ? (
          <form
            onSubmit={handleSubmit}
            className={`rounded-2xl shadow-lg p-8 space-y-6 border ${
              isDark
                ? "bg-[#141414] border-[#2a2a2a]"
                : "bg-white border-gray-300"
            }`}
          >
            {/* Nome */}
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-semibold text-[#ff6600] mb-2"
              >
                Nome completo
              </label>
              <input
                id="nome"
                name="nome"
                required
                value={form.nome}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border outline-none transition-all ${
                  isDark
                    ? "bg-[#1a1a1a] text-white border-[#2a2a2a] focus:border-[#ff6600]"
                    : "bg-white text-black border-gray-300 focus:border-[#ff6600]"
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#ff6600] mb-2"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border outline-none transition-all ${
                  isDark
                    ? "bg-[#1a1a1a] text-white border-[#2a2a2a] focus:border-[#ff6600]"
                    : "bg-white text-black border-gray-300 focus:border-[#ff6600]"
                }`}
              />
            </div>

            {/* Telefone */}
            <div>
              <label
                htmlFor="telefone"
                className="block text-sm font-semibold text-[#ff6600] mb-2"
              >
                Telefone
              </label>
              <input
                id="telefone"
                name="telefone"
                placeholder="(XX) XXXXX-XXXX"
                required
                value={form.telefone}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border outline-none transition-all ${
                  isDark
                    ? "bg-[#1a1a1a] text-white border-[#2a2a2a] focus:border-[#ff6600]"
                    : "bg-white text-black border-gray-300 focus:border-[#ff6600]"
                }`}
              />
            </div>

            {/* Mensagem */}
            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm font-semibold text-[#ff6600] mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                required
                value={form.mensagem}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border outline-none transition-all ${
                  isDark
                    ? "bg-[#1a1a1a] text-white border-[#2a2a2a] focus:border-[#ff6600]"
                    : "bg-white text-black border-gray-300 focus:border-[#ff6600]"
                }`}
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="w-full bg-[#ff6600] hover:bg-[#e65500] text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md"
            >
              Enviar Mensagem
            </button>
          </form>
        ) : (
          <div
            className={`${
              isDark
                ? "bg-[#141414] border-[#2a2a2a]"
                : "bg-white border-gray-300"
            } border text-center p-8 rounded-2xl shadow-md`}
          >
            <h3 className="text-2xl font-semibold text-[#ff6600] mb-2">
              Obrigado!
            </h3>
            <p className={isDark ? "text-gray-400" : "text-gray-600"}>
              Sua mensagem foi enviada com sucesso. Em breve nossa equipe
              entrará em contato.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
