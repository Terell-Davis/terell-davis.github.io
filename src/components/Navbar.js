import React from 'react';
import styles from '../styles/NavBar.module.css';
import ThemeSwitch from './ThemeSwitch'; 
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.linksContainer}>
        <Link to="/" className={styles.link}>Home</Link>
	      <Link to="/projects" className={styles.link}>Projects</Link>
        <Link to="/blog" className={styles.link}>Blog</Link>
        <Link to="/inspirobot" className={styles.link}>InspiroBot</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
      </div>
	    <ThemeSwitch />
    </nav>
  );
};

export default NavBar;
