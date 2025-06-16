// src/app/page.tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { WebinarPromo } from "@/components/WebinarPromo";
import { Footer } from "@/components/Footer";
import { Trust } from "@/components/Trust";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <WebinarPromo />
      <Trust />
      {/* <FAQ /> */}

      <Footer />
    </main>
  );
}
