import { useTheme } from "@/contexts/ThemeContext";

export default function FAQ() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const faqs = [
    {
      q: "O ArrumAi é um sistema real ou apenas acadêmico?",
      a: "O ArrumAi foi desenvolvido como um projeto acadêmico, mas com estrutura e funcionalidades que simulam um aplicativo real do mercado.",
    },
    {
      q: "Qual é o principal objetivo do ArrumAi?",
      a: "Facilitar a conexão entre clientes e profissionais da construção civil e serviços gerais, tornando o processo de contratação mais rápido, seguro e acessível.",
    },
    {
      q: "Como funciona o sistema de contratação?",
      a: "O cliente busca o profissional desejado, combina os detalhes e realiza o pagamento por etapas, com feedback e acompanhamento em cada fase.",
    },
    {
      q: "O ArrumAi cobra alguma taxa dos usuários?",
      a: "Sim, há uma taxa de 4% sobre o valor do serviço, utilizada para manter a plataforma e garantir a segurança das transações.",
    },
    {
      q: "Os profissionais são verificados?",
      a: "Sim. Todos os prestadores de serviço passam por um processo de verificação e avaliação contínua baseada no feedback dos clientes.",
    },
    {
      q: "Posso contratar mais de um serviço ao mesmo tempo?",
      a: "Sim, a plataforma permite gerenciar múltiplas obras e serviços simultaneamente, com acompanhamento individual de cada um.",
    },
    {
      q: "O ArrumAi oferece algum tipo de seguro?",
      a: "Sim. O cliente pode optar por contratar um seguro adicional para cobrir eventuais danos ou imprevistos durante a execução da obra.",
    },
    {
      q: "Quais tecnologias foram utilizadas no desenvolvimento?",
      a: "Front-end: React, Vite, TypeScript e Tailwind CSS. Back-end: Java com API REST e banco de dados Oracle.",
    },
    {
      q: "Os pagamentos são feitos diretamente na plataforma?",
      a: "Os pagamentos são intermediados de forma segura, sendo liberados ao profissional após a aprovação do cliente em cada etapa.",
    },
    {
      q: "O ArrumAi funciona em dispositivos móveis?",
      a: "Sim, o projeto foi desenvolvido com design responsivo e pode ser acessado em computadores, tablets e smartphones.",
    },
  ];

  return (
    <section
      className={`min-h-[calc(100vh-60px)] px-6 py-12 transition-all duration-500 ${
        isDark ? "bg-[#0b0b0b] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-[#ff6600] text-center">
          Perguntas Frequentes (FAQ)
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <details
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                isDark
                  ? "bg-[#141414] border-[#2a2a2a] hover:border-[#ff6600]"
                  : "bg-gray-100 border-gray-300 hover:border-[#ff6600]"
              }`}
            >
              <summary
                className={`cursor-pointer font-semibold text-lg px-5 py-4 select-none ${
                  isDark
                    ? "text-[#ff6600] hover:text-white"
                    : "text-[#ff6600] hover:text-black"
                }`}
              >
                {item.q}
              </summary>
              <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
