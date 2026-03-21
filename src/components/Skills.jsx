import { motion } from 'framer-motion';
import { Code2, Database, Layout, Wrench, Shield, GitCommit, FileCode2, Target, BarChart, Server } from 'lucide-react';

const skillsData = [
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Python", "C", "C++", "Java"]
  },
  {
    category: "Web Technologies",
    icon: <Layout className="w-6 h-6" />,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]
  },
  {
    category: "Data & Libraries",
    icon: <Database className="w-6 h-6" />,
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    category: "Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Git", "GitHub", "Power BI", "Excel", "VS Code", "Jupyter Notebook"]
  },
  {
    category: "Core Computer Science",
    icon: <Server className="w-6 h-6" />,
    skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "SQL"]
  }
];

const softSkills = [
  { name: "Precision", icon: <Target className="w-5 h-5" /> },
  { name: "Resilience", icon: <Shield className="w-5 h-5" /> },
  { name: "Optimism", icon: <GitCommit className="w-5 h-5" /> },
  { name: "Accountability", icon: <FileCode2 className="w-5 h-5" /> },
  { name: "Team Player", icon: <BarChart className="w-5 h-5" /> }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          My <span className="text-gradient uppercase">Technical Arsenal</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full shadow-lg shadow-blue-500/20"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {skillsData.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary-dark/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-primary-dark/10 text-primary-dark rounded-2xl group-hover:scale-110 transition-transform duration-500 ring-1 ring-primary-dark/20">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">{category.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="px-4 py-2 bg-white/5 text-gray-300 rounded-xl text-sm font-semibold border border-white/5 hover:border-blue-500/50 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
          Soft <span className="text-gradient">Power</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-5xl mx-auto"
      >
        {softSkills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:scale-110 transition-all duration-300 cursor-default hover:border-white/20 hover:bg-white/10"
          >
            <span className="text-purple-400">
              {skill.icon}
            </span>
            <span className="font-bold text-gray-200 tracking-wide">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
