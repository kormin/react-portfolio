import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Work from './components/Work';

import './main.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
