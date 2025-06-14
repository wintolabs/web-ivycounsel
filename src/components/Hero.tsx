"use client";

import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 pt-20 pb-12 md:py-16 lg:py-0 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <div className="text-base sm:text-xl md:text-xl lg:text-xl inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium mb-4">
                <Star className="w-4 h-4 fill-current" />
                #1 Educational Counseling Platform
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-gray-900 leading-[0.9] tracking-tight">
                From{" "}
                <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent">
                  Aspiration
                </span>
                <br />
                to{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 bg-clip-text text-transparent">
                  Achievement
                </span>
              </h1>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-purple-600 tracking-normal">
                Your Gateway to Top U.S. Colleges
              </p>
            </div>

            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Join a select group of students receiving one-on-one mentorship
              from top US based experts. Only 10 seats for 2025 designed to
              elevate your profile for world-class universities.
            </p>

            <div className="pt-4">
              <button
                onClick={() => scrollToSection("features")}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-2xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Start your journey"
              >
                Start Your Journey
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative max-w-lg">
              {/* Single image container */}
              <div className="relative w-[320px] h-[400px] sm:w-[380px] sm:h-[480px] lg:w-[420px] lg:h-[520px]">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200 rounded-[2.5rem] transform rotate-3 scale-105 opacity-20" />

                {/* Main image container */}
                <div className="relative w-full h-full transform rotate-2 hover:rotate-1 transition-all duration-700 hover:scale-105">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl bg-white p-3 border border-white/50">
                    <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                      <Image
                        src="/images/student-main.jpg"
                        alt="Student studying with laptop"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        sizes="(max-width: 640px) 320px, (max-width: 768px) 380px, 420px"
                        className="transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl" />
      </div>
    </section>
  );
}
