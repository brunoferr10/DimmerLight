import { useEffect, useState, FormEvent } from "react";

type Cliente = {
  cdCliente?: number;
  nmCpf: string;
  dsNome: string;
  dsEndereco: string;
  nmCep: string;
  nmTelefone: string;
};

const API_URL = "http://localhost:8080/cliente";

export default function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [mostrarLista, setMostrarLista] = useState(false);
  const [editandoId, setEditandoId] = useState<number | null>(null);

  const [form, setForm] = useState<Cliente>({
    nmCpf: "",
    dsNome: "",
    dsEndereco: "",
    nmCep: "",
    nmTelefone: "",
  });

  useEffect(() => {
    carregarClientes();
  }, []);

  async function carregarClientes() {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) return setClientes([]);
      const data = await res.json();
      setClientes(data);
    } catch {
      console.log("Erro ao carregar clientes");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function limparFormulario() {
    setEditandoId(null);
    setForm({
      nmCpf: "",
      dsNome: "",
      dsEndereco: "",
      nmCep: "",
      nmTelefone: "",
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const metodo = editandoId ? "PUT" : "POST";
    const url = editandoId ? `${API_URL}/${editandoId}` : API_URL;

    const res = await fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      alert("Erro ao salvar");
      return;
    }

    await carregarClientes();
    limparFormulario();
    alert(editandoId ? "Cliente atualizado!" : "Cliente cadastrado!");
  }

  function iniciarEdicao(cliente: Cliente) {
    setEditandoId(cliente.cdCliente ?? null);
    setForm({
      nmCpf: cliente.nmCpf,
      dsNome: cliente.dsNome,
      dsEndereco: cliente.dsEndereco,
      nmCep: cliente.nmCep,
      nmTelefone: cliente.nmTelefone,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function excluirCliente(id?: number) {
    if (!id) return;
    if (!confirm("Deseja realmente excluir?")) return;

    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    if (res.status === 204) {
      carregarClientes();
    }
  }

  return (
    <main className="p-8 flex flex-col gap-8">

      {/* TÍTULO + BOTÃO LISTAR */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#ff6600]">Clientes</h1>

        <button
          onClick={() => setMostrarLista(!mostrarLista)}
          className="bg-[#ff6600] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#ff8533] transition"
        >
          {mostrarLista ? "Ocultar Lista" : "Listar Clientes"}
        </button>
      </div>

      {/* FORMULÁRIO */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-[#111] border border-gray-300 dark:border-[#222] p-8 rounded-2xl shadow-lg flex flex-col gap-6 max-w-5xl"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="flex flex-col">
            <label className="font-semibold">Nome</label>
            <input
              name="dsNome"
              value={form.dsNome}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-100 dark:bg-[#181818] border dark:border-[#333]"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">CPF</label>
            <input
              name="nmCpf"
              value={form.nmCpf}
              onChange={handleChange}
              required
              maxLength={11}
              className="p-3 rounded bg-gray-100 dark:bg-[#181818] border dark:border-[#333]"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold">Endereço</label>
            <input
              name="dsEndereco"
              value={form.dsEndereco}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-100 dark:bg-[#181818] border dark:border-[#333]"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">CEP</label>
            <input
              name="nmCep"
              value={form.nmCep}
              onChange={handleChange}
              required
              maxLength={8}
              className="p-3 rounded bg-gray-100 dark:bg-[#181818] border dark:border-[#333]"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Telefone</label>
            <input
              name="nmTelefone"
              value={form.nmTelefone}
              onChange={handleChange}
              required
              maxLength={11}
              className="p-3 rounded bg-gray-100 dark:bg-[#181818] border dark:border-[#333]"
            />
          </div>
        </div>

        {/* BOTÃO SALVAR */}
        <button
          type="submit"
          className={`w-full text-white font-bold py-3 rounded-lg mt-4 transition ${
            editandoId
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {editandoId ? "Salvar Alterações" : "Salvar Cliente"}
        </button>
      </form>

      {/* LISTA */}
          {mostrarLista && (
      <section className="bg-[#111] border border-[#222] rounded-2xl p-6 max-w-6xl mt-6">
        
        {clientes.length === 0 ? (
          <p className="text-white">Nenhum cliente cadastrado.</p>
        ) : (
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#333] text-white">
                <th className="py-2 px-2 text-left">ID</th>
                <th className="py-2 px-2 text-left">Nome</th>
                <th className="py-2 px-2 text-left">CPF</th>
                <th className="py-2 px-2 text-left">Endereço</th>
                <th className="py-2 px-2 text-left">CEP</th>
                <th className="py-2 px-2 text-left">Telefone</th>
                <th className="py-2 px-2 text-center">Ações</th>
              </tr>
            </thead>

            <tbody>
              {clientes.map((c) => (
                <tr key={c.cdCliente} className="border-b border-[#222] hover:bg-[#1a1a1a] transition">
                  <td className="py-2 px-2 text-white">{c.cdCliente}</td>
                  <td className="py-2 px-2 text-white">{c.dsNome}</td>
                  <td className="py-2 px-2 text-white">{c.nmCpf}</td>
                  <td className="py-2 px-2 text-white">{c.dsEndereco}</td>
                  <td className="py-2 px-2 text-white">{c.nmCep}</td>
                  <td className="py-2 px-2 text-white">{c.nmTelefone}</td>

                  <td className="py-2 px-2 text-center space-x-2">
                    <button
                      onClick={() => iniciarEdicao(c)}
                      className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => excluirCliente(c.cdCliente)}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    )}

    </main>
  );
}
