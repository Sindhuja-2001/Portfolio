import { motion } from "framer-motion";

 import Tilt from "react-parallax-tilt";
interface SkillCardProps {
  name: string;
  image: string;
}

const SkillCard = ({ name, image }: SkillCardProps) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.05}
      className="w-full"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center justify-center bg-white text-black dark:bg-[#111827] dark:text-white border border-yellow-600 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-yellow-500/30 hover:-translate-y-1"
      >
        <img
          src={image}
          alt={name}
          className="w-12 h-12 mb-3 object-contain"
        />
        <span className="font-semibold text-sm text-center">{name}</span>
      </motion.div>
    </Tilt>
  );
};

export default SkillCard;
