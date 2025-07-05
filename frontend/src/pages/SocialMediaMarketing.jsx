import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaArrowRight,
} from 'react-icons/fa';
import {
  MdOutlineAnalytics,
  MdOutlineShield,
  MdOutlinePeople,
  MdOutlineDateRange,
} from 'react-icons/md';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

export default function SocialMediaMarketingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* HERO BANNER */}
      <section
        className="bg-cover bg-center text-white py-32 px-6 relative"
        style={{
          backgroundImage: "url('/smm-hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#1C3C6D]/80 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            data-aos="fade-up"
          >
            Social Media Marketing Services
          </h1>
          <p
            className="text-lg mb-6 text-gray-100"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A premier digital and social media marketing company. Boost
            engagement and brand visibility today.
          </p>
          <button
            className="bg-[#26BF64] hover:bg-green-600 text-white px-8 py-3 rounded text-sm font-semibold transition"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Get Started <FaArrowRight className="inline ml-2" />
          </button>
        </div>
      </section>

      {/* Intro + Image Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-16 items-center">
        <div data-aos="fade-right">
          <p className="mb-6 text-sm leading-relaxed">
            Welcome to TechSlideITS, where we translate your business visions
            into compelling social media narratives. Recognized as a prominent
            social media marketing company, we harness the power of platforms
            to propel your brand to new digital heights.
          </p>
          <p className="mb-6 text-sm leading-relaxed">
            Social media marketing is the process of focusing attention on the
            brand or product through social platforms. Almost every business is
            trying to use all possible channels of communication with the
            consumer... (rest of content continues here)
          </p>
        </div>
        <img
          src="/smm-service-banner.png"
          alt="Social Media Marketing"
          className="rounded-xl shadow-xl"
          data-aos="fade-left"
        />
      </section>

      {/* Why SMM */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-start gap-4" data-aos="fade-up">
          <span className="text-red-600 text-xl">❗</span>
          <p className="text-sm text-gray-700">
            <strong>Why Social Media Marketing?</strong>
            <br />
            In today’s digital-driven age, your audience isn’t just browsing;
            they’re engaging, sharing, and influencing on social platforms...
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-center text-3xl font-bold mb-12">
          Features of Our Social Media Marketing Services
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-sm">
          {[
            [
              <HiOutlineSpeakerphone />,
              'Platform Optimization',
              'Tailored strategies for different platforms...',
            ],
            [
              <MdOutlineShield />,
              'Real-time Monitoring',
              'Keep track of brand mentions...',
            ],
            [
              <MdOutlineDateRange />,
              'Content Calendar Creation',
              'Systematic planning of posts...',
            ],
            [
              <MdOutlinePeople />,
              'Influencer Collaborations',
              'Connect with the right influencers...',
            ],
            [
              <FaUser />,
              'Community Management',
              'Building and managing online communities...',
            ],
            [
              <MdOutlineAnalytics />,
              'Performance Analytics',
              'Deep insights into campaign performance...',
            ],
          ].map(([icon, title, desc], i) => (
            <div key={i} className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="text-white bg-[#1C3C6D] p-3 rounded-full text-lg">
                {icon}
              </div>
              <div>
                <h4 className="font-semibold text-base mb-1">{title}</h4>
                <p className="text-gray-700 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#1C3C6D] text-white py-20 px-6">
        <h2 className="text-center text-3xl font-bold mb-12">
          Why Choose TechSlideITS?
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            ['Pioneering Approach', 'Our methods aren’t just tested; they’re innovative.'],
            ['Dedicated Team', 'Our specialists are your brand’s extended voice and vision.'],
            ['Measurable Results', 'Comprehensive reports and actionable insights.'],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="bg-white text-[#1C3C6D] rounded shadow p-6 text-center"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <h4 className="font-bold mb-2">{title}</h4>
              <p className="text-sm">{desc}</p>
              <a
                href="#"
                className="text-red-600 font-semibold inline-block mt-3 text-sm"
              >
                read more <FaArrowRight className="inline ml-1" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form + Benefits */}
      <section className="bg-white py-20 px-6 grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <form className="space-y-4" data-aos="fade-right">
          <div className="flex items-center gap-2 border-b border-[#1C3C6D] py-2">
            <FaUser />
            <input
              type="text"
              placeholder="Your name"
              className="w-full outline-none"
            />
          </div>
          <div className="flex items-center gap-2 border-b border-[#1C3C6D] py-2">
            <FaBuilding />
            <input
              type="text"
              placeholder="Company name"
              className="w-full outline-none"
            />
          </div>
          <div className="flex items-center gap-2 border-b border-[#1C3C6D] py-2">
            <FaEnvelope />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full outline-none"
            />
          </div>
          <textarea
            className="w-full border-b border-[#1C3C6D] p-2 outline-none"
            placeholder="Message"
            rows="4"
          ></textarea>
          <button className="bg-[#1C3C6D] text-white px-6 py-2 rounded hover:bg-[#16305a]">
            SUBMIT
          </button>
        </form>
        <div className="grid grid-cols-2 gap-8 text-sm" data-aos="fade-left">
          {[
            'wide coverage of the audience',
            'exact target audience membership',
            'interactive communication with Central Asia',
            'the possibility of creating demand for new products and services',
            'high speed of information dissemination',
            'Long-term effect',
          ].map((title, i) => (
            <div key={i}>
              <h4 className="text-[#1C3C6D] font-bold mb-1">{title}</h4>
              <p className="text-gray-700 text-sm">
                We offer design & build services from initial sketches to the final product.
              </p>
            </div>
          ))}
        </div>
      </section>

{/* Final CTA Section with Video Background */}
<section className="relative w-full h-[400px] md:h-[500px] overflow-hidden text-white text-center flex items-center justify-center">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute w-full h-full object-cover z-0"
  >
    <source src="/city-montage.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
  <div className="relative z-20 max-w-3xl px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Boost sales on Social Media!
    </h2>
    <button className="bg-[#26BF64] hover:bg-green-600 px-6 py-3 text-white rounded font-semibold">
      open a live account <FaArrowRight className="inline ml-2" />
    </button>
  </div>
</section>

    </div>
  );
}
