"use client";
import React from 'react'

function FAQs({faqs}) {
  return (
     <div className="space-y-5">
       
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <h3 className="text-lg font-semibold text-[#2482c2] mb-2">
              Q{index + 1}: {faq.question}
            </h3>
            <div className="text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-800">A:</span>{" "}
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
  )
}

export default FAQs