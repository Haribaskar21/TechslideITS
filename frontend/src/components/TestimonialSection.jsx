import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "Software Engineer",
    image: "/images/user1.jpg",
    quote:
      "Working with TechSlideITS was an amazing experience. They truly understand tech solutions.",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Project Manager",
    image: "/images/user2.jpg",
    quote:
      "Their team is super professional and always delivers on time. Highly recommended!",
  },
  {
    id: 3,
    name: "Raj Kumar",
    title: "CTO at FinCorp",
    image: "/images/user3.jpg",
    quote:
      "We rely on their tech expertise for critical solutions — very satisfied with their work.",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-blue-600 uppercase">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
          What Customers Say
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Over 25 years working in IT services developing software applications and mobile apps for clients all over the world.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Image */}
          <div className="relative w-[280px] h-[280px] flex-shrink-0 rounded-full border-[10px] border-orange-500 overflow-hidden shadow-lg">
            <img
              src="/assets/testimonial-2.png"
              alt="Client"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimonial Card */}
          <div className="w-full max-w-xl relative h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-white p-8 rounded-xl shadow-xl border-l-4 border-blue-600 text-left"
              >
                <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  “{current.quote}”
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{current.name}</h4>
                    <p className="text-sm text-gray-500">{current.title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                i === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
