import { useEffect, useState } from "react";

type Montador = {
  idLogin: number;
  nmUsuario: string;
  dsEmail: string;
  tpRole: string;
};

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

const API = "https://dimmerlight.onrender.com";

export default function FuncionariosEquipe() {
  const [montadores, setMontadores] = useState<Montador[]>([]);
  const [selecionado, setSelecionado] = useState<Montador | null>(null);
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingEventos, setLoadingEventos] = useState(false);

  // Carrega todos os logins e filtra só montadores
  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const res = await fetch(`${API}/login`);
        const data = await res.json();
        const onlyMontadores = data.filter(
          (u: any) => u.tpRole?.toUpperCase() === "MONTADOR"
        );
        setMontadores(onlyMontadores);
      } catch (err) {
        console.error("Erro ao carregar montadores:", err);
      } finally {
        setLoadingUsers(false);
      }
    }

    carregarUsuarios();
  }, []);

  // Quando clicar em um montador → carregar eventos dele
  async function verEventos(m: Montador) {
    setSelecionado(m);
    setLoadingEventos(true);
    setEventos([]);

    try {
      const res = await fetch(`${API}/eventos/usuario/${m.idLogin}`);
      const data = await res.json();
      setEventos(data);
    } catch (err) {
      console.error("Erro ao carregar eventos:", err);
    } finally {
      setLoadingEventos(false);
    }
  }

  // Total de cachê desse montador
  const total = eventos.reduce((acc, e) => acc + e.vlCache, 0);

  return (
    <div className="min-h-screen bg-[#050b16] text-white px-8 py-10">
      <h1 className="text-3xl font-bold text-[#3b82f6] mb-8">
        Funcionários / Equipe – Eventos por Montador
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-8 max-w-6xl mx-auto">
        {/* LADO ESQUERDO – LISTA DE MONTADORES */}
        <div className="bg-[#0f172a] rounded-2xl border border-[#1e3a8a] p-5">
          <h2 className="text-lg font-semibold mb-4">Montadores</h2>

          {loadingUsers ? (
            <p className="text-sm text-gray-300">Carregando montadores...</p>
          ) : montadores.length === 0 ? (
            <p className="text-sm text-gray-400">
              Nenhum montador cadastrado ainda.
            </p>
          ) : (
            <ul className="space-y-2">
              {montadores.map((m) => (
                <li key={m.idLogin}>
                  <button
                    onClick={() => verEventos(m)}
                    className={`w-full text-left px-3 py-2 rounded-lg border text-sm
                      ${
                        selecionado?.idLogin === m.idLogin
                          ? "bg-[#1e3a8a] border-[#3b82f6]"
                          : "bg-[#111827] border-[#1f2937] hover:bg-[#1f2937]"
                      }`}
                  >
                    <div className="font-semibold">{m.nmUsuario}</div>
                    <div className="text-xs text-gray-400">{m.dsEmail}</div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* LADO DIREITO – EVENTOS DO MONTADOR SELECIONADO */}
        <div className="bg-[#0f172a] rounded-2xl border border-[#1e3a8a] p-5">
          {selecionado ? (
            <>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold">
                    Eventos de {selecionado.nmUsuario}
                  </h2>
                  <p className="text-xs text-gray-400">
                    E-mail: {selecionado.dsEmail}
                  </p>
                </div>
              </div>

              {loadingEventos ? (
                <p className="text-sm text-gray-300">
                  Carregando eventos desse montador...
                </p>
              ) : eventos.length === 0 ? (
                <p className="text-sm text-gray-400">
                  Nenhum evento registrado por esse montador.
                </p>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-[#1e293b] rounded-lg overflow-hidden">
                      <thead className="bg-[#1e3a8a] text-xs">
                        <tr>
                          <th className="py-2 px-2">Data Reg.</th>
                          <th className="px-2">Artista</th>
                          <th className="px-2">Data Show</th>
                          <th className="px-2">Cidade / UF</th>
                          <th className="px-2">Canhão</th>
                          <th className="px-2">Obs</th>
                          <th className="px-2">Cache</th>
                        </tr>
                      </thead>
                      <tbody>
                        {eventos.map((ev) => (
                          <tr
                            key={ev.idEvento}
                            className="border-b border-[#0b1220] text-center hover:bg-[#111827]"
                          >
                            <td className="py-2 px-2 text-xs">
                              {ev.dtRegistro?.slice(0, 16).replace("T", " ")}
                            </td>
                            <td className="px-2 text-[#3b82f6] font-semibold">
                              {ev.nmArtista}
                            </td>
                            <td className="px-2">{ev.dataEvento}</td>
                            <td className="px-2">{ev.cidadeEstado}</td>
                            <td
                              className={`px-2 ${
                                ev.fezCanhao === "SIM"
                                  ? "text-green-400"
                                  : "text-red-400"
                              }`}
                            >
                              {ev.fezCanhao}
                            </td>
                            <td className="px-2 text-xs">
                              {ev.observacao || "-"}
                            </td>
                            <td className="px-2 font-bold text-green-400">
                              R$ {ev.vlCache}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 text-right text-sm">
                    <span className="font-semibold">
                      Total de cachê desse montador:
                    </span>{" "}
                    <span className="text-green-400 font-bold">
                      R$ {total}
                    </span>
                  </div>
                </>
              )}
            </>
          ) : (
            <p className="text-sm text-gray-400">
              Selecione um montador à esquerda para visualizar os eventos.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
