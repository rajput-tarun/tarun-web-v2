import { ExternalLink, Github, Calendar, User, Trophy, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Optimizing Downstream NLP Tasks through Data Augmentation with LLMs",
      period: "June'24 - May'25",
      type: "Master's Thesis",
      supervisor: "Dr. Gaurav Trivedi (Dept. of EEE) and Dr. Teena Sharma (MFSDSAI), IIT Guwahati",
      status: "Ongoing",
      description: [
        "Designed advanced data augmentation techniques to enhance model performance in downstream NLP tasks by fine-tuning language models on datasets like SST-2 and EMOTION.",
        "Achieved a 5% improvement in overall accuracy on the SST dataset by implementing Conditional Augmentation using RoBERTa and Llama-3.3-70B, surpassing baseline performance."
      ],
      technologies: ["NLP", "LLMs", "RoBERTa", "Llama-3", "Data Augmentation"],
      github: null
    },
    {
      title: "Care Vision AI: Disease Detection on Medical Imaging Datasets",
      period: "Jan'24 - May'24",
      type: "Course Project, IIT Guwahati",
      supervisor: null,
      status: "Completed",
      description: [
        "Built AI models for detecting medical conditions like skin cancer, brain tumors, lung cancer, and pneumonia using CNN, SVM, Random Forest, and morphological operations.",
        "Enhanced Recall by 4% using Transfer Learning with the ResNet50 architecture and designed a user-friendly web application integrating these models seamlessly, enabling efficient real-time detection and diagnosis."
      ],
      technologies: ["Computer Vision", "CNN", "ResNet50", "Transfer Learning", "Medical Imaging"],
      github: "https://github.com/username/care-vision-ai"
    },
    {
      title: "Large Language Model Based Healthcare Assistant",
      period: "Jan'24 - Apr'24",
      type: "Course Project, IIT Guwahati",
      supervisor: null,
      status: "Completed",
      description: [
        "Fine-tuned Llama2-7b model on a custom dataset from the Medical Encyclopedia to develop a healthcare chatbot.",
        "Employed QLoRA, 4-bit quantization, and Hugging Face libraries for parameter-efficient fine-tuning, resulting in 50% lower RAM usage and 400% faster training times, significantly optimizing resource utilization."
      ],
      technologies: ["LLMs", "Llama2", "QLoRA", "Healthcare", "NLP"],
      github: "https://github.com/username/llm-healthcare-assistant"
    },
    {
      title: "Steel Industry Energy Consumption Classification",
      period: "Aug'23 - Nov'23",
      type: "Course Project",
      supervisor: "Dr. Prithwijit Guha, Dept. of EEE, IIT Guwahati",
      status: "Completed",
      description: [
        "Performed Exploratory Data Analysis on electricity consumption data from a steel plant with 35,000+ entries, and built machine learning models using Logistic Regression, Random Forest, ANN, SVM, and Naive Bayes.",
        "Optimized the Random Forest model's performance through hyperparameter tuning, achieving an F1 score of 0.98."
      ],
      technologies: ["Machine Learning", "Random Forest", "EDA", "Classification", "Energy Consumption"],
      github: "https://github.com/username/steel-industry-energy"
    }
  ];

  return (
    <section id="projects" className="bg-portfolio-gray-light dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title dark:text-white">Projects</h2>
        <p className="section-subtitle dark:text-gray-300">
          A selection of my academic and personal projects showcasing my technical skills and research interests.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card group overflow-hidden flex flex-col h-full dark:bg-gray-800 hover:shadow-2xl transition-all duration-500 border-l-4 border-transparent hover:border-portfolio-accent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="h-2 bg-gradient-to-r from-portfolio-accent to-blue-500 w-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              />
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <motion.h3
                    className="text-xl font-bold text-portfolio-primary dark:text-white group-hover:text-portfolio-accent transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-portfolio-accent dark:text-gray-400 dark:hover:text-portfolio-accent transition-all duration-300 p-2 rounded-full hover:bg-portfolio-accent/10"
                      aria-label="GitHub Repository"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                </div>

                <motion.div
                  className="space-y-2 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center text-sm font-medium text-portfolio-accent">
                    <Calendar size={14} className="mr-2" />
                    {project.period}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Lightbulb size={14} className="mr-2" />
                    {project.type}
                  </div>
                  {project.supervisor && (
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <User size={14} className="mr-2" />
                      Supervisor: {project.supervisor}
                    </div>
                  )}
                  <motion.span
                    className={`inline-flex items-center px-3 py-1 text-xs rounded-full font-medium ${project.status === 'Completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Trophy size={12} className="mr-1" />
                    {project.status}
                  </motion.span>
                </motion.div>

                <motion.ul
                  className="space-y-3 my-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {project.description.map((desc, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-portfolio-accent mt-2 mr-3 flex-shrink-0"></span>
                      <span>{desc}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                >
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="inline-block px-3 py-1 bg-portfolio-secondary dark:bg-gray-700 rounded-full text-xs text-portfolio-primary dark:text-white hover:bg-portfolio-accent hover:text-white dark:hover:bg-portfolio-accent cursor-pointer transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.8 + i * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {project.github && (
                <motion.div
                  className="px-6 py-3 bg-portfolio-secondary dark:bg-gray-700 group-hover:bg-portfolio-accent/10 dark:group-hover:bg-portfolio-accent/20 transition-all duration-300"
                  whileHover={{ backgroundColor: "rgba(26, 188, 156, 0.1)" }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-portfolio-primary dark:text-white hover:text-portfolio-accent dark:hover:text-portfolio-accent transition-colors inline-flex items-center group/link"
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink size={14} className="ml-2" />
                    </motion.div>
                  </motion.a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/rajput-tarun"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-portfolio-primary to-portfolio-accent hover:from-portfolio-accent hover:to-blue-600 dark:from-blue-600 dark:to-portfolio-accent text-white rounded-xl transition-all duration-500 shadow-lg hover:shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Github size={22} />
            </motion.div>
            <span className="font-semibold text-lg relative z-10">View More Projects on GitHub</span>
            <motion.div
              whileHover={{ x: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <ExternalLink size={18} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
