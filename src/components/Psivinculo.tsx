import psivinculoRelatorios from "@/assets/psivinculorelatorios.png";
import psivinculoTelaInicial from "@/assets/psivinculotela inicial.png";

const stack = [
  "React", "TypeScript", "Vite", "Supabase", "PostgreSQL",
  "Railway", "Vercel", "Asaas", "Resend", "RLS", "Webhooks", "APIs REST",
];

const metrics = [
  "SaaS em desenvolvimento",
  "Integrações reais",
  "Pagamentos com Asaas",
  "Automações de e-mail",
  "Deploy em produção",
  "Banco PostgreSQL",
  "Autenticação",
  "Webhooks",
  "Notificações",
];

const casePoints = [
  {
    title: "Problema",
    text: "Psicólogos precisam organizar agenda, pacientes, pagamentos e registros clínicos em ferramentas separadas, o que aumenta retrabalho e risco operacional.",
  },
  {
    title: "Solução",
    text: "SaaS em desenvolvimento para psicólogos, com foco em agenda, pacientes, financeiro, prontuários, notificações, pagamentos e organização da rotina clínica.",
  },
  {
    title: "Resultado",
    text: "Produto real com autenticação, banco PostgreSQL, integrações, webhooks, automações de e-mail e deploy em produção.",
  },
];

export function Psivinculo() {
  return (
    <section id="psivinculo" className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
      <div className="scroll-reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            03 — Case study principal
          </div>
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight">
            Psi<span className="text-terracotta">vínculo</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl">
            SaaS em desenvolvimento para psicólogos, com foco em agenda, pacientes,
            financeiro, prontuários, notificações, pagamentos e organização da rotina clínica.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
          deploy em produção · 2026
        </div>
      </div>

      <blockquote className="scroll-reveal border-l-2 border-terracotta pl-6 my-14 max-w-3xl">
        <p className="font-display italic text-2xl lg:text-3xl leading-snug">
          “Cuidar de pessoas já é um desafio. Organizar a rotina clínica não deveria
          ser mais um.”
        </p>
      </blockquote>

      <div className="scroll-reveal relative rounded-3xl bg-gradient-to-br from-sage/15 to-terracotta/10 border border-border p-5 lg:p-10 overflow-hidden grain">
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="lift-card rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-terracotta" />
                  <span className="h-2.5 w-2.5 rounded-full bg-sage" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  dashboard real
                </span>
              </div>
              <img
                src={psivinculoTelaInicial}
                alt="Tela inicial real do Psivínculo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <div className="lift-card rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
              <img
                src={psivinculoRelatorios}
                alt="Tela de relatórios reais do Psivínculo"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="rounded-2xl border border-border bg-ink text-paper p-5 shadow-sm">
              <div className="text-[10px] uppercase tracking-[0.25em] text-paper/50">Em destaque</div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {metrics.slice(0, 6).map((metric) => (
                  <span key={metric} className="rounded-full border border-paper/10 bg-paper/5 px-2.5 py-1 text-[10px] text-paper/75">
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {casePoints.map((point, i) => (
          <div key={point.title} className={`scroll-reveal stagger-${i + 1} lift-card rounded-2xl border border-border bg-card p-6`}>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-terracotta">
              {point.title}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.text}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-10 mt-16">
        <div className="scroll-reveal lg:col-span-5">
          <h3 className="font-display text-2xl mb-5">Arquitetura técnica</h3>
          <ul className="space-y-3 text-foreground/85">
            {[
              "SaaS real em produção, com domínio próprio",
              "Autenticação completa (signup, login, recovery)",
              "Banco PostgreSQL modelado para multi-tenant",
              "Row Level Security (RLS) protegendo dados clínicos",
              "Integração com Asaas — boleto, PIX e cartão",
              "Webhooks idempotentes com fila de retry",
              "Notificações por e-mail automatizadas (Resend)",
              "Deploy backend no Railway, frontend na Vercel",
              "CI/CD via GitHub, observabilidade e logs",
            ].map((f) => (
              <li key={f} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="scroll-reveal stagger-2 lg:col-span-6 lg:col-start-7">
          <h3 className="font-display text-2xl mb-5">Stack</h3>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="chip font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-card">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-2">
            {metrics.slice(6).map((metric) => (
              <div key={metric} className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                {metric}
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="button-lift inline-flex items-center gap-2 mt-10 text-sm border-b border-foreground pb-1 hover:text-terracotta hover:border-terracotta"
          >
            Quer conversar sobre o projeto? <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
