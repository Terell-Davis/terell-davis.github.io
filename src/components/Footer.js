import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        © {new Date().getFullYear()} Terell Bernard Davis. All rights reserved.
        <p>Icons provided by <a href="https://icon8.com" target="_blank" rel="noopener noreferrer">Icons8</a>.</p>
      </div>
    </footer>
  );
};

export default Footer;
