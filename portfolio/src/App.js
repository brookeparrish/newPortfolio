import React from 'react';
import './App.css';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Photo from './components/Photo/Photo';


function App() {
  return (
    <div>
      <Photo />
      <About />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
