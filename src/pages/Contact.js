import React from 'react';
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
              <ul className={styles.list}>
                <li><a href="mailto:terellbdavis@gmail.com"><img src="/assets/icons8-email-48.png" alt="Java" /><strong>Email:</strong> terellbdavis@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/terell-davis-19a21026a/" target="_blank" rel="noopener noreferrer"><img src="/assets/icons8-linkedin-48.png" alt="Java" /><strong>LinkedIn:</strong> Terell B. Davis</a></li>
                <li><a href="https://github.com/Terell-Davis" target="_blank" rel="noopener noreferrer"><img src="/assets/icons8-github-48.png" alt="Java" /><strong>GitHub:</strong> Terell-Davis</a></li>
              </ul>
            </ContentCard>
          </div>
        
      </div>
    );
  };
  
  export default Contact;