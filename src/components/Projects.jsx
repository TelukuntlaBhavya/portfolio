import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Box, BrainCircuit } from 'lucide-react';

const projects = [
  {
    title: "Smart Civic Issue Reporting Platform",
    description: "Built a responsive civic-tech platform for reporting and tracking public issues. Features include real-time status tracking, duplicate detection, map visualization, and an admin dashboard.",
    tech: ["React.js", "Tailwind CSS", "Local Storage", "Recharts"],
    github: "https://github.com/TelukuntlaBhavya",
    live: "#",
    icon: <Monitor className="w-8 h-8" />
  },
  {
    title: "Water Supply Tracker using Graphs",
    description: "Developed a graph-based system to optimize water distribution networks. Implemented BFS, DFS, and Dijkstra's Algorithm for pathfinding and optimization.",
    tech: ["C++", "Graphs", "STL"],
    github: "https://github.com/TelukuntlaBhavya",
    live: "#",
    icon: <Box className="w-8 h-8" />
  },
  {
    title: "Stroke Prediction System",
    description: "Built Machine Learning models to predict stroke risk. Used Logistic Regression and Random Forest algorithms combined with SMOTE for handling imbalanced datasets.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/TelukuntlaBhavya",
    live: "#",
    icon: <BrainCircuit className="w-8 h-8" />
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight italic">
          Featured <span className="text-gradient not-italic">Projects</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Showcasing my technical journey through <span className="text-white font-semibold">Full-Stack Development</span>, graph algorithms, and data-driven intelligence.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ 
              scale: 1.05, 
              translateY: -10,
              transition: { duration: 0.3 }
            }}
            className="group relative bg-[#0f172a]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_20px_50px_rgba(139,92,246,0.2)] transition-shadow duration-500 flex flex-col h-full hover:border-white/20"
          >
            <div className="p-8 flex-1 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_10px_30px_rgba(37,99,235,0.3)]">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-black mb-4 text-white group-hover:text-primary-light transition-colors tracking-tight">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-8 flex-1 text-base leading-relaxed tracking-wide">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 bg-white/5 text-gray-300 text-xs font-bold rounded-xl border border-white/5 tracking-wider uppercase group-hover:border-primary-dark/30 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="px-8 py-6 border-t border-white/5 bg-white/2 flex justify-between items-center mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-black text-gray-400 hover:text-white transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" /> REPOSITORY
              </a>
              <a
                href={project.live}
                className="flex items-center gap-2 text-sm font-black text-blue-400 hover:text-white transition-all hover:scale-110"
                onClick={(e) => {
                  if (project.live === '#') e.preventDefault();
                }}
              >
                <ExternalLink className="w-5 h-5" /> LIVE PREVIEW
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
