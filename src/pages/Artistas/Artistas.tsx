import { useEffect, useState } from "react";
import { UserPlus, Trash, Edit3 } from "lucide-react";

const API = "https://dimmerlight.onrender.com/artistas";

export default function Artistas() {

  const [lista, setLista] = useState<any[]>([]);
  const [form, setForm] = useState({ nome: "", cache: "" });
  const [editId, setEditId] = useState<number | null>(null);

  async function carregar() {
    const res = await fetch(API);
    const data = await res.json();
    setLista(data);
  }

  useEffect(() => { carregar(); }, []);

  async function salvar(e: any) {
    e.preventDefault();

    const metodo = editId ? "PUT" : "POST";
    const url = editId ? `${API}/${editId}` : API;

    const body = {
      nmArtista: form.nome,
      vlCache: Number(form.cache)
    }

    const res = await fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (res.ok) {
      alert(editId ? "Artista atualizado!" : "Artista cadastrado!");
      setEditId(null);
      setForm({ nome: "", cache: "" });
      carregar();
    }
  }

  function editar(a: any) {
    setEditId(a.idArtista);
    setForm({ nome: a.nmArtista, cache: a.vlCache });
  }

  async function excluir(id:number) {
    if (!confirm("Excluir artista?")) return;

    const res = await fetch(`${API}/${id}`, { method:"DELETE" });

    if (res.ok) {
      alert("Artista removido!");
      carregar();
    }
  }

  return (
    <div className="min-h-screen bg-[#050B16] text-white px-10 py-12">

      <h1 className="text-2xl font-bold mb-8 text-[#3b82f6]">Gerenciar Artistas</h1>

      {/* FORMULÁRIO */}
      <form onSubmit={salvar} className="bg-[#0F172A] p-6 rounded-xl border border-[#22447c] max-w-xl mb-10">
        <h2 className="text-lg font-semibold mb-4">{editId ? "Editar Artista" : "Novo Artista"}</h2>

        <input
          className="w-full bg-[#1a2336] p-3 rounded-lg mb-3 border border-[#2c4d7c]"
          placeholder="Nome do Artista"
          value={form.nome}
          onChange={e => setForm({ ...form, nome:e.target.value })}
          required
        />

        <input
          className="w-full bg-[#1a2336] p-3 rounded-lg mb-3 border border-[#2c4d7c]"
          type="number"
          step="1"
          placeholder="Valor Cachê (R$)"
          value={form.cache}
          onChange={e => setForm({ ...form, cache:e.target.value })}
          required
        />

        <button className="w-full bg-[#3b82f6] py-3 rounded-lg font-medium mt-4 hover:bg-blue-700 transition flex justify-center gap-2">
          <UserPlus size={18}/> {editId? "Salvar Alterações": "Cadastrar Artista"}
        </button>
      </form>

      {/* LISTAGEM */}
      <div className="grid md:grid-cols-2 gap-6">
        {lista.map(a => (
          <div key={a.idArtista} className="bg-[#0F172A] p-5 rounded-xl border border-[#203d6a] flex justify-between items-center">

            <div>
              <p className="font-semibold">{a.nmArtista}</p>
              <p className="text-green-400 font-bold text-sm">R$ {a.vlCache}</p>
            </div>

            <div className="flex gap-3">
              <button className="text-yellow-400" onClick={() => editar(a)}>
                <Edit3 size={20}/>
              </button>
              <button className="text-red-500" onClick={() => excluir(a.idArtista)}>
                <Trash size={20}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
