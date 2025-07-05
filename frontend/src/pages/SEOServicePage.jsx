import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SEOServicePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Enhanced Banner */}
      <motion.section
        className="relative px-6 py-24 md:py-32 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-white text-center overflow-hidden shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/pattern.svg')] bg-repeat z-0"></div>

        {/* Banner Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="md:w-1/2 text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Boost Your Visibility.<br />
              Dominate Search Results.
            </h1>
            <p className="text-lg md:text-xl mb-6 font-light">
              Whether you're a startup in Trichy or a brand in Bangalore, our tailored <span className="font-bold">local SEO services</span> help your business rise to the top—literally.
            </p>
            <a
              href="#seo-form"
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Get Free SEO Consultation →
            </a>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="assets/seo.png"
              alt="SEO Boost Your Business"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-white"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Array */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Array of SEO and Digital Marketing Services</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>Holistic SEO Strategy:</strong> On-page, off-page, and technical SEO to boost traffic.</li>
            <li><strong>Local SEO Mastery:</strong> Location-specific optimizations for regional reach.</li>
            <li><strong>Content Creation & Optimization:</strong> SEO-driven content to engage readers.</li>
            <li><strong>Link Building:</strong> Authority-building backlinks.</li>
            <li><strong>Digital Marketing Services:</strong> PPC, social media, and email marketing.</li>
          </ul>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-4 text-blue-900">International / Enterprise SEO</h3>
          <p className="mb-4 text-gray-700">
            Each campaign is uniquely built based on your target market, competition, and goals. Our services help
            multinationals reach global customers and improve ROI.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Rank Worldwide</li>
            <li>Collaborate Internationally</li>
            <li>Boost Marketing ROI</li>
          </ul>
        </motion.div>
      </section>

      {/* Local & Why Us */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Small Business / Local SEO</h3>
          <p className="mb-4 text-gray-700">
            Ranking for local keywords ensures your visibility to nearby customers. We help you list and optimize for platforms like Google Places and Yellow Pages.
          </p>
          <p className="text-gray-700">
            Ensure consistency in your NAP (Name, Address, Phone) across listings to increase trust and ranking.
          </p>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Why Partner with TechSlideITS?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Reputation:</strong> Leading SEO experts in the region.</li>
            <li><strong>Localized Focus:</strong> Custom strategies for local dominance.</li>
            <li><strong>Holistic Solutions:</strong> Full-spectrum digital marketing approach.</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Embark on a transformative journey with us—reach out to start ranking higher today.
          </p>
        </motion.div>
      </section>

      {/* Ecommerce & Organic */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Ecommerce SEO</h3>
          <p className="text-gray-700">
            Our tailored approach optimizes product and category pages to drive conversions and increase visibility.
            We focus on descriptions and technical SEO for each product.
          </p>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Ranking for Longevity & Prominence</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Target relevant audiences</li>
            <li>Help people find products/services easily</li>
            <li>Establish long-term brand prominence</li>
            <li>Lower cost of acquisition over time</li>
          </ul>
        </motion.div>
      </section>

      {/* CTA Form */}
      <motion.section id="seo-form" className="bg-blue-50 py-16 px-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-2">Want to be successful? Submit your details…</h3>
          <p className="mb-6 text-gray-600">You will be in the top position on Google!</p>
          <form className="grid gap-4 text-left">
            <input type="text" placeholder="Name *" required className="border p-3 rounded shadow-sm focus:ring focus:ring-blue-200" />
            <input type="tel" placeholder="Phone *" required className="border p-3 rounded shadow-sm focus:ring focus:ring-blue-200" />
            <input type="email" placeholder="Email *" required className="border p-3 rounded shadow-sm focus:ring focus:ring-blue-200" />
            <input type="url" placeholder="Website / URL" className="border p-3 rounded shadow-sm focus:ring focus:ring-blue-200" />
            <input type="text" placeholder="Company Name" className="border p-3 rounded shadow-sm focus:ring focus:ring-blue-200" />
            <button type="submit" className="bg-blue-900 text-white py-3 rounded font-semibold hover:bg-blue-800 transition shadow-md">Submit</button>
          </form>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section className="bg-red-500 py-10 text-white text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
          <h4 className="text-xl md:text-2xl font-semibold">Looking for a First-Class SEO Consultant?</h4>
          <a href="/contact" className="bg-blue-900 px-6 py-2 rounded hover:bg-blue-800 transition inline-block">CONTACT US →</a>
        </div>
      </motion.section>
    </div>
  );
}