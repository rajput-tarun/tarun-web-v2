import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Zap } from 'lucide-react';

// Import Radar chart with React.lazy instead of Next.js dynamic
const RadarChart = lazy(() => import('./charts/RadarChart'));

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "Deep Learning", level: 85 },
    { name: "NLP", level: 90 },
    { name: "Computer Vision", level: 80 },
    { name: "PyTorch", level: 85 },
    { name: "Keras", level: 80 },
    { name: "C++", level: 70 },
    { name: "MATLAB", level: 60 },
    { name: "R", level: 55 },
  ];

  const frameworks = [
    "NumPy", "Pandas", "Scikit-learn", "PyTorch", "LangChain", "Docker", "MySQL", "MLFlow", "KubeFlow", "Git", "Databricks", "PySpark", "Langgraph", "HuggingFace"
  ];

  const softSkills = [
    "Leadership", "Team Management", "Problem Solving", "Research", "Communication", "Time Management"
  ];

  // Data for radar chart
  const radarData = {
    labels: ["Python", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "PyTorch"],
    datasets: [
      {
        label: 'Technical Proficiency',
        data: [95, 90, 85, 90, 80, 85],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
      }
    ]
  };

  return (
    <section id="skills" className="bg-portfolio-gray-light dark:bg-gray-800" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title dark:after:bg-blue-400">Skills</h2>
        <p className="section-subtitle dark:text-gray-300">
          A comprehensive overview of my technical expertise and professional competencies.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-6 flex items-center">
              <Code className="mr-3 text-portfolio-accent" size={24} />
              Technical Skills
            </h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium dark:text-gray-200 group-hover:text-portfolio-accent dark:group-hover:text-portfolio-accent transition-colors">{skill.name}</span>
                    <motion.span
                      className="text-portfolio-accent dark:text-blue-400 font-bold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="skill-bar dark:bg-gray-700 relative overflow-hidden">
                    <motion.div
                      className="skill-progress dark:bg-blue-500 relative"
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="card p-6 dark:bg-gray-700 group hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-4 flex items-center">
                <Brain className="mr-3 text-portfolio-accent" size={24} />
                Skills Visualization
              </h3>
              <div className="h-64 w-full">
                {isVisible && (
                  <Suspense fallback={
                    <motion.div
                      className="flex items-center justify-center h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-8 h-8 border-4 border-portfolio-accent border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span className="ml-3 text-gray-600 dark:text-gray-400">Loading chart...</span>
                    </motion.div>
                  }>
                    <RadarChart data={radarData} />
                  </Suspense>
                )}
              </div>
            </motion.div>

            <motion.div
              className="card p-6 dark:bg-gray-700 mt-6 group hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-4 flex items-center">
                <Database className="mr-3 text-portfolio-accent" size={24} />
                Key Frameworks & Tools
              </h3>

              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework, index) => (
                  <motion.span
                    key={index}
                    className="inline-block px-3 py-1 bg-portfolio-secondary dark:bg-gray-600 rounded-full text-sm text-portfolio-primary dark:text-white hover:bg-portfolio-accent hover:text-white dark:hover:bg-portfolio-accent cursor-pointer transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    viewport={{ once: true }}
                  >
                    {framework}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-6 flex items-center">
            <Zap className="mr-3 text-portfolio-accent" size={24} />
            Soft Skills
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="card p-4 text-center dark:bg-gray-700 group hover:shadow-lg cursor-pointer border-2 border-transparent hover:border-portfolio-accent/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="font-medium dark:text-white group-hover:text-portfolio-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
