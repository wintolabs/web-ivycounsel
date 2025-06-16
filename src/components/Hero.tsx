"use client";

import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden flex items-center">
      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm sm:text-base font-medium shadow-sm mb-4 w-fit mx-auto lg:mx-0">
                <Star className="w-4 h-4 fill-current" />
                #1 Educational Counseling Platform
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight lg:leading-[1.1] break-words">
                From{" "}
                <span className="inline-block bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent">
                  Aspiration
                </span>
                <br className="hidden sm:block" />
                to{" "}
                <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 bg-clip-text text-transparent">
                  Achievement
                </span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 tracking-wide mt-4">
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
                onClick={() => scrollToSection("contact")}
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
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="absolute -top-20 -left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 z-0" />
            <div className="absolute -bottom-16 -right-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl opacity-25 z-0" />

            <div className="relative w-[320px] sm:w-[380px] lg:w-[420px] aspect-[3/4] z-10 group transition-transform duration-700 hover:scale-105 hover:-rotate-1">
              <div className="rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)] bg-white/10 backdrop-blur-lg border border-white/10">
                <div className="relative w-full h-full aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/student-main.jpg"
                    alt="Student studying with laptop"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 640px) 320px, (max-width: 768px) 380px, 420px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
