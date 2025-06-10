import { CalendarDays, Clock, Video } from "lucide-react";
import Image from "next/image";

const WEBINAR_GOOGLE_FORMS_ID = process.env.WEBINAR_GOOGLE_FORMS_ID;

export function WebinarPromo() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white py-16 px-6 sm:px-12 md:px-24 rounded-lg shadow-lg max-w-5xl mx-auto my-16">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left side: Info */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            Join Our Exclusive Webinar
          </h2>
          <p className="text-xl mb-6 leading-relaxed drop-shadow-md">
            Unlock your potential with expert insights, live Q&A, and practical
            strategies. Don&apos;t miss out on this interactive learning
            experience!
          </p>

          {/* Info blocks */}
          <div className="flex flex-col text-lg space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-6 h-6 text-yellow-300" />
              <span className="font-semibold">
                Date: <time>June 15, 2025</time>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-yellow-300" />
              <span className="font-semibold">Time: 5:00 PM - 6:30 PM IST</span>
            </div>
            <div className="flex items-center gap-3">
              <Video className="w-6 h-6 text-yellow-300" />
              <span className="font-semibold">
                Platform: Zoom (Link will be emailed)
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full sm:w-auto mt-4">
            <a
              href={`https://docs.google.com/forms/d/${WEBINAR_GOOGLE_FORMS_ID}/viewform`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold text-center px-8 py-3 rounded-lg shadow-lg transition"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Right side: Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/student-webinar.jpg"
            alt="Webinar illustration"
            className="rounded-xl shadow-2xl max-w-full h-auto"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
