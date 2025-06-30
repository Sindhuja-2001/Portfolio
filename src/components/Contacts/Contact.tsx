import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import BlobSectionWrapper from "../BlobSectionWrapper";

const Contact = () => {
  return (
    <BlobSectionWrapper >
      <motion.div
      id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center scroll-mt-24"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 font-serif mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Have a question, idea, or opportunity? Feel free to reach out using the form below.
        </p>
        <ContactForm />
      </motion.div>
    </BlobSectionWrapper>
  );
};

export default Contact;
