import React from 'react';
import styles from '../styles/Blog.module.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import ContentCard from '../components/ContentCard';

const Blog = () => {
    return (
      <div className={styles.blogPage}>
          <Header title="Welcome to my mini datacenter!" />
          <NavBar />
          
          <div className={styles.mainContainer}>
          <ContentCard title="The Overcomplicated Home Network">
            <p>This setup includes two primary servers, each running Proxmox with virtual machines and containers.</p>
            <p>Also, I should mention that there's a mini PC in the mix, currently equipped with pfSense. I'm planning to switch to OPNsense in the future.</p>
          </ContentCard>

            
          <ContentCard title="The Heartbeat of My Network: The Servers">
            <p>Let's delve into the two servers that form the backbone of my entire network. It all started with a single server—an old Compaq computer that I received from my grandmother. Later, I upgraded to a system I picked up from MicroCenter for around $200.</p>
            <p>Eventually, I decided to upgrade my gaming setup, switching to a Ryzen system. This left me with an Intel motherboard and CPU, which I repurposed into what I now call Demiurge.</p>
            <div className={styles.blogImageContent}>
              <img src='/assets/serverrack.jpg' alt='Server Rack' className={styles.blogImage}></img>
            
            <div className='textContent'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/assets/icons8-proxmox-48.png"
                alt="Proxmox-Logo"
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
              <h2>Demiurge (The Tower)</h2>
            </div>
              <p>This server, essentially my previous gaming machine minus the GPU, now hosts the majority of my VMs and containers. It's housed in a new case to accommodate more drive bays and has received a RAM upgrade.</p>
              <ul>
                <li>CPU: 8 x Intel Core i7-9700K @ 3.60GHz</li>
                <li>RAM: 4x16GB DDR4 3200MHz (64GB Total)</li>
                <li>Storage</li>
                <ul>
                  <li>4x4TB WD Red Drives in Raid 10: For backups, projects, and general household data.</li>
                  <li>2x500GB SSDs in Raid 1: Primarily for running VMs, benefiting from the speed of SSDs.</li>
               </ul>
              </ul>
            
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="/assets/icons8-proxmox-48.png"
                  alt="Proxmox-Logo"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
              <h2>Judgement (Botton RackPC)</h2>
              </div>

              <p>This server originated from a business that no longer needed it. I've upgraded the RAM and added high-capacity drives. It serves primarily as a Plex/Jellyfin server, hosts file backups across my network (which are more extensive than you might think), acts as a Steam game cache, and hosts applications like Minecraft and Terraria servers.</p>
              <ul>
                <li>CPU: 16 x Intel Xeon CPU E5-2630 v3 @ 2.40GHz</li>
                <li>RAM: 5x8GB DDR 2400MHz (40GB Total)</li>
                <li>Storage</li>
                <ul>
                  <li>4x10TB WD Gold Drives in Raid 10: This is my largest storage setup for media, Plex server content, and large ISO files.</li>
                  <li>2x500GB SSDs in Raid 1: Added for replication efforts, though still a work in progress.</li>
                </ul>
              </ul>
            </div>
            </div>
          </ContentCard>

          <ContentCard title="Containers & VMs">
            <p>Across both servers, I manage a variety of containers and virtual machines that support our household operations.</p>
            <ul>
              <li>Mumble Server: A reliable alternative for voice communication, always ready for use.</li>
              <li>MagicMirror2 Server: Provides local access only, displaying personal data.</li>
              <li>Pi-hole: Running on Demiurge to block advertisements across our network.</li>
              <li>Home Assistant OS: Controls smart devices throughout the house.</li>
              <li>Steam Server: Hosts game servers, with plans to move to Judgement for improved resource use.</li>
              <li>Windows Server 2022 (x2): Serves as the primary domain controller with a backup to maintain network integrity.</li>
            </ul>
          </ContentCard>
          </div>
      </div>
    );
  };
  
  export default Blog;