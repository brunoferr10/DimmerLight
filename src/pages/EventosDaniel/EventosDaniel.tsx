type EventoDaniel = {
  data: string;
  cidade: string;
  estado: string;
  local: string;
  descricao: string;
};

const eventosDaniel2025: EventoDaniel[] = [
  {
    data: "08/11/2025",
    cidade: "São Paulo",
    estado: "SP",
    local: "Espaço Unimed",
    descricao: "Show Daniel – turnê comemorativa",
  },
  {
    data: "27/11/2025",
    cidade: "Dois Vizinhos",
    estado: "PR",
    local: "Parque de Exposições de Dois Vizinhos",
    descricao: "Daniel em Dois Vizinhos",
  },
];

export default function EventosDaniel() { // 👈 agora o nome está certo!
  return (
    <section className="min-h-screen w-full px-4 py-10 flex justify-center">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-[#ff6600] mb-6">
          Agenda Daniel • 2025
        </h1>

        <p className="text-sm text-gray-400 mb-6">
          Lista de eventos do cantor Daniel em 2025
        </p>

        <div className="overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#0d0d0d]">
          <table className="w-full text-sm">
            <thead className="bg-[#ff6600] text-black text-left">
              <tr>
                <th className="p-3">Data</th>
                <th className="p-3">Cidade/Estado</th>
                <th className="p-3">Local</th>
                <th className="p-3">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {eventosDaniel2025.map((e, idx) => (
                <tr
                  key={idx}
                  className="border-t border-[#202020] hover:bg-[#151515] transition"
                >
                  <td className="p-3">{e.data}</td>
                  <td className="p-3">{e.cidade} / {e.estado}</td>
                  <td className="p-3">{e.local}</td>
                  <td className="p-3">{e.descricao}</td>
                </tr>
              ))}

              {eventosDaniel2025.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-400 italic">
                    Nenhum evento de 2025 encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          *Informações sujeitas a alteração. Confirme sempre nos canais oficiais.
        </p>
      </div>
    </section>
  );
}
