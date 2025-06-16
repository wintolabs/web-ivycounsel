"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { ContainerScroll } from "./ui/ContainerScroll";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitMessage("Thank you! We’ll be in touch soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const errorData = await res.json();
        console.error("Resend error:", errorData);
        setSubmitMessage("There was an error sending your message.");
      }
    } catch (err) {
      console.error(err);
      setSubmitMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  return (
    <ContainerScroll
      titleComponent={
        <h2 className="text-5xl font-bold text-black">
          We’d Love to Hear From You
        </h2>
      }
    >
      <div
        id="contact"
        className="w-full h-full flex justify-center items-center px-4 md:px-8"
      >
        <div className="w-full max-w-xl h-full overflow-auto">
          <div className="relative rounded-2xl p-1 shadow-xl">
            <div className="bg-white rounded-2xl p-6 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>

              {submitMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 flex items-center">
                    <span className="mr-2">✓</span>
                    {submitMessage}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContainerScroll>
  );
}
