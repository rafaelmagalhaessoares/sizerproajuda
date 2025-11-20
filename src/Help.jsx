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

    {/* CARD ÚNICO – TÍTULO + DESCRIÇÃO TÉCNICA */}
<div className="bg-white/70 backdrop-blur-md shadow-xl rounded-xl p-8 border border-slate-200 space-y-5">
  <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-slate-900 bg-clip-text text-transparent flex items-center gap-3">
    Bem-vindo ao SizerPro
  </h1>

  <p className="text-slate-700 leading-relaxed text-lg mt-3">
    O SizerPro é um plugin técnico integrado ao Autodesk Civil 3D, projetado
    para automatizar análises, cálculos e validações em redes de 
    <span className="text-blue-700 font-semibold"> drenagem</span> e 
    <span className="text-blue-700 font-semibold"> esgoto.</span>
  </p>

  <p className="text-slate-700 leading-relaxed">
    A ferramenta lê diretamente o <strong>Pipe Network</strong>, interpreta 
    diâmetros, declividades, cotas, profundidades, conexões e propriedades 
    geométricas, consolidando tudo em <strong>tabelas interativas</strong> e 
    painéis de diagnóstico. Com base nesses dados, executa cálculos hidráulicos, 
    sanitários e volumétricos conforme normas vigentes, garantindo precisão e 
    padronização em todo o processo.
  </p>

  <p className="text-slate-700 leading-relaxed">
    O objetivo é oferecer ao projetista um fluxo de trabalho técnico, rápido e 
    confiável, eliminando planilhas paralelas, reduzindo erros manuais e 
    centralizando o dimensionamento dentro do próprio Civil 3D.
  </p>
</div>



    {/* MÓDULOS */}
    <div className="bg-white/70 backdrop-blur-sm shadow-xl rounded-xl p-8 border border-slate-200 space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
        Módulos disponíveis
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

    
    {/* FLUXO */}
    <div className="bg-white/70 backdrop-blur-sm shadow-lg rounded-xl p-8 border border-slate-200 space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
        Como o SizerPro trabalha
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
    <div className="bg-blue-50 border border-blue-200 p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-900">Pronto para elevar seu fluxo de trabalho</h2>
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
         Se a licença estiver ativa, o plugin será liberado automaticamente.
      </div>

      <div className="mt-3 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
         Se estiver expirada ou o e-mail for inválido, uma mensagem de erro será exibida.
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
{/* CARD – Validação da Rede */}
<div className="bg-blue-50 border border-blue-200 text-blue-900 p-5 rounded-xl shadow-sm space-y-2">
    <h2 className="text-xl font-semibold flex items-center gap-2">
    Validação da Rede de Drenagem
  </h2>

  <p className="text-slate-700 leading-relaxed">
    Antes de iniciar os cálculos, o SizerPro realiza uma <strong>validação completa</strong> da sua rede de drenagem para garantir que todos os trechos estão conectados corretamente e que a topologia da rede está consistente.
  </p>

  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
    <li>Verifica se <strong>todos os tubos possuem estrutura de montante e jusante</strong>.</li>
    <li>Verifica se cada estrutura possui <strong>no máximo 1 tubo de saída</strong>.</li>
    <li>Confirma a existência de ao menos <strong>um ponto de descarga</strong>.</li>
    <li>Garante que não existam <strong>partes desconectadas</strong> ou trechos isolados no Pipe Network.</li>
  </ul>

  <p className="text-slate-700">
    Caso seja encontrada alguma inconsistência, o SizerPro exibe uma lista com os erros detectados para que você corrija antes de avançar para a etapa de cálculo hidráulico.
  </p>
</div>

    {/* CARD 3 – IDF + Comandos (unificado) */}
<div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-6">

{/* Título Principal */}
<h2 className="text-xl font-semibold flex items-center gap-2">
  🌧️ Equação de Chuva (IDF)
</h2>

{/* Introdução */}
<p className="text-slate-700">
  A equação de chuva é usada para calcular a intensidade da precipitação (i)
  em função do tempo de concentração (Tc) e do tempo de retorno (Tr).
  Ela é a base de todo o cálculo de drenagem.
</p>

{/* Como escrever */}
<h3 className="text-lg font-semibold">Como escrever a equação</h3>

<p className="text-slate-700">
  A caixa de texto aceita qualquer expressão matemática, desde que seja
  em função de <strong>TC</strong> e <strong>TR</strong>.
</p>

<pre className="bg-slate-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
(3986.034 * Math.Pow(TR, 0.203)) / Math.Pow(TC + 49.808, 0.93)
</pre>

