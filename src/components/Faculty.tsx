// src/components/Faculty.tsx
import { User } from 'lucide-react'

export function Faculty() {
  const faculty = [
    {
      name: "Dr. Sarah Johnson",
      role: "Professor of Computer Science",
      expertise: "Artificial Intelligence, Machine Learning",
      experience: "15+ years"
    },
    {
      name: "Prof. Michael Chen",
      role: "Dean of Engineering",
      expertise: "Robotics, Systems Engineering",
      experience: "20+ years"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Professor of Business",
      expertise: "Strategic Management, Entrepreneurship",
      experience: "12+ years"
    }
  ]

  return (
    <section id="faculty" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Faculty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from distinguished educators and industry leaders who are passionate about your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <User className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 mb-2">{member.expertise}</p>
                <p className="text-sm text-gray-500">{member.experience} experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}