import { StrictMode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { createRoot } from "react-dom/client";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Opportunities } from "@/components/Opportunities";
import { Duality } from "@/components/Duality";
import { Psivinculo } from "@/components/Psivinculo";
import { Projects } from "@/components/Projects";
import { Personal } from "@/components/Personal";
import { Contact } from "@/components/Contact";
import "./styles.css";

function App() {
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
);