{/* Alertas */}
<p className="text-slate-700">
  ⚠️ <strong>TC e TR não devem ser substituídos por valores fixos</strong>,
  pois o programa os alimenta automaticamente.
</p>

<p className="text-slate-700">
  TR pode ser ajustado para cada trecho clicando duas vezes no valor.
  Para definir TR para toda a rede → clique com o botão direito →
  <strong> Definir Todos</strong>.
</p>

{/* Divisor visual */}
<hr className="border-slate-200" />

{/* Comandos Aceitos */}
<h3 className="text-xl font-semibold flex items-center gap-2">
  📘 Comandos aceitos na equação
</h3>

<ul className="list-disc ml-6 text-slate-700 space-y-2">
  <li>
    <strong><code>Math.Pow(x, y)</code></strong> → usado para elevar um número
    à potência desejada. Exemplo: <code>Math.Pow(2, 3)</code> calcula 2³ = 8.
  </li>

  <li>
    <strong><code>Math.Log(x)</code></strong> → retorna o logaritmo natural de x
    (log base e). Exemplo: <code>Math.Log(Math.E)</code> retorna 1.
  </li>

  <li>
    <strong><code>Math.Exp(x)</code></strong> → calcula e elevado a x.
    Exemplo: <code>Math.Exp(2)</code> retorna 7.389 (e²).
  </li>

  <li>
    <strong>Operadores normais: <code>+ - * / ()</code></strong> → permitem somar,
    subtrair, multiplicar, dividir e controlar a ordem das operações.
    Exemplo: <code>(2 + 3) * 4</code> resulta em 20.
  </li>
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

    {/* CARD 6 – Validação (unificado com imagem) */}
<div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-4">

<h2 className="text-xl font-semibold flex items-center gap-2">
  Validação Automática da IDF
</h2>

<p className="text-slate-700">
  Abaixo do campo da equação, o programa exibe um valor de teste para:
</p>

<ul className="list-disc ml-6 text-slate-700">
  <li>TR = 10 anos</li>
  <li>TC = 10 minutos</li>
</ul>

<p className="text-slate-700">
  Se o valor <strong>for plausível</strong> → equação válida  
  <br />
  Se aparecer <strong>zero</strong> → erro de sintaxe.
  <p>  
    Ao abrir a janela, o campo de resultado aparecerá em branco mesmo. Basta alterar algum número da equação ou simplesmente teclar "espaço" no fim da equação e ele vai preencher o resultado padrão. 
</p>
</p>

{/* Imagem dentro do card */}
<div className="mt-4">
  <img
    src="/validacao-idf.png"
    alt="Exemplo da Validação Automática da IDF"
    className="rounded-lg border shadow-md w-full"
  />
</div>

</div>


