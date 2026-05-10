const roles = [
  { t: "Desenvolvedor Back-End", d: "APIs, bancos de dados, integrações e serviços" },
  { t: "Desenvolvedor Full-Stack", d: "Produto ponta a ponta, do schema à interface" },
  { t: "Analista de Dados Júnior", d: "SQL, modelagem, dashboards e automações" },
];

const focusChips = ["Back-End", "Full-Stack", "Dados", "APIs REST", "SQL", "SaaS", "Automações"];

export function Opportunities() {
  return (
    <section id="opportunities" className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 scroll-reveal">
      <div className="rounded-3xl border border-border bg-card p-8 lg:p-14 grain relative overflow-hidden lift-card">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
              Disponível agora
            </div>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight leading-[1.05]">
              Buscando <em className="text-terracotta">oportunidades</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Atualmente busco oportunidades como Desenvolvedor Back-End, Full-Stack ou
              Analista de Dados Júnior, onde eu possa contribuir com APIs, bancos de
              dados, automações, integrações e produtos digitais reais.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {focusChips.map((chip) => (
                <span key={chip} className="chip font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-border bg-paper text-muted-foreground">
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/curriculo-rodrigo.pdf"
                download
                className="button-lift inline-flex items-center gap-2 rounded-full bg-ink text-paper px-5 py-3 text-sm hover:bg-terracotta"
              >
                Baixar currículo <span aria-hidden>↓</span>
              </a>
              <a
                href="#contact"
                className="button-lift inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-accent"
              >
                Falar comigo
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-3">
            {roles.map((r, i) => (
              <div
                key={r.t}
                className={`scroll-reveal stagger-${i + 1} lift-card group flex items-start gap-4 p-5 rounded-2xl border border-border bg-paper hover:border-terracotta`}
              >
                <span className="font-mono text-xs text-muted-foreground mt-1 w-6">0{i + 1}</span>
                <div className="flex-1">
                  <div className="font-display text-xl">{r.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{r.d}</div>
                </div>
                <span className="text-terracotta transition-transform group-hover:translate-x-1">→</span>
              </div>
            ))}
            <div className="flex flex-wrap gap-2 pt-4 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
              <span>Remoto</span>·<span>Híbrido</span>·<span>CLT</span>·<span>PJ</span>·<span>Júnior</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
