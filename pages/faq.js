"use client"
import React, { useState } from 'react';
import '../styles/faq.css';

const Faq = () => {
  const faqs = [
    {
      question: 'What services do you provide?',
      answer: 'Answer 1',
    },
    {
      question: 'Do you work worldwide?',
      answer: 'Answer 2',
    },
    {
      question: 'How will you communicate with us during the project?',
      answer: 'Answer 3',
    },
    {
      question: 'Why should we choose you?',
      answer: 'Answer 4',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id='faq'>
      <h3>Frequently Asked Question</h3>
      <h2>question</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`accordion ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="accordion-header">
            <h4>{faq.question}</h4>
            <span className="icon">&#9662;</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Faq;
