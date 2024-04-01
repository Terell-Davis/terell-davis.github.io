import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InspiroBot from './pages/InspiroBot';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { ThemeProvider } from './contexts/Themecontext';

function App() {
  return (
  <ThemeProvider>
    <Router>
		<div className="App">
		<main className="content">
		{
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/inspirobot" element={<InspiroBot />} />
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