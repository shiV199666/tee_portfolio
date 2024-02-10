import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import TestimonialNew from './components/TestimonialNew';

const App = () => {
  return (
    <div className='bg-[#1E1C1C] bg-no-repeat bg-cover'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <TestimonialNew/>
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
