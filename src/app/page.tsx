// src/app/page.tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { WebinarPromo } from "@/components/WebinarPromo";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Trust } from "@/components/Trust";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <WebinarPromo />
      <Trust />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
