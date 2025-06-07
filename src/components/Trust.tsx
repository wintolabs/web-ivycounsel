// src/components/Trust.tsx
import { ShieldCheck, Heart, BookOpenCheck } from "lucide-react";

export function Trust() {
  const trustPoints = [
    {
      Icon: ShieldCheck,
      title: "Expertise Across Borders",
      description:
        "We specialize in U.S., UK, Canada, and Indian admissions, offering globally informed guidance tailored to your journey.",
    },
    {
      Icon: Heart,
      title: "Student-First Approach",
      description:
        "We take time to understand your goals and provide transparent, empathetic advice every step of the way.",
    },
    {
      Icon: BookOpenCheck,
      title: "Results That Matter",
      description:
        "From essays to interviews, we focus on outcomes — helping you stand out with a powerful, authentic story.",
    },
  ];

  return (
    <section
      id="trust"
      className="relative py-24 bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Why Students & Parents Trust Us
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by families worldwide for personalized, high-impact guidance
            on global admissions.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map(({ Icon, title, description }, index) => (
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

      {/* Decorative Blur Circles */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-300 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-400 opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}
