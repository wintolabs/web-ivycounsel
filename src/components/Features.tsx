// src/components/Features.tsx
import { Globe, GraduationCap, Microscope } from "lucide-react";

export function Features() {
  const features = [
    {
      Icon: GraduationCap,
      title: "American Counselors",
      description:
        "US-based experts offering guidance tailored to Indian and international students.",
    },
    {
      Icon: Globe,
      title: "Exciting Opportunities",
      description:
        "Explore top-tier programs like BS/MD, Ivy League, and global universities.",
    },
    {
      Icon: Microscope,
      title: "Culturally-Aware, Research-Driven Support",
      description:
        "Experience-driven insights rooted in a global, personalized approach.",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-24 bg-gradient-to-tr from-purple-50 via-white to-blue-100 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose IvyCounsel?
          </h2>
          <p className="text-lg text-gray-600">
            Discover what sets us apart in the journey from aspiration to
            achievement.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, description }, index) => (
            <div
              key={index}
              className="group p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-purple-400"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-purple-100 group-hover:bg-purple-600 flex items-center justify-center transition-colors duration-300">
                <Icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-400 opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}
