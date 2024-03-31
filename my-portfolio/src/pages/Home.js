import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/Navbar';
import ContentCard from '../components/Contentcard';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <div className={styles.mainContainer}> {/* Add this container for background */}
        <ContentCard title="About Me">
          {/* About Me content */}
        </ContentCard>
        <ContentCard title="Skills & Experience">
          {/* Skills & Experience content */}
        </ContentCard>
      </div>
    </div>
  );
};

export default Home;