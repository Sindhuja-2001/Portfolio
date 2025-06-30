import { motion } from "framer-motion";

const ExperienceCard = ({ title, company, duration, bullets }:any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative group bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white rounded-3xl p-6 md:p-8 shadow-[0_0_30px_rgba(255,255,0,0.05)] border border-yellow-500/20 hover:shadow-yellow-400/20 hover:scale-[1.02] transition-all duration-500"
    >
      {/* Glowing ring effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500 pointer-events-none"></div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-yellow-400">
          {title}
          <span className="text-white font-medium"> @ {company}</span>
        </h3>
        <p className="text-sm text-gray-400 mt-1 mb-4">{duration}</p>
        <ul className="list-disc list-inside text-gray-300 text-sm md:text-base space-y-2">
          {bullets.map((point:any, index:number) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
