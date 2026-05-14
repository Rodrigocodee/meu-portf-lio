import radarMacro from "../assets/radar-macro.png";
import darkQuantAcademyCover from "../assets/darkquant-academy-cover.png";

const projects = [
  {
    n: "01",
    title: "Radar Macro IA",
    kind: "IA aplicada · Trading Lab",
    desc: "Laboratório de IA em produção e evolução contínua para análise macro, sinais simulados, replay de mercado, gestão de risco e alavancagem controlada.",
    problem: "Criar um ambiente seguro para estudar decisões de mercado sem enviar ordens reais ou expor capital.",
    solution: "Dashboard em React que cruza notícias, candles, score de confiança, checklist operacional, risco por trade e modo de simulação.",
    result: "Projeto autoral em produção ativa, com IA aplicada a decisão, automação, dados financeiros e produto visual com foco em validação antes de execução real.",
    tags: ["React", "IA", "Fintech"],
    accent: "bg-ink/10",
    href: "",
    preview: "radar",
  },
  {
    n: "02",
    title: "DarkQuant Academy",
    kind: "IA aplicada - Mentor de estudos",
    desc: "App pessoal de estudos com IA que cria trilhas, ensina por etapas, gera checkpoints, corrige respostas e acompanha progresso.",
    problem: "Estudar tecnologia sem uma trilha clara costuma virar excesso de conteudo, pouca pratica e dificuldade para saber o que revisar.",
    solution: "Interface em React com roadmap por area, tutor conectado ao Gemini, geracao de aulas, checkpoints, exercicios em conversa e estado persistido no navegador.",
    result: "Projeto em producao para transformar IA em produto educacional: diagnostico, trilhas, professor interativo, avaliacao por rubrica e progresso guiado.",
    tags: ["React", "Gemini", "EdTech"],
    accent: "bg-sage/15",
    href: "",
    preview: "academy",
  },
  {
    n: "03",
    title: "Douglas Ferreira",
    kind: "Site profissional · Psicólogo",
    desc: "Identidade digital serena e clara para um profissional clínico — copy, design e desenvolvimento.",
    problem: "Criar presença digital profissional, acolhedora e confiável para um psicólogo clínico.",
    solution: "Landing page responsiva com identidade visual leve, estrutura de navegação clara e CTA para agendamento.",
    result: "Aprendizado forte em composição visual, comunicação de serviço profissional e entrega web ponta a ponta.",
    tags: ["React", "Design", "SEO"],
    accent: "bg-sage/20",
    href: "https://www.douglasferreirapsi.com.br",
    preview: "douglas",
  },
  {
    n: "04",
    title: "Trading Simulator",
    kind: "Bot de simulação & estratégia",
    desc: "Sistema de simulação e backtesting de estratégias de trade, com indicadores e relatórios automáticos.",
    problem: "Testar estratégias sem depender de execução manual ou exposição direta a risco financeiro.",
    solution: "Dashboard para monitorar robô, conexão com Binance, permissões, modo simulação e segurança operacional.",
    result: "Aprofundamento em automação, análise de dados, APIs, integrações e validação de lógica com cenários reais.",
    tags: ["Python", "APIs", "Automação"],
    accent: "bg-terracotta/15",
    href: "https://turbobot-dashboard-main.vercel.app",
    preview: "turbobot",
  },
];

