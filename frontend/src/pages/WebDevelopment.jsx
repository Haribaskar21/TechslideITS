import { FaLaptopCode, FaPlane, FaBuilding, FaUniversity } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

export default function WebDevelopment() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="px-0 md:px-0 lg:px-0 pb-10 space-y-16 bg-white text-gray-800">

      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[80vh] overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 shadow-xl"
      >
        <img
          src="assets/TechSlide-Web.png"
          alt="Banner Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 text-white">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Empowering Digital Success
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 max-w-xl text-lg text-gray-200"
          >
            Discover top-tier web development with creativity, speed, and innovation.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-red-500 hover:bg-red-600 transition text-white font-semibold px-6 py-3 rounded shadow-lg"
          >
            Let's Get Started
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white"
        >
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="px-4 md:px-12 lg:px-20 space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            Experience True Digital Craftsmanship with Our Web Design Services
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Every brand has a unique story to tell, and we’re here to make sure it’s told in the most engaging manner.
            Our dedicated team of experts combines the latest technological advancements with creative design elements
            to provide top-tier <strong>web design services</strong>.
          </p>
        </div>

        {/* Banner & Industry Expertise */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <img
              src="assets/TechSlide-Web.png"
              alt="Web Development Banner"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-blue-900">Explore Your Business Potential</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <FaPlane />, title: 'Travel and Aviation' },
                { icon: <FaBuilding />, title: 'Small and SME' },
                { icon: <FaUniversity />, title: 'Finance and Service' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm hover:shadow-md"
                >
                  <div className="text-red-500 text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm mt-1 text-gray-600">
                    We provide end-to-end digital solutions tailored to your industry with creative and scalable web development.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services List & Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Specialized Web Design Services Include</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
              {[
                'Search Engine Optimization',
                'Automatic Reports & Analytics',
                'API Development',
                'Third-Party Integrations',
                'Database Management',
                'Version Control',
                'QA & Testing',
                'Content Optimization',
                'Frontend & Backend Development',
                'UI & UX Design',
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                <strong>Innovative Designs:</strong> As a forward-thinking <strong>web design company</strong>, our designs are rooted in understanding your target audience and business goals. The result? Websites that captivate and convert.
              </li>
              <li>
                <strong>Development Expertise:</strong> Being a seasoned <strong>web development company</strong>, we prioritize creating sites that are fast, secure, and seamlessly responsive across all devices.
              </li>
              <li>
                <strong>End-to-End Solutions:</strong> From concept to launch, our comprehensive services ensure consistency and quality at every step of your online journey.
              </li>
            </ul>

            {/* Feature Highlights (Three Rows) */}
            <div className="mt-6 space-y-6">
              {/* Block 1 */}
              <div className="border rounded-md overflow-hidden shadow-sm">
                <div className="grid grid-cols-3 text-white text-center font-semibold text-sm">
                  <div className="bg-red-500 py-2">Accelerated Performance</div>
                  <div className="bg-blue-900 py-2">Future-proof and Upgradable</div>
                  <div className="bg-red-600 py-2">Cybertheft Security</div>
                </div>
                <div className="bg-gray-100 text-center text-sm py-3 text-gray-700 px-4">
                  To ensure zero offset and reduce loading times, we use SSD hosting and domains without cookies on demand.
                </div>
              </div>

              {/* Block 2 */}
              <div className="border rounded-md overflow-hidden shadow-sm">
                <div className="grid grid-cols-3 text-white text-center font-semibold text-sm">
                  <div className="bg-blue-900 py-2">Accelerated Performance</div>
                  <div className="bg-red-500 py-2">Future-proof and Upgradable</div>
                  <div className="bg-red-600 py-2">Cybertheft Security</div>
                </div>
                <div className="bg-gray-100 text-center text-sm py-3 text-gray-700 px-4">
                  The technologies we use to develop websites are secure for the future and can be scaled as required.
                </div>
              </div>

              {/* Block 3 */}
              <div className="border rounded-md overflow-hidden shadow-sm">
                <div className="grid grid-cols-3 text-white text-center font-semibold text-sm">
                  <div className="bg-red-500 py-2">Accelerated Performance</div>
                  <div className="bg-red-400 py-2">Future-proof and Upgradable</div>
                  <div className="bg-blue-900 py-2">Cybertheft Security</div>
                </div>
                <div className="bg-gray-100 text-center text-sm py-3 text-gray-700 px-4">
                  To prevent malicious software attacks and security breaches, we frequently require bug tests and QA sessions to keep your site foolproof.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-red-100 py-12 text-center space-y-4 rounded-md shadow-inner">
          <h2 className="text-3xl font-bold text-red-600">Build your customers' favorite websites.</h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto">
            Partner with us and co-create a digital platform that propels your brand into the future.
            Your vision, amplified by our expertise, is the formula for a standout online presence.
          </p>
          <button className="bg-blue-900 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-800 transition">
            Request a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
