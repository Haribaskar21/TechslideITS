import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

export default function SolutionsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      title: 'Toll‑Free Number Service Provider',
      desc: 'Personalized IVR menus and routing, map multiple phone numbers to one virtual number.',
      icon: '☎️',
      color: 'text-purple-500',
      bgHover: 'hover:bg-purple-500',
    },
    {
      title: 'Payment Gateway Providers in India',
      desc: 'Secure payment processing with Paytm, Razorpay integrations and zero headache setup.',
      icon: '💳',
      color: 'text-blue-500',
      bgHover: 'hover:bg-blue-500',
    },
    {
      title: 'Integrated Logistics Solutions',
      desc: 'Advanced, scalable e‑commerce supply‑chain logistics in India.',
      icon: '📦',
      color: 'text-green-600',
      bgHover: 'hover:bg-green-600',
    },
    {
      title: 'Best SEO Company in Tamil Nadu',
      desc: 'Improve your ranking with full site audits and expert SEO support.',
      icon: '🔍',
      color: 'text-orange-500',
      bgHover: 'hover:bg-orange-500',
    },
    {
      title: 'Social Media Marketing Services',
      desc: 'Focused attention on your brand through social platforms with measurable results.',
      icon: '📱',
      color: 'text-pink-600',
      bgHover: 'hover:bg-pink-600',
    },
    {
      title: 'Premier Web Development Company',
      desc: 'Dynamic features, personalization, and transparent integrations for your brand.',
      icon: '💻',
      color: 'text-yellow-500',
      bgHover: 'hover:bg-yellow-500',
    },
    {
      title: 'eCommerce Website Designing & Solutions',
      desc: 'Unlimited personalization, seamless integrations, and growth-focused design.',
      icon: '🛒',
      color: 'text-cyan-600',
      bgHover: 'hover:bg-cyan-600',
    },
  ];

  const tabSections = [
    {
      key: 'website',
      label: 'Website',
      heading: 'Our dedicated Website Services',
      features: [
        { icon: '🖥️', title: 'Website Designing', desc: 'Unique website designs to establish your business online.' },
        { icon: '📈', title: 'Trendy Designs', desc: 'We offer top-notch modern designs tailored to your brand.' },
        { icon: '🗺️', title: 'Strategic Planning', desc: 'Business-first strategy before building your website.' },
        { icon: '⚙️', title: 'Business Automation', desc: 'Automate with ERP, HRM, LMS systems and more.' },
        { icon: '✍️', title: 'Content Creation', desc: 'High-ranking SEO-friendly content writing service.' },
        { icon: '🔒', title: 'Secure Coding', desc: 'Secure coding standards to block vulnerabilities.' },
      ],
    },
    {
      key: 'ecommerce',
      label: 'eCommerce',
      heading: 'Tailored eCommerce Solutions',
      features: [
        { icon: '💻', title: 'eCommerce Website', desc: 'Modern and scalable shopping platforms.' },
        { icon: '💳', title: 'Payment Gateway', desc: 'High-conversion, secure gateway integrations.' },
        { icon: '🚚', title: 'Logistics Solutions', desc: 'Seamless multi-city logistics with auto-tracking.' },
        { icon: '🛍️', title: 'Multi Vendor Solution', desc: 'Enable third-party sellers on your platform.' },
        { icon: '📞', title: 'Customer Care', desc: 'IVR setup with CRM, call logs, and call routing.' },
        { icon: '🖥️', title: 'eCommerce Hosting', desc: 'Blazing fast and secure eCommerce hosting.' },
      ],
    },
    {
      key: 'marketing',
      label: 'Marketing',
      heading: 'Building Your Brand',
      features: [
        { icon: '🌐', title: 'Global SEO', desc: 'Expand your business internationally with global SEO.' },
        { icon: '📍', title: 'Local SEO', desc: 'Rank higher in searches for your local audience.' },
        { icon: '📣', title: 'Social Media Marketing', desc: 'Trend-driving campaigns across platforms.' },
        { icon: '👥', title: 'Social Media Management', desc: 'End-to-end management of social platforms.' },
        { icon: '📊', title: 'Digital Marketing', desc: 'Run high-ROI campaigns across all digital channels.' },
        { icon: '⭐', title: 'Branding & ORM', desc: 'Build a credible brand with ORM & reputation strategy.' },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(tabSections[0].key);

  const current = tabSections.find((t) => t.key === activeTab);
  const [first, highlight, ...rest] = current.heading.split(' ');

  return (
    <>
      {/* Services section */}
      <section className="py-24 px-4 md:px-10 bg-[#f7f9fc]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="text-sm text-blue-500 font-semibold uppercase">Services</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 max-w-xl">
                What Solutions We Provide to Our Valued Customers
              </h2>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-2.5 rounded-full">
              Get Started
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                data-aos="fade-up"
                whileHover={{ scale: 1.03 }}
                className={`group bg-white rounded-2xl border border-gray-100 shadow-md p-6 md:p-8 transition duration-300 cursor-pointer hover:text-white ${service.bgHover}`}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-4xl ${service.color} group-hover:text-white`}>
                    {service.icon}
                  </span>
                  <span className="text-5xl font-bold text-gray-200 group-hover:text-white opacity-10">
                    {`0${idx + 1}`}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed group-hover:text-white">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed features section */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex space-x-4 justify-center mb-10 relative">
            {tabSections.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-full font-medium transition ${
                  activeTab === tab.key
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-blue-900 leading-snug">
                {first}{' '}
                <span className="text-orange-500 italic">{highlight}</span>{' '}
                {rest.join(' ')}
              </h2>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {current.features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  data-aos="fade-up"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 bg-[#f9fafb] hover:bg-orange-50 p-4 rounded-lg border border-gray-100 transition"
                >
                  <div className="text-3xl text-orange-500">{feat.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">{feat.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
