import React from 'react';
import styles from '../styles.module.css';
import AccordionItem from '../atoms/AccordionItem';

export default function FAQ() {
  return (
    <section
      id="faq"
      className={`${styles.containerAll} ${styles.faq}`}
    >
      <div className="d-lg-flex justify-content-between">
        <div className={styles.faqLeft}>
          <h2 className={`${styles.faqHeader} text-center text-lg-start`}>
            Frequently Asked Question
          </h2>
          <p className={`${styles.faqDesc} text-center text-lg-start`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        <div className={styles.faqRight}>
          <div
            className="accordion"
            id="accordionExample"
          >
            <AccordionItem
              id="One"
              question="Apa saja syarat yang dibutuhkan?"
              answer="This is the First item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
            />
            <AccordionItem
              id="Two"
              question="Berapa hari minimal sewa mobil lepas kunci?"
              answer="It
              is hidden by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element.
              These classNamees control the overall appearance, as well as
              the showing and hiding via CSS transitions. You can modify any
              of this with custom CSS or overriding our default variables.
              It's also worth noting that just about any HTML can go within
              the"
            />
            <AccordionItem
              id="Three"
              question="Berapa hari sebelumnya sabaiknya booking sewa mobil?"
              answer="It
              is hidden by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element.
              These classNamees control the overall appearance, as well as
              the showing and hiding via CSS transitions. You can modify any
              of this with custom CSS or overriding our default variables.
              It's also worth noting that just about any HTML can go within
              the"
            />
            <AccordionItem
              id="Four"
              question="Apakah Ada biaya antar-jemput?"
              answer="It
              is hidden by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element.
              These classNamees control the overall appearance, as well as
              the showing and hiding via CSS transitions. You can modify any
              of this with custom CSS or overriding our default variables.
              It's also worth noting that just about any HTML can go within
              the"
            />
            <AccordionItem
              id="Five"
              question="Bagaimana jika terjadi kecelakaan?"
              answer="It
              is hidden by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element.
              These classNamees control the overall appearance, as well as
              the showing and hiding via CSS transitions. You can modify any
              of this with custom CSS or overriding our default variables.
              It's also worth noting that just about any HTML can go within
              the"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
