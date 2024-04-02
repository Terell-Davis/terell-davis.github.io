import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import styles from '../styles/ThemeSwitch.module.css';

const ThemeSwitch = () => {
  const { changeTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className={styles.themeSwitch}>
      <button onClick={toggleDropdown} className={styles.dropbtn}>Change Theme</button>
      {dropdownOpen && (
        <div className={styles.dropdownContent}>
          <button onClick={() => changeTheme('default-theme')}>Default</button>
          <button onClick={() => changeTheme('light-theme')}>Light</button>
		      <button onClick={() => changeTheme('purple-theme')}>Purple</button>
		      <button onClick={() => changeTheme('armour-theme')}>Armour</button>
		      <button onClick={() => changeTheme('simpatico-theme')}>Simpatico</button>
          <button onClick={() => changeTheme('sonic-theme')}>Sonic</button>
          <button onClick={() => changeTheme('tails-theme')}>Tails</button>
          <button onClick={() => changeTheme('knuckles-theme')}>Kunckles</button>
          <button onClick={() => changeTheme('shadow-theme')}>Shadow</button>
          <button onClick={() => changeTheme('eggman-theme')}>Eggman</button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;