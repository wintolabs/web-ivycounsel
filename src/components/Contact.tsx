// components/Contact.tsx
"use client";

import { useState } from "react";
import { Send } from "lucide-react";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitMessage("Thank you! We'll be in touch.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitMessage("Submission failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setSubmitMessage("Something went wrong.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 w-[320px] sm:w-[360px] lg:w-[400px]">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Start your Study Abroad Journey
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <input
          name="name"
          placeholder="Full Name*"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          name="email"
          placeholder="Email Address*"
          required
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          placeholder="How can we help?"
          required
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg flex justify-center items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin h-4 w-4 border-b-2 border-white rounded-full"></div>
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Book Free Consultation
            </>
          )}
        </button>
        {submitMessage && (
          <p className="text-green-700 text-sm text-center">{submitMessage}</p>
        )}
      </form>
    </div>
  );
}
