import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import ContentCard from '../components/ContentCard';
import styles from '../styles/Home.module.css';


const Home = () => {
  return (
    <div className={styles.homePage}>
		<Header title="Terell B. Davis" />
		<NavBar/>
		<div className={styles.mainContainer}>
			<ContentCard title="About Me">
        <div className={styles.aboutSection}> 

          <div className={styles.me}>
            <img src='/assets/tdavis.png' alt="Its me! Maybe!" />
          </div>

          <div className={styles.textContent}>
            <p> Hello! I'm Terell Bernard Davis, a dedicated Computer Engineering student on the brink of graduation from Georgia Southern University. </p> 
            <p>My academic journey has been a blend of innovation, technology, and creativity, leading me towards specializing in a domain where precision meets passion.</p>
          
            <p>My fascination with technology extends beyond the classroom, diving into the realm of home networking and server hosting. From managing video game servers to running a media sharing website like Plex, each project is a new adventure. 
					    My curiosity didn't stop there; I ventured into the world of automation and found a drive that pushes me to streamline and innovate continually.</p>
					
					  <p>When I'm not tangled in wires or coding away, I express myself through music, playing the guitar and saxophone. These hobbies not only provide a creative outlet but also balance my technical pursuits with melodious harmony.</p>
          </div>
        </div>
        </ContentCard>
        
        <ContentCard title="Skills & Experience">
          <p>I have honed a diverse set of skills and gained extensive experience in several key areas:</p>
          
          <h3>Technical Skills:</h3>
          <ul>
            <li>Skilled in setting up and managing network infrastructure, including domain configurations for Active Directory and web-server setups.</li>
            <li>Extensive experience with Linux (Debian), familiar with other Unix-based operating systems.</li>
            <li>Highly proficient with Windows operating systems, including Windows Server environments.</li>
            <li>Adept at assembling, upgrading, and troubleshooting computer hardware.</li>
            <li>Experienced in Microsoft 365 for Business Administration, including Entra and Exchange.</li>
            <li>Proficient in installing and maintaining network and fiber optic cabling, along with setting up client workstations.</li>
          </ul>
          
          <h3>Programming Skills:</h3>
          <ul className={styles.iconList}>
            <li><a href="https://github.com/Terell-Davis?tab=repositories&q=&type=&language=java&sort=" target="_blank" rel="noopener noreferrer"><img src="/assets/icons8-java-48.png" alt="Java" /></a></li>
            <li><a href="https://github.com/Terell-Davis?tab=repositories&q=&type=&language=python&sort=" target="_blank" rel="noopener noreferrer"><img src="/assets/icons8-python-48.png" alt="Python" /></a></li>
            <li><a href="https://github.com/Terell-Davis?tab=repositories&q=&type=&language=javascript&sort=" target="_blank" rel="noopener noreferrer"><img src="/assets/icons8-javascript-48.png" alt="Javascript" /></a></li>
          </ul>
          
          <h3>Professional Qualities:</h3>
          <ul>
            <li>Strong focus on customer service, consistently aiming to meet and exceed expectations.</li>
            <li>Effective at critical and creative thinking, capable of solving problems innovatively.</li>
            <li>Highly adaptable, quickly adjusting to new environments and challenges with ease.</li>
            <li>Friendly and dependable, known for being a cooperative and supportive team member.</li>
          </ul>
        </ContentCard>	
		</div>
    </div>
  );
};

export default Home;