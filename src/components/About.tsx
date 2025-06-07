// src/components/About.tsx
import { Users, Award, BookOpen } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-tr from-gray-50 to-purple-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            About IvyCounsel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering Global Students—One Journey at a Time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              We provide expert, personalized guidance that empowers individuals
              to confidently navigate their journey from student to successful
              professional—both in India and across the globe.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              We are committed to bridging education and career pathways through
              culturally-aware, research-driven support that transforms
              aspirations into achievements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-purple-400">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600 font-medium text-base">
                  Students
                </div>
              </div>

              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-purple-400">
                <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-600">10+</div>
                <div className="text-gray-600 font-medium text-base">
                  Counsellors
                </div>
              </div>

              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-purple-400">
                <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-600">20+</div>
                <div className="text-gray-600 font-medium text-base">
                  Programs
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/college-student.jpg" // <-- Replace with your own path
              alt="Confident college student with backpack"
              width={800}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
