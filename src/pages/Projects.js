import React, { useState } from 'react';
import styles from '../styles/Projects.module.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import ContentCard from '../components/ContentCard';

const Projects = () => {
    return (
      <div className={styles.contactPage}>
          <Header title="Projects" />
          <NavBar />
          
          <div className={styles.mainContainer}>
              <ContentCard title="Java">
                <p>Filler</p>
              </ContentCard>
          </div>
      </div>
    );
  };
  
  export default Projects;