import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0f172a]/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Subtle accent glow */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-md"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="flex flex-col gap-8 text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            <p>
              I am a Computer Science Engineering student driven by a passion for building <span className="text-white font-semibold">impactful digital solutions</span>. With a strong foundation in Data Structures, Algorithms, and modern web technologies, I enjoy transforming complex problems into simple, scalable applications.
            </p>
            <p>
              From developing civic-tech platforms to working on data-driven prediction models, I focus on creating solutions that are both efficient and meaningful. I am constantly exploring new technologies, refining my problem-solving skills, and striving to write <span className="text-white font-semibold">clean, optimized code</span> that delivers real-world value.
            </p>
            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-gradient font-extrabold text-2xl italic tracking-wide"
            >
              "Focused on building scalable solutions and continuously evolving as a developer."
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { label: 'Degree', value: 'B.Tech CSE' },
              { label: 'Location', value: 'India' },
              { label: 'Experience', value: 'Freshman+' },
              { label: 'Focus', value: 'Full-Stack & Data' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1, translateY: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-default"
              >
                <h3 className="text-xs text-gray-400 mb-2 font-black uppercase tracking-widest">{item.label}</h3>
                <p className="font-bold text-white text-lg">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
