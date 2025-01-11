import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Faq = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="text-center faq-section">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-6 faq-question">
                  <div className="faq-question-title" onClick={() => toggleAnswer(i)}>
                    <h4 className="faq-title">{d.question}</h4>
                    
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className={`faq-answer ${i === activeIndex ? 'active' : ''}`}>
                    <p>{d.answer}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};