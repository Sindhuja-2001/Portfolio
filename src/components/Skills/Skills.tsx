import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import reactImg from "../../assets/skillsImg/reactImg.svg";
import tsImg from "../../assets/skillsImg/Typescript.svg";
import jsImg from "../../assets/skillsImg/Javascript.svg";
import htmlImg from "../../assets/skillsImg/Html5.svg";
import cssImg from "../../assets/skillsImg/Css3.svg";
import tailwindImg from "../../assets/skillsImg/Tailwindcss.svg";
import reduxImg from "../../assets/skillsImg/redux.svg";
import gitImg from "../../assets/skillsImg/Git.svg";
import vscodeImg from "../../assets/skillsImg/vs code.svg";
import BlobSectionWrapper from "../BlobSectionWrapper";

const skills = [
  { name: "React", image: reactImg },
  { name: "TypeScript", image: tsImg },
  { name: "JavaScript", image: jsImg },
  { name: "HTML5", image: htmlImg },
  { name: "CSS3", image: cssImg },
  { name: "Tailwind", image: tailwindImg },
  { name: "Redux", image: reduxImg },
  { name: "Git & GitHub", image: gitImg },
  { name: "VS Code", image: vscodeImg },
];

const Skills = () => {
  return (
    <BlobSectionWrapper >
      <motion.div
        id="skills"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full text-center scroll-mt-24"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 dark:text-yellow-400 mb-10 font-serif">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <SkillCard key={i} name={skill.name} image={skill.image} />
          ))}
        </div>
      </motion.div>
    </BlobSectionWrapper>

  );
};

export default Skills;
