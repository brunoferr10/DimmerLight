import { useEffect, useState, FormEvent } from "react";

type Pagamento = {
  cdPagamento?: number;
  dsFormaPag: string;
  vlServico1: number | string;
  dtPagamento: string;
  dsStatusPag: string;
};

const API_URL = "https://five63489.onrender.com/pagamento";


const FORMAS_PAGAMENTO = [
  "Pix",
  "Cartão de Crédito",
  "Cartão de Débito",
  "Boleto",
  "Dinheiro",
];

const STATUS_PAGAMENTO = ["Aprovado", "Pendente", "Cancelado"];

export default function Pagamentos() {
  const [pagamentos, setPagamentos] = useState<Pagamento[]>([]);
  const [mostrarLista, setMostrarLista] = useState(false);
  const [loadingLista, setLoadingLista] = useState(false);
  const [editandoId, setEditandoId] = useState<number | null>(null);

  const [form, setForm] = useState<Pagamento>({
    dsFormaPag: "",
    vlServico1: "",
    dtPagamento: "",
    dsStatusPag: "",
  });

  
  useEffect(() => {
    carregarPagamentos();
  }, []);

  async function carregarPagamentos() {
    setLoadingLista(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        setPagamentos([]);
        return;
      }
      const data = await res.json();
      setPagamentos(data);
    } catch {
      console.error("Erro ao carregar pagamentos");
    } finally {
      setLoadingLista(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function limparFormulario() {
    setEditandoId(null);
    setForm({
      dsFormaPag: "",
      vlServico1: "",
      dtPagamento: "",
      dsStatusPag: "",
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Garante número no valor
    const valorNumero = Number(
      typeof form.vlServico1 === "string"
        ? form.vlServico1.replace(",", ".")
        : form.vlServico1
    );

    if (isNaN(valorNumero) || valorNumero <= 0) {
      alert("Informe um valor válido para o serviço.");
      return;
    }

    if (!form.dtPagamento) {
      alert("Informe a data do pagamento.");
      return;
    }

    const payload: Pagamento = {
      ...form,
      vlServico1: valorNumero,
    };

    const metodo = editandoId ? "PUT" : "POST";
    const url = editandoId ? `${API_URL}/${editandoId}` : API_URL;

    try {
      const res = await fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        alert("Erro ao salvar pagamento. Verifique os dados.");
        return;
      }

      await carregarPagamentos();
      limparFormulario();
      alert(
        editandoId
          ? "Pagamento atualizado com sucesso!"
          : "Pagamento cadastrado com sucesso!"
      );
    } catch {
      alert("Erro de comunicação com o servidor.");
    }
  }

  function iniciarEdicao(p: Pagamento) {
    setEditandoId(p.cdPagamento ?? null);
    setForm({
      dsFormaPag: p.dsFormaPag,
      vlServico1: p.vlServico1,
      dtPagamento: p.dtPagamento,
      dsStatusPag: p.dsStatusPag,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function excluirPagamento(id?: number) {
    if (!id) return;
    if (!confirm("Deseja realmente excluir este pagamento?")) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (res.ok) {
        alert("Pagamento excluído com sucesso!");
        carregarPagamentos();
      } else {
        alert("Erro ao excluir pagamento.");
      }
    } catch {
      alert("Erro de comunicação com o servidor.");
    }
  }

  function formatarValor(valor: number | string) {
    const num =
      typeof valor === "string"
        ? Number(valor.replace(",", "."))
        : Number(valor);
    if (isNaN(num)) return "-";
    return `R$ ${num.toFixed(2).replace(".", ",")}`;
  }

  return (
    <main className="p-8 flex flex-col gap-8">
      {/* TÍTULO + BOTÃO LISTAR */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#ff6600]">Pagamentos</h1>

        <button
          onClick={() => {
            const novo = !mostrarLista;
            setMostrarLista(novo);
            if (novo) carregarPagamentos();
          }}
          className="bg-[#ff6600] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#ff8533] transition"
        >
          {mostrarLista ? "Ocultar Lista" : "Listar Pagamentos"}
        </button>
      </div>

      {/* FORMULÁRIO */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-[#111] border border-gray-300 dark:border-[#222] p-8 rounded-2xl shadow-lg flex flex-col gap-6 max-w-4xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Forma de Pagamento */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Forma de pagamento</label>
            <select
              name="dsFormaPag"
              value={form.dsFormaPag}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-100 dark:bg-[#181818] border dark:border-[#333] text-sm"
            >
              <option value="">Selecione...</option>
              {FORMAS_PAGAMENTO.map((fp) => (
                <option key={fp} value={fp}>
                  {fp}
                </option>
              ))}
            </select>
          </div>

          {/* Valor */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">
              Valor do serviço (R$)
            </label>
            <input
              type="number"
              step="0.01"
              name="vlServico1"
              value={form.vlServico1}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-100 dark:bg-[#181818] border dark:border-[#333] text-sm"
              placeholder="Ex.: 100.00"
            />
          </div>

          {/* Data de Pagamento */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Data do pagamento</label>
            <input
              type="date"
              name="dtPagamento"
              value={form.dtPagamento}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-100 dark:bg-[#181818] border dark:border-[#333] text-sm"
            />
          </div>

          {/* Status */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Status</label>
            <select
              name="dsStatusPag"
              value={form.dsStatusPag}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-100 dark:bg-[#181818] border dark:border-[#333] text-sm"
            >
              <option value="">Selecione...</option>
              {STATUS_PAGAMENTO.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
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
          {editandoId ? "Salvar Alterações" : "Salvar Pagamento"}
        </button>
      </form>

      {/* LISTA */}
      {mostrarLista && (
        <section className="bg-[#111] border border-[#222] rounded-2xl p-6 max-w-6xl">
          {loadingLista ? (
            <p className="text-white text-sm">Carregando pagamentos...</p>
          ) : pagamentos.length === 0 ? (
            <p className="text-white text-sm">Nenhum pagamento cadastrado.</p>
          ) : (
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#333] text-white">
                  <th className="py-2 px-2 text-left">ID</th>
                  <th className="py-2 px-2 text-left">Forma de Pagamento</th>
                  <th className="py-2 px-2 text-left">Valor</th>
                  <th className="py-2 px-2 text-left">Data</th>
                  <th className="py-2 px-2 text-left">Status</th>
                  <th className="py-2 px-2 text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {pagamentos.map((p) => (
                  <tr
                    key={p.cdPagamento}
                    className="border-b border-[#222] hover:bg-[#1a1a1a] transition"
                  >
                    <td className="py-2 px-2 text-white">{p.cdPagamento}</td>
                    <td className="py-2 px-2 text-white">{p.dsFormaPag}</td>
                    <td className="py-2 px-2 text-white">
                      {formatarValor(p.vlServico1)}
                    </td>
                    <td className="py-2 px-2 text-white">{p.dtPagamento}</td>
                    <td className="py-2 px-2 text-white">{p.dsStatusPag}</td>
                    <td className="py-2 px-2 text-center space-x-2">
                      <button
                        onClick={() => iniciarEdicao(p)}
                        className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => excluirPagamento(p.cdPagamento)}
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
