const Footer = () => {
  return (
    <footer className="w-full py-16 bg-[#020617] border-t border-white/5 backdrop-blur-3xl px-4 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center md:items-start gap-3">
           <h3 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 tracking-tighter italic">Bhavya.</h3>
           <p className="text-gray-500 font-black text-[10px] uppercase tracking-[0.2em] text-center md:text-left opacity-60">
            &copy; {new Date().getFullYear()} Telukuntla Bhavya. Built with passion.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {[
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' }
          ].map((link, i) => (
            <a 
              key={i} 
              href={link.href} 
              className="text-gray-400 hover:text-white transition-all text-xs font-black uppercase tracking-widest hover:scale-110"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
