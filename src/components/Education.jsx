import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "Since Aug 2023",
    score: "CGPA: 7.82"
  },
  {
    degree: "Intermediate",
    institution: "Sri Chaitanya Junior College",
    location: "Hyderabad, Telangana",
    duration: "Apr 2022 – Mar 2023",
    score: "96%"
  },
  {
    degree: "Matriculation (10th Standard)",
    institution: "Gowtham Model School",
    location: "Hyderabad, Telangana",
    duration: "Apr 2020 – Mar 2021",
    score: "100%"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
          Learning <span className="text-gradient uppercase">Path</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full shadow-lg shadow-blue-500/20"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="relative border-l-4 border-blue-500/20 ml-4 md:ml-12 pl-8 md:pl-16 space-y-12">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative bg-[#0f172a]/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 border border-white/10 group hover:border-white/20"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[60px] md:-left-[94px] top-10 w-14 h-14 rounded-full bg-[#0f172a] border-4 border-blue-600 flex items-center justify-center text-blue-400 z-10 hidden sm:flex shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <h4 className="text-xl font-bold text-gray-200">
                      {edu.institution}
                    </h4>
                    <span className="hidden sm:block text-white/50 text-xl">•</span>
                    <span className="text-base font-bold text-blue-500 tracking-wide uppercase">
                      {edu.location}
                    </span>
                  </div>
                  <p className="text-gray-400 font-bold bg-white/5 py-1 px-3 rounded-lg inline-block text-sm">
                    {edu.duration}
                  </p>
                </div>
                <div className="shrink-0">
                  <div className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <div className="px-6 py-3 bg-[#0f172a] rounded-[14px]">
                      <span className="text-white font-black text-xl whitespace-nowrap">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
