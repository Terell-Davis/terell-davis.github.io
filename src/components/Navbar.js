import React from 'react';
import styles from '../styles/NavBar.module.css';
import ThemeSwitch from './ThemeSwitch'; 
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>Home</Link>
	    <Link to="/projects" className={styles.link}>Projects</Link>
      <Link to="/inspirobot" className={styles.link}>InspiroBot</Link>
      <Link to="/contact" className={styles.link}>Contact</Link>
	    <ThemeSwitch />
    </nav>
  );
};

export default NavBar;
