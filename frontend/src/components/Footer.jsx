import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-100 to-white pt-16 pb-6 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="assets/logo-hq.png" alt="Logo" className="w-l h-20" />

          </div>
          <p className="text-sm leading-relaxed">
            Sedut perspiciatis unde omnis iste natus error sitluten acc usantium
            doloremque denounce with illo inventore veritatis
          </p>
          <div className="flex gap-4 mt-4">
            <span className="bg-white p-2 rounded-full shadow">
              <Facebook className="w-4 h-4" />
            </span>
            <span className="bg-white p-2 rounded-full shadow">
              <Twitter className="w-4 h-4" />
            </span>
            <span className="bg-white p-2 rounded-full shadow">
              <Instagram className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* IT Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">IT Services</h3>
          <ul className="text-sm space-y-2">
            <li>Software Development</li>
            <li>Web Development</li>
            <li>Analytic Solutions</li>
            <li>Cloud and DevOps</li>
            <li>Product Design</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-blue-500" />
              374 FA Tower, William S Blvd 2721, IL, USA
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              (+880)155-69569
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              info@yourmail.com
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              Opening Hours: 10:00 - 18:00
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-4 leading-relaxed">
            We denounce with righteous indignation and dislike men who are so beguiled and demo realized.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-full py-2 px-4 pr-12 bg-white border border-gray-300 focus:outline-none"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-500 to-blue-800 text-white p-2 rounded-full hover:scale-105 transition-transform">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-300 pt-4 text-center text-sm">
        © 2025 All Rights Reserved. Developed By <span className="font-semibold">RSTheme</span>
        <div className="flex justify-center mt-2 space-x-4 text-gray-600">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">FAQs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
