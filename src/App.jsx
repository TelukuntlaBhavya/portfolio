import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Force dark mode onto HTML tag absolutely as requested
    document.documentElement.classList.add('dark');
    setDarkMode(true);
  }, []);

  const toggleDarkMode = () => {
    // Keep it dark even on toggle if the user wants it forced, 
    // or just let it stay fixed. I'll maintain the button but force dark style.
    console.log("Forced Dark Mode active");
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-x-hidden selection:bg-primary-light/30">
      <CursorGlow />
      {/* Global Background Gradient */}
      <div className="fixed inset-0 bg-navy-gradient z-[-2] pointer-events-none" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 transform origin-left z-50 shadow-lg shadow-purple-500/20"
        style={{ scaleX }}
      />
      
      {/* Decorative Blur Blobs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/30 blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-600/30 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[400px] h-[400px] rounded-full bg-indigo-600/30 blur-[120px] animate-blob animation-delay-4000" />
      </div>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
