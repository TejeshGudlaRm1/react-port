import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import './responsive.css';
function App() {
  return (
    <>
    
      <Header />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;