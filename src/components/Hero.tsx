import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-gray-light via-white to-portfolio-gray-medium dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 opacity-60"></div>

      {/* Animated color blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-200 dark:bg-blue-900/30 blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-green-200 dark:bg-green-900/30 blur-3xl opacity-30 animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-purple-200 dark:bg-purple-900/30 blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-portfolio-accent font-medium mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-portfolio-primary via-portfolio-accent to-blue-500 dark:from-blue-400 dark:via-teal-400 dark:to-purple-500 mb-4">
              Tarun Kumar
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md">
              A passionate Data Scientist and Machine Learning Engineer with expertise in NLP, Mathematical Modeling, Statistics, Computer Vision, and Generative AI
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="#about"
                className="btn btn-primary transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Discover More</span>
                <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-outline transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="mr-2 w-4 h-4" />
                <span>Contact Me</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href="https://github.com/rajput-tarun"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/tarun-kumar-iitb/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.button
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download Resume"
                onClick={() => window.open('https://drive.google.com/file/d/1GdiJSgi1OWQfyLxemwwLl1WVsvsqfgMo/view?usp=sharing', '_blank')}
              >
                <Download className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group cursor-pointer">
              {/* Animated decorative rings */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 to-purple-400 dark:from-pink-600 dark:to-purple-700 blur-md opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-300 to-teal-300 dark:from-blue-600 dark:to-teal-600 blur-md opacity-30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Floating particles */}
              <motion.div
                className="absolute top-4 right-8 w-2 h-2 bg-portfolio-accent rounded-full"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-8 left-4 w-3 h-3 bg-blue-400 rounded-full"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              {/* Profile image container */}
              <motion.div
                className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl bg-portfolio-gray-light dark:bg-gray-700 z-10"
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/tarun_img.png" loading="eager" fetchPriority="high" decoding="async"
                  alt="Tarun Kumar — Data Scientist"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        aria-label="Scroll Down"
        initial={{ y: -10, opacity: 0.6 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        whileHover={{ scale: 1.2 }}
      >
        <ArrowDown className="text-portfolio-primary dark:text-white" size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;
