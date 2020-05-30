import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';

import './main.css';
import './fonts/roboto-regular/stylesheet.css'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
