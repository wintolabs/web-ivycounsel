// src/components/About.tsx
import { Users, Award, BookOpen } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About IvyCounsel</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At IvyCounsel, we believe education is the foundation for building a better tomorrow. Our mission is to provide exceptional learning experiences that prepare students for success in an ever-evolving world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              We are dedicated to fostering an environment where students can explore their passions, develop critical thinking skills, and gain the knowledge necessary to make meaningful contributions to society.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Through innovative teaching methods, cutting-edge technology, and personalized attention, we ensure every student receives the support they need to achieve their goals.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-gray-600 font-medium">Students</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-gray-600 font-medium">Faculty</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600 font-medium">Programs</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-lg">
            <div className="w-full h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <span className="text-blue-600 text-lg font-semibold">Campus Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}