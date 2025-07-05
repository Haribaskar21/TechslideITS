import { motion } from "framer-motion";
import LineBackground from "../components/LineBackground";
import SolutionsSection from '../components/SolutionsSection';
import WhyChooseUs from "../components/WhyChooseUs";
import ContactSection from "../components/ContactSection";
import BlogPreviewSection from "../components/BlogPreviewSection";
import TestimonialSection from "../components/TestimonialSection";
import { FaLaptopCode, FaShieldAlt, FaUsers, FaLightbulb } from "react-icons/fa";

export default function Home() {
  const services = [
    {
      icon: <FaLaptopCode size={30} className="text-orange-500 group-hover:text-white transition" />,
      title: "Web Design & Management",
      desc: "Designing a website that will make your brand stand out from the crowd is what we do for you.",
      hoverBg: "hover:bg-orange-500",
    },
    {
      icon: <FaLightbulb size={30} className="text-cyan-500 group-hover:text-white transition" />,
      title: "eCommerce Design & Solutions",
      desc: "Are you planting to start, an Commerce business? Check out our cool eCommerce services.",
      hoverBg: "hover:bg-cyan-500",
    },
    {
      icon: <FaUsers size={30} className="text-yellow-500 group-hover:text-white transition" />,
      title: "Digital Marketing Services",
      desc: "Improve your business by becoming a top position in google search. Take advantage of our social media management services to become trending.",
      hoverBg: "hover:bg-yellow-500",
    },
    {
      icon: <FaShieldAlt size={30} className="text-indigo-500 group-hover:text-white transition" />,
      title: "Website & Server Security",
      desc: "Protect your business from global internet threats such as viruses, malware, and ransomware with our managed web security services.",
      hoverBg: "hover:bg-indigo-500",
    },
  ];

  const skills = [
    { title: "Software Development", percent: 92, color: "bg-orange-500" },
    { title: "Cyber Security", percent: 80, color: "bg-teal-400" },
    { title: "Artificial Intelligence", percent: 95, color: "bg-blue-500" },
    { title: "Web Development", percent: 78, color: "bg-pink-400" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 animated-hero-bg" />
        <LineBackground />
        <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl pt-12 lg:pt-0"
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              IT Consulting Services <br /> For Your Business
            </h1>
            <p className="text-base lg:text-lg text-gray-200 mb-8 leading-relaxed">
              We are a leading technology solutions provider across the globe with over 40 years of experience.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#f65023] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e24417] transition duration-300">
                Get Started
              </button>
              <button className="bg-white text-[#0f0f2d] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-auto"
          >
            <img
              src="/assets/banner-4.png"
              alt="Hero Graphic"
              className="w-[500px] max-w-full drop-shadow-xl"
            />
          </motion.div>
        </div>

        <style jsx>{`
          .animated-hero-bg {
            background: linear-gradient(-45deg, #010179, #1e3a8a, #2563eb, #456fee);
            background-size: 400% 400%;
            animation: gradientShift 12s ease infinite;
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3 flex items-center">
              <span className="inline-block w-4 h-1 bg-orange-500 mr-2 rounded-full"></span>
              About Us
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug">
              Empowering Digital Growth with Innovative Technology
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We help businesses grow online by delivering custom web solutions, strategic digital marketing, and cutting-edge SEO services that attract and convert leads.
            </p>
            <div className="flex gap-10 mt-8">
              <div>
                <p className="text-3xl font-bold text-orange-600">200+</p>
                <p className="font-medium text-gray-700 mt-1">Satisfied Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-800">350+</p>
                <p className="font-medium text-gray-700 mt-1">Projects Delivered</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group p-6 rounded-xl bg-white border shadow-sm hover:shadow-lg transition duration-300 cursor-pointer ${item.hoverBg}`}
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-white transition">{item.title}</h4>
                <p className="text-sm text-gray-600 group-hover:text-white transition">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-[360px] h-[360px] z-10 mx-auto"
          >
            <div className="absolute -left-6 top-6 w-[300px] h-[300px] rounded-full bg-blue-600 z-0"></div>
            <div className="absolute -right-6 bottom-6 w-[300px] h-[300px] rounded-full bg-orange-500 z-0"></div>
            <img
              src="assets/about-5.png"
              alt="Team"
              className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white shadow-xl"
            />
          </motion.div>

          <div className="lg:w-1/2">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">
              <span className="inline-block w-4 h-1 bg-orange-500 mr-2"></span>
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              We Help Businesses Drive Real Results With Digital Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              From website development to complete marketing strategies, our team crafts scalable, result-driven digital experiences.
            </p>

            {skills.map((skill, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                  <span>{skill.title}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div className={`${skill.color} h-full rounded-full`} style={{ width: `${skill.percent}%` }}></div>
                </div>
              </div>
            ))}

            <button className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <SolutionsSection />
      <WhyChooseUs />
      <ContactSection />
      <BlogPreviewSection />
      <TestimonialSection />
    </div>
  );
}
