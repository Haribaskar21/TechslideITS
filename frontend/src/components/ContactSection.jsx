import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12">
        {/* Left Side - Contact Info */}
        <div data-aos="fade-right" className="flex-1">
          <p className="text-sm text-blue-600 font-semibold uppercase mb-2">Let's Talk</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Our Experts</h2>
          <p className="text-gray-600 mb-8">
            Ready to take your business to the next level? Our team is here to provide strategic guidance and tech solutions tailored to your needs.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-purple-600 text-2xl">✉️</span>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">hello@techslideitsolutions.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-600 text-2xl">📞</span>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">(+91) 95004 66919</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-orange-500 text-2xl">📍</span>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600">2 Indra Nagar, MC Road, Thanjavur, TN 613001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Appointment Form */}
        <div data-aos="fade-left" className="flex-1 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-bold mb-1">Schedule Appointment</h3>
          <p className="text-gray-500 text-sm mb-6">Let’s collaborate on your next big idea</p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-3 rounded" />
            <input type="email" placeholder="Your Email" className="w-full border border-gray-300 p-3 rounded" />
            <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 p-3 rounded" />
            <input type="text" placeholder="Company/Organization" className="w-full border border-gray-300 p-3 rounded" />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded hover:from-blue-600 hover:to-blue-800 transition"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
