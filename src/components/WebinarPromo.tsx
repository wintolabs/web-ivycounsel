"use client";

import Image from "next/image";

const formUrl = process.env.NEXT_PUBLIC_WEBINAR_GOOGLE_FORMS_ID
  ? `https://docs.google.com/forms/d/${process.env.NEXT_PUBLIC_WEBINAR_GOOGLE_FORMS_ID}/viewform`
  : "#";

export function WebinarPromo() {
  return (
    <section
      id="webinar"
      className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white py-16 px-6 sm:px-12 md:px-24 rounded-lg shadow-lg max-w-5xl mx-auto my-16"
    >
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left Side */}
        <div className="md:w-2/3 space-y-6 text-base sm:text-lg md:text-xl leading-relaxed">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            FREE WEBINAR
            <br />
            Demystifying U.S. College Admissions
          </h2>

          {/* Event Info */}
          <div className="space-y-2">
            <p>
              📅 <strong>Date:</strong> June 29, 2025
            </p>
            <p>
              ⏰ <strong>Time:</strong> 11:00 AM – 12:00 PM IST
            </p>
            <p>
              📌 <strong>Online – Register Now!</strong>
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-2 mt-4">
            <p>🔷 Confused about how to apply to U.S. universities?</p>
            <p>🔷 Want to know what top colleges are really looking for?</p>
            <p>🔷 Curious about SAT/ACT, essays, financial aid, and more?</p>
          </div>

          {/* Description */}
          <p className="mt-6">
            Join Ivy Counsel for an insider’s guide to the U.S. college
            admissions process — designed for students and parents who want
            clarity, confidence, and a roadmap to success.
          </p>

          {/* Benefits */}
          <div className="space-y-2 mt-4">
            <p>✅ Learn how to build a strong profile</p>
            <p>✅ Understand timelines, requirements & strategies</p>
            <p>✅ Get answers from U.S. based admissions experts</p>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <p>
              🎯 <strong>Limited spots available –</strong>
            </p>

            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold text-xl px-6 py-3 rounded-lg shadow transition"
            >
              Register here
            </a>
          </div>
        </div>

        {/* Right Side: Smaller Image */}
        <div className="md:w-1/3 w-full flex justify-center md:justify-end">
          <Image
            src="/images/student-webinar.jpg"
            alt="Webinar illustration"
            width={300}
            height={200}
            className="rounded-xl shadow-2xl object-contain max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
