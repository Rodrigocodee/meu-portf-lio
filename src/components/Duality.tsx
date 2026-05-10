const techGroups = [
  {
    title: "Stack principal",
    desc: "Base que uso para construir APIs, lógica de negócio e sistemas reais.",
    items: ["Java", "Python", ".NET", "SQL", "APIs REST"],
    accent: "text-terracotta",
  },
  {
    title: "Full-Stack / Front-End",
    desc: "Ferramentas para criar interfaces claras e conectar produto ao backend.",
    items: ["React", "TypeScript", "Vite"],
    accent: "text-sage",
  },
  {
    title: "Banco e Backend",
    desc: "Modelagem, autenticação, segurança de dados e regras de acesso.",
    items: ["PostgreSQL", "Supabase", "Auth", "RLS"],
    accent: "text-terracotta",
  },
  {
    title: "Deploy e Integrações",
    desc: "Publicação, pagamentos, e-mails transacionais e eventos assíncronos.",
    items: ["Vercel", "Railway", "Asaas", "Resend", "Webhooks"],
    accent: "text-sage",
  },
];

export function Duality() {
  return (
    <section id="duality" className="relative bg-ink text-paper overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
        <div className="scroll-reveal text-xs uppercase tracking-[0.25em] text-paper/50 mb-4">
          02 — Habilidades e tecnologias
        </div>
        <h2 className="scroll-reveal stagger-1 font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight max-w-3xl">
          Stack clara para <em className="text-terracotta">backend</em>,
          <br />
          produto e <em className="text-sage">dados</em>.
        </h2>

        <div className="scroll-reveal stagger-2 mt-20 grid md:grid-cols-2 gap-px bg-paper/10 border border-paper/10 rounded-3xl overflow-hidden">
          {techGroups.map((group, index) => (
            <div
              key={group.title}
              className={`lift-card bg-ink p-8 lg:p-10 ${index % 2 === 1 ? "md:border-l border-paper/10" : ""}`}
            >
              <div className={`font-mono text-xs uppercase tracking-widest ${group.accent}`}>
                {group.title}
              </div>
              <p className="mt-4 min-h-12 text-sm leading-relaxed text-paper/60">
                {group.desc}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <li
                    key={tech}
                    className="chip px-3 py-1.5 rounded-full border border-paper/20 text-sm text-paper/85 hover:bg-paper/10 hover:border-terracotta"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="scroll-reveal stagger-3 mt-12 max-w-2xl text-paper/60 text-lg">
          Menos lista solta, mais contexto: essa é a combinação que eu uso para entregar
          APIs, bancos, automações, integrações e produtos digitais reais.
        </p>
      </div>
    </section>
  );
}
