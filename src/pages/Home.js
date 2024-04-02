import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import ContentCard from '../components/ContentCard';
import styles from '../styles/Home.module.css';


const Home = () => {
  return (
    <div className={styles.homePage}>
		<Header title="Terell B. Davis" />
		<NavBar />
		
		<div className={styles.mainContainer}>
			<ContentCard title="About Me">
			<p> Hello! I'm Terell Bernard Davis, a dedicated Computer Engineering student on the brink of graduation from Georgia Southern University. My academic journey has been a blend of innovation, technology, and creativity, leading me towards specializing in a domain where precision meets passion.</p>

			<p>My fascination with technology extends beyond the classroom, diving into the realm of home networking and server hosting. From managing video game servers to running a media sharing website like Plex, each project is a new adventure. My curiosity didn't stop there; I ventured into the world of automation and found a drive that pushes me to streamline and innovate continually.</p>

			<p>When I'm not tangled in wires or coding away, I express myself through music, playing the guitar and saxophone. These hobbies not only provide a creative outlet but also balance my technical pursuits with melodious harmony.</p>
			</ContentCard>
			
			<ContentCard title="Skills & Experience">
				{/* Skills & Experience content */}
			</ContentCard>
		</div>
	  
    </div>
  );
};

export default Home;