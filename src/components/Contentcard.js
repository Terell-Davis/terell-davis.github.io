import React from 'react';
import styles from '../styles/ContentCard.module.css'

function ContentCard({ title, children, imageUrl, centerTitle }) {

  const headerClass = imageUrl ? styles.headerWithImage : (centerTitle ? styles.headerCentered : styles.header);

  return (
    <div className={styles.card}>
      <div className={headerClass}>
        {imageUrl && <img src={imageUrl} alt={title} className={styles.cardImage} />}
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
}

export default ContentCard;
