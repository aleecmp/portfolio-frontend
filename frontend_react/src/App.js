import React from 'react';

import { About, Footer, Header, Skills, Blog, Work } from './container';
import { Navbar } from './components';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
