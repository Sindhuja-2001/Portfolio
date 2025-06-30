import { motion } from "framer-motion";
import BlobSectionWrapper from "../BlobSectionWrapper";

const Experience = () => {
  return (
    <BlobSectionWrapper >
      <div className="max-w-6xl mx-auto">
        <motion.h2
        id="experience"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-yellow-600 dark:text-yellow-400 mb-12 text-center font-serif scroll-mt-24"
        >
          My Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="p-6 rounded-xl border-l-4 border-yellow-500 shadow-md bg-white text-black dark:bg-[#111827] dark:text-white transition-colors duration-300">
            <h3 className="text-xl font-semibold">Frontend Developer @ Arus Info</h3>
            <p className="text-sm text-yellow-500 dark:text-yellow-400">Nov 2022 – Jan 2025</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>Developed and maintained a unified web portal combining internal apps into a single platform.</li>
              <li>Integrated Single Sign-On (SSO) to streamline user authentication across systems.</li>
              <li>Created responsive, accessible UI components using React.js and Tailwind CSS.</li>
              <li>Collaborated with cross-functional teams to improve performance and UX across devices.</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-yellow-500 shadow-md bg-white text-black dark:bg-[#111827] dark:text-white transition-colors duration-300">
            <h3 className="text-xl font-semibold">Intern @ Arus Info</h3>
            <p className="text-sm text-yellow-500 dark:text-yellow-400">Jul 2022 – Oct 2022</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>Gained hands-on experience with HTML5, CSS3, and modern JavaScript (ES6+).</li>
              <li>Learned version control using Git and collaborated through GitHub.</li>
              <li>Developed mini-projects including a responsive website, a coin toss game, and a billing app using JavaScript.</li>
              <li>Prepared and delivered project reports and presentations to trainers for feedback.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </BlobSectionWrapper>
  );
};

export default Experience;

