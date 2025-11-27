import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trash, UserPlus, Edit3 } from "lucide-react";

const API = "https://dimmerlight.onrender.com/login"; // ⬅ ajuste se estiver em servidor online

export default function Usuarios() {

  // Dados
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [form, setForm] = useState({ email: "", senha: "", nome: "", role: "montador" });
  const [editId, setEditId] = useState<number | null>(null);

  // Carregar lista
  async function carregar() {
    const res = await fetch(API);
    const data = await res.json();
    setUsuarios(data);
  }

  useEffect(() => { carregar(); }, []);

  // Salvar ou editar usuário
  async function salvar(e: any) {
    e.preventDefault();

    const metodo = editId ? "PUT" : "POST";
    const url = editId ? `${API}/${editId}` : API;

    const res = await fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dsEmail: form.email,
        dsSenha: form.senha,
        nmUsuario: form.nome,
        tpRole: form.role.toUpperCase()
      })
    });

    if (res.ok) {
      setForm({ email: "", senha: "", nome: "", role: "montador" });
      setEditId(null);
      carregar();
      alert(editId ? "Usuário atualizado!" : "Usuário cadastrado!");
    }
  }

  // Excluir usuário
  async function excluir(id: number) {
    if (!confirm("Deseja excluir este usuário?")) return;

    const res = await fetch(`${API}/${id}`, { method: "DELETE" });

    if (res.ok) {
      carregar();
      alert("Usuário removido!");
    }
  }

  // Carregar dados no form para edição
  function editar(u: any) {
    setEditId(u.idLogin);
    setForm({ email: u.dsEmail, senha: u.dsSenha, nome: u.nmUsuario, role: u.tpRole.toLowerCase() });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      className="min-h-screen bg-[#050B16] text-white px-10 py-12"
    >

      <h1 className="text-2xl font-bold mb-8 text-[#3b82f6]">Gestão de Usuários</h1>

      {/* Form de Cadastro */}
      <form onSubmit={salvar} className="bg-[#0F172A] p-6 rounded-xl border border-[#22447c] max-w-xl mb-10">
        <h2 className="text-lg font-semibold mb-4">{editId ? "Editar Usuário" : "Novo Usuário"}</h2>

        <input
          className="w-full bg-[#1a2336] p-3 rounded-lg mb-3 border border-[#2c4d7c]"
          placeholder="Nome"
          value={form.nome}
          onChange={e => setForm({ ...form, nome: e.target.value })}
          required
        />

        <input
          className="w-full bg-[#1a2336] p-3 rounded-lg mb-3 border border-[#2c4d7c]"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          className="w-full bg-[#1a2336] p-3 rounded-lg mb-3 border border-[#2c4d7c]"
          placeholder="Senha"
          type="password"
          value={form.senha}
          onChange={e => setForm({ ...form, senha: e.target.value })}
          required
        />

        <select
          className="w-full bg-[#1a2336] p-3 rounded-lg border border-[#2c4d7c]"
          value={form.role}
          onChange={e => setForm({ ...form, role: e.target.value })}
        >
          <option value="montador">Montador</option>
          <option value="admin">Administrador</option>
        </select>

        <button className="w-full bg-[#3b82f6] py-3 rounded-lg font-medium mt-4 hover:bg-blue-700 transition flex justify-center gap-2">
          <UserPlus size={18}/> {editId ? "Salvar Alterações" : "Cadastrar Usuário"}
        </button>
      </form>

      {/* Lista de Usuários */}
      <div className="grid md:grid-cols-2 gap-6">
        {usuarios.map((u) => (
          <div key={u.idLogin} className="bg-[#0F172A] p-5 rounded-xl border border-[#203d6a] flex justify-between items-center">
            <div>
              <p><b>{u.nmUsuario}</b></p>
              <p className="text-sm text-gray-400">{u.dsEmail}</p>
              <span className="text-blue-400 text-xs">{u.tpRole}</span>
            </div>

            <div className="flex gap-3">
              <button className="text-yellow-400" onClick={() => editar(u)}>
                <Edit3 size={20}/>
              </button>
              <button className="text-red-500" onClick={() => excluir(u.idLogin)}>
                <Trash size={20}/>
              </button>
            </div>
          </div>
        ))}
      </div>

    </motion.div>
  );
}
