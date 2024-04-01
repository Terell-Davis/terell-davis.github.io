import React from 'react';
import styles from '../styles/ContentCard.module.css'

function ContentCard({ title, children }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
}

export default ContentCard;
