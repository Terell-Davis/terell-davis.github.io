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
              <p><strong>TrexBot:</strong> Initially named Jokerbot, TrexBot is a flexible, all-around Discord bot perfect for personal or group servers. It shines with its music streaming abilities from YouTube, SoundCloud, and Bandcamp, among various other features. It represents a significant upgrade from my first major Java project, now fully deployed and shared. The journey to creating TrexBot boosted my Java skills and introduced me to self-hosting my creations.</p>
              <p><strong>Galactic Empire:</strong> A team effort for my class, Galactic Empire is a Java-based project focused on developing a GUI for SQL interaction. Despite its design challenges, the interface was functional and fulfilled its intended purpose. I wished for more time to refine it, but deadlines were tight.</p>
            </ContentCard>

            <ContentCard title="Python">
              <p><strong>Inventory Manager:</strong> Frustrated by the limitations of the "POS" system at a former job, I created an Inventory Manager to fill the gap. It provided the much-needed functionality of generating understandable Inventory Reports, solving a real-world problem through coding.</p>
              <p><strong>Narukami-Bot:</strong> As my gateway into Python, Narukami-Bot was designed to integrate with my server's services, offering control over Minecraft & Terraria servers directly from Discord. It was a different structure from my Java bot, exploring new possibilities with Python.</p>
            </ContentCard>

            <ContentCard title="Web Development">
              <p>This website started as a basic HTML/CSS project for me to dive into web development. As I advanced in my studies at Georgia Southern, taking a Web Design class in my last semester prompted me to overhaul my portfolio site. While it may now seem a bit elaborate for a portfolio, the class's requirements nudged me towards making it more comprehensive and polished than initially planned.</p>
            </ContentCard>
          </div>
      </div>
    );
  };
  
  export default Projects;