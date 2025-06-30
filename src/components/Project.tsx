import { motion, type Variants } from "framer-motion";
import BlobSectionWrapper from './BlobSectionWrapper'

const projects = [
  {
    title: "Camp@Arus",
    description:
      "Served as a Frontend Developer, building responsive Candidate and Admin interfaces. Implemented onboarding, user management, and role-based access control in a centralized employee portal. Also developed web services in Azure and deployed via CI/CD pipelines.",
    tech: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Azure Portal",
      "Azure DevOps",
      "TypeScript",
    ],
  },
  {
    title: "UseCase",
    description:
      "Built an Excel-style data table using React with features like column filtering, global search, sorting, and pagination. Designed for performance and reusability across internal tools.",
    tech: ["React", "Redux", "TypeScript", "Tailwind CSS"],
  },
];

const fadeInVariants = (
  direction: "up" | "down" | "left" | "right" = "up"
): Variants => {
  const offset = 80;
  let x = 0;
  let y = 0;

  switch (direction) {
    case "up":
      y = offset;
      break;
    case "down":
      y = -offset;
      break;
    case "left":
      x = offset;
      break;
    case "right":
      x = -offset;
      break;
  }

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

const Project = () => {
  return (
    <BlobSectionWrapper >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
        id="projects"
          variants={fadeInVariants("up")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-yellow-600 dark:text-yellow-400 mb-12 text-center font-serif scroll-mt-28"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj, index) => {
            const cardDirection = index % 2 === 0 ? "left" : "right";

            return (
              <motion.div
                key={index}
                variants={fadeInVariants(cardDirection)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-[#111827] text-black dark:text-white border border-yellow-600 rounded-xl p-6 shadow-md backdrop-blur-sm transition-transform duration-300"
              >
                <motion.h3
                  variants={fadeInVariants("up")}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-2"
                >
                  {proj.title}
                </motion.h3>

                <motion.p
                  variants={fadeInVariants("up")}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-sm text-gray-700 dark:text-gray-300 mb-4"
                >
                  {proj.description}
                </motion.p>

                <motion.div
                  variants={fadeInVariants("up")}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-yellow-600/20 text-yellow-500 dark:text-yellow-400 px-3 py-1 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </BlobSectionWrapper>
  );
};

export default Project;
