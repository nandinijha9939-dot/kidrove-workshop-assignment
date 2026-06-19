import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What equipment do I need for the workshop?',
      answer: "You'll need a computer with internet access. We'll provide all software and virtual robot simulators. No prior robotics hardware is required. A webcam is recommended but not mandatory."
    },
    {
      question: 'Do I need prior coding experience?',
      answer: "No prior coding experience is required! We start from the basics and gradually build up to advanced concepts. Our instructors provide personalized guidance and support throughout the workshop."
    },
    {
      question: 'Will there be live sessions or recorded content?',
      answer: "The workshop includes live interactive sessions with our expert instructors, along with recorded content for revision. All sessions are recorded and shared with participants for flexible learning."
    },
    {
      question: 'What is the class schedule?',
      answer: "The workshop runs for 4 weeks with 2 sessions per week. Each session is 2 hours long. Specific timings will be shared upon enrollment."
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about the workshop
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-200 transition">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-gray-50 text-gray-600 border-t border-gray-200 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;