import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const inputVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ContactSection() {
  return (
    <section className="bg-black text-white py-24 px-6" id="contact">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I’m open to opportunities and collaborations. Send me a message or reach out via social links below.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto grid gap-6"
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            variants={inputVariant}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            variants={inputVariant}
          />
          <motion.textarea
            placeholder="Your Message"
            rows="5"
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
            variants={inputVariant}
          />
          <motion.button
            type="submit"
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
            variants={inputVariant}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social / Contact Icons */}
        <motion.div
          className="flex justify-center gap-6 mt-12 text-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <a href="mailto:aniket@example.com" className="hover:text-blue-500 transition">
            <FaEnvelope />
          </a>
          <a href="tel:+911234567890" className="hover:text-blue-500 transition">
            <FaPhone />
          </a>
          <a href="https://linkedin.com/in/aniket" target="_blank" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/aniket" target="_blank" className="hover:text-blue-500 transition">
            <FaGithub />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default ContactSection;