function DouglasPreview() {
  return (
    <div className="absolute inset-0 bg-[#f4f3ed] text-[#273033] overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#dde0d6] bg-[#fbfaf6] px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#52664b]/30 bg-[#eef2e8] text-[10px] font-semibold text-[#52664b]">
            DF
          </div>
          <div>
            <div className="font-display text-[13px] leading-none">Douglas Ferreira</div>
            <div className="mt-1 text-[7px] uppercase tracking-[0.14em] text-[#65706a]">
              Psicólogo clínico
            </div>
          </div>
        </div>
        <div className="hidden items-center gap-3 text-[8px] text-[#65706a] sm:flex">
          <span>Início</span>
          <span>Sobre</span>
          <span>Contato</span>
        </div>
        <div className="rounded-full bg-[#52664b] px-3 py-1.5 text-[8px] font-semibold text-white">
          Agendar
        </div>
      </div>

      <div className="grid h-[calc(100%-56px)] grid-cols-[1.05fr_0.95fr] items-center gap-3 px-5 py-4">
        <div>
          <div className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-[8px] text-[#65706a] shadow-sm">
            Atendimento online e presencial
          </div>
          <div className="font-display text-[clamp(1.55rem,4vw,2.35rem)] leading-[0.92] tracking-tight">
            Cuidado psicológico
            <br />
            com <em className="text-[#52664b]">escuta</em> e humanidade
          </div>
          <div className="mt-3 h-2 w-32 rounded-full bg-[#52664b]" />
          <div className="mt-2 h-2 w-24 rounded-full bg-white/80" />
        </div>

        <div className="relative flex justify-center">
          <div className="h-32 w-32 rounded-full bg-[#dfe8d9] p-3 shadow-[0_0_0_12px_rgba(82,102,75,0.10)] sm:h-40 sm:w-40">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-b from-[#eee4d7] via-[#d1bca4] to-[#6b5a4c]">
              <div className="absolute left-1/2 top-8 h-10 w-10 -translate-x-1/2 rounded-full bg-[#8f674d]" />
              <div className="absolute bottom-0 left-1/2 h-20 w-24 -translate-x-1/2 rounded-t-[42px] bg-[#f3eadf]" />
              <div className="absolute inset-x-8 top-6 h-2 rounded-full bg-white/60" />
              <div className="absolute left-7 top-12 h-20 w-2 rotate-12 rounded-full bg-white/40" />
              <div className="absolute right-7 top-10 h-24 w-2 -rotate-12 rounded-full bg-white/35" />
            </div>
          </div>
          <div className="absolute -bottom-3 left-0 rounded-2xl bg-white p-3 shadow-lg">
            <div className="text-[7px] uppercase tracking-[0.16em] text-[#52664b]">Psicólogo clínico</div>
            <div className="mt-1 font-display text-sm">CRP 05/86780</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TurboBotPreview() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#080b11] text-white">
      <div className="absolute inset-4 rounded-2xl border border-[#1f2937] bg-[#111722] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#243041] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#00e7b3]/40 bg-[#00e7b3]/10 text-[#00e7b3]">
              <span className="h-3 w-3 rounded-full border-2 border-current" />
            </div>
            <div>
              <div className="text-[12px] font-bold leading-none">Binance Spot</div>
              <div className="mt-1 text-[8px] text-[#93a4c3]">Conexão segura via Supabase</div>
            </div>
            <span className="rounded-full bg-[#00e7b3]/15 px-2 py-0.5 text-[8px] font-bold text-[#00e7b3]">
              Conectada
            </span>
          </div>
          <div className="hidden gap-2 sm:flex">
            <span className="rounded-lg border border-[#243041] bg-[#080b11] px-3 py-1.5 text-[8px] font-bold">Testar conexão</span>
            <span className="rounded-lg bg-[#00d8ad] px-3 py-1.5 text-[8px] font-bold text-[#04100d]">Reconfigurar</span>
          </div>
        </div>

        <div className="px-4 py-3">
          <div className="mb-3 grid grid-cols-5 gap-2">
            {["Leitura", "Spot", "Saque", "Futures", "Margin"].map((item) => (
              <div key={item} className="rounded-md border border-[#00d8ad]/45 bg-[#00d8ad]/5 px-2 py-1 text-[7px] font-bold text-white">
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-[#b57917]/50 bg-[#b57917]/10 px-3 py-2 text-[8px] font-bold text-[#ffb43b]">
            Nunca habilite saque na API da Binance.
          </div>

          <div className="mt-4 grid grid-cols-5 gap-2 rounded-lg bg-[#1a202b] p-1 text-[8px] text-[#93a4c3]">
            {["Visão Geral", "Mercado", "Operações", "BI", "Backtest"].map((tab, i) => (
              <div key={tab} className={`rounded-md px-2 py-1.5 text-center ${i === 0 ? "bg-[#070a10] text-white" : ""}`}>
                {tab}
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-[0.9fr_1.2fr] gap-4 rounded-xl border border-[#243041] bg-gradient-to-r from-[#101722] to-[#0c1717] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#00d8ad] bg-[#00d8ad]/10 shadow-[0_0_30px_rgba(0,216,173,0.18)]">
                <span className="text-3xl text-[#00e7b3]">⚡</span>
              </div>
              <div>
                <div className="text-[8px] uppercase tracking-[0.2em] text-[#93a4c3]">Status</div>
                <div className="mt-1 text-xl font-bold">Em operação</div>
                <div className="mt-1 text-[9px] text-[#93a4c3]">Monitorando stop loss e take profit.</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="rounded-lg bg-[#00d8ad]/70 px-4 py-3 text-center text-[12px] font-black uppercase tracking-[0.12em] text-[#06110f]">
                Iniciar robo turbo
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-[#243041] bg-[#070a10] px-3 py-2 text-center text-[8px] font-bold">Parar Robo</div>
                <div className="rounded-lg border border-[#ff3568]/50 bg-[#ff3568]/10 px-3 py-2 text-center text-[8px] font-bold text-[#ff3568]">Parada de Emergência</div>
              </div>
              <div className="rounded-lg border border-[#ff3568]/50 bg-[#ff3568]/10 px-3 py-2 text-[8px] font-bold text-[#ff3568]">
                Modo real bloqueado: Saque ativo na API Binance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadarMacroPreview() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#081120]">
      <img
        src={radarMacro}
        alt="Radar Macro IA"
        className="h-full w-full object-cover object-top opacity-95"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081120]/50 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-emerald-400/50 bg-emerald-400/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-100">
          Em producao
        </span>
        <span className="rounded-full border border-amber-300/45 bg-amber-300/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-100">
          Paper trading
        </span>
      </div>
    </div>
  );
}

function DarkQuantPreview() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#f6f7ff]">
      <img
        src={darkQuantAcademyCover}
        alt="Tela da DarkQuant Academy"
        className="h-full w-full object-cover object-top opacity-95"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070a0f]/35 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-emerald-400/50 bg-emerald-400/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-50">
          Em producao
        </span>
        <span className="rounded-full border border-violet-300/50 bg-violet-400/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-50">
          Tutor IA
        </span>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
      <div className="scroll-reveal">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
          04 — Outros projetos
        </div>
        <h2 className="font-display text-5xl lg:text-6xl tracking-tight max-w-2xl">
          Coisas que <em className="text-terracotta">construí</em> no caminho.
        </h2>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {projects.map((p, index) => {
          const isRadar = p.preview === "radar";
          const isAcademy = p.preview === "academy";
          const Card = p.href ? "a" : isRadar || isAcademy ? "button" : "article";

          return (
            <Card
              key={p.title}
              className={`scroll-reveal stagger-${index + 1} lift-card group relative rounded-3xl border border-border bg-card overflow-hidden text-left hover:border-terracotta`}
              {...(p.href
                ? { href: p.href, target: "_blank", rel: "noreferrer" }
                : isRadar
                  ? { type: "button", onClick: () => document.getElementById("radar-macro-case")?.scrollIntoView({ behavior: "smooth", block: "start" }) }
                : isAcademy
                  ? { type: "button", onClick: () => document.getElementById("darkquant-academy-case")?.scrollIntoView({ behavior: "smooth", block: "start" }) }
                : {})}
            >
              <div className={`aspect-[16/10] ${p.accent} relative grain`}>
                {p.preview === "radar" ? (
                  <RadarMacroPreview />
                ) : p.preview === "academy" ? (
                  <DarkQuantPreview />
                ) : p.preview === "douglas" ? (
                  <DouglasPreview />
                ) : p.preview === "turbobot" ? (
                  <TurboBotPreview />
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-[8rem] text-foreground/10 leading-none">{p.n}</span>
                    </div>
                    <div className="absolute top-5 left-5 text-xs font-mono text-muted-foreground">
                      {p.kind}
                    </div>
                  </>
                )}
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {isRadar || isAcademy ? (
                      <span className="mb-3 inline-flex rounded-full border border-emerald-700/25 bg-emerald-700/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">
                        Em producao
                      </span>
                    ) : null}
                    <h3 className="font-display text-3xl tracking-tight">{p.title}</h3>
                  </div>
                  {p.href && p.preview !== "radar" ? (
                    <span className="text-terracotta transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  ) : null}
                </div>
                <p className="text-muted-foreground mt-3">{p.desc}</p>

                <div className="mt-6 grid gap-4 text-sm">
                  {[
                    ["Problema", p.problem],
                    ["Solução", p.solution],
                    ["Resultado", p.result],
                  ].map(([label, text]) => (
                    <div key={label}>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-terracotta">{label}</div>
                      <p className="mt-1 text-muted-foreground leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {p.tags.map((t) => (
                    <span key={t} className="chip text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div id="radar-macro-case" className="scroll-reveal mt-24 rounded-3xl border border-border bg-card overflow-hidden">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-0">
          <div className="flex items-center bg-[#081120] p-4 lg:p-6">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b1424] shadow-2xl">
              <img
                src={radarMacro}
                alt="Tela do Radar Macro IA"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="p-7 lg:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-terracotta">
              Case em IA aplicada
            </div>
            <h3 className="mt-3 font-display text-4xl tracking-tight">
              Radar Macro IA
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Laboratório de análise de mercado em produção ativa e modo simulação. O sistema cruza notícias macro,
              candles, replay de mercado, score de confiança, gestão de risco e alavancagem controlada
              antes de liberar uma operação.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Robô de notícias macro com classificação por ativo e impacto",
                "Mesa de sinais com checklist, risco por trade e alavancagem controlada",
                "Replay candle a candle para validar cenários antes de operar",
                "Travas contra overtrade, perda diária e mercado lateral",
                "Em produção ativa, com paper trading: nenhuma ordem real é enviada",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["React", "TypeScript", "IA", "Trading Lab", "Risk Management"].map((tag) => (
                <span key={tag} className="chip font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-background">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="darkquant-academy-case" className="scroll-reveal mt-8 rounded-3xl border border-border bg-card overflow-hidden">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-0">
          <div className="p-7 lg:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-terracotta">
              Case em IA aplicada
            </div>
            <h3 className="mt-3 font-display text-4xl tracking-tight">
              DarkQuant Academy
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mentor pessoal de tecnologia com IA para estudar com trilhas profundas, aulas em blocos curtos,
              exercicios guiados e correcao por rubrica. O app usa Gemini quando a chave esta conectada e
              mantem fallback local para continuar funcionando sem API.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Diagnostico de objetivo, tempo disponivel e estilo de estudo",
                "Roadmaps por area: dados, frontend, backend, IA, DevOps e seguranca",
                "Geracao de aulas teoricas, exemplos, termos-chave e perguntas de revisao",
                "Checkpoint com IA para validar entendimento antes de avancar",
                "Exercicios em conversa, correcao final, rubrica e historico de progresso",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["React", "TypeScript", "Gemini API", "LocalStorage", "EdTech"].map((tag) => (
                <span key={tag} className="chip font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-background">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center bg-[#070a0f] p-4 lg:p-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#090d14] shadow-2xl">
              <DarkQuantPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
