import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaNetworkWired,
  FaCloud,
  FaCheckCircle,
} from "react-icons/fa";

export default function TollFreePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <motion.div
        className="w-full h-64 md:h-80 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white flex flex-col justify-center items-center text-center px-4 shadow-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Toll Free Number Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Connect with your customers across India – Seamless IVR, Cloud Solutions & More
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* Welcome Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            In a digital-first world, reliable communication defines success.
            <strong className="text-blue-800"> TechSlideITS</strong> ensures seamless toll-free
            and IVR connectivity with unmatched professionalism and support.
          </p>
          <blockquote className="bg-blue-100 border-l-4 border-blue-500 italic text-blue-800 p-4 mt-6 max-w-2xl mx-auto shadow-sm rounded-md">
            Are you ready to manage your business calls in one place?{" "}
            <strong>We’ve got you covered.</strong>
          </blockquote>
        </motion.section>

        {/* Image */}
        <motion.section
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="assets/troll.png"
            alt="IVR Illustration"
            className="max-w-full md:max-w-4xl shadow-lg rounded-xl"
          />
        </motion.section>

        {/* Services Grid */}
        <section className="grid md:grid-cols-2 gap-10">
          <AnimatedCard
            icon={<FaPhoneAlt className="text-blue-600" />}
            title="Toll Free Number Service"
            items={[
              "Zero Cost for Callers – connect freely.",
              "Pan-India Accessibility to your brand.",
              "Boosted Brand Image for professionalism.",
            ]}
          />
          <AnimatedCard
            icon={<FaNetworkWired className="text-blue-600" />}
            title="IVR Number Service"
            items={[
              "Swift Call Navigation for efficiency.",
              "Always-On Assistance – 24/7 response.",
              "Scalable Solutions to grow with you.",
            ]}
          />
          <AnimatedCard
            icon={<FaCloud className="text-blue-600" />}
            title="Cloud Call Center"
            items={[
              "Remote teams and zero setup investment.",
              "CRM Integration for better support.",
              "Actionable call analytics to grow smart.",
            ]}
          />
          <AnimatedCard
            icon={<FaCheckCircle className="text-blue-600" />}
            title="Why Choose TechSlideITS?"
            items={[
              "Reliable partnership with MyOperator.",
              "Cost-effective packages with top quality.",
              "Dedicated support for every client.",
            ]}
          />
        </section>
      </div>

      {/* Contact CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Work with <span className="text-orange-400">TechSlideITS</span>?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Let’s build smart, scalable, and secure communication solutions together. Whether you're a startup or enterprise—we’re ready to partner with you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 transition text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </motion.section>
    </div>
  );
}

// Animated Card Component
function AnimatedCard({ icon, title, items }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.03] border border-gray-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
        {icon} {title}
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
