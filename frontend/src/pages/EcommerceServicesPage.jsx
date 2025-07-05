import React from "react";
import { motion } from "framer-motion";
import {
  FaStore, FaCogs, FaTags, FaTruck, FaCreditCard, FaPhone,
} from "react-icons/fa";

export default function EcommerceServicesPage() {
  return (
    <div className="bg-gray-50">
      {/* Banner Section */}
      <motion.section
        className="relative text-white text-center py-24 px-6 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 shadow-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 opacity-30 rounded-full blur-2xl animate-ping" />
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight z-10 relative">
          Elevate Your Business with <span className="text-yellow-300">Tailored Ecommerce Solutions</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto z-10 relative">
          Transform your digital storefront with TechSlideITS—where design meets conversion.
        </p>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">
        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="assets/ecommerce.avif"
            alt="Core Ecommerce Pages"
            className="rounded-2xl shadow-2xl w-full max-w-4xl"
            loading="lazy"
          />
        </motion.div>

        {/* Intro Text */}
        <section className="space-y-6 text-gray-800 text-lg leading-relaxed">
          <p>
            At <strong className="text-blue-800">TechSlideITS</strong>, we bridge technology with design to craft
            ecommerce experiences that captivate, convert, and compete. Our focus? Driving real results.
          </p>
          <p>
            With end-to-end services—SEO, automation, integrations, security—we empower your brand to rise in a competitive market with precision-engineered websites.
          </p>
        </section>

        {/* Design Importance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Why Ecommerce Design Matters</h2>
          <p className="text-gray-700 text-lg">
            A website isn’t just digital real estate—it’s your brand’s first impression. We ensure every pixel speaks trust, quality, and purpose.
          </p>
        </motion.div>

        {/* Icon Services */}
        <section className="grid md:grid-cols-3 gap-8 py-8">
          <EcomIconCard icon={<FaStore />} title="Multi Vendor Support" />
          <EcomIconCard icon={<FaCogs />} title="Fully Automated System" />
          <EcomIconCard icon={<FaTags />} title="Coupons & Promotions" />
          <EcomIconCard icon={<FaTruck />} title="Logistics Solutions" />
          <EcomIconCard icon={<FaCreditCard />} title="Payment Gateways" />
          <EcomIconCard icon={<FaPhone />} title="IVR Tollfree Service" />
        </section>

        {/* Planning + Features */}
        <div className="grid md:grid-cols-2 gap-12 py-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Strategic & Tactical Planning</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>SSL Security & Hosting</li>
              <li>Content & Social Media Management</li>
              <li>Search Engine Optimization</li>
              <li>App Store Optimization</li>
              <li>Digital Campaigns (Email, Quora, Affiliates)</li>
              <li>UI/UX Design & Branding Strategy</li>
              <li>Online Reputation Management</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Ecommerce Website Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>One-click Checkout & Mobile Optimization</li>
              <li>Product Variants, Coupons, & Wishlists</li>
              <li>Inventory & Order Management</li>
              <li>Multi-location Logistics & Delivery</li>
              <li>Real-Time SMS Alerts</li>
            </ul>
          </div>
        </div>

        {/* Solutions & Partnership Section */}
        <div className="grid md:grid-cols-2 gap-12 py-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>User-Centric Designs:</strong> Mobile-first, fast-loading experiences.</li>
              <li><strong>Seamless Integrations:</strong> Connect with CRMs, ERPs, & APIs.</li>
              <li><strong>ROI-Driven Tactics:</strong> CTAs & conversion strategies that work.</li>
              <li><strong>Top-tier Security:</strong> PCI-DSS, SSL, and best practices.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Why TechSlideITS?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Unmatched Expertise:</strong> 10+ years in global ecommerce design.</li>
              <li><strong>Custom Solutions:</strong> Built to your niche & market position.</li>
              <li><strong>Lifetime Support:</strong> Continuous growth-focused partnership.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Let’s turn your ecommerce idea into a high-performing digital storefront.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <motion.section
        className="relative bg-gradient-to-br from-red-600 to-pink-500 text-white py-20 px-6 overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-0 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <h4 className="text-3xl md:text-4xl font-bold leading-snug max-w-2xl">
            Ready to <span className="text-yellow-200">Scale Your Ecommerce Business</span> with TechSlideITS?
          </h4>
          <a
            href="/contact"
            className="bg-white text-red-600 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center gap-2 text-lg"
          >
            Get Started Now <span className="animate-pulse">→</span>
          </a>
        </div>
      </motion.section>
    </div>
  );
}

// Enhanced Reusable Card
function EcomIconCard({ icon, title }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md border border-blue-100 hover:shadow-xl transition-transform hover:scale-[1.03] flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-white bg-blue-600 p-4 rounded-full text-2xl mb-4 shadow">{icon}</div>
      <h4 className="text-lg font-bold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 mt-2">
        End-to-end service from strategy to launch—crafted for growth.
      </p>
    </motion.div>
  );
}
