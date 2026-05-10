const things = [
  { e: "✺", t: "Construo coisas do zero", s: "Do schema vazio até o primeiro usuário pago." },
  { e: "◐", t: "Apaixonado por startups", s: "Penso como founder, mesmo escrevendo código." },
  { e: "✦", t: "Tecnologia + negócios", s: "Código bom resolve problema de gente, não de stack." },
  { e: "❍", t: "Sistemas reais, no ar", s: "Prefiro v1 imperfeita que rode a v∞ no Figma." },
  { e: "✶", t: "Foco em problemas reais", s: "Se ninguém sente a dor, não vale automatizar." },
  { e: "◈", t: "Viciado em produto", s: "Pequenos detalhes mudam tudo — vou atrás deles." },
];

export function Personal() {
  return (
    <section className="bg-paper border-y border-border">
      <div className="scroll-reveal mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-36">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
          05 — Algumas coisas sobre mim
        </div>
        <h2 className="font-display text-5xl lg:text-6xl tracking-tight max-w-3xl mb-16">
          Fora do editor de código, eu sou <em className="text-terracotta">isso aqui</em>.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {things.map((x, i) => (
            <div key={x.t} className={`scroll-reveal stagger-${(i % 3) + 1} lift-card bg-card p-8 hover:bg-accent`}>
              <div className="text-3xl text-terracotta font-display">{x.e}</div>
              <div className="font-display text-xl mt-4">{x.t}</div>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{x.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
