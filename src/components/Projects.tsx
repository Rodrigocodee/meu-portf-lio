const projects = [
  {
    n: "02",
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
    n: "03",
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
          const Card = p.href ? "a" : "article";

          return (
            <Card
              key={p.title}
              className={`scroll-reveal stagger-${index + 1} lift-card group relative rounded-3xl border border-border bg-card overflow-hidden hover:border-terracotta`}
              {...(p.href
                ? { href: p.href, target: "_blank", rel: "noreferrer" }
                : {})}
            >
              <div className={`aspect-[16/10] ${p.accent} relative grain`}>
                {p.preview === "douglas" ? (
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
                  <h3 className="font-display text-3xl tracking-tight">{p.title}</h3>
                  {p.href ? (
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
    </section>
  );
}
