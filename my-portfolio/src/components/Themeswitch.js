import React from 'react';
import { useTheme } from '../contexts/Themecontext';
import styles from '../styles/Themeswitch.module.css';

const themes = ['default', 'light']; //, 'dark', 'purple', 'armour', 'simpatico'];

const ThemeSwitch = () => {
  const { changeTheme } = useTheme();

  return (
    <div className={styles.themeSwitch}>
      <button className={styles.dropbtn}>Change Theme</button>
      <div className={styles.dropdownContent}>
		<button onClick={() => changeTheme('default')}>Default</button>
        <button onClick={() => changeTheme('light')}>Light</button>
       
      </div>
    </div>
  );
};

export default ThemeSwitch;