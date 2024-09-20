import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="collapse collapse-plus bg-base-200">
          <input type="radio" name={`faq-accordion-${index}`} /> 
          <div className="collapse-title text-xl font-medium">
            {faq.question}
          </div>
          <div className="collapse-content"> 
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}