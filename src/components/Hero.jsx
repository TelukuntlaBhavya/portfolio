import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    if (subIndex === currentWord.length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  const currentWord = words[index] || '';
  return (
    <span className="text-gradient font-bold drop-shadow-sm">
      {`${currentWord.substring(0, subIndex)}${subIndex === currentWord.length + 1 ? '' : '|'}`}
    </span>
  );
};

const Hero = () => {
  const roles = ["Developer", "Data Analyst", "Problem Solver"];

  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center pt-10 pb-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
        >
          <div className="flex flex-col gap-3 w-full items-center lg:items-start">
            <div className="inline-block px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-primary-dark text-sm font-semibold tracking-wide mb-2 uppercase">
              👋 Welcome to my universe
            </div>
            <p className="text-xl md:text-2xl font-medium text-gray-300">
              Hello, I'm
            </p>
          </div>
          
          <div className="flex flex-col gap-4 w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, originX: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter text-white drop-shadow-2xl leading-[0.9]"
            >
              Telukuntla <br />
              <span className="text-gradient">Bhavya</span>
            </motion.h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
              A <TypeWriter words={roles} />
            </h2>
          </div>

          <h3 className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300 mt-2 max-w-2xl">
            Building <span className="text-white font-semibold italic">Smart Solutions</span> with Code, Data & Creativity
          </h3>
          
          <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed">
            CSE Student passionate about Software Development, Data Analytics, and Problem Solving. Transforming ideas into reality through elegant code.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6 w-full">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:scale-105 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 flex items-center gap-2"
            >
              View Projects <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-bold backdrop-blur-sm hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              Download Resume <Download className="w-5 h-5" />
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-5 pt-8 w-full">
            {[
              { icon: Github, href: "https://github.com/TelukuntlaBhavya" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/telukuntla-bhavya/" },
              { icon: Mail, href: "mailto:siripurambhavya10@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:scale-110 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center items-center relative w-full mb-12 lg:mb-0"
        >
          {/* Enhanced decorative background blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[450px] lg:w-[550px] aspect-square rounded-full bg-blue-600/20 blur-[100px] animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] lg:w-[500px] aspect-square rounded-full bg-purple-600/20 blur-[100px] animate-blob"></div>
          
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            whileHover={{ scale: 1.08 }}
            transition={{ 
              y: { repeat: Infinity, duration: 8, ease: "easeInOut" },
              scale: { duration: 0.3 }
            }}
            className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] rounded-full p-[6px] bg-gradient-to-tr from-blue-500 via-purple-500 to-indigo-500 shadow-[0_0_50px_rgba(79,70,229,0.3)] group transition-all duration-700 hover:shadow-[0_0_100px_rgba(139,92,246,0.6)] z-10 cursor-pointer"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0f172a] border-[8px] border-[#020617] backdrop-blur-xl">
              <img 
                src="/profile.jpg" 
                alt="Telukuntla Bhavya" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%236366F1' fill-opacity='0.2'/%3E%3Ctext x='50%25' y='50%25' font-size='60' text-anchor='middle' alignment-baseline='middle' font-family='sans-serif' fill='%236366F1'%3ETB%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            
            <div className="absolute inset-0 rounded-full border border-white/20 animate-[spin_10s_linear_infinite] pointer-events-none"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
