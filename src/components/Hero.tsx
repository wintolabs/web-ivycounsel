"use client";

import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/MovingBorder";
import { BackgroundGradient } from "./ui/background-gradient";

export function Hero() {
  const [animationData, setAnimationData] = useState<unknown>(null);

  useEffect(() => {
    fetch("/animations/student.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(console.error);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/campus.jpg"
        alt="University campus background"
        fill
        className="absolute object-cover object-center opacity-90"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content Grid */}

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* RIGHT: Lottie Glass Box */}

        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <BackgroundGradient
            className="w-fit rounded-3xl"
            containerClassName="rounded-3xl"
          >
            <div className="relative z-10 backdrop-blur-xl bg-white/50 border border-white/20 shadow-2xl rounded-3xl flex items-center justify-center w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] overflow-hidden">
              <Lottie
                animationData={animationData}
                loop
                className="w-full h-full object-center"
              />
            </div>
          </BackgroundGradient>
        </div>

        {/* LEFT: Text Content */}
        <div className="text-white text-center lg:text-left order-2 lg:order-1">
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

          <p className="mt-6 text-lg sm:text-xl md:text-2xl font-medium drop-shadow-md">
            Your Gateway to Top U.S. Colleges
          </p>

          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl drop-shadow-sm">
            Join a select group of students receiving one-on-one mentorship from
            top US-based experts. Only 10 seats for 2025 — designed to elevate
            your profile for world-class universities.
          </p>

          <div className="mt-8 ">
            <Button
              borderRadius="1.75rem"
              onClick={() => scrollToSection("contact")}
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
      </div>
    </section>
  );
}
