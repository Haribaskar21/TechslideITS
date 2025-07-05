import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

// ✅ Import FontAwesome icons
import { FaLaptopCode, FaPhoneVolume, FaShoppingCart, FaCreditCard, FaBullhorn, FaTruck, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


  const services = [
    {
      title: 'Premier Web Development Company',
      desc: 'A professional, informative and creative website designed by TechSlide is exactly what you need to develop your brand identity.',
      icon: <FaLaptopCode className="text-4xl text-blue-600" />,
      path: '/web-development',
    },
    {
      title: 'Toll Free Number Service Provider',
      desc: 'Personalized IVR menus and call routing. Handle multiple calls and virtual numbers with ease.',
      icon: <FaPhoneVolume className="text-4xl text-purple-600" />,
      path: '/toll-free',
    },
    {
      title: 'eCommerce Website Designing & Solutions',
      desc: 'Grow with rich design, dynamic features, and third-party integrations to reach your business goals.',
      icon: <FaShoppingCart className="text-4xl text-pink-600" />,
      path: '/ecommerce-services',
    },
    {
      title: 'Payment Gateway Providers in India',
      desc: 'Increase your online revenue with Paytm, Razorpay and others. Easy and secure integration.',
      icon: <FaCreditCard className="text-4xl text-green-600" />,
      path: '/payment-gateway',
    },
    {
      title: 'Social Media Marketing Services',
      desc: 'Grow your brand through strategic social media campaigns across all popular platforms.',
      icon: <FaBullhorn className="text-4xl text-yellow-500" />,
      path: '/social-media-marketing',
    },
    {
      title: 'Best SEO Company in Tamilnadu',
      desc: 'Improve your rankings with detailed audits, modern SEO practices and content strategy.',
      icon: <FaSearch className="text-4xl text-red-500" />,
      path: '/seo-service',
    },
    {
      title: 'Integrated Logistics Solutions',
      desc: 'Advanced, scalable and specialized logistical solutions to manage your e-commerce supply chain.',
      icon: <FaTruck className="text-4xl text-orange-600" />,
    },
  ];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-black bg-white">
      {/* Banner */}
      <div className="relative h-[300px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url('/your-banner-image.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">Services</h1>
        </div>
      </div>

     {/* Services section */}
      <section className="py-20 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase text-blue-500 font-bold tracking-widest">Our Offerings</p>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">What We Provide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From creative websites to marketing and backend solutions, we offer end-to-end digital services tailored to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                data-aos="fade-up"
                whileHover={{ scale: 1.05 }}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  {service.icon}
                  <span className="text-4xl font-extrabold text-gray-100 group-hover:text-gray-300">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-blue-900 group-hover:text-orange-500 transition">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
                 {service.path ? (
      <Link
        to={service.path}
        className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition"
      >
        See More →
      </Link>
    ) : (
      <button className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition">
        See More →
      </button>
    )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-400 text-white mt-20 py-16 px-6 rounded-t-3xl relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-32 bg-white opacity-10 transform -rotate-45 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to discuss your project?</h3>
          <p className="mb-8 text-lg">
            Get in touch with us if you have interesting suggestions or need help with any consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 w-full md:w-auto rounded-md text-black placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="px-4 py-2 w-full md:w-auto rounded-md text-black placeholder-gray-500"
            />
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md transition">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
