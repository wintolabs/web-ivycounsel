import Image from "next/image";

import {
  faBinoculars,
  faCalendarDays,
  faClock,
  faComment,
  faGraduationCap,
  faHandPointRight,
  faStar,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WEBINAR_GOOGLE_FORMS_ID = process.env.WEBINAR_GOOGLE_FORMS_ID;

export function WebinarPromo() {
  return (
    <section
      id="webinar"
      className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white py-16 px-6 sm:px-12 md:px-24 rounded-lg shadow-lg max-w-5xl mx-auto my-16"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Side */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            Free 1-Hour Webinar: Unlock Your Future
          </h2>
          <div className="flex flex-col text-lg space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-yellow-400 w-6 h-6"
              />
              <span className="font-semibold">
                Only 10 seats for the 2025–2026 cohort
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400 w-6 h-6"
              />
              <span className="font-semibold">
                Learn secrets behind successful applications
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faComment}
                className="text-yellow-400 w-6 h-6"
              />
              <span className="font-semibold">Live Q&A with advisors</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faBinoculars}
                className="text-yellow-400 w-6 h-6"
              />
              <span className="font-semibold">
                Get clarity on your next steps
              </span>
            </div>
          </div>

          {/* Info Blocks */}
          <div className="flex flex-col text-lg space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-yellow-400 w-6 h-6"
              />
              <span className="font-semibold">
                Date: <time>June 22, 2025</time>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faClock}
                className="text-yellow-400 w-6 h-6"
              />
              <span className="font-semibold">
                Time: 11:00 AM – 12:00 PM IST
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faVideo}
                className="text-yellow-400 w-6 h-6"
              />
              <span className="font-semibold">
                Platform: Zoom (Link will be emailed)
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="w-full sm:w-auto mt-4">
            <a
              href={`https://docs.google.com/forms/d/${WEBINAR_GOOGLE_FORMS_ID}/viewform`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold text-center px-8 py-3 rounded-lg shadow-lg transition"
            >
              <FontAwesomeIcon icon={faHandPointRight} className="w-5 h-5" />
              Claim My Free Spot Now
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
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
