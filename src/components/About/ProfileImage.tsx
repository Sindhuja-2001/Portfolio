import { motion } from 'framer-motion';
import profileImg from '../../assets/ProfileImg.jpg';

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <motion.img
        src={profileImg}
        alt="Sindhuja"
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl border-4 border-yellow-600"
      />
    </motion.div>
  );
};

export default ProfileImage;