{/* CARD 7 – Atenção */}
<div className="bg-yellow-50 border border-yellow-300 text-yellow-900 p-5 rounded-xl shadow-sm space-y-2">
  <h2 className="text-xl font-semibold">⚠️ Importante</h2>

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
          <li>C = coeficiente de escoamento superficial</li>
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
       </div>
    </div>

    {/* CARD 9 – Tempo de Concentração */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-4">
      <h2 className="text-xl font-semibold">Tempo de Concentração e Tempo de Percurso</h2>

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
  <li>O SizerPro obtém automaticamente o Tc lido do Civil 3D, das propriedades das catchments.</li>
</ul>


      <h3 className="font-semibold">2. Tempo de Percurso (Tp)</h3>
      <p>É o tempo que a água leva para percorrer o tubo. É a Velocidade / Comprimento.</p>

      <h3 className="font-semibold">3. Resultado</h3>
      <p>Tempo de Concentração Total = Tc_bacia + Tp</p>
    </div>

    {/* CARD 10 – Velocidade e Lâmina */}
<div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-4">
  <h2 className="text-xl font-semibold">Velocidade, Lâmina e Percentual da Seção</h2>

  <p className="text-slate-700">
    Após o cálculo da vazão em cada trecho, o SizerPro determina
    automaticamente a <strong>lâmina de escoamento</strong> e a 
    <strong> velocidade</strong> no interior do tubo. Esses parâmetros são 
    essenciais para verificar se o trecho atende às normas e boas práticas 
    de drenagem.
  </p>

  <h3 className="font-semibold">🔹 Velocidade (m/s)</h3>
  <p className="text-slate-700">
    A velocidade é calculada pela fórmula de Manning, considerando a área 
    molhada, o raio hidráulico e a declividade do tubo.
  </p>

  <pre className="bg-slate-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
V = (1/n) * Rh^(2/3) * √i
  </pre>

  <ul className="list-disc ml-6 text-slate-700 space-y-1">
    <li><strong>n</strong> → Coeficiente de Manning.</li>
    <li><strong>Rh</strong> → Raio hidráulico (A/P).</li>
    <li><strong>i</strong> → Declividade do trecho.</li>
    <li>O SizerPro destaca em <strong>vermelho</strong> velocidades fora dos limites definidos.</li>
  </ul>

  <h3 className="font-semibold">🔹 Lâmina de escoamento (y)</h3>
  <p className="text-slate-700">
    A lâmina é a altura da água dentro do tubo. Ela é obtida iterando valores
    até encontrar o ponto em que a capacidade do tubo (Qcalc) se iguala à 
    vazão de projeto.
  </p>

  <pre className="bg-slate-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
Q = A(y) * V(y)
  </pre>

  <p className="text-slate-700">
    O algoritmo compara a vazão desejada com a vazão calculada e encontra a
    melhor solução para a altura y.
  </p>

  <h3 className="font-semibold">🔹 Percentual da seção preenchida</h3>
  <p className="text-slate-700">
    Representa o quanto da altura total do tubo está sendo ocupada pelo fluxo:
  </p>

  <pre className="bg-slate-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
%Lâmina = (y / D) * 100
  </pre>

  <p className="text-slate-700">
    O SizerPro alerta automaticamente quando o trecho ultrapassa o limite 
    definido em “Lâmina Máxima (%)”.
  </p>
</div>



    {/* CARD 11 – Colunas */}
<div className="bg-white/70 backdrop-blur-md rounded-xl shadow-xl border border-slate-200 p-8 space-y-8">

<h2 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-slate-900 bg-clip-text text-transparent">
  Definição das Colunas do Cálculo de Drenagem
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
{/* FINAL */}
<div className="bg-green-50 border border-green-300 p-7 rounded-xl shadow-sm">
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
{/* =============================== ESGOTO ================================= */}
{/* ======================================================================= */}

{tab === "esgoto" && (
  <section className="max-w-4xl space-y-10 animate-fadeIn">

   {/* TÍTULO */}
<div className="bg-white backdrop-blur-sm shadow-xl rounded-xl p-7 border border-slate-200">
  <h1 className="text-3xl font-extrabold flex items-center gap-3 text-slate-900 tracking-tight">
    ▶️ Como usar o módulo de Esgoto — Passo a Passo
  </h1>

  {/* DESCRIÇÃO DO MÓDULO */}
<p className="text-slate-700 leading-relaxed mt-4">
  Ao clicar em <strong>“Calcular Esgoto”</strong>, o SizerPro lê todos os dados do 
  <strong> Pipe Network</strong> (diâmetros, declividades, comprimentos e estruturas) e aplica os 
  parâmetros de projeto definidos no painel lateral.
</p>

<p className="text-slate-700 leading-relaxed mt-3">
  Com essas informações, o plugin executa automaticamente os cálculos da
  <strong> NBR 9649</strong>, gerando vazões, velocidades, tensões trativas e demais verificações
  hidráulicas da rede.
</p>

<p className="text-slate-700 leading-relaxed mt-3">
  Os resultados são exibidos em uma <strong>tabela interativa</strong> para conferência e ajustes
  rápidos, facilitando o dimensionamento completo da rede de esgoto.
</p>

</div>


    {/* PASSO 1 */}
    <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-6 border border-slate-200 space-y-4">
      <h2 className="text-xl font-semibold text-slate-900">1 — Clique em “Calcular Esgoto” e selecione um tubo</h2>
      <p className="text-slate-700 leading-relaxed">
        O SizerPro abre automaticamente a tabela com todos os tubos, estruturas,
        comprimentos, declividades, diâmetros e suas propriedades lidas do Civil 3D.
      </p>
    </div>

    {/* CARD – Validação da Rede */}
<div className="bg-blue-50 border border-blue-200 text-blue-900 p-5 rounded-xl shadow-sm space-y-2">
    <h2 className="text-xl font-semibold flex items-center gap-2">
    Validação da Rede de Esgoto
  </h2>

  <p className="text-slate-700 leading-relaxed">
    Antes de iniciar os cálculos, o SizerPro realiza uma <strong>validação completa</strong> da sua rede de esgoto para garantir que todos os trechos estão conectados corretamente e que a topologia da rede está consistente.
  </p>

  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
    <li>Verifica se <strong>todos os tubos possuem estrutura de montante e jusante</strong>.</li>
    <li>Verifica se cada estrutura possui <strong>no máximo 1 tubo de saída</strong>.</li>
    <li>Confirma a existência de ao menos <strong>um ponto de descarga</strong>.</li>
    <li>Garante que não existam <strong>partes desconectadas</strong> ou trechos isolados no Pipe Network.</li>
  </ul>

  <p className="text-slate-700">
    Caso seja encontrada alguma inconsistência, o SizerPro exibe uma lista com os erros detectados para que você corrija antes de avançar para a etapa de cálculo hidráulico.
  </p>
</div>

 {/* PASSO 2 */}
<div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-6 border border-slate-200 space-y-5">
  
  <h2 className="text-xl font-semibold text-slate-900">
    2 — Preencha os parâmetros de projeto
  </h2>

  <p>
    Do lado esquerdo existe um painel com todos os parâmetros.<br />
    Eles estão agrupados em:
  </p>

  <div className="space-y-4">

  {/* 1️⃣ PARÂMETROS DE PROJETO */}
  <div>
    <h3 className="font-semibold -700 text-lg"> Categoria: Parâmetros de Projeto</h3>

    <ul className="list-disc ml-6 mt-1 space-y-1 text-slate-700">
      <li>
        <strong>Fator k1</strong> — Coeficiente de Máxima Variação Diária.
      </li>
      <li>
        <strong>Fator k2</strong> — Coeficiente de Máxima Variação Horária.
      </li>
      <li>
        <strong>Cota Per Capita (L/hab.dia)</strong> — consumo médio diário utilizado para calcular
        a demanda total de água e, consequentemente, as vazões de esgoto.
      </li>
      <li>
        <strong>Coeficiente de Retorno</strong> — parcela da água consumida que retorna como esgoto.
        Geralmente varia entre 0,7 e 0,9 dependendo da norma ou concessionária.
      </li>
    </ul>
  </div>
{/* Divisor visual */}
<hr className="border-slate-200" />
  {/* 2️⃣ POPULAÇÃO */}
  <div>
    <h3 className="font-semibold -700 text-lg"> Categoria: População</h3>

    <ul className="list-disc ml-6 mt-1 space-y-1 text-slate-700">
      <li>
        <strong>Número de Lotes</strong> — quantidade total de unidades residenciais ou comerciais
        previstas no projeto.
      </li>
      <li>
        <strong>Habitantes por lote</strong> — média estimada de moradores por lote, usada para
        estimar a população atendida.
      </li>
      <li>
        <strong>Taxa de Crescimento</strong> — crescimento populacional anual aplicado para projetar
        a população futura ao longo do horizonte de projeto.
      </li>
      <li>
        <strong>População inicial e final</strong> — valores calculados automaticamente pelo software
        com base no número de lotes, ocupação e taxa de crescimento.
      </li>
    </ul>
  </div>
{/* Divisor visual */}
<hr className="border-slate-200" />
  {/* 3️⃣ REDE */}
  <div>
    <h3 className="font-semibold text -700 text-lg"> Categoria: Rede</h3>

    <ul className="list-disc ml-6 mt-1 space-y-1 text-slate-700">
      <li>
        <strong>Comprimento considerado (2D ou 3D)</strong> — define se a modelagem hidráulica usará
        o comprimento horizontal (2D) ou o comprimento real do tubo no espaço (3D).
      </li>
    </ul>
  </div>

</div>



  <p className="text-slate-700">
    Todos estes valores podem ser alterados a qualquer momento.
  </p>

  {/* IMAGEM INSERIDA DENTRO DO CARD */}
  <div className="mt-4 flex justify-center">
  <img
    src="/parametros_esgoto.png"
    alt="Parâmetros de Esgoto"
    className="rounded-lg border border-slate-300 shadow max-w-[300px] w-full"
  />
</div>



</div>


    {/* PASSO 3 */}
    <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-6 border border-slate-200 space-y-4">
      <h2 className="text-xl font-semibold text-slate-900">3 — Defina o Coeficiente de Utilização dos trechos</h2>

      <p className="text-slate-700">
        <strong>Coeficiente de Utilização</strong><br />
        → controla a fração de vazão domiciliar atribuída ao trecho.<br />
        Por padrão, o SizerPro utiliza Cof. de Utilização = 1. Altere nos trechos que desejar. 
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
    <div className="bg-green-50 border border-green-300 shadow-lg rounded-xl p-6 space-y-3">
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
      </ul>
    </div>

    {/* COMO O CÁLCULO É FEITO */}
    <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-7 border border-slate-200 space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Como o cálculo é feito:</h1>

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

{/* POPULAÇÃO */}
<div>
  <h2 className="text-xl font-semibold text-slate-900">1 — Cálculo da População</h2>

  <h3 className="font-semibold mt-2">🔹 População de início de plano</h3>
  <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Pop_início = N_lotes × H × taxa_crescimento
  </pre>

  <h3 className="font-semibold mt-2">🔹 População de final de plano</h3>
  <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Pop_final = N_lotes × H
  </pre>

  <p className="mt-2">
    Onde:<br />
    • <strong>N_lotes</strong>: número de lotes atendidos<br />
    • <strong>H</strong>: habitantes por lote<br />
    • <strong>taxa_crescimento</strong>: fator de crescimento usado apenas no início de plano
  </p>
</div>


{/* CONTRIBUIÇÃO DOMICILIAR */}
<div>
  <h2 className="text-xl font-semibold text-slate-900">2 — Contribuição Domiciliar</h2>

  <h3 className="font-semibold mt-2">🔹 Início de plano</h3>
  <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Q_dom,início = (Pop_início × cota_per_capita × coef_ret) / 86400
  </pre>

  <h3 className="font-semibold mt-3">🔹 Final de plano</h3>
  <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Q_dom,final = (Pop_final × cota_per_capita × coef_ret) / 86400
  </pre>

  <p className="mt-2">
    Onde:<br />
    • <strong>cota_per_capita</strong>: consumo médio por habitante (L/hab·dia)<br />
    • <strong>coef_ret</strong>: coeficiente de retorno (fração que retorna para a rede)<br />
    • <strong>86400</strong>: segundos do dia (para converter L/dia → L/s)
  </p>
</div>


{/* INFILTRAÇÃO */}
<div>
  <h2 className="text-xl font-semibold text-slate-900">3 — Vazão de Infiltração</h2>
  <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Q_inf = L_real × taxa_infiltração
  </pre>

  <p className="mt-2">
    Onde:<br />
    • <strong>L_real</strong>: soma dos comprimentos reais da rede<br />
    • <strong>taxa_infiltração</strong>: infiltração por metro (L/s·m)
  </p>
</div>


{/* VAZÃO INÍCIO DE PLANO */}
<div>
  <h2 className="text-xl font-semibold text-slate-900">4 — Vazão Total: Início de Plano</h2>
  <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Q_início = (Q_dom,início × K2) + Q_inf
  </pre>

  <p className="mt-2">
    Onde:<br />
    • <strong>Q_inf</strong>: infiltração total da rede
  </p>
</div>


{/* VAZÃO FINAL DE PLANO */}
<div>
  <h2 className="text-xl font-semibold text-slate-900">5 — Vazão Total: Final de Plano</h2>
  <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Q_final = (Q_dom,final × K1 × K2) + Q_inf
  </pre>

</div>


{/* VAZÃO + PONTUAL */}
<div>
  <h2 className="text-xl font-semibold text-slate-900">
    6 — Vazão Total incluindo Vazões Pontuais
  </h2>

  <h3 className="font-semibold mt-2">🔹 Início de Plano</h3>
  <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Q_início_total = Q_início + Σ(Q_pontual)
  </pre>

  <h3 className="font-semibold mt-3">🔹 Final de Plano</h3>
  <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Q_final_total = Q_final + Σ(Q_pontual)
  </pre>

  <p className="mt-2">As vazões pontuais são acumuladas somente para trechos a jusante do ponto de contribuição.</p>
</div>


{/* VAZÃO LINEAR */}
<div>
  <h2 className="text-xl font-semibold text-slate-900">7 — Vazão Linear</h2>
  <p>A vazão total da rede é distribuída ao longo do comprimento fictício:</p>

  <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
q_lin = Q_total / L_fictício
  </pre>

  <p className="mt-2">
    O uso do <strong>coeficiente de utilização (Cutil)</strong> pondera esse comprimento para cada trecho.
  </p>
</div>


{/* CONTRIBUIÇÃO POR TRECHO */}
<div>
  <h2 className="text-xl font-semibold text-slate-900">8 — Contribuição por Trecho</h2>

  <h3 className="font-semibold mt-2">🔹 Se Cutil = 0</h3>
  <p>Apenas infiltração:</p>
  <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Q_trecho = L_trecho × q_inf
  </pre>

  <h3 className="font-semibold mt-4">🔹 Se Cutil &gt; 0</h3>
  <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Q_trecho = L_trecho × (Cutil × q′_dom) + L_trecho × q_inf
  </pre>

  <p className="mt-2">
    Onde:<br />
    • <strong>q′_dom</strong> = vazão domiciliar linear (início ou final de plano)<br />
    • <strong>q_inf</strong> = infiltração (L/s·m)<br />
    • A contribuição é calculada separadamente para início e final de plano. <br />

      <strong>Cutil</strong> — Coeficiente de utilização da rede. Quando há duas redes na mesma rua, costuma-se usar 0,5. Quando há apenas uma rede na rua, costuma-se usar 1. Isso varia 
      conforme a concessionária local. É importante consultar antes de alterar o valor de 1.
      </p>
  
</div>



{/* ACUMULADA */}
<div>
  <h2 className="text-xl font-semibold text-slate-900">9 — Vazão Acumulada</h2>
  <p>A rede é percorrida de <strong>montante → jusante</strong>, somando as contribuições de cada trecho e somando também as vazões pontuais.</p>
</div>


{/* VAZÃO ADOTADA */}
<div>
  <h2 className="text-xl font-semibold text-slate-900">10 — Vazão Adotada</h2>
  <p>A vazão respeita o valor mínimo normativo:</p>

  <pre className="bg-slate-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
Q_mín = 0,0015 m³/s
  </pre>
</div>



      </div>
    </div>

    {/* CARD – Hidráulica do Esgoto */}
<div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-4">
  <h2 className="text-xl font-semibold">Velocidade, Lâmina e Escoamento Parcial</h2>

  <p className="text-slate-700">
    No módulo de <strong>esgoto</strong>, o SizerPro calcula automaticamente
    a lâmina de escoamento, a velocidade e todos os parâmetros hidráulicos
    associados ao funcionamento do tubo em seção parcial. Esses dados são
    essenciais para verificar autolimpeza, evitar sedimentação e garantir
    conformidade com normas de esgotamento sanitário.
  </p>

  <h3 className="font-semibold">🔹 O que é calculado a cada incremento de lâmina</h3>

  <ul className="list-disc ml-6 text-slate-700 space-y-1">
    <li><strong>Área molhada</strong> A(y)</li>
    <li><strong>Perímetro molhado</strong> P(y)</li>
    <li><strong>Raio hidráulico</strong> Rh = A/P</li>
    <li><strong>Velocidade</strong> (equação de Manning)</li>
    <li><strong>Vazão resultante</strong> Q = A × V</li>
    <li><strong>Ângulo central</strong> θ (geometria do escoamento parcial)</li>
    <li><strong>Tensão trativa</strong> τ = 10.000 × Rh × S</li>
  </ul>

  <p className="text-slate-700">
    O algoritmo testa valores de y, encontrando a lâmina que gera
    a vazão desejada no início e no fim de plano.
  </p>

  <h3 className="font-semibold">🔹 Equações utilizadas</h3>

  <pre className="bg-slate-900 text-green-300 p-4 rounded-xl text-sm overflow-x-auto">
V = (1/n) × Rh^(2/3) × √S  <br />
Q = A × V  <br />
θ = 2 × acos((r - y) / r)
  </pre>

  <h3 className="font-semibold">🔹 Percentual da seção utilizada</h3>
  <p className="text-slate-700">
    Mede quanto da altura total do tubo está ocupada pelo esgoto:
  </p>

  <pre className="bg-slate-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
%Lâmina = (y / D) × 100
  </pre>

  <p className="text-slate-700">
    O SizerPro aplica automaticamente coloração verde/vermelha quando o valor
    ultrapassa o limite configurado na regra <strong>“% Lâmina Máxima”</strong>.
  </p>

  <h3 className="font-semibold">🔹 Tensão trativa (autolimpeza)</h3>
  <p className="text-slate-700">
    A tensão trativa é usada para avaliar se o escoamento possui energia
    suficiente para transportar sólidos e evitar deposição:
  </p>

  <pre className="bg-slate-900 text-green-300 p-4 rounded text-sm overflow-x-auto">
τ = 10.000 × Rh × S
  </pre>

  <p className="text-slate-700">
    O programa destaca automaticamente valores abaixo do limite definido em
    <strong>“Tensão Trativa Mínima”</strong>.
  </p>

    </div>

   
    {/* FERRAMENTAS */}
    <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-7 border border-slate-200 space-y-6">
      <h1 className="text-xl font-semibold text-slate-900">Ferramentas Adicionais</h1>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold"> Selecionar Colunas</h3>
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
<div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-7 border border-slate-200">
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
    <div className="bg-green-50 border border-green-300 p-7 rounded-xl shadow-sm">
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
<div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-4">

<h1 className="text-3xl font-bold text-slate-900 leading-snug">
  <span className="block">Escavação — Como funciona o módulo e como utilizar
  </span>
</h1>

<p className="text-slate-700">
  O módulo de Escavação do SizerPro calcula automaticamente volumes de escavação, 
  berço e reaterro de cada trecho de tubulação da sua rede de drenagem ou esgoto, 
  utilizando diretamente os dados do Pipe Network do Civil 3D.
</p>

<p className="text-slate-700">
  Ele é ideal para gerar quantitativos confiáveis, exportar planilhas e verificar 
  rapidamente o impacto de profundidades e geometrias da vala ao longo da rede.
</p>

</div>


    
    {/* COMO FUNCIONA */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-5">
      <h1 className="text-xl font-semibold">Como o módulo funciona:</h1>

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
      <h1 className="text-xl font-semibold"> Parâmetros que o SizerPro lê automaticamente</h1>

      <p>Esses valores vêm direto do Civil 3D:</p>

      <ul className="list-disc ml-6 space-y-1">
        <li>Comprimento 3D do tubo</li>
        <li>Diâmetro externo</li>
        <li>Profundidade de montante e jusante<br /> (com base no recobrimento + diâmetro)</li>
        <li>Profundidade média da vala</li>
      </ul>

      <p>
        O usuário <strong>não precisa preencher nada disso manualmente</strong>.
      </p>
    </div>

    {/* PARÂMETROS EDITÁVEIS */}
<div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-4">
  <h1 className="text-xl font-semibold"> Parâmetros editáveis pelo usuário</h1>

  <p className="text-slate-700">
    Os parâmetros abaixo influenciam diretamente o cálculo dos volumes de escavação,
    berço e reaterro. Você pode ajustá-los individualmente por trecho ou aplicar para
    toda a rede.
  </p>

  <ol className="list-decimal ml-6 space-y-4">

    {/* LARGURA DA BASE */}
    <li>
      <strong>Largura da Base da vala (m)</strong><br />
      É a largura do fundo da escavação — depois de considerar o talude,
      é onde a seção inferior da vala se estabiliza.
      Impacta diretamente o volume de corte.
    </li>

    {/* LARGURA DO BERÇO */}
    <li>
      <strong>Largura do Berço (m)</strong><br />
      Região de apoio do tubo, normalmente preenchida com material granular.
      Sua largura influencia o volume de berço e o formato da vala.
    </li>

    {/* ALTURA DO BERÇO */}
    <li>
      <strong>Altura do Berço (m)</strong><br />
      Espessura do material de apoio localizado abaixo do tubo.
      Afeta o volume total de berço e o nível da base da escavação.
    </li>

    {/* TIPO DE TALUDE */}
    <li>
      <strong>Tipo de Talude</strong>
      <ul className="list-disc ml-6 mt-1 text-slate-700">
        <li><strong>Vertical</strong> — paredes retas e sem abertura lateral.</li>
        <li><strong>Inclinado</strong> — paredes inclinadas para estabilidade e segurança.</li>
      </ul>
    </li>

    {/* INCLINAÇÃO H:V */}
    <li>
      <strong>Inclinação H:V</strong><br />
      <span className="text-slate-700">
        Usada apenas quando o talude é inclinado.  
        A relação <strong>H:V (Horizontal : Vertical)</strong> define o quanto a vala se abre
        lateralmente conforme a profundidade.  
        Exemplo: <strong>1,5H:1V</strong> → a cada 1 m de profundidade, a escavação abre 1,5 m para cada lado.
      </span>
    </li>

    {/* CARD DA IMAGEM – AGORA COMO PARTE DOS PARÂMETROS */}
    <li>
      <strong>Representação Visual da Seção da Vala</strong><br />

      <div className="flex justify-center my-4">
        <img 
          src="/VALA.png"
          alt="Representação da seção da vala"
          className="rounded-lg border border-slate-300 w-48"
        />
      </div>

      <p className="text-slate-700 leading-relaxed">
        A imagem acima mostra como cada parâmetro influencia a geometria da vala:
      </p>

      <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mt-2">

        <li>
          <strong>Profundidade Média</strong> — distância da superfície ao fundo da vala,
          usada para calcular o volume total escavado.
        </li>

        <li>
          <strong>Largura da Base</strong> — Largura total da base da vala.
        </li>

        <li>
          <strong>Berço</strong> — material compactado onde o tubo é apoiado.
        </li>

        <li>
          <strong>Largura do Berço</strong> — Largura que considera apenas o tamanho do berço e não a largura total da base da vala. Imaginemos um cenário onde, por algum motivo, foi necessário fazer uma vala mais larga, mas não necessariamente o berço precisará ter a largura total e apenas a largura suficiente para acomodar o tubo.
        </li>

        <li>
          <strong>Reaterro</strong> — solo utilizado para preencher a vala após a instalação do tubo.
        </li>

        <li>
          <strong>Taludes Laterais</strong> — quando inclinados, aumentam a abertura lateral da vala
          e, portanto, o volume de escavação.
        </li>

      </ul>

      <p className="text-slate-700 mt-2">
        Todos esses elementos combinados são utilizados pelo SizerPro para calcular com precisão
        os volumes de corte, berço e reaterro em cada trecho da sua rede.
      </p>
    </li>

  </ol>
</div>

    {/* CÁLCULOS AUTOMÁTICOS */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-6">
      <h1 className="text-xl font-semibold">Cálculos realizados automaticamente:</h1>

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
      <p>A altura considerada para cálculo da área da seção transversal é a profundidade média entre o início e final do trecho.</p>
    </div>

    {/* EXPORTAÇÕES — Escavação */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-6">

      <h1 className="text-xl font-semibold text-slate-900">📤 Exportações da Tabela de Escavação</h1>

      <p className="text-slate-700">
        O SizerPro permite exportar toda a sua tabela de escavação — incluindo 
        volumes individuais e o resumo total — em dois formatos práticos: 
        <strong> Excel </strong> e <strong> HTML </strong>.
      </p>

      <div>
        <h3 className="font-semibold">📤 Exportar para Excel</h3>
        <p className="text-slate-700 leading-relaxed">
          Gera um arquivo <strong>.xlsx</strong> contendo:
        </p>

        <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
          <li>Todas as colunas visíveis da tabela</li>
          <li>Volumes de escavação, berço e reaterro por trecho</li>
          <li>Profundidades, áreas e geometrias de cada seção</li>
          <li>Resumo total no final do arquivo</li>
          <li>Formatação pronta para orçamento e relatórios</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">🌐 Exportar HTML</h3>
        <p className="text-slate-700 leading-relaxed">
          Gera um arquivo visual <strong>.html</strong> com layout profissional, ideal para:
        </p>

        <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
          <li>Enviar para cliente</li>
          <li>Anexar em memoriais</li>
          <li>Imprimir direto</li>
          <li>Visualizar sem precisar de Excel</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">📦 Resumo de Materiais / Quantitativos</h3>

        <p className="text-slate-700">Inclui automaticamente:</p>

        <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
          <li>Volume total de escavação (m³)</li>
          <li>Volume total de berço (m³)</li>
          <li>Volume total de reaterro (m³)</li>
        </ul>
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

  <p className="mt-4 text-slate-700">
    O módulo de <strong>Resumo de Quantitativos</strong> do SizerPro reúne em um único painel
    todas as informações essenciais de tubos e estruturas da sua rede de drenagem ou esgoto,
    agrupando automaticamente por diâmetros, descrições, faixas de profundidade e prefixos.
  </p>

  <p className="text-slate-700 mt-2">
    Ele permite visualizar, organizar e exportar rapidamente tabelas completas de  
     <strong> tubos</strong> e <strong>estruturas</strong>, gerar relatórios em Excel ou HTML,
    expandir/recolher grupos e identificar padrões da rede com clareza — tudo direto do Civil 3D,
    sem precisar criar planilhas manualmente.
  </p>
</div>


    {/* PAINEL 1 */}
<div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-3">
  <h2 className="text-xl font-semibold">Painel 1 — Tubos</h2>

  <p className="text-slate-700">
    Este painel exibe um resumo completo de todos os tubos da rede selecionada,
    organizado automaticamente em uma tabela dinâmica. Cada linha representa um
    agrupamento de tubos que possuem o mesmo diâmetro e a mesma descrição
    (Part Size), mostrando também a quantidade total de trechos e o
    comprimento acumulado em metros.
  </p>

  {/* IMAGEM */}
  <div className="pt-4">
    <img
            src="resumo_tubos.png"

      alt="Resumo de tubos no SizerPro"
      className="rounded-lg shadow-md border border-slate-200 mx-auto"
    />
  </div>
</div>

  {/* PAINEL 2 */}
<div className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 space-y-3">
  <h2 className="text-xl font-semibold">Painel 2 — Estruturas</h2>

  <p className="text-slate-700">
    Exibe todas as estruturas da rede em uma árvore organizada, agrupando por
    faixa de profundidade, Part Size, descrição ou prefixo do nome.
  </p>

  <p className="text-slate-700">
    Para cada estrutura, o SizerPro identifica o tipo (circular ou retangular),
    suas dimensões internas, nome do Civil 3D e profundidade, mostrando tudo
    de forma clara dentro de cada grupo.
  </p>

  <p className="text-slate-700">
    Você pode definir quantas letras do prefixo deseja usar (ex.: PVD = 3,
    PVDR = 4) para separar tipos diferentes de estruturas. Os grupos podem ser
    expandidos ou recolhidos com um clique.
  </p>


  {/* IMAGEM */}
  <div className="pt-4">
    <img
      src="resumo_estruturas.png"
      alt="Exemplo de agrupamento de estruturas no SizerPro"
      className="rounded-lg shadow-md border border-slate-200 mx-auto"
    />
  </div>
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