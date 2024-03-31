import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        © {new Date().getFullYear()} Terell Bernard Davis. All rights reserved.
        {/* Add more footer content here as needed */}
      </div>
    </footer>
  );
};

export default Footer;
