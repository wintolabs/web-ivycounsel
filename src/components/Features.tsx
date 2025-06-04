// src/components/Features.tsx
import { GraduationCap, Users, Globe, Briefcase, Microscope, Smartphone } from 'lucide-react'

export function Features() {
  const features = [
    {
      Icon: GraduationCap,
      title: "Quality Education",
      description: "Comprehensive curriculum designed by industry experts to provide practical knowledge and skills."
    },
    {
      Icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced professionals who bring real-world insights into the classroom."
    },
    {
      Icon: Globe,
      title: "Global Network",
      description: "Connect with students and alumni worldwide through our extensive international partnerships."
    },
    {
      Icon: Briefcase,
      title: "Career Support",
      description: "Dedicated career services to help you secure internships and job opportunities."
    },
    {
      Icon: Microscope,
      title: "Research Opportunities",
      description: "Engage in cutting-edge research projects and contribute to innovation in your field."
    },
    {
      Icon: Smartphone,
      title: "Modern Technology",
      description: "State-of-the-art facilities and online learning platforms for flexible education."
    }
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose IvyCounsel?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes IvyCounsel the ideal choice for your educational journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}