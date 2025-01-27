'use client'
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import faqData from '@/helpers/faqData';

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(Number || null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-[#024383] mb-8">Preguntas Frecuentes</h2>
        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full px-6 py-4 bg-white hover:bg-gray-100 transition duration-300"
              >
                <span className="text-gray-700 font-medium">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              {activeIndex === index && (
                <div className="bg-gray-50 px-6 py-4 text-gray-600" 
                dangerouslySetInnerHTML={{__html: faq.answer}}>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
