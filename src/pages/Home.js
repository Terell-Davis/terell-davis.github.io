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
				<p> Hello! I'm Terell Bernard Davis, a dedicated Computer Engineering student on the brink of graduation from Georgia Southern University. </p> 
				<p>My academic journey has been a blend of innovation, technology, and creativity, leading me towards specializing in a domain where precision meets passion.</p>
				
				<p>My fascination with technology extends beyond the classroom, diving into the realm of home networking and server hosting. From managing video game servers to running a media sharing website like Plex, each project is a new adventure. 
					My curiosity didn't stop there; I ventured into the world of automation and found a drive that pushes me to streamline and innovate continually.</p>
					
					<p>When I'm not tangled in wires or coding away, I express myself through music, playing the guitar and saxophone. These hobbies not only provide a creative outlet but also balance my technical pursuits with melodious harmony.</p>
        </ContentCard>
        
        <ContentCard title="Skills & Experience">
          <p>I have honed a diverse set of skills and gained extensive experience in several key areas:</p>
          
          <h3>Technical Skills:</h3>
          <ul>
            <li>Proficient in Network Infrastructure and setup for both domains (Active Directory and websites).</li>
            <li>Extensive experience with Linux (Debian), familiar with other Unix-based operating systems.</li>
            <li>Great with Windows and Windows Server environments.</li>
            <li>Competent in computer hardware and troubleshooting.</li>
          </ul>
          
          <h3>Programming Skills:</h3>
          <ul>
            <li>Proficient in Java, Python, and C++.</li>
          </ul>
          
          <h3>Professional Qualities:</h3>
          <ul>
            <li>Strong customer service orientation.</li>
            <li>Effective critical and creative thinker.</li>
            <li>Highly adaptable to new environments and challenges.</li>
            <li>Friendly and reliable team member.</li>
          </ul>
        </ContentCard>	
		</div>
    </div>
  );
};

export default Home;