import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award, Star } from 'lucide-react';

const certifications = [
  {
    title: "Generative AI Apps",
    issuer: "Infosys",
    description: "Learned to build Generative AI applications using no-code tools and practical use cases.",
    date: "Sep 2025",
    image: "/certificates/cert1.jpg",
    link: "https://drive.google.com/file/d/1TWOOLZlv7Xc-xyS8upcCM7fx09n9GD4R/view"
  },
  {
    title: "ChatGPT Prompt Engineering",
    issuer: "Infosys",
    description: "Gained expertise in crafting effective prompts and understanding LLM behavior for real-world applications.",
    date: "Sep 2025",
    image: "/certificates/cert2.jpg",
    link: "https://drive.google.com/file/d/1tLlrbrsy1cnxI3uzOSDN-gKdvyNDn8h3/view"
  },
  {
    title: "Computational Theory",
    issuer: "Infosys",
    description: "Studied automata theory, language principles, and foundational computation concepts.",
    date: "Sep 2025",
    image: "/certificates/cert3.jpg",
    link: "https://drive.google.com/file/d/1Ax7uFVKv1itrordrBv8eJpay0jnCekuh/view"
  },
  {
    title: "Data Analytics",
    issuer: "Deloitte",
    description: "Completed a virtual experience program focusing on data analysis, visualization, and business insights.",
    date: "Jun 2025",
    image: "/certificates/cert4.jpg",
    link: "https://drive.google.com/file/d/16QH_KHVK1OBNJHmPSlefLDltbGTTdgkx/view"
  },
  {
    title: "Data Science",
    issuer: "Cisco",
    description: "Learned fundamentals of data science including data handling, analysis, and visualization techniques.",
    date: "Jun 2025",
    image: "/certificates/cert5.jpg",
    link: "https://drive.google.com/file/d/1rWs1MGxV_NrgF2kkuDUksG4-TEKdMkf1/view"
  }
];

const extraActivities = [
  "Google Developer Fest Participant",
  "Build With AI Seminar",
  "Community Service"
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
          My <span className="text-gradient uppercase">Certifications</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full shadow-lg shadow-blue-500/20"></div>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Professional validation of my expertise across <span className="text-white font-bold tracking-wide">AI, Data Science, and Computing Theory</span>.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
      >
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ 
              scale: 1.05, 
              translateY: -10,
              transition: { duration: 0.3 }
            }}
            className="group bg-[#0f172a]/60 backdrop-blur-xl rounded-[2rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(139,92,246,0.2)] transition-shadow duration-500 flex flex-col h-full border border-white/10 hover:border-white/20"
          >
            {/* Image Preview Area */}
            <div className="relative overflow-hidden bg-[#020617]">
              <img 
                src={cert.image} 
                alt="Certificate"
                className="w-full h-48 object-cover rounded-t-xl transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="absolute top-4 right-4 px-4 py-1.5 bg-[#020617]/80 backdrop-blur-md rounded-full text-xs font-black text-blue-400 border border-white/10 shadow-xl flex items-center gap-2 uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" /> {cert.issuer}
              </div>
            </div>
            
            {/* Content Area */}
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-black mb-3 text-white group-hover:text-primary-light transition-colors leading-tight tracking-tight">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 font-bold tracking-wide">
                <Calendar className="w-4 h-4 text-primary-light" /> {cert.date}
              </div>
              
              <p className="text-gray-400 mb-8 flex-1 text-base leading-relaxed">
                {cert.description}
              </p>
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white font-black transition-all duration-300 flex items-center justify-center gap-3 group/btn uppercase tracking-widest text-sm shadow-xl"
              >
                View Certificate <ExternalLink className="w-4.5 h-4.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-[#0f172a]/40 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] border border-white/10 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-600/10 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="text-center lg:text-left lg:w-1/3 relative z-10">
            <h2 className="text-4xl font-black mb-4 text-white leading-none tracking-tighter italic">
              Extra <br /><span className="text-gradient not-italic uppercase text-5xl">Activities</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed">
              Beyond academics, I actively engage with the <span className="text-white">tech community</span> and contribute to collaborative learning.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 relative z-10 w-full lg:w-2/3">
            {extraActivities.map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                className="flex items-center gap-5 text-lg text-gray-200 font-bold bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all hover:translate-x-2"
              >
                <div className="p-3 rounded-xl bg-primary-dark/20 text-primary-dark border border-primary-dark/20 shadow-lg shadow-purple-500/10">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                {activity}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
