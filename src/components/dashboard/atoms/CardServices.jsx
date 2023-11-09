import React from 'react';
import styles from '../styles.module.css';

export default function CardServices(props) {
  const { pathImg, cardTitle, cardText } = props;
  return (
    <div className={`card ${styles.cards}`}>
      <img
        src={pathImg}
        className={`card-img-top ${styles.cardImgTop}`}
        alt="..."
      />
      <div className="card-body p-0">
        <h5 className={`card-title ${styles.cardTitle}`}>{cardTitle}</h5>
        <p className={`card-text ${styles.cardText}`}>{cardText}</p>
      </div>
    </div>
  );
}
