import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

type Evento = {
  idEvento: number;
  dtRegistro: string;
  nmArtista: string;
  fezCanhao: string;
  cidadeEstado: string;
  dataEvento: string;
  observacao: string;
  vlCache: number;
};

export default function MeusEventos() {
  const { user } = useAuth();
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    async function load() {
      const res = await fetch(
        `https://dimmerlight.onrender.com/eventos/usuario/${user.id}`
      );
      const data = await res.json();
      setEventos(data);
      setLoading(false);
    }
    load();
  }, [user]);

  // Soma total dos eventos
  const total = eventos.reduce((acc, e) => acc + e.vlCache, 0);

  return (
    <div className="min-h-screen bg-[#050b16] text-white px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-[#3b82f6] mb-8">
        Meus Eventos
      </h1>

      {loading ? (
        <p className="text-center text-gray-300">Carregando...</p>
      ) : eventos.length === 0 ? (
        <p className="text-center text-gray-400">Nenhum evento registrado ainda.</p>
      ) : (
        <div className="max-w-5xl mx-auto">
          <table className="w-full border border-[#1e3a8a] rounded-xl overflow-hidden">
            <thead className="bg-[#1e3a8a]">
              <tr>
                <th className="py-2">Artista</th>
                <th>Data Evento</th>
                <th>Canhão</th>
                <th>Cidade / UF</th>
                <th>Observação</th>
                <th>Cache</th>
              </tr>
            </thead>
            <tbody>
              {eventos.map((ev) => (
                <tr
                  key={ev.idEvento}
                  className="text-center border-b border-[#0f172a] hover:bg-[#12223f] transition"
                >
                  <td className="py-2 font-semibold text-[#3b82f6]">{ev.nmArtista}</td>
                  <td>{ev.dataEvento}</td>
                  <td className={ev.fezCanhao === "SIM" ? "text-green-400" : "text-red-400"}>
                    {ev.fezCanhao}
                  </td>
                  <td>{ev.cidadeEstado}</td>
                  <td>{ev.observacao || "-"}</td>
                  <td className="font-bold text-green-400">R$ {ev.vlCache}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* TOTAL GERAL */}
          <div className="mt-6 p-4 bg-[#0f172a] rounded-lg text-lg font-semibold text-right border border-[#1e3a8a]">
            Total Recebido: <span className="text-green-400">R$ {total}</span>
          </div>
        </div>
      )}
    </div>
  );
}
