import React, { useState } from "react";
import {
  BookOpen,
  Info,
  Calculator,
  Droplet,
  Waves,
  FileText,
  ListTree,
  Hammer,
} from "lucide-react";


export default function Help() {
  const [tab, setTab] = useState("apresentacao");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 flex">

      {/* BOTÃO MOBILE – aparece apenas no celular */}
<button
  className="md:hidden fixed top-4 left-4 z-50 bg-slate-900 text-white p-2 rounded-lg shadow-lg"
  onClick={() => setMenuOpen(true)}
>
  ☰
</button>

{/* OVERLAY – fecha ao clicar fora */}
{menuOpen && (
  <div
    className="fixed inset-0 bg-black/40 z-40 md:hidden"
    onClick={() => setMenuOpen(false)}
  />
)}

{/* SIDEBAR */}
<aside
  className={`
    w-64 bg-slate-900 text-slate-100 p-6 space-y-4 flex-shrink-0
    overflow-y-auto

    /* MOBILE: retrátil e sempre fixed */
    fixed top-0 left-0 h-full z-50

    /* DESKTOP: sidebar fixo no topo, mas NÃO fixed */
    md:static md:sticky md:top-0 md:h-screen md:z-auto

    transform transition-transform duration-300
    ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
>





  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
    <BookOpen size={20} /> Menu
  </h2>

  <nav className="space-y-2">

    <button
      onClick={() => { setTab("apresentacao"); setMenuOpen(false); }}
      className={`w-full text-left px-4 py-2 rounded-lg transition ${
        tab === "apresentacao" ? "bg-blue-600" : "hover:bg-slate-700"
      }`}
    >
      Apresentação
    </button>

    <button
      onClick={() => { setTab("licenciamento"); setMenuOpen(false); }}
      className={`w-full text-left px-4 py-2 rounded-lg transition ${
        tab === "licenciamento" ? "bg-blue-600" : "hover:bg-slate-700"
      }`}
    >
      Licenciamento
    </button>

    <button
      onClick={() => { setTab("drenagem"); setMenuOpen(false); }}
      className={`w-full text-left px-4 py-2 rounded-lg transition ${
        tab === "drenagem" ? "bg-blue-600" : "hover:bg-slate-700"
      }`}
    >
      Drenagem
    </button>

    <button
      onClick={() => { setTab("esgoto"); setMenuOpen(false); }}
      className={`w-full text-left px-4 py-2 rounded-lg transition ${
        tab === "esgoto" ? "bg-blue-600" : "hover:bg-slate-700"
      }`}
    >
      Esgoto
    </button>

    <button
      onClick={() => { setTab("escavacao"); setMenuOpen(false); }}
      className={`w-full text-left px-4 py-2 rounded-lg transition ${
        tab === "escavacao" ? "bg-blue-600" : "hover:bg-slate-700"
      }`}
    >
      Escavação
    </button>

    <button
      onClick={() => { setTab("resumo"); setMenuOpen(false); }}
      className={`w-full text-left px-4 py-2 rounded-lg transition ${
        tab === "resumo" ? "bg-blue-600" : "hover:bg-slate-700"
      }`}
    >
      Resumo de Quantitativos
    </button>

  </nav>
</aside>


      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 overflow-y-auto max-w-4xl mx-auto">

        {/* ======================================================================= */}
{/* =========================== APRESENTAÇÃO =============================== */}
{/* ======================================================================= */}

{tab === "apresentacao" && (
  <section className="max-w-5xl mx-auto space-y-12 animate-fadeIn">

    {/* TÍTULO */}
    <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-slate-200">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-slate-900 bg-clip-text text-transparent flex items-center gap-3">
        🚀 Bem-vindo ao SizerPro
      </h1>
      <p className="text-slate-700 mt-4 leading-relaxed text-lg">
        O SizerPro é a plataforma profissional de dimensionamento integrada ao 
        Autodesk Civil 3D — criada para quem quer <strong>velocidade</strong>, 
        <strong>confiabilidade</strong> e <strong>controle total</strong> sobre 
        projetos de <span className="text-blue-700 font-semibold">drenagem</span>, 
        <span className="text-blue-700 font-semibold"> esgoto</span> e 
        <span className="text-blue-700 font-semibold"> escavação</span>.
      </p>
    </div>

    {/* SOBRE O PLUGIN */}
    <div className="bg-white/70 backdrop-blur-sm shadow-lg rounded-2xl p-8 border border-slate-200 space-y-5">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
        💡 O que é o SizerPro?
      </h2>

      <p className="text-slate-700 leading-relaxed">
        Um conjunto de ferramentas inteligentes que lê diretamente as informações 
        do <strong>Pipe Network</strong>, organiza os dados da rede, executa 
        cálculos hidráulicos e volumétricos completos e apresenta tudo em 
        <strong> tabelas interativas</strong> de alto desempenho.
      </p>

      <p className="text-slate-700">
        A ideia é simples: <strong>substituir planilhas</strong>, eliminar erros 
        manuais e dar ao projetista um fluxo de trabalho moderno, rápido e 
        totalmente confiável.
      </p>
    </div>

    {/* MÓDULOS */}
    <div className="bg-white/70 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-slate-200 space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
        🧩 Módulos disponíveis
      </h2>

      <ul className="grid sm:grid-cols-2 gap-6 text-slate-700">

  {/* LICENCIAMENTO */}
  <li
    onClick={() => { setTab("licenciamento"); setMenuOpen(false); }}
    className="cursor-pointer p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition shadow-sm"
  >
    <strong className="text-blue-700">🔐 Licenciamento</strong>
    <p className="text-sm mt-1">Validação por e-mail, sincronização online e controle por dispositivo.</p>
  </li>

  {/* DRENAGEM */}
  <li
    onClick={() => { setTab("drenagem"); setMenuOpen(false); }}
    className="cursor-pointer p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition shadow-sm"
  >
    <strong className="text-blue-700">💧 Drenagem</strong>
    <p className="text-sm mt-1">Método Racional e Fantolli, IDF, vazões acumuladas e hidráulica parcial.</p>
  </li>

  {/* ESGOTO */}
  <li
    onClick={() => { setTab("esgoto"); setMenuOpen(false); }}
    className="cursor-pointer p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition shadow-sm"
  >
    <strong className="text-blue-700">🚽 Esgoto</strong>
    <p className="text-sm mt-1">NBR 9649, tensões trativas, infiltração, contribuições e modo montante-jusante.</p>
  </li>

  {/* ESCAVAÇÃO */}
  <li
    onClick={() => { setTab("escavacao"); setMenuOpen(false); }}
    className="cursor-pointer p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition shadow-sm"
  >
    <strong className="text-blue-700">🏗️ Escavação</strong>
    <p className="text-sm mt-1">Volumes de vala, berço, taludes e controle geométrico completo.</p>
  </li>

  {/* RESUMO */}
  <li
    onClick={() => { setTab("resumo"); setMenuOpen(false); }}
    className="cursor-pointer p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition shadow-sm col-span-full"
  >
    <strong className="text-blue-700">📊 Resumo de Quantitativos</strong>
    <p className="text-sm mt-1">Agrupamento automático, somatórios inteligentes e exportações profissionais.</p>
  </li>

</ul>

    </div>

    {/* VANTAGENS */}
    <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8 shadow-xl space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        ⭐ Por que usar o SizerPro?
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-200">
        <li>Integração total com o Civil 3D</li>
        <li>Tabelas interativas e edição instantânea</li>
        <li>Cálculos automáticos (hidráulicos e volumétricos)</li>
        <li>Verificações normativas automáticas</li>
        <li>Exportação premium para Excel e HTML</li>
        <li>Produtividade 10x maior que planilhas</li>
        <li>Fluxo de trabalho seguro e sem erros manuais</li>
      </ul>
    </div>

    {/* FLUXO */}
    <div className="bg-white/70 backdrop-blur-sm shadow-lg rounded-2xl p-8 border border-slate-200 space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
        🔄 Como o SizerPro trabalha
      </h2>

      <ol className="list-decimal ml-6 text-slate-700 space-y-2 leading-relaxed">
        <li>Identifica tubos e estruturas selecionados</li>
        <li>Lê automaticamente geometrias, cotas e conexões</li>
        <li>Monta a rede de montante para jusante</li>
        <li>Executa os cálculos do módulo escolhido</li>
        <li>Exibe tudo em uma tabela editável</li>
        <li>Permite exportar com 1 clique</li>
      </ol>
    </div>

    {/* CTA FINAL */}
    <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-900">🎯 Pronto para elevar seu fluxo de trabalho</h2>
      <p className="text-blue-800 mt-2 leading-relaxed">
        Explore o menu lateral e veja cada módulo em detalhes.<br />
        A eficiência do SizerPro começa agora.
      </p>
    </div>

  </section>
)}



{/* =========================== LICENCIAMENTO ============================= */}
{tab === "licenciamento" && (
  <section className="max-w-4xl space-y-8 animate-fadeIn">

    {/* TÍTULO */}
    <div>
      <h1 className="text-3xl font-bold flex items-center gap-3 text-slate-900">
        🔐 Licenciamento
      </h1>
      <p className="text-slate-600 mt-2">
        O SizerPro utiliza um sistema simples de validação para garantir o uso autorizado do plugin.
      </p>
    </div>

    {/* COMO VALIDAR */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        🔑 Como validar sua licença
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed">
        <li>
          Abra o <strong>Civil 3D</strong> e clique em <strong>“Validar Licença”</strong>
          no painel do SizerPro.
        </li>
        <li>Na janela exibida, insira o e-mail usado na ativação.</li>
        <li>Clique em <strong>Validar Licença</strong>.</li>
        <li>Aguarde alguns segundos até a confirmação.</li>
      </ol>

      <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
        ✔ Se a licença estiver ativa, o plugin será liberado automaticamente.
      </div>

      <div className="mt-3 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
        ✖ Se estiver expirada ou o e-mail for inválido, uma mensagem de erro será exibida.
      </div>
    </div>

    {/* DICA */}
    <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-1">💡 Dica</h3>
      <p>
        A validação é feita automaticamente via internet e só precisa ser realizada na primeira ativação
        ou após alterações significativas no computador (formatação, troca de hardware etc.).
      </p>
    </div>

    {/* IMPORTANTE */}
    <div className="bg-yellow-50 border border-yellow-300 text-yellow-900 p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-1">⚠️ Importante</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Cada licença é vinculada a um computador específico.</li>
        <li>Para trocar de máquina, entre em contato com o suporte.</li>
        <li>Licenças expiradas permanecem inativas até regularização.</li>
      </ul>
    </div>

  </section>
)}

{/* ======================================================================= */}
{/* ============================== DRENAGEM ================================ */}
{/* ======================================================================= */}

{tab === "drenagem" && (
  <section className="max-w-4xl space-y-10 animate-fadeIn">

    {/* CARD 1 – Dimensionamento */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-4">
    <h1 className="text-3xl font-extrabold flex items-center gap-3 text-slate-900 tracking-tight">
      ▶️ Como usar o módulo de Drenagem — Passo a Passo

      </h1>

      <p className="text-slate-700 leading-relaxed">
        Ao clicar no botão “Calcular Drenagem”, o SizerPro realizará automaticamente os cálculos hidráulicos dos trechos da rede de drenagem, utilizando os dados obtidos do Pipe Network do Civil 3D (diâmetro, declividade, comprimento, estruturas montante e jusante, etc.).
      </p>

      <p className="text-slate-700 leading-relaxed">
        O resultado é exibido em uma tabela interativa, onde o usuário pode visualizar, revisar e editar os principais parâmetros do dimensionamento.
      </p>
    </div>

    {/* CARD 2 – Etapas */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2"> Etapas do Cálculo</h2>

      <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed">
        <li>Clique no botão “Calcular Drenagem” e selecione um tubo da rede que deseja calcular. O programa irá exibir uma janela com uma planilha com todos os dados da sua rede.</li>
        <li>Clique nos “…” para inserir ou editar a equação IDF da região do projeto.</li>
      </ol>
    </div>

    {/* CARD 3 – IDF */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-5">
      <h2 className="text-xl font-semibold flex items-center gap-2">🌧️ Equação de Chuva (IDF)</h2>

      <p className="text-slate-700">
        A equação de chuva é usada para calcular a intensidade da precipitação (i) em função do tempo de concentração (Tc) e do tempo de retorno (Tr).
        Ela é a base de todo o cálculo de drenagem.
      </p>

      <h3 className="text-lg font-semibold">Como escrever a equação</h3>

      <p className="text-slate-700">
        A caixa de texto aceita qualquer expressão matemática, desde que seja em função de <strong>TC</strong> e <strong>TR</strong>.
      </p>

      <pre className="bg-slate-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
(3986.034 * Math.Pow(TR, 0.203)) / Math.Pow(TC + 49.808, 0.93)
      </pre>

      <p className="text-slate-700">
        ⚠️ <strong>TC e TR não devem ser substituídos por valores fixos</strong>, pois o programa os alimenta automaticamente.
      </p>

      <p className="text-slate-700">
        TR pode ser ajustado para cada trecho clicando duas vezes no valor.  
        Para definir TR para toda a rede → clique com o botão direito → <strong>Definir Todos</strong>.
      </p>
    </div>

    {/* CARD 4 – Comandos aceitos */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-3">
      <h2 className="text-xl font-semibold flex items-center gap-2">📘 Comandos aceitos na equação</h2>

      <ul className="list-disc ml-6 text-slate-700 space-y-1">
  <li><strong><code>Math.Pow(x, y)</code></strong> → usado para elevar um número à potência desejada. Exemplo: <code>Math.Pow(2, 3)</code> calcula 2³ = 8.</li>

  <li><strong><code>Math.Log(x)</code></strong> → retorna o logaritmo natural de x (log base e). Exemplo: <code>Math.Log(Math.E)</code> retorna 1, pois ln(e) = 1.</li>

  <li><strong><code>Math.Exp(x)</code></strong> → calcula e elevado a x. Exemplo: <code>Math.Exp(2)</code> retorna 7.389, que é e².</li>

  <li><strong>Operadores normais: <code>+ - * / ()</code></strong> → permitem somar, subtrair, multiplicar, dividir e organizar a ordem da equação. Exemplo: <code>(2 + 3) * 4</code> resulta em 20.</li>
</ul>



    </div>

    {/* CARD 5 – Dica */}
    <div className="bg-blue-50 border border-blue-200 text-blue-900 p-5 rounded-xl shadow-sm space-y-2">
      <h3 className="font-semibold text-lg">💡 Dica</h3>
      <p>
        Você pode usar coeficientes obtidos no <strong>Plúvio</strong>, no formato:
      </p>
      <pre className="bg-slate-800 text-blue-100 p-3 rounded text-sm overflow-x-auto">
(k * Math.Pow(TR, a)) / Math.Pow(TC + b, c)
      </pre>
      <p>O programa aceita qualquer formato de equação IDF.</p>
    </div>

    {/* CARD 6 – Validação */}
<div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-3">
  <h2 className="text-xl font-semibold flex items-center gap-2">🔎 Validação Automática da IDF</h2>

  <p className="text-slate-700">Abaixo do campo da equação, o programa exibe um valor de teste para:</p>

  <ul className="list-disc ml-6 text-slate-700">
    <li>TR = 10 anos</li>
    <li>TC = 10 minutos</li>
  </ul>

  <p className="text-slate-700">
    Se o valor <strong>for plausível</strong> → equação válida  
    <br />
    Se aparecer <strong>zero</strong> → erro de sintaxe.
  </p>
</div>

{/* CARD 6.1 – Exemplo Visual da Validação */}
<div className="bg-white shadow-lg rounded-xl border border-slate-200 p-4">
  <img
    src="/validacao-idf.png"
    alt="Exemplo da Validação Automática da IDF"
    className="rounded-lg shadow-md w-full"
  />
</div>

{/* CARD 7 – Atenção */}
<div className="bg-yellow-50 border border-yellow-300 text-yellow-900 p-5 rounded-xl shadow-sm space-y-2">
  <h2 className="text-xl font-semibold">⚠️ Atenção Importante</h2>

  <ul className="list-disc ml-6 space-y-1">
    <li>Sempre use <strong>ponto</strong> como separador decimal.</li>
    <li>Variáveis aceitas: <strong>TR</strong> e <strong>TC</strong>.</li>
    <li>Qualquer outro nome gera erro.</li>
    <li>A drenagem só é calculada se a equação for válida.</li>
  </ul>
</div>

    {/* CARD 8 – Cálculo Hidrológico */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-5">

      <h2 className="text-xl font-semibold"> Cálculo Hidrológico – Métodos Disponíveis</h2>

      {/* Método Racional */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">1. Método Racional</h3>

        <p className="text-slate-700">Usado para estimar vazão de pico (Q):</p>

        <pre className="bg-slate-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
Q = 0,00278 × I × Σ(C × A)
        </pre>

        <p className="text-slate-700">Onde:</p>
        <ul className="list-disc ml-6 text-slate-700">
          <li>Q = vazão (m³/s)</li>
          <li>C = coeficiente de escoamento</li>
          <li>I = intensidade (mm/h)</li>
          <li>A = área (ha)</li>
        </ul>

        <h4 className="font-semibold">Etapas</h4>
        <ul className="list-disc ml-6 text-slate-700 space-y-1">
          <li>Coleta área e C de cada estrutura montante</li>
          <li>Calcula intensidade I via IDF</li>
          <li>Calcula Q = C × I × A</li>
          <li>Resolve hidráulica da seção parcialmente cheia via iteração</li>
        </ul>
      </div>

      {/* Fantolli */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold"> 2. Método Racional Modificado (Fantolli)</h3>

        <p>Usado por prefeituras.</p>

        <pre className="bg-slate-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
Q = 0,00278 × n × i × f × A
        </pre>

        <h4 className="font-semibold">2.1 Coeficiente n</h4>
        <ul className="list-disc ml-6">
          <li>Para A &lt; 1 ha → n = 1</li>
          <li>Para A ≥ 1 ha → n = A^(-0,15)</li>
        </ul>

        <h4 className="font-semibold">2.2 Coeficiente f</h4>
        <p>f = m × (i × t)^(1/3)</p>

        <h4 className="font-semibold">2.3 Coeficiente m</h4>
        <p>m = 0,0725 × C</p>

        <h4 className="font-semibold">2.4 Fórmula final</h4>
        <pre className="bg-slate-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
Q = 0,00278 × n × i × f × A
        </pre>
      </div>
    </div>

    {/* CARD 9 – Tempo de Concentração */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-4">
      <h2 className="text-xl font-semibold">⏱ Tempo de Concentração e Tempo de Percurso</h2>

      <p className="text-slate-700">
        O SizerPro calcula automaticamente o <strong>tempo total</strong> usado na IDF:
      </p>

      <pre className="bg-slate-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
Tc_total = Tc (bacia) + Tp (tubos a montante)
      </pre>

      <h3 className="font-semibold">1. Tempo de Concentração (Tc)</h3>
<ul className="list-disc ml-6 text-slate-700 space-y-1">
  <li>É obtido das bacias associadas às estruturas.</li>
  <li>Se houver múltiplas bacias associadas a uma mesma estrutura → usa-se o maior Tc.</li>
  <li>Representa o tempo que a água leva para percorrer toda a bacia até o ponto de saída.</li>
  <li>Influencia diretamente a intensidade da chuva (IDF) usada no cálculo.</li>
  <li>Unidade normalmente em minutos.</li>
  <li>O SizerPro calcula automaticamente o Tc lido do Civil 3D ou definido na equação do usuário.</li>
</ul>


      <h3 className="font-semibold">2. Tempo de Percurso (Tp)</h3>
      <p>É o tempo que a água leva para percorrer o tubo. É a Velocidade / Comprimento.</p>

      <h3 className="font-semibold">3. Resultado</h3>
      <p>Tempo de Concentração Total = Tc_bacia + Tp</p>
    </div>

    {/* CARD 10 – Finalização */}
    <div className="bg-green-50 border border-green-200 text-green-800 p-5 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold">🔄 Finalizando o Cálculo de Drenagem</h2>
      <p>Depois de inserir a equação IDF → clique em <strong>Recalcular Rede</strong>.</p>
    </div>

    {/* CARD 11 – Colunas */}
<div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 p-8 space-y-8">

<h2 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-slate-900 bg-clip-text text-transparent">
  📘 Definição das Colunas do Cálculo de Drenagem
</h2>

{/* TABELA */}
<div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
  <table className="w-full text-left border-collapse">
    <thead className="bg-slate-100/80 backdrop-blur-sm">
      <tr>
        <th className="px-5 py-3 text-sm font-semibold text-slate-700 w-1/3">Coluna</th>
        <th className="px-5 py-3 text-sm font-semibold text-slate-700">Descrição</th>
      </tr>
    </thead>

    <tbody className="text-slate-700 text-sm divide-y divide-slate-100">

      {/* Item */}
      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Nome</td>
        <td className="px-5 py-3">Nome do trecho conforme exibido no Civil 3D.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Comprimento (m)</td>
        <td className="px-5 py-3">Comprimento total do tubo em 3D, considerando diferenças de cota.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Declividade (m/m)</td>
        <td className="px-5 py-3">Inclinação do trecho entre montante e jusante.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Diâmetro (m)</td>
        <td className="px-5 py-3">Diâmetro interno utilizado nos cálculos hidráulicos.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Estrutura Montante / Jusante</td>
        <td className="px-5 py-3">Caixas conectadas ao tubo, indicando o fluxo da rede.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Área da Bacia (ha)</td>
        <td className="px-5 py-3">Área contribuinte associada à estrutura de montante.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Coeficiente C</td>
        <td className="px-5 py-3">Proporção da chuva que se transforma em escoamento.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Tempo de Concentração (min)</td>
        <td className="px-5 py-3">Tempo necessário para a água percorrer toda a bacia.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Intensidade (mm/h)</td>
        <td className="px-5 py-3">Intensidade calculada pela equação IDF configurada pelo usuário.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Tempo de Retorno (anos)</td>
        <td className="px-5 py-3">TR utilizado para calcular a intensidade de chuva.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Vazão Local (m³/s)</td>
        <td className="px-5 py-3">Vazão gerada apenas pela bacia local do trecho.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Lâmina (m)</td>
        <td className="px-5 py-3">Altura do escoamento dentro do tubo.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Velocidade (m/s)</td>
        <td className="px-5 py-3">Velocidade média da água, via fórmula de Manning.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Lâmina (%)</td>
        <td className="px-5 py-3">Percentual da seção preenchida pelo escoamento.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Coef. Manning (n)</td>
        <td className="px-5 py-3">Rugosidade do tubo utilizada nos cálculos hidráulicos.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Vazão Escoando (m³/s)</td>
        <td className="px-5 py-3">Vazão total acumulada que passa pelo trecho.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Tempo de Percurso (min)</td>
        <td className="px-5 py-3">Tempo da água para atravessar o trecho.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Tempo de Concentração Total (min)</td>
        <td className="px-5 py-3">TC total: TC_bacia_max + tempos de percurso.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Área Total (ha)</td>
        <td className="px-5 py-3">Somatório das áreas de todas as bacias contribuindo.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Área Total × C</td>
        <td className="px-5 py-3">Somatório acumulado de C × A da rede.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">n Fantolli</td>
        <td className="px-5 py-3">Parâmetro dependendo da área total no método Fantolli.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">f Fantolli</td>
        <td className="px-5 py-3">Fator ajustado conforme intensidade e TC total.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Coordenadas N/E e Cotas</td>
        <td className="px-5 py-3">Dados de posição e altura das estruturas.</td>
      </tr>

      <tr className="hover:bg-slate-50 transition">
        <td className="px-5 py-3 font-semibold text-slate-900">Recobrimentos e Profundidades</td>
        <td className="px-5 py-3">Geometria de instalação e profundidade do tubo.</td>
      </tr>

    </tbody>
  </table>
</div>
</div>

  </section>
)}


  {/* ======================================================================= */}
{/* =============================== ESGOTO ================================= */}
{/* ======================================================================= */}

{tab === "esgoto" && (
  <section className="max-w-4xl space-y-10 animate-fadeIn">

    {/* TÍTULO */}
    <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-7 border border-slate-200">
      <h1 className="text-3xl font-extrabold flex items-center gap-3 text-slate-900 tracking-tight">
        ▶️ Como usar o módulo de esgoto — Passo a Passo
      </h1>
    </div>

    {/* PASSO 1 */}
    <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 border border-slate-200 space-y-4">
      <h2 className="text-xl font-semibold text-slate-900">1 — Clique em “Calcular Esgoto” e selecione um tubo</h2>
      <p className="text-slate-700 leading-relaxed">
        O SizerPro abre automaticamente a tabela com todos os tubos, estruturas,
        comprimentos, declividades, diâmetros e suas propriedades lidas do Civil 3D.
      </p>
    </div>

    {/* PASSO 2 */}
    <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 border border-slate-200 space-y-5">
      <h2 className="text-xl font-semibold text-slate-900">2 — Preencha os parâmetros de projeto</h2>
      <p>Do lado esquerdo existe um painel com todos os parâmetros.<br />Eles estão agrupados em:</p>

      <div className="space-y-4">

        <div>
          <h3 className="font-semibold text-blue-700 text-lg">🔵 Categoria: População</h3>
          <ul className="list-disc ml-6 mt-1 space-y-1">
            <li>Número de Lotes</li>
            <li>Habitantes por lote</li>
            <li>Taxa de Crescimento</li>
            <li>População inicial e final (calculadas automaticamente)</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-purple-700 text-lg">🟣 Categoria: Vazões</h3>
          <ul className="list-disc ml-6 mt-1 space-y-1">
            <li>Cota Per Capita (L/hab.dia)</li>
            <li>Coeficiente de Retorno</li>
            <li>Taxa de Infiltração (L/s·m)</li>
            <li>Fatores k1 e k2 da NBR</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-green-700 text-lg">🟢 Categoria: Rede</h3>
          <p className="mt-1">- Comprimento considerado nos cálculos (2D ou 3D)</p>
        </div>

      </div>

      <p className="text-slate-700">Todos estes valores podem ser alterados a qualquer momento.</p>
    </div>

    {/* PASSO 3 */}
    <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 border border-slate-200 space-y-4">
      <h2 className="text-xl font-semibold text-slate-900">3 — Defina o Coeficiente de Utilização dos trechos</h2>

      <p className="text-slate-700">
        <strong>Coeficiente de Utilização</strong><br />
        → controla a fração de vazão domiciliar atribuída ao trecho.
      </p>

      <p className="text-slate-700">Exemplos:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>rua com rede dos dois lados → Cutil = 0,5</li>
        <li>rua com rede de apenas um lado → Cutil = 1,0</li>
      </ul>

      <p>Para aplicar o mesmo valor a todos:<br />
      → botão direito → <strong>Definir Todos</strong></p>
    </div>

    {/* PASSO 4 */}
    <div className="bg-green-50 border border-green-300 shadow-lg rounded-2xl p-6 space-y-3">
      <h2 className="text-xl font-semibold text-green-800">4 — Clique em “Recalcular Rede”</h2>

      <p>Aciona todos os cálculos automaticamente:</p>

      <ul className="list-disc ml-6 space-y-1">
        <li>Vazão domiciliar inicial</li>
        <li>Vazão domiciliar final</li>
        <li>Vazão de infiltração</li>
        <li>Vazões lineares</li>
        <li>Vazões acumuladas por trecho</li>
        <li>Vazão adotada (mínimo 1,5 L/s conforme NBR 9649)</li>
        <li>Velocidades</li>
        <li>Tensões trativas</li>
        <li>Verificação de lâmina</li>
        <li>Comprimento acumulado</li>
        <li>Destaque e localização do tubo no CAD</li>
      </ul>
    </div>

    {/* COMO O CÁLCULO É FEITO */}
    <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-7 border border-slate-200 space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">🧠 Como o cálculo é feito — Passo a Passo Interno</h1>

      <div className="space-y-5">

        <div>
          <h2 className="text-xl font-semibold text-slate-900">1 — Leitura automática da rede</h2>
          <ul className="list-disc ml-6 mt-1 space-y-1">
            <li>Estrutura de Montante e Jusante</li>
            <li>Comprimento 2D</li>
            <li>Comprimento 3D</li>
            <li>Declividade</li>
            <li>Diâmetro interno</li>
            <li>Coordenadas N/E</li>
            <li>Cotas topo e fundo</li>
            <li>Recobrimentos</li>
            <li>Profundidade da estrutura</li>
          </ul>
        </div>

        {/* CONTRIBUIÇÃO DOMICILIAR */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900">2 — Cálculo da contribuição domiciliar</h2>

          <h3 className="font-semibold mt-2">🔹 Contribuição inicial (início de plano)</h3>
          <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Qdom,início = (N_lotes * H * taxa_crescimento * cota_per_capita / 86400
          </pre>

          <h3 className="font-semibold mt-3">🔹 Contribuição final (final de plano)</h3>
          <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Qdom,final = (N_lotes * H * cota_per_capita * Cr) / 86400
          </pre>

          <p className="mt-2">O programa usa automaticamente estes valores.</p>
        </div>

        {/* INFILTRAÇÃO */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900">3 — Vazão de infiltração</h2>
          <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Qinf = L_real × taxa_infiltração
          </pre>
        </div>

        {/* VAZAO LINEAR */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900">4 — Vazão por lote convertida para vazão linear</h2>
          <p>O SizerPro transforma a vazão total em vazão distribuída por metro:</p>

          <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
q_lin = Q_total / L_fictício
          </pre>

          <p>Usando o coeficiente de utilização para ponderar.</p>
        </div>

        {/* CONTRIBUIÇÃO POR TRECHO */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900">5 — Contribuição por trecho</h2>

          <h3 className="font-semibold mt-2">Se Cutil = 0</h3>
          <p>Apenas infiltração:</p>
          <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Qi = L × q_inf
          </pre>

          <h3 className="font-semibold mt-4">Se Cutil é maior que 0</h3>
          <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Qi = L × (Cutil × q_dom + q_inf)
          </pre>
        </div>

        {/* ACUMULADA */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900">6 — Vazão acumulada por trecho</h2>
          <p>A rede é percorrida de <strong>montante para jusante</strong>, somando contribuições.</p>
        </div>

        {/* VAZAO ADOTADA */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900">7 — Vazão adotada</h2>
          <p>Converte para m³/s:</p>

          <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Q = Q_L/s / 1000
          </pre>

          <p>Com mínimo normativo:</p>
          <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Qmín = 0,0015 m³/s
          </pre>
        </div>

      </div>
    </div>

    {/* HIDRÁULICA */}
    <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-7 border border-slate-200 space-y-6">
      <h1 className="text-xl font-semibold text-slate-900">💧 Cálculo Hidráulico (Seção Parcial)</h1>

      <p>Para cada trecho o SizerPro varre valores de lâmina, calculando:</p>

      <ul className="list-disc ml-6 space-y-1">
        <li>Área molhada</li>
        <li>Perímetro molhado</li>
        <li>Raio hidráulico</li>
        <li>Velocidade (Manning)</li>
        <li>Vazão resultante</li>
        <li>Ângulo (θ)</li>
      </ul>

      <h3 className="font-semibold">Equações utilizadas</h3>

      <pre className="bg-slate-900 text-green-300 p-4 rounded-xl">
  <code>
    V = (1/n) × Rh^(2/3) × S^(1/2) <br />
    Q = A × V <br />
    θ = 2 × acos((r - y) / r)
  </code>
</pre>

    </div>

    {/* NORMAS */}
    <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-7 border border-slate-200 space-y-6">
      <h1 className="text-xl font-semibold text-slate-900">📏 Cálculos e Verificações Normativas</h1>

      <ul className="list-disc ml-6 space-y-1">
        <li>Percentual da lâmina</li>
        <li>Tensão trativa</li>
      </ul>

      <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
τ = 10000 × Rh × S
      </pre>

      <p>Velocidade crítica:</p>

      <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Vc = 6 × sqrt(g × Rh)
      </pre>

      <p>As células mudam de cor para indicar:</p>

      <ul className="list-disc ml-6 space-y-1">
        <li>lâmina acima do limite</li>
        <li>velocidade fora do intervalo</li>
        <li>tensão trativa insuficiente</li>
      </ul>
    </div>

    {/* FERRAMENTAS */}
    <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-7 border border-slate-200 space-y-6">
      <h1 className="text-xl font-semibold text-slate-900">🧰 Ferramentas Adicionais</h1>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold">🗂 Selecionar Colunas</h3>
          <p>Permite exibir/ocultar qualquer coluna da tabela.</p>
        </div>

        <div>
          <h3 className="font-semibold">📤 Exportar para Excel</h3>
          <p>Inclui todas as colunas visíveis + aba de parâmetros.</p>
        </div>

        <div>
          <h3 className="font-semibold">🌐 Exportar HTML</h3>
          <p>Gera arquivo visual pronto para cliente, relatório ou memorial.</p>
        </div>
      </div>
    </div>

    {/* COLUNAS */}
<div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-7 border border-slate-200">
  <h1 className="text-xl font-bold mb-4 text-slate-900">🧾 Colunas do Cálculo de Esgoto</h1>


  {/* TABELA MODERNA (MESMO ESTILO DA DRENAGEM) */}
  <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
    <table className="w-full text-left border-collapse">
      <thead className="bg-slate-100/80 backdrop-blur-sm">
        <tr>
          <th className="px-5 py-3 text-sm font-semibold text-slate-700 w-1/3">
            Coluna
          </th>
          <th className="px-5 py-3 text-sm font-semibold text-slate-700">
            Descrição
          </th>
        </tr>
      </thead>

      <tbody className="text-slate-700 text-sm divide-y divide-slate-100">

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Nome</td>
          <td className="px-5 py-3">Nome do trecho no Civil 3D.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Comprimento 2D (m)</td>
          <td className="px-5 py-3">Projeção horizontal.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Comprimento 3D (m)</td>
          <td className="px-5 py-3">Comprimento real.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Comprimento Acumulado 2D (m)</td>
          <td className="px-5 py-3">Somatório 2D dos trechos a montante.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Comprimento Acumulado 3D (m)</td>
          <td className="px-5 py-3">Somatório 3D dos trechos a montante.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Declividade (m/m)</td>
          <td className="px-5 py-3">Inclinação.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Diâmetro (m)</td>
          <td className="px-5 py-3">Diâmetro interno.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Estrutura de Montante / Jusante</td>
          <td className="px-5 py-3">Caixas do trecho.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Vazão Total (Início) (L/s)</td>
          <td className="px-5 py-3">Acúmulo até o início do trecho.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Vazão Total (Fim) (L/s)</td>
          <td className="px-5 py-3">Acúmulo até o final do trecho.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Contribuição Trecho Início (L/s)</td>
          <td className="px-5 py-3">Somente o trecho (cenário inicial).</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Contribuição Trecho Final (L/s)</td>
          <td className="px-5 py-3">Somente o trecho (cenário final de plano).</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Vazão Adotada (Início / Fim)</td>
          <td className="px-5 py-3">Vazões usadas no cálculo hidráulico.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Lâmina Início / Final (m)</td>
          <td className="px-5 py-3">Altura da lâmina.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Velocidade Início / Final (m/s)</td>
          <td className="px-5 py-3">Velocidade calculada.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Coef. de Manning</td>
          <td className="px-5 py-3">Rugosidade.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Área Molhada Início / Fim (m²)</td>
          <td className="px-5 py-3">Áreas hidráulicas.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Raio Hidráulico Início / Fim (m)</td>
          <td className="px-5 py-3">Valores hidráulicos.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">% Lâmina Início / Fim</td>
          <td className="px-5 py-3">Percentual relativo ao diâmetro.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">θ Início / Fim (rad)</td>
          <td className="px-5 py-3">Ângulos hidráulicos.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Tensão Trativa Início / Fim (Pa)</td>
          <td className="px-5 py-3">Capacidade de arraste.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Coef. de Utilização</td>
          <td className="px-5 py-3">Ponderador do loteamento.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Velocidade Crítica Início / Fim (m/s)</td>
          <td className="px-5 py-3">Usada para verificações.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Vazão Pontual Início / Fim (L/s)</td>
          <td className="px-5 py-3">Entradas adicionais inseridas pelo usuário.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Coordenadas (N/E)</td>
          <td className="px-5 py-3">Pontos de montante e jusante.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Cotas topo/fundo (montante/jusante)</td>
          <td className="px-5 py-3">Geometria das estruturas.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Profundidade das Estruturas</td>
          <td className="px-5 py-3">(topos – fundos)</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Recobrimentos</td>
          <td className="px-5 py-3">No início, fim e ponto jusante.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Cota Terreno Inserção (Montante / Jusante)</td>
          <td className="px-5 py-3">Terreno na conexão.</td>
        </tr>

        <tr className="hover:bg-slate-50 transition">
          <td className="px-5 py-3 font-semibold text-slate-900">Profundidade do Tubo (Montante / Jusante)</td>
          <td className="px-5 py-3">Profundidade em relação ao terreno.</td>
        </tr>

      </tbody>
    </table>
  </div>
</div>


    {/* FINAL */}
    <div className="bg-green-50 border border-green-300 p-7 rounded-2xl shadow-sm">
      <h1 className="text-xl font-semibold text-green-900">✔️ Finalizando o Cálculo</h1>
      <p className="text-slate-700 mt-2 leading-relaxed">
        Quando tudo estiver configurado:<br />
        → clique em <strong>Recalcular Rede</strong><br />
        O SizerPro processa tudo e atualiza a tabela.
      </p>
    </div>

  </section>
)}



        {/* ======================================================================= */}
{/* ============================= ESCAVAÇÃO ================================ */}
{/* ======================================================================= */}

{tab === "escavacao" && (
  <section className="max-w-4xl space-y-10 animate-fadeIn">

    {/* TÍTULO */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200">
      <h1 className="text-3xl font-bold flex items-center gap-3 text-slate-900">
        🏗️ Escavação — Como funciona o módulo e como utilizar
      </h1>
    </div>

    {/* INTRO */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-4">
      <p>
        O módulo de Escavação do SizerPro calcula automaticamente volumes de vala, berço e reaterro de cada trecho de tubulação da sua rede de drenagem ou esgoto, utilizando diretamente os dados do Pipe Network do Civil 3D.
      </p>

      <p>
        Ele é ideal para gerar quantitativos confiáveis, exportar planilhas e verificar rapidamente o impacto de profundidades e geometrias da vala ao longo da rede.
      </p>
    </div>

    {/* COMO FUNCIONA */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-5">
      <h1 className="text-xl font-semibold">🧩 Como o módulo funciona</h1>

      <p>Ao abrir o comando Escavação, o SizerPro:</p>

      <ol className="list-decimal ml-6 space-y-2">
        <li>
          <strong>Lê todos os tubos da rede selecionada no Civil 3D</strong><br />
          (comprimento, profundidades, diâmetros, recobrimentos etc.)
        </li>

        <li>
          <strong>Calcula automaticamente:</strong>
          <ul className="list-disc ml-8 mt-1 space-y-1">
            <li>Profundidade média da vala</li>
            <li>Área da seção escavada</li>
            <li>Volume de escavação (m³)</li>
            <li>Volume ocupado pelo tubo</li>
            <li>Volume de berço</li>
            <li>Volume final de reaterro</li>
          </ul>
        </li>

        <li>
          <strong>Exibe tudo em uma tabela interativa</strong>, permitindo ajustes manuais como:
          <ul className="list-disc ml-8 mt-1 space-y-1">
            <li>Largura da base da vala</li>
            <li>Altura e largura do berço</li>
            <li>Tipo do talude</li>
            <li>Inclinação H:V</li>
          </ul>
        </li>

        <li><strong>Gera automaticamente um Resumo de Quantitativos</strong>, com os volumes totais.</li>

        <li><strong>Permite exportar para Excel ou HTML</strong> com um clique.</li>
      </ol>
    </div>

    {/* PARÂMETROS AUTOMÁTICOS */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-4">
      <h1 className="text-xl font-semibold">⚙️ Parâmetros que o SizerPro lê automaticamente</h1>

      <p>Esses valores vêm direto do Civil 3D:</p>

      <ul className="list-disc ml-6 space-y-1">
        <li>Comprimento 3D do tubo</li>
        <li>Diâmetro externo</li>
        <li>Profundidade de montante e jusante<br /> (com base no recobrimento + diâmetro)</li>
        <li>Profundidade média da vala</li>
      </ul>

      <p>
        O usuário <strong>não precisa preencher nada disso manualmente</strong>.
        O módulo mantém tudo sincronizado com o desenho através do botão <strong>Recarregar Rede</strong>.
      </p>
    </div>

    {/* PARÂMETROS EDITÁVEIS */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-4">
      <h1 className="text-xl font-semibold">🛠️ Parâmetros editáveis pelo usuário</h1>

      <p>
        Os itens abaixo impactam diretamente o cálculo de volumes e podem ser ajustados individualmente ou para toda a rede usando:
      </p>

      <p>→ botão direito → <strong>Definir Todos</strong></p>

      <ol className="list-decimal ml-6 space-y-3">
        <li>
          <strong>Largura da Base da vala (m)</strong><br />
          Fundo escavado onde o tubo será apoiado.
        </li>

        <li>
          <strong>Largura do Berço (m)</strong><br />
          Região específica de apoio e acomodação do tubo.
        </li>

        <li>
          <strong>Altura do Berço (m)</strong><br />
          Altura de material de apoio sob o tubo.
        </li>

        <li>
          <strong>Tipo de Talude</strong>
          <ul className="list-disc ml-6 mt-1">
            <li>Vertical</li>
            <li>Inclinado</li>
          </ul>
        </li>

        <li>
          <strong>Inclinação H:V</strong><br />
          Utilizada apenas quando o talude é inclinado.
        </li>
      </ol>
    </div>

    {/* CÁLCULOS AUTOMÁTICOS */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-6">
      <h1 className="text-xl font-semibold">🧮 Cálculos realizados automaticamente</h1>

      {/* Área da seção */}
      <div>
        <h2 className="text-lg font-semibold">🔹 Área da seção escavada (m²)</h2>
        <p>Depende de:</p>
        <ul className="list-disc ml-6">
          <li>profundidade</li>
          <li>largura da base</li>
          <li>talude</li>
        </ul>

        <p>Pode ser:</p>

        <ul className="list-disc ml-6">
          <li><strong>Retangular</strong>, quando o talude é vertical</li>
          <li><strong>Trapézio</strong>, quando o talude é inclinado</li>
        </ul>
      </div>

      {/* Volume de Escavação */}
      <div>
        <h2 className="text-lg font-semibold">🔹 Volume de Escavação (m³)</h2>

        <pre className="bg-slate-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
Volume = Área da seção × Comprimento
        </pre>
      </div>

      {/* Volume de Berço */}
      <div>
        <h2 className="text-lg font-semibold">🔹 Volume de Berço (m³)</h2>

        <p>Calculado conforme geometria:</p>

        <ul className="list-disc ml-6">
          <li>Retangular quando o talude é vertical</li>
          <li>Retangular quando o berço é menor que a base</li>
          <li>Trapézio quando o berço acompanha o talude</li>
        </ul>
      </div>

      {/* Volume de Reaterro */}
      <div>
        <h2 className="text-lg font-semibold">🔹 Volume de Reaterro (m³)</h2>

        <pre className="bg-slate-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
Reaterro = Escavação − Volume do tubo − Volume do berço
        </pre>
      </div>
    </div>

  </section>
)}


       {/* ======================================================================= */}
{/* ====================== RESUMO DE QUANTITATIVOS ======================== */}
{/* ======================================================================= */}

{tab === "resumo" && (
  <section className="max-w-4xl space-y-10 animate-fadeIn">

    {/* TÍTULO */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200">
      <h1 className="text-3xl font-bold flex items-center gap-3 text-slate-900">
        📊 Resumo de Quantitativos
      </h1>
    </div>

    {/* PAINEL 1 */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-3">
      <h2 className="text-xl font-semibold">📦 Painel 1 — Tubos</h2>
      <p>Agrupamento por faixa, part size, descrição ou nome inicial.</p>
    </div>

    {/* PAINEL 2 */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-3">
      <h2 className="text-xl font-semibold">🏗️ Painel 2 — Estruturas</h2>
      <p>Agrupamento por nome, descrição, part size ou prefixo.</p>
    </div>

    {/* EXPORTAÇÕES — ORIGINAL */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-3">
      <h2 className="text-xl font-semibold">📤 Exportações</h2>
      <ul className="list-disc ml-6">
        <li>Exportar Excel</li>
        <li>Exportar HTML</li>
      </ul>
    </div>

    {/* NOVO CONTEÚDO INSERIDO — 100% IDENTICO AO QUE VOCÊ ENVIOU */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-6">

      <h1 className="text-2xl font-bold">📤 Exportações do Resumo de Quantitativos</h1>
      <p>O módulo possui <strong>duas exportações completas</strong>:</p>

      <hr />

      {/* EXPORTAR EXCEL */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">1) Exportar Excel</h2>
        <p>Gera um arquivo com <strong>duas abas</strong>:</p>

        <h3 className="text-lg font-semibold text-blue-700">📄 Aba “Tubos”</h3>
        <p>Contém:</p>
        <ul className="list-disc ml-6">
          <li>Descrição</li>
          <li>Diâmetro</li>
          <li>Quantidade</li>
          <li>Comprimento total</li>
        </ul>
        <p>Com formatação e alinhamento profissionais.</p>

        <h3 className="text-lg font-semibold text-blue-700">📂 Aba “Estruturas”</h3>
        <ul className="list-disc ml-6">
          <li>Coluna 1: Agrupador</li>
          <li>Coluna 2: Estrutura individual</li>
        </ul>

        <p>Ideal para:</p>
        <ul className="list-disc ml-6">
          <li>Planilhas orçamentárias</li>
          <li>Relatórios técnicos</li>
          <li>Licitações</li>
        </ul>
      </div>

      <hr />

      {/* EXPORTAR HTML */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">2) Exportar HTML</h2>

        <p>Gera um arquivo contendo:</p>
        <ul className="list-disc ml-6">
          <li>Tabela dos tubos</li>
          <li>Agrupamentos de estruturas</li>
          <li>Formatação automática</li>
        </ul>

        <p>Pronto para:</p>
        <ul className="list-disc ml-6">
          <li>Entregar ao cliente</li>
          <li>Anexar em memoriais</li>
          <li>Inserir em relatórios</li>
        </ul>
      </div>

    </div>

  </section>
)}


      </main>
    </div>
  );
}