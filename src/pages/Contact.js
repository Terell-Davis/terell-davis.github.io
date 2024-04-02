import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import ContentCard from '../components/ContentCard';

const Contact = () => {
    return (
      <div className={styles.contactPage}>
          <Header title="Contact" />
          <NavBar />
          
          <div className={styles.mainContainer}>
              <ContentCard title="Terell B. Davis">
              </ContentCard>
          </div>
        
      </div>
    );
  };
  
  export default Contact;