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
            <ContentCard title="Let's Connect!">
              <p>Hello! If you're looking to get in touch with me, here are the best ways to reach out. Whether you have a question, a project in mind, or just want to say hi, I'd love to hear from you!</p>
              <p><strong>Email:</strong> <a href="mailto:terellbdavis@gmail.com">terellbdavis@gmail.com</a></p>
              <p><strong>Phone:</strong> </p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/terell-davis-19a21026a/" target="_blank" rel="noopener noreferrer">Terell B. Davis</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/Terell-Davis" target="_blank" rel="noopener noreferrer">Terell-Davis</a></p>
            </ContentCard>
          </div>
        
      </div>
    );
  };
  
  export default Contact;