const links = [
  { label: "Email", value: "rf30065@gmail.com", href: "mailto:rf30065@gmail.com" },
  { label: "WhatsApp", value: "+55 21 97676-1474", href: "https://wa.me/5521976761474" },
  { label: "GitHub", value: "www.linkedin.com/in/rodrigocode", href: "https://www.linkedin.com/in/rodrigocode" },
  { label: "LinkedIn", value: "www.linkedin.com/in/rodrigocode", href: "https://www.linkedin.com/in/rodrigocode" },
];

export function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper relative overflow-hidden">
      <div className="scroll-reveal mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-44">
        <div className="text-xs uppercase tracking-[0.25em] text-paper/50 mb-6">
          06 — Contato
        </div>
        <h2 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] tracking-tight">
          Vamos construir <br />
          <em className="text-terracotta">algo real</em>?
        </h2>
        <p className="mt-8 max-w-xl text-paper/70 text-lg">
          Aberto para projetos de SaaS, automações, sistemas internos e produtos
          digitais com alma. Respondo rápido — e gosto de conversa franca.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 gap-px bg-paper/10 border border-paper/10 rounded-3xl overflow-hidden">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className={`scroll-reveal stagger-${i + 1} group bg-ink p-8 lg:p-10 hover:bg-terracotta flex items-center justify-between`}
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-paper/50 group-hover:text-paper/70">
                  {l.label}
                </div>
                <div className="font-display text-2xl lg:text-3xl mt-2 break-words">{l.value}</div>
              </div>
              <span className="text-2xl group-hover:translate-x-1 transition-transform" aria-hidden>→</span>
            </a>
          ))}
        </div>

        <footer className="mt-24 pt-8 border-t border-paper/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-paper/50 font-mono">
          <span>© 2026 Rodrigo · Feito à mão, com café e atenção.</span>
          <span>Lat -23.55 · Lng -46.63</span>
        </footer>
      </div>
    </section>
  );
}
