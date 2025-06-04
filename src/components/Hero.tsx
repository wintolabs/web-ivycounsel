// src/components/Hero.tsx
'use client'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-32 pt-40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Unleash Your Potential
        </h1>
        <p className="text-xl md:text-3xl mb-8 font-light text-blue-100">
          Empowering Minds, Shaping Futures.
        </p>
        <p className="text-lg mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
          Transform your educational journey with our innovative programs designed to unlock your full potential and prepare you for tomorrowe&apos;s challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('features')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
            Explore Programs
            <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}