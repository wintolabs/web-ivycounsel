// src/components/Header.tsx
'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600 cursor-pointer"
               onClick={() => scrollToSection('home')}>
            IvyCounsel
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} 
                    className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} 
                    className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('features')} 
                    className="text-gray-700 hover:text-blue-600 transition-colors">
              Programs
            </button>
            <button onClick={() => scrollToSection('faculty')} 
                    className="text-gray-700 hover:text-blue-600 transition-colors">
              Faculty
            </button>
            <button onClick={() => scrollToSection('contact')} 
                    className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} 
                      className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} 
                      className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('features')} 
                      className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Programs
              </button>
              <button onClick={() => scrollToSection('faculty')} 
                      className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Faculty
              </button>
              <button onClick={() => scrollToSection('contact')} 
                      className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}