export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-paper/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg hover:text-terracotta">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-terracotta" />
          <span className="tracking-tight">Rodrigo<span className="text-terracotta">.</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#opportunities" className="link-underline hover:text-foreground">Vagas</a>
          <a href="#about" className="link-underline hover:text-foreground">Sobre</a>
          <a href="#duality" className="link-underline hover:text-foreground">Dois lados</a>
          <a href="#psivinculo" className="link-underline hover:text-foreground">Psivínculo</a>
          <a href="#projects" className="link-underline hover:text-foreground">Projetos</a>
          <a href="#contact" className="link-underline hover:text-foreground">Contato</a>
        </nav>
        <a
          href="#contact"
          className="button-lift hidden sm:inline-flex items-center gap-2 rounded-full bg-ink text-paper px-4 py-2 text-sm hover:bg-terracotta"
        >
          Vamos conversar
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
