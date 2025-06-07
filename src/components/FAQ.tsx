// src/components/FAQ.tsx
"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "What programs does IvyCounsel offer?",
      answer:
        "IvyCounsel offers a wide range of programs, including undergraduate and postgraduate degrees, as well as certificate and diploma courses in various disciplines including Computer Science, Engineering, Business, Arts, and Sciences.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "Yes, IvyCounsel offers scholarships and financial aid opportunities for eligible students based on academic merit and financial need. We also provide work-study programs and payment plans to make education accessible.",
    },
    {
      question: "How do I apply to IvyCounsel?",
      answer:
        "Applying to IvyCounsel is easy! You can fill out our online application form and submit the required documents through our website. Our admissions team will guide you through the entire process.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about IvyCounsel and our programs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-lg bg-white p-6 rounded-xl shadow-md text-left flex justify-between items-center hover:shadow-lg transition-all duration-300 group"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus className="w-5 h-5 text-purple-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
                  )}
                </div>
              </button>
              {openFAQ === index && (
                <div className="bg-purple-50 p-6 rounded-b-xl border-t border-purple-100 animate-fadeIn">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
