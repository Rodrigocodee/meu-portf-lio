import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Opportunities } from "@/components/Opportunities";
import { Duality } from "@/components/Duality";
import { Psivinculo } from "@/components/Psivinculo";
import { Projects } from "@/components/Projects";
import { Personal } from "@/components/Personal";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rodrigo — Full-Stack Developer & SaaS Builder" },
      {
        name: "description",
        content:
          "Portfólio de Rodrigo, desenvolvedor full-stack focado em backend, SaaS e produtos digitais reais. Construindo sistemas reais para resolver problemas reais.",
      },
      { property: "og:title", content: "Rodrigo — Full-Stack Developer & SaaS Builder" },
      {
        property: "og:description",
        content: "Construindo sistemas reais para resolver problemas reais.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Opportunities />
      <About />
      <Duality />
      <Psivinculo />
      <Projects />
      <Personal />
      <Contact />
    </main>
  );
}
