import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InspiroBot from './pages/InspiroBot';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
  <ThemeProvider>
    <Router>
		<div className="App">
		<main className="content">
		{
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/inspirobot" element={<InspiroBot />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		}
		</main>
		<Footer />
	  </div>
    </Router>
   </ThemeProvider>
  );
}

export default App;