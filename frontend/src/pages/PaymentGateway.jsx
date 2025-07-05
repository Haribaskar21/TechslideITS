import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";

export default function PaymentGatewayPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center text-white py-24 px-4 text-center relative"
        style={{ backgroundImage: "url('/your-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            For a future where every transaction counts, align with <br className="hidden md:block" />
            <span className="text-white font-extrabold">TechSlideITS</span> – India's trusted name in <br className="hidden md:block" />
            payment gateway integration.
          </h1>
          <button className="mt-4 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded flex items-center mx-auto">
            Contact Us <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Intro + Form */}
      <div className="max-w-7xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4">Payment Gateway Providers in India</h2>
          <p className="text-lg mb-6 text-gray-700">
            Top payment gateway providers in India offering seamless payment gateway integration service. Experience best-in-class payment gateway services in Tamilnadu for secure transactions.
          </p>
          <p className="mb-6 text-sm leading-relaxed">
            At TechSlideITS, we understand the pulse of digital commerce in India. Partnered with leading platforms like Razorpay, Instamojo, PayU, and Paytm — we present an integration platform unparalleled in security and functionality.
          </p>
          <ul className="list-disc ml-5 text-sm space-y-2">
            <li>Coverage in 200+ Countries and Territories</li>
            <li>45+ Payment Methods</li>
            <li>Available in 30+ Languages</li>
            <li>100 Display & Billing Currencies</li>
            <li>24/7 Shopper Support</li>
          </ul>
        </div>

        <form className="bg-gray-100 p-6 rounded-xl shadow space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name *</label>
            <input className="w-full p-2 border rounded" type="text" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone *</label>
            <input className="w-full p-2 border rounded" type="tel" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Website Type *</label>
            <select className="w-full p-2 border rounded">
              <option>Booking Website</option>
              <option>Android App</option>
              <option>iOS App</option>
              <option>Others</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Website or App is live? *</label>
            <div className="space-y-1">
              <label><input type="radio" name="live" /> Yes, It is working</label><br />
              <label><input type="radio" name="live" /> No, Under construction only</label>
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Integration Support Required?</label>
            <div className="space-y-1">
              <label><input type="radio" name="support" /> Yes, Integration support required</label><br />
              <label><input type="radio" name="support" /> No, We will take care of that</label>
            </div>
          </div>
          <button className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">
            Submit
          </button>
        </form>
      </div>

      {/* Why Choose & Benefits */}
      <div className="bg-white py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Why Choose TechSlideITS?</h3>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li><strong>Esteemed Partnerships:</strong> Alliances with Razorpay, Instamojo, PayU, and Paytm.</li>
            <li><strong>Fluid Integration:</strong> Seamless and efficient integration process.</li>
            <li><strong>Focused Regional Services:</strong> Specialized services in Tamilnadu and beyond.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Benefits of Our Payment Gateway Services</h3>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li><strong>Fortified Security:</strong> Advanced encryption and safe transactions.</li>
            <li><strong>Intuitive User Experience:</strong> Smooth and streamlined process for all users.</li>
            <li><strong>Adaptable Solutions:</strong> Suits startups to conglomerates.</li>
            <li><strong>Round-the-Clock Support:</strong> 24/7 dedicated team for business continuity.</li>
          </ul>
        </div>
      </div>

      {/* Full Width Features */}
      <div className="bg-gray-50 py-20 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Overall payment processing which seems local, with no headache at all.
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-sm">
          {[
            ["Intelligent Payment Routing", "Smart routing to maximize approval rates for cross-border transactions."],
            ["Multi-Currency Management", "Boost approval rates & improve customer experience by 25%."],
            ["Merchant of Record Model", "We manage billing, compliance, and tax for you as the merchant."],
            ["Payment Service Provider Model", "For international payments with sales tax and local remittance."],
            ["Dedicated Support", "Toll-free support for all merchants and gateway users."],
            ["India’s most widely-used checkout", "250M+ users prefer Paytm Checkout for smooth experience."],
          ].map(([title, desc], i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="text-blue-800 text-2xl">★</div>
              <div>
                <h4 className="font-semibold text-base mb-1">{title}</h4>
                <p className="text-gray-700 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why TechSlide? */}
      <div className="bg-blue-900 text-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why TechSlide?</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {["Enhance the Payment", "Easily Integrate", "Auto Updates"].map((title, i) => (
            <div key={i} className="bg-white text-blue-900 rounded shadow p-6 text-center">
              <h4 className="font-bold mb-2">{title}</h4>
              <p className="text-sm">
                {title === "Enhance the Payment" && "250M+ cards, 100M+ bank accounts & UPI IDs supported."}
                {title === "Easily Integrate" && "Add Paytm Checkout with just a few lines of code."}
                {title === "Auto Updates" && "Get automatic updates with best-in-class tech."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
