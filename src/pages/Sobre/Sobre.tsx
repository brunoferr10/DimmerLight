import { useTheme } from "@/contexts/ThemeContext";

export default function Sobre() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`min-h-[calc(100vh-60px)] px-6 py-12 transition-all duration-500 ${
        isDark ? "bg-[#0b0b0b] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-[#ff6600]">
          Sobre o Projeto – ArrumAi
        </h2>

        {/* Apresentação da Solução */}
        <div className="space-y-4 mb-10">
          <h3 className="text-2xl font-semibold text-[#ff6600]">
            1. Apresentação da Solução
          </h3>
          <p className="text-gray-400 leading-relaxed">
            O <span className="text-[#ff6600] font-semibold">ArrumAi</span> é um aplicativo inovador desenvolvido para
            conectar clientes a profissionais da construção civil e de serviços gerais de forma rápida, acessível e segura.
          </p>
          <p className="text-gray-400 leading-relaxed">
            A plataforma foi criada com o objetivo de simplificar o processo de contratação e facilitar a vida de quem
            precisa realizar obras, reformas ou serviços complementares, como limpeza pós-obra, manutenção, jardinagem,
            pintura e acabamentos em geral.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Ao mesmo tempo, o ArrumAi oferece aos prestadores de serviço uma nova forma de conquistar clientes, permitindo
            que filtrem oportunidades de acordo com sua especialidade, nível de dificuldade e distância de atendimento.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Nossa rede conta com profissionais e equipes de todos os níveis — desde pequenas reformas e reparos até
            construções completas de imóveis.
          </p>
        </div>

        {/* Diferenciais Competitivos */}
        <div className="space-y-4 mb-10">
          <h3 className="text-2xl font-semibold text-[#ff6600]">
            2. Diferenciais Competitivos
          </h3>
          <p className="text-gray-400 leading-relaxed">
            O ArrumAi se destaca por oferecer segurança, transparência e praticidade em todas as etapas — da contratação à
            conclusão do serviço.
          </p>

          <ul className="list-disc ml-6 text-gray-400 space-y-2">
            <li>
              <strong className="text-[#ff6600]">Negociação direta:</strong> cliente e prestador tratam valores e condições
              livremente.
            </li>
            <li>
              <strong className="text-[#ff6600]">Entrada inicial estruturada:</strong> 40% do valor total (materiais e mão
              de obra) + 4% de taxa da plataforma.
            </li>
            <li>
              <strong className="text-[#ff6600]">Pagamento por etapas:</strong> liberação condicionada ao feedback e
              acompanhamento.
            </li>
            <li>
              <strong className="text-[#ff6600]">Seguro opcional:</strong> o cliente pode contratar proteção adicional.
            </li>
            <li>
              <strong className="text-[#ff6600]">Sistema de reputação:</strong> avaliações mútuas criam um ranking confiável
              de profissionais e clientes.
            </li>
          </ul>

          <blockquote className="border-l-4 border-[#ff6600] pl-4 italic text-gray-400 mt-4">
            ⚠️ O ArrumAi atua apenas como intermediador de contato entre cliente e prestador. A qualidade, execução e entrega
            dos serviços são de inteira responsabilidade do profissional contratado.
          </blockquote>
        </div>

        {/* Oportunidade de Mercado */}
        <div className="space-y-4 mb-10">
          <h3 className="text-2xl font-semibold text-[#ff6600]">
            3. Oportunidade de Mercado
          </h3>
          <p className="text-gray-400 leading-relaxed">
            O setor da construção civil e serviços relacionados vem apresentando crescimento contínuo e sustentado:
          </p>

          <table
            className={`w-full text-sm md:text-base text-left mt-4 border-collapse ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <thead>
              <tr className={`${isDark ? "bg-[#1a1a1a]" : "bg-gray-100"}`}>
                <th className="p-2 border border-gray-600">Ano</th>
                <th className="p-2 border border-gray-600">Variação do PIB da Construção Civil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-700">2021</td>
                <td className="p-2 border border-gray-700">+9,7%</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-700">2022</td>
                <td className="p-2 border border-gray-700">+6,9%</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-700">2023</td>
                <td className="p-2 border border-gray-700">-0,5%</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-700">2024</td>
                <td className="p-2 border border-gray-700">+4,1%</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-700">2025 (estim.)</td>
                <td className="p-2 border border-gray-700">+2,2% a +2,3%</td>
              </tr>
            </tbody>
          </table>

          <p className="text-gray-400 leading-relaxed mt-4">
            No 1º trimestre de 2024, o Brasil registrou mais de 619 mil novas obras em diferentes estágios e segmentos.  
            O ArrumAi pretende captar entre 20% e 30% desse mercado, o que representa cerca de{" "}
            <span className="text-[#ff6600] font-semibold">128 mil serviços intermediados por ano</span>.
          </p>
        </div>

        {/* Conclusão */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#ff6600]">4. Conclusão</h3>
          <p className="text-gray-400 leading-relaxed">
            O ArrumAi nasceu para revolucionar a forma como obras e serviços são contratados, unindo tecnologia,
            praticidade e confiança.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Nosso compromisso é aproximar pessoas e oportunidades, promovendo um ecossistema completo — do planejamento à
            finalização, com responsabilidade, inovação e resultados reais.
          </p>
        </div>
      </div>
    </section>
  );
}
