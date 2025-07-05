import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-72 flex items-center justify-center text-white"
        style={{ backgroundImage: 'url("/contact-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="z-10 text-center">
          <h1 className="text-4xl font-bold">Contact</h1>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div
          className="bg-gradient-to-b from-blue-600 to-blue-900 text-white p-8 rounded-xl flex-1"
          data-aos="fade-right"
        >
          <h3 className="text-lg mb-4 font-semibold">LET'S TALK</h3>
          <h2 className="text-3xl font-bold mb-6">Speak With Expert Engineers.</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white text-blue-700 p-3 rounded-full">
                <FaEnvelope />
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p>hello@techslideitsolutions.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white text-blue-700 p-3 rounded-full">
                <FaPhone />
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <p>+91 95004 66919</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white text-blue-700 p-3 rounded-full">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p>
                  Crizone Business Center <br />
                  1st Floor, 13B Mounasamy Madam Street, Venkatapuram, Ambattur OT,<br />
                  Chennai, Tamil Nadu 600053
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="flex-1 rounded-xl p-8 text-white bg-gradient-form"
          data-aos="fade-left"
        >
          <h3 className="uppercase text-sm font-bold text-orange-400">Get in Touch</h3>
          <h2 className="text-3xl font-bold mb-6">Fill The Form Below</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 p-3 border rounded-lg bg-white/20 placeholder-white/80 text-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="w-1/2 p-3 border rounded-lg bg-white/20 placeholder-white/80 text-white focus:outline-none"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-1/2 p-3 border rounded-lg bg-white/20 placeholder-white/80 text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your Website"
                className="w-1/2 p-3 border rounded-lg bg-white/20 placeholder-white/80 text-white focus:outline-none"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your message Here"
              className="w-full p-3 border rounded-lg bg-white/20 placeholder-white/80 text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div data-aos="fade-up">
<iframe
  className="w-full h-[450px]"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.378203084804!2d80.15881997507077!3d13.113383512004542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261e0e3e4c571%3A0x1db9f5ad1fbd426d!2sCrizone%20Business%20Center%2C%2013B%2C%20Mounasamy%20Madam%20St%2C%20Venkatapuram%2C%20Ambattur%2C%20Chennai%2C%20Tamil%20Nadu%20600053!5e0!3m2!1sen!2sin!4v1718881172971!5m2!1sen!2sin"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>

      {/* Gradient Background Animation */}
<style>{`
  .bg-gradient-form {
    background: linear-gradient(270deg, #102841, #1d3a5e, #102841);
    background-size: 600% 600%;
    animation: bg-slide 20s ease infinite;
  }

  @keyframes bg-slide {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`}</style>

    </div>
  );
}
