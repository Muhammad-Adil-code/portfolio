import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.title = 'Muhammad Adil | Web Developer & AI/ML Engineer';
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 ${showIntro ? 'hidden' : ''}`}>
        <Header />
        
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default App;