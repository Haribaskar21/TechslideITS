import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const team = [
    { name: "Masud Rana", role: "Web Developer", img: "assets/about-1.jpg" },
    { name: "Najmul Huda", role: "Digital Marketer", img: "assets/about-2.jpg" },
    { name: "Makhaia Antitini", role: "President & CEO", img: "assets/about-4.jpg" },
  ];

  const process = [
    { title: "Discovery", img: "assets/about-6.jpg" },
    { title: "Planning", img: "assets/about-7.jpg" },
    { title: "Execute", img: "assets/about-8.jpg" },
    { title: "Deliver", img: "assets/about-9.jpg" },
  ];

  const pricing = [
    {
      name: 'Silver',
      price: '29.99',
      features: ['Powerful Admin Panel', '1 Native Android App', 'Multi-Language Support (×)', 'Support via E-mail and Phone'],
    },
    {
      name: 'Gold',
      price: '39.99',
      featured: true,
      features: ['Powerful Admin Panel', '2 Native Android App', 'Multi-Language Support', 'Support via E-mail and Phone'],
    },
    {
      name: 'Platinum',
      price: '79.99',
      features: ['Powerful Admin Panel', '3 Native Android App', 'Multi-Language Support', 'Support via E-mail and Phone'],
    },
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* Banner */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: 'url("/images/about-banner.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold tracking-wide">About Us</h1>
        </div>
      </motion.section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="assets/Office.png" alt="TechSlide Building" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Web Design and Digital Marketing Agency</h2>
            <p className="text-gray-700 mb-4">
              Welcome to <strong>TechSlideITS, Chennai’s premier digital marketing agency</strong>, meticulously tailored for ambitious startups. Understanding the ever-evolving digital landscape is essential. As you embark on this journey, our expert web design company and SEO specialists ensure your brand is in the best hands.
            </p>
            <p className="text-gray-700">
              Partnering with <strong>TechSlideITS</strong> means driving your digital vision forward with precision, commitment, and innovative strategies. Let's craft a narrative that resonates, engages, and converts.
            </p>
          </div>
        </div>
      </section>

      {/* What we stand for */}
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">What do we Stand for?</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-blue-900">
          <div>
            <h4 className="font-bold mb-2">Website Designing</h4>
            <p>Our unique designs help establish your business' online presence.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Strategic Planning</h4>
            <p>We develop a strategy before building your website.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Content Creation</h4>
            <p>Higher Google rankings with unique, high-quality content.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Trendy Designs</h4>
            <p>We offer modern designs to suit your business needs.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Business Automation</h4>
            <p>ERP, LMS, HR management — automate your business with ease.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Secure Coding</h4>
            <p>Advanced cyber threat detection and security practices.</p>
          </div>
        </div>
      </section>

{/* Our Story Timeline Section */}
<section className="py-20 bg-white text-gray-800">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-blue-900">Our Story</h2>
    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
      Discover the defining moments that shaped TechSlide’s journey.
    </p>
  </div>

  <div className="relative max-w-5xl mx-auto px-4">
    {/* Center vertical line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-red-300 z-0"></div>

    <div className="space-y-20 relative z-10">
      {/* Timeline Item */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start md:gap-8" data-aos="fade-up">
        <div className="md:w-1/2">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h4 className="text-2xl font-bold">2019</h4>
            <h5 className="text-lg font-semibold mt-1">Company Foundation</h5>
            <p className="text-sm mt-2">Started as Reliable Infotech with a mission to build digital solutions.</p>
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0"></div>
        <div className="md:w-1/2"></div>
      </div>

      {/* Timeline Item */}
      <div className="relative flex flex-col md:flex-row-reverse items-center md:items-start md:gap-8" data-aos="fade-up">
        <div className="md:w-1/2">
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h4 className="text-2xl font-bold">2019</h4>
            <h5 className="text-lg font-semibold mt-1">Product Launch</h5>
            <p className="text-sm mt-2">Rolled out Social Media Automation tools for digital marketing.</p>
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-lg absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0"></div>
        <div className="md:w-1/2"></div>
      </div>

      {/* Timeline Item */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start md:gap-8" data-aos="fade-up">
        <div className="md:w-1/2">
          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h4 className="text-2xl font-bold">2020</h4>
            <h5 className="text-lg font-semibold mt-1">Business Expansion</h5>
            <p className="text-sm mt-2">Forged strong partnerships and scaled delivery teams.</p>
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow-lg absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0"></div>
        <div className="md:w-1/2"></div>
      </div>

      {/* Timeline Item */}
      <div className="relative flex flex-col md:flex-row-reverse items-center md:items-start md:gap-8" data-aos="fade-up">
        <div className="md:w-1/2">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h4 className="text-2xl font-bold">2021</h4>
            <h5 className="text-lg font-semibold mt-1">Customer Support</h5>
            <p className="text-sm mt-2">Established virtual care center to support our clients.</p>
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-yellow-400 border-4 border-white shadow-lg absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0"></div>
        <div className="md:w-1/2"></div>
      </div>

      {/* Timeline Item */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start md:gap-8" data-aos="fade-up">
        <div className="md:w-1/2">
          <div className="bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h4 className="text-2xl font-bold">2022</h4>
            <h5 className="text-lg font-semibold mt-1">Rebranded as TechSlide</h5>
            <p className="text-sm mt-2">Transformed into TechSlide IT Solutions — bold new identity.</p>
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-red-600 border-4 border-white shadow-lg absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0"></div>
        <div className="md:w-1/2"></div>
      </div>
    </div>
  </div>
</section>



      {/* Team Section */}
      <section className="py-20 text-white bg-gradient-team">
        <div className="container mx-auto px-4 text-center mb-12">
          <p className="text-sm uppercase text-blue-200">Team</p>
          <h2 className="text-3xl font-bold">Expert IT Consultants</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-7xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="bg-white text-center p-6 rounded-xl shadow-md hover:shadow-xl transition text-blue-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={member.img} alt={member.name} className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-blue-500" />
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="text-sm text-blue-700">{member.role}</p>
              <div className="flex justify-center gap-4 mt-4 text-blue-500 text-sm">
                <FaFacebookF /><FaInstagram /><FaTwitter /><FaPinterestP />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-blue-600">Process</p>
          <h2 className="text-3xl font-bold">Our Working Process</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <img src={step.img} alt={step.title} className="w-32 h-32 mx-auto rounded-full border-2 border-blue-600 p-2 object-cover" />
              <h4 className="mt-4 font-semibold">{step.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-pricing text-white">
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-blue-300">Pricing</p>
          <h2 className="text-3xl font-bold">Our Pricing Plan</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`bg-white text-blue-900 p-6 rounded-xl shadow-lg transform transition hover:scale-105 relative`}
            >
              {plan.featured && (
                <span className="absolute top-0 right-0 bg-yellow-400 text-black text-xs px-3 py-1 font-bold rounded-bl-lg">
                  Best Value
                </span>
              )}
              <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-4xl font-bold mb-1">${plan.price}</p>
              <p className="text-sm text-gray-500 mb-4">/ month</p>
              <ul className="text-sm space-y-2 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className={f.includes("×") ? "text-red-500" : "text-green-600"}>
                      {f.includes("×") ? "✗" : "✓"}
                    </span>
                    {f.replace(" (×)", "")}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg">
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase text-blue-600 mb-2">Contact</h2>
            <h1 className="text-3xl font-bold mb-6">Request A Free Consultation</h1>
            <form className="bg-white p-6 rounded-xl border space-y-4 shadow-md">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="p-3 border rounded-lg" />
                <input type="email" placeholder="Email" className="p-3 border rounded-lg" />
                <input type="text" placeholder="Phone" className="p-3 border rounded-lg" />
                <input type="url" placeholder="Website" className="p-3 border rounded-lg" />
              </div>
              <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded-lg" />
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Now
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/consult.jpg" alt="Consultation" className="rounded-xl shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* Animated background styles */}
      <style jsx>{`
        .bg-gradient-team {
          background: linear-gradient(270deg, #1e3a8a, #2563eb, #1e3a8a);
          background-size: 400% 400%;
          animation: bg-slide 16s ease infinite;
        }
        .bg-gradient-pricing {
          background: linear-gradient(270deg, #0f172a, #1e293b, #0f172a);
          background-size: 500% 500%;
          animation: bg-slide 20s ease infinite;
        }
        @keyframes bg-slide {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
