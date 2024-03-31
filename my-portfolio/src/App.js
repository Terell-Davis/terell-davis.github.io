import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
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
		<Header />
		<NavBar />
		<main className="content">
		{
			<Routes>
				<Route path="/" element={<Home />} />
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