import { useEffect, useState, FormEvent } from "react";
import { useAuth } from "../../contexts/AuthContext";

// Tipos do retorno da API
type Artista = {
  idArtista: number;
  nmArtista: string;
  vlCache: number;
};

// Cidades fixas (podemos mover para o banco depois)
const CIDADES = [
  "São Paulo - SP",
  "Jardim Botânico - SP",
  "Araxá - MG",
  "Vera Cruz - SP",
  "Lagoa Formosa - MG",
  "Hortolândia - SP",
  "Santa Juliana - MG",
  "Belo Horizonte - MG",
  "Rio de Janeiro - RJ",
];

export default function NovoEvento() {
  const { user } = useAuth();
  const [artistas, setArtistas] = useState<Artista[]>([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    idArtista: "",
    fezCanhao: "NÃO",
    cidadeEstado: "",
    dataEvento: "",
    observacao: ""
  });

  // Carrega artistas da API
  useEffect(() => {
    async function load() {
      const res = await fetch("https://dimmerlight.onrender.com/artistas");
      const data = await res.json();
      setArtistas(data);
    }
    load();
  }, []);

  async function salvar(e: FormEvent) {
    e.preventDefault();
    if (!user) return alert("Usuário não identificado!");

    setLoading(true);

    const res = await fetch("https://dimmerlight.onrender.com/eventos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idArtista: Number(form.idArtista),
        fezCanhao: form.fezCanhao,
        cidadeEstado: form.cidadeEstado,
        dataEvento: form.dataEvento,
        observacao: form.observacao,
        idLogin: user.id
      })
    });

    setLoading(false);

    if (res.ok) {
      alert("Evento registrado com sucesso!");
      window.location.href = "/meus-eventos";
    } else {
      alert("Erro ao salvar evento!");
    }
  }

  return (
    <div className="min-h-screen bg-[#050b16] text-white flex justify-center py-10 px-6">
      <form
        onSubmit={salvar}
        className="bg-[#0f172a] p-8 border border-[#1e3a8a] rounded-2xl w-full max-w-xl shadow-xl"
      >
        <h1 className="text-2xl font-bold text-[#3b82f6] mb-6">Novo Evento</h1>

        {/* ARTISTA */}
        <label className="text-sm">Artista</label>
        <select
          required
          className="w-full bg-[#1a2335] px-3 py-2 rounded-lg border mb-4"
          value={form.idArtista}
          onChange={e => setForm({ ...form, idArtista: e.target.value })}
        >
          <option value="">Selecione...</option>
          {artistas.map(a => (
            <option key={a.idArtista} value={a.idArtista}>
              {a.nmArtista} — R$ {a.vlCache}
            </option>
          ))}
        </select>

        {/* CANHÃO */}
        <label className="text-sm">Fez Canhão?</label>
        <select
          className="w-full bg-[#1a2335] px-3 py-2 rounded-lg border mb-4"
          value={form.fezCanhao}
          onChange={e => setForm({ ...form, fezCanhao: e.target.value })}
        >
          <option value="NÃO">NÃO</option>
          <option value="SIM">SIM</option>
        </select>

        {/* CIDADE */}
        <label className="text-sm">Cidade / Estado</label>
        <select
          required
          className="w-full bg-[#1a2335] px-3 py-2 rounded-lg border mb-4"
          value={form.cidadeEstado}
          onChange={e => setForm({ ...form, cidadeEstado: e.target.value })}
        >
          <option value="">Selecione...</option>
          {CIDADES.map(c => <option key={c}>{c}</option>)}
        </select>

        {/* DATA DO EVENTO */}
        <label className="text-sm">Data do Show / Evento</label>
        <input
          type="date"
          required
          className="w-full bg-[#1a2335] px-3 py-2 rounded-lg border mb-4"
          value={form.dataEvento}
          onChange={e => setForm({ ...form, dataEvento: e.target.value })}
        />

        {/* OBSERVAÇÃO */}
        <label className="text-sm">Observações</label>
        <textarea
          className="w-full bg-[#1a2335] px-3 py-2 rounded-lg border mb-4 h-24"
          value={form.observacao}
          onChange={e => setForm({ ...form, observacao: e.target.value })}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg font-semibold"
        >
          {loading ? "Salvando..." : "Registrar Evento"}
        </button>
      </form>
    </div>
  );
}
