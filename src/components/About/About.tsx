import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import ProfileImage from './ProfileImage';
import SocialMediaLinks from './SocialMediaLinks';
import BlobSectionWrapper from '../BlobSectionWrapper';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
      });
    } else {
      controls.set({ opacity: 0, x: -50 });
    }
  }, [inView, controls]);

  return (
    <BlobSectionWrapper id='about'>
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 position: relative;
    top: 4em;">
        {/* LEFT: Text */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-600 dark:text-white font-serif">
            Hi, I'm Sindhuja
          </h1>
          <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
            Frontend Developer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-7 md:leading-8 font-light font-sans">
            I'm a <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Frontend Developer</span> with <span className="text-yellow-600 dark:text-yellow-400 font-semibold">2.5 years</span> of hands-on experience, including a <span className="text-yellow-600 dark:text-yellow-400">3-month internship</span>. I specialize in building responsive, user-centric web applications using
            <span className="text-white dark:text-yellow-400 bg-purple-600/20 dark:bg-yellow-600/20 px-2 py-1 rounded-full text-sm font-semibold mx-1">React.js</span> and
            <span className="text-white dark:text-yellow-400 bg-purple-600/20 dark:bg-yellow-600/20 px-2 py-1 rounded-full text-sm font-semibold mx-1">TypeScript</span>.
          </p>
          <SocialMediaLinks />
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0, transition: { duration: 1 } } : {}}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <ProfileImage />
        </motion.div>
      </div>
    </BlobSectionWrapper>
  );
};

export default About;
