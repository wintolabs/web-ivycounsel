// src/app/page.tsx
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Features } from '@/components/Features'
import { Faculty } from '@/components/Faculty'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <Faculty />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}