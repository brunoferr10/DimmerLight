import HeaderPainel from "../../components/HeaderPainel";

export default function PainelPage() {
  return (
    <div className="min-h-screen flex bg-[#0a0a0a] text-white">
      <HeaderPainel />

      <main className="ml-60 w-full p-10">
        <h1 className="text-3xl font-bold">Bem-vindo ao Painel</h1>
      </main>
    </div>
  );
}
