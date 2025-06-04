// src/components/Testimonials.tsx
'use client'
import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Student, Computer Science",
      content: "Attending IvyCounsel has been a transformative experience. The dedicated faculty and enriching curriculum have fueled my passion for learning, and I now feel ready to take on any challenge.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "Graduate, Business Administration",
      content: "I am grateful for the support and guidance I received at IvyCounsel. The mentorship and real-world insights helped me secure a promising internship, setting me on the path to success.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Parent",
      content: "As a parent, I am thrilled with my child's progress at IvyCounsel. The holistic education approach and focus on character development have helped shape them into a well-rounded individual.",
      rating: 5
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Community Says</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students, graduates, and parents about their IvyCounsel experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center relative">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-gray-600 mb-8 italic leading-relaxed">
            &quot;{testimonials[currentTestimonial].content}&quot;
            </blockquote>
            <div className="font-semibold text-gray-900 text-lg">
              {testimonials[currentTestimonial].name}
            </div>
            <div className="text-blue-600 font-medium">
              {testimonials[currentTestimonial].role}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}