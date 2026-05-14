import portrait from "@/assets/rodrigo-portrait-illustration.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: editorial text */}
          <div className="lg:col-span-7 reveal">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
              <span className="h-px w-10 bg-foreground/40" />
              Portfólio · 2026
            </div>

            <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight">
              <span className="relative inline-block">
                <span className="italic text-terracotta">Rodrigo</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 C 80 2, 160 12, 298 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-terracotta/50"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 font-display text-2xl lg:text-3xl text-foreground leading-tight">
              Desenvolvedor <span className="text-terracotta">Back-End</span> /{" "}
              <span className="text-terracotta">Full-Stack</span>
            </p>

            <p className="mt-6 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed">
              Construo APIs, bancos de dados, automações e produtos digitais reais — do
              schema ao detalhe da interface, com foco em entregar valor para quem usa.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Java", "Python", ".NET", "SQL", "React", "TypeScript"].map((t) => (
                <span key={t} className="chip font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-border bg-card">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="button-lift inline-flex items-center gap-2 rounded-full bg-ink text-paper px-5 py-3 text-sm hover:bg-terracotta"
              >
                Ver projetos <span aria-hidden>→</span>
              </a>
              <a
                href="/curriculo-rodrigo.pdf"
                download
                className="button-lift inline-flex items-center gap-2 rounded-full bg-terracotta text-paper px-5 py-3 text-sm hover:bg-ink"
              >
                Baixar currículo <span aria-hidden>↓</span>
              </a>
              <a
                href="https://github.com/Rodrigocodee"
                target="_blank"
                rel="noreferrer noopener"
                className="button-lift inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-accent"
              >
                LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/in/rodrigocode"
                target="_blank"
                rel="noreferrer noopener"
                className="button-lift inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-accent"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right: collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 rounded-[2rem] bg-sage/20 rotate-3 grain" />
              <div className="lift-card absolute inset-0 rounded-[2rem] overflow-hidden border border-border shadow-[0_30px_80px_-20px_rgba(60,40,20,0.25)]">
                <img
                  src={portrait}
                  alt="Ilustração editorial do Rodrigo"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating cards */}
              <div className="absolute -left-8 top-10 float-slow bg-card border border-border rounded-xl px-4 py-3 shadow-lg">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Status</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
                  <span className="text-sm">Disponível para projetos</span>
                </div>
              </div>

              <div className="absolute -right-6 bottom-16 float-slower bg-card border border-border rounded-xl p-4 shadow-lg w-48">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Agora</div>
                <div className="font-display text-base mt-1 leading-tight">
                  Construindo <span className="text-terracotta">Psivínculo</span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-3/4 bg-terracotta rounded-full" />
                </div>
              </div>

              <div className="absolute -bottom-6 left-12 float-slow bg-ink text-paper rounded-xl px-3 py-2 text-xs font-mono shadow-lg">
                {"<dev/> + <product/>"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-y border-border bg-paper py-4 overflow-hidden">
        <div className="marquee flex gap-12 whitespace-nowrap font-display text-2xl text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 items-center pr-12">
              <span>SaaS</span><span className="text-terracotta">✺</span>
              <span>Backend</span><span className="text-terracotta">✺</span>
              <span>Automação</span><span className="text-terracotta">✺</span>
              <span>Produto</span><span className="text-terracotta">✺</span>
              <span>Sistemas reais</span><span className="text-terracotta">✺</span>
              <span>Founder mindset</span><span className="text-terracotta">✺</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
