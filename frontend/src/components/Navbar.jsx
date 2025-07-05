import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaTh,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";// Update the path as needed

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close mobile/side menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSideMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isSticky ? "bg-white shadow text-black" : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="assets/logo-hq.png" alt="TechslideITS Logo" className="h-8" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8 font-semibold text-sm">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`cursor-pointer hover:text-[#26BF64] transition ${
                    location.pathname === item.path ? "text-[#26BF64]" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div
            className={`hidden lg:flex items-center gap-6 text-lg ${
              isSticky ? "text-black" : "text-white"
            }`}
          >
            <FaSearch className="cursor-pointer hover:text-[#26BF64] transition" />
            <FaTh
              className="cursor-pointer hover:text-[#26BF64] transition"
              onClick={() => setSideMenuOpen(true)}
            />
          </div>

          {/* Mobile Menu Icon */}
          <div
            className={`lg:hidden text-2xl cursor-pointer ${
              isSticky ? "text-black" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Side Menu Overlay */}
      {sideMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
          onClick={() => setSideMenuOpen(false)}
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[999] shadow-lg transform transition-transform duration-300 ${
          sideMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full border-l border-gray-200">
          {/* Close Button */}
          <div className="flex justify-end">
            <FaTimes
              className="text-2xl cursor-pointer text-gray-700"
              onClick={() => setSideMenuOpen(false)}
            />
          </div>

          {/* Slide Menu Content */}
          <div className="mt-6 flex flex-col gap-8 px-2">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="assets/logo-hq.png" alt="Logo" className="h-9" />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed border-l-4 border-[#26BF64] pl-4 italic">
              Empowering businesses through innovative technology solutions.
              We deliver top-tier IT services, custom software, and reliable support to help you scale.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-sm border-t pt-4">
              <div className="flex items-start gap-3">
                <span className="text-[#03228f] font-medium min-w-[75px]">📍 Address:</span>
                <span className="text-gray-700">2 Indra Nagar, MC Road, Thanjavur-613001</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#03228f] font-medium min-w-[75px]">✉️ Email:</span>
                <span className="text-gray-700">hello@techslideitsolutions.com</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#03228f] font-medium min-w-[75px]">📞 Phone:</span>
                <span className="text-gray-700">+91 95004-66919</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-2 border-t">
              <span className="text-[#03228f] font-semibold block mb-2">Follow Us</span>
              <div className="flex gap-3">
                {[FaFacebookF, FaTwitter, FaPinterestP, FaInstagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-[#03228f] p-2 rounded-full text-white hover:bg-[#021a73] transition"
                    title="Social"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
