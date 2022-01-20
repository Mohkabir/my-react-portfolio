import React from 'react';
import './style.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
