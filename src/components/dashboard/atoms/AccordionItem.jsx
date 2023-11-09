import React from 'react';

export default function AccordionItem(props) {
  const { question, answer, id } = props;
  return (
    <div className="accordion-item">
      <h2
        className="accordion-header"
        id={`heading${id}`}
      >
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="false"
          aria-controls={`collapse${id}`}
        >
          {question}
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${id}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
}
