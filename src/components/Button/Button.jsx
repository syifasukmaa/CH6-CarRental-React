import React from 'react';
import styles from '@/components/dashboard/styles.module.css';

export default function Button({ children, btn, onClick }) {
  return (
    <button
      className={`${styles.btn} ${btn} text-light btn`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
