"use client";

import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { Contact } from "./Contact";
import { Button } from "./ui/MovingBorder";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-950 to-gray-300 ">
      {/* Background Image */}
      <Image
        src="/images/campus.jpg"
        alt="University campus background"
        fill
        className="absolute object-cover object-center opacity-60 "
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content Grid */}

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT: Text Content */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-600/80 text-white text-sm sm:text-base font-medium shadow mb-6">
            <Star className="w-4 h-4 fill-current" />
            #1 Educational Counseling Platform
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
            From{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Aspiration
            </span>{" "}
            to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Achievement
            </span>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium drop-shadow-md">
            Your Gateway to Top U.S. Colleges
          </p>

          <p className="mt-4 text-xl sm:text-2xl text-white/90 max-w-2xl drop-shadow-sm">
            Join a select group of students receiving one-on-one mentorship from
            top US-based experts. Only 10 seats for 2025 — designed to elevate
            your profile for world-class universities.
          </p>

          <div className="mt-8">
            <Button
              borderRadius="1.75rem"
              onClick={() => scrollToSection("webinar")}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-base rounded-xs px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Button>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="w-full lg:w-[400px] flex justify-center">
          <Contact />
        </div>
      </div>
    </section>
  );
}
