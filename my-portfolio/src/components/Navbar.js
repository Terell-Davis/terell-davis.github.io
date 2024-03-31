import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import ThemeSwitch from './Themeswitch'; 

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <a href="/" className={styles.link}>Home</a>
      {/* Add more links as needed */}
	  <ThemeSwitch /> {/* Add the theme switch component */}
    </div>
  );
};

export default NavBar;
