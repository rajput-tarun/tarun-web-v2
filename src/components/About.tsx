import { Book, Briefcase, GraduationCap, Heart, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-portfolio-gray-light dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title dark:text-white">About Me</h2>
        <p className="section-subtitle dark:text-gray-300">
          Data Scientist and ML Engineer with a strong foundation in mathematical modeling and statistics, and hands-on experience in NLP, computer vision, and generative AI. Passionate about building intelligent, data-driven solutions across diverse domains.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-portfolio-primary dark:text-white flex items-center">
                <Target className="mr-3 text-portfolio-accent" size={28} />
                My Journey
              </h3>
              <div className="space-y-4">
                <motion.p
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  I am a Data Science and Machine Learning enthusiast with a Master's degree from IIT Guwahati. My academic journey has taken me through IIT Bombay for a PGDIIT and Aryabhatta Knowledge University for my B.Tech.
                </motion.p>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Currently working as a Data Scientist at DHL Supply Chain, where I focus on supply chain optimization using machine learning and integrate Generative AI for automation and intelligent analytics.
                  Previously, I interned at ARKRAY Inc., Japan, as part of the R&D team, where I worked on medical imaging and developed novel attention mechanisms to enhance object detection performance.
                </motion.p>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  My core interests include Stats, ML, NLP, computer vision, generative AI, and building practical AI solutions for real-world problems. I'm passionate about leveraging AI for social good and constantly exploring ways to improve model performance through innovative approaches.
                </motion.p>
              </div>
            </div>

            {/* Achievement Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 p-6 bg-gradient-to-r from-portfolio-accent/10 to-blue-500/10 dark:from-portfolio-accent/20 dark:to-blue-500/20 rounded-xl border border-portfolio-accent/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-portfolio-accent dark:text-portfolio-accent">IIT Guwahati</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">M.Tech</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-portfolio-accent dark:text-portfolio-accent">IIT Bombay</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">PGDIIT</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-portfolio-accent dark:text-portfolio-accent">B.Tech</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">AKU</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-portfolio-accent dark:text-portfolio-accent">GATE</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">AIR 255</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="card p-6 dark:bg-gray-800 group hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-transparent hover:border-portfolio-accent"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mb-4 text-portfolio-accent"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <GraduationCap size={40} />
              </motion.div>
              <h4 className="font-bold text-xl mb-2 dark:text-white group-hover:text-portfolio-accent transition-colors">Education</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                M.Tech at IIT Guwahati with 9.37 CGPA and PGDIIT from IIT Bombay with 9.27 CGPA.
              </p>
            </motion.div>

            <motion.div
              className="card p-6 dark:bg-gray-800 group hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-transparent hover:border-portfolio-accent"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mb-4 text-portfolio-accent"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Briefcase size={40} />
              </motion.div>
              <h4 className="font-bold text-xl mb-2 dark:text-white group-hover:text-portfolio-accent transition-colors">Experience</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Data Scientist at DHL Supply Chain — Optimising supply chain with ML, DL, and mathematical modelling. Previously, Data Science Intern at ARKRAY, Japan.
              </p>
            </motion.div>

            <motion.div
              className="card p-6 dark:bg-gray-800 group hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-transparent hover:border-portfolio-accent"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mb-4 text-portfolio-accent"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Book size={40} />
              </motion.div>
              <h4 className="font-bold text-xl mb-2 dark:text-white group-hover:text-portfolio-accent transition-colors">Research</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Focused on NLP tasks, data augmentation with LLMs, and medical imaging analysis.
              </p>
            </motion.div>

            <motion.div
              className="card p-6 dark:bg-gray-800 group hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-transparent hover:border-portfolio-accent"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mb-4 text-portfolio-accent"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Heart size={40} />
              </motion.div>
              <h4 className="font-bold text-xl mb-2 dark:text-white group-hover:text-portfolio-accent transition-colors">Passion</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Committed to developing AI solutions that address real-world challenges.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
