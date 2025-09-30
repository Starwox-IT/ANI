import React, { useState } from "react";

export default function Faq() {
  const faqs = [
    {
      question: "How long does membership last?",
      answer: "Membership lasts for 12 months and can be renewed annually.",
    },
    {
      question: "What does membership involve?",
      answer:
        "You get access to exhibitions, mentorship, resources, and funding opportunities.",
    },
    {
      question: "What are the key benefits?",
      answer:
        "Visibility, advocacy, networking, funding, and access to global platforms.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="container mx-auto px-4 py-26 max-w-6xl">
      <h2 className="text-2xl md:text-5xl font-bold text-center mb-8">FAQs</h2>
      <div className="space-y-6 font-open-sans">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border-b border-[#D2D5DA] pb-4 cursor-pointer"
          >
            {/* Question Row */}
            <div
              className="flex justify-between items-center text-[#252525]"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <h4 className="font-medium text-lg">{faq.question}</h4>
              <span className="text-xl font-bold">
                {openIndex === i ? "−" : "+"}
              </span>
            </div>

            {/* Animated Answer */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                openIndex === i ? "max-h-40 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
