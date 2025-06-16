"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  // Phone,
  // MapPin,
} from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  // { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  // { Icon: Youtube, href: "#", label: "YouTube" },
];

// Added 'home' for scroll to top
const footerLinks = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "about", label: "About" },
];

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white text-gray-700">
      <div className="container mx-auto px-6 py-12 max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
        {/* Left: Company info */}
        <div className="max-w-sm space-y-4">
          {/* <h3 className="text-white text-3xl font-semibold">IvyCounsel</h3> */}
          <div
            onClick={() => scrollToSection("home")}
            className="cursor-pointer flex items-start"
          >
            <Image
              src="/ivyc-368_100.png"
              alt="IvyCounsel Logo"
              width={180}
              height={40}
              priority
              className="block"
            />
          </div>

          <p className="text-gray-700 text-base">
            Empowering minds, building futures. Join us in creating the next
            generation of leaders and innovators.
          </p>

          <div className="space-y-2 text-base text-gray-400">
            {/* <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-500" />
              <span>123 Education Street, Academic City</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-purple-500" />
              <span>+1 (555) 123-4567</span>
            </div> */}
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-500" />
              <span className="text-gray-700">info@ivycounsel.com</span>
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 bg-gray-200 hover:bg-purple-600 transition-colors rounded flex items-center justify-center text-gray-700 hover:text-white"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Simple links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-col space-y-3 text-base"
        >
          {footerLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-left hover:text-purple-500 transition-colors focus:outline-none"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      <div className="border-t border-gray-800 mt-10 py-6 text-center text-gray-700 text-base">
        © 2025 IvyCounsel. All rights reserved.
      </div>
    </footer>
  );
}
