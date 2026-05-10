export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="scroll-reveal lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            01 — Sobre
          </div>
          <h2 className="font-display text-5xl lg:text-6xl leading-[1] tracking-tight">
            Ideias que viram <em className="text-terracotta">sistemas</em>.
          </h2>
        </div>

        <div className="scroll-reveal stagger-2 lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-foreground/85 leading-relaxed">
          <p>
            Gosto de transformar ideias em sistemas funcionais. Meu foco vai
            além do código: penso em <span className="text-terracotta">experiência</span>,
            produto, automação e soluções que realmente facilitem a vida das pessoas.
          </p>
          <p className="text-muted-foreground">
            Trabalho ponta a ponta — do schema do banco ao detalhe da interface. Construo
            APIs sólidas em Java, Python e .NET, modelo dados em PostgreSQL e Supabase,
            e desenho experiências em React com a mesma obsessão por detalhe que coloco
            no backend.
          </p>
          <p className="text-muted-foreground">
            Tenho mentalidade de founder: gosto de criar coisas do zero, validar
            hipóteses, automatizar o que sangra e enviar valor real para quem usa.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-border">
            {[
              { k: "3+", v: "anos construindo coisas" },
              { k: "12", v: "produtos enviados" },
              { k: "1", v: "SaaS no ar" },
            ].map((s) => (
              <div key={s.v} className="lift-card rounded-2xl p-2 -m-2">
                <div className="font-display text-4xl lg:text-5xl text-terracotta">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
