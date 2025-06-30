// components/BlobSectionWrapper.tsx
import { motion } from "framer-motion";
import React from "react";

interface BlobSectionWrapperProps {
  children: React.ReactNode,
  id?: string;
  className?:string
}

const BlobSectionWrapper = ({ children ,id,className=""}:BlobSectionWrapperProps ) => {
  return (
    <section   id={id}
    //  className="relative scroll-mt-28 overflow-x-hidden py-32 px-6 md:px-20 text-black dark:text-white transition-colors duration-300 bg-transparent z-0"
    className={`relative py-28 px-5 md:px-20 text-black dark:text-white transition-colors duration-300 bg-transparent z-0  ${className}`}
     >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-purple-500 rounded-full filter blur-2xl opacity-40"
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full filter blur-2xl opacity-40"
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 0.8, 1] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="reletive max-w-6xl mx-auto bg-white/20 dark:bg-black/20 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-lg border border-white/10 z-10">
        {children}
      </div>
    </section>
  );
};

export default BlobSectionWrapper;
