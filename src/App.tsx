import React from 'react';
import './App.css';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Education from './components/Education.tsx';
import Experience from './components/Experience.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;