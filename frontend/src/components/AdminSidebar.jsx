import { jwtDecode } from 'jwt-decode';
import { Link, useLocation } from 'react-router-dom';
import {
  FaRegChartBar,
  FaBlog,
  FaTags,
  FaFolder,
} from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const adminSecret = import.meta.env.VITE_ADMIN_SECRET;

const navItems = [
  { to: `/${adminSecret}/dashboard`, label: 'Dashboard', icon: <FaRegChartBar /> },
  { to: `/${adminSecret}/blogs`, label: 'Manage Blogs', icon: <FaBlog /> },
  { to: `/${adminSecret}/categories`, label: 'Categories', icon: <FaFolder /> },
  { to: `/${adminSecret}/tags`, label: 'Tags', icon: <FaTags /> }
];

const AdminSidebar = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');

  let isAdmin = false;
  try {
    const decoded = jwtDecode(token);
    isAdmin = decoded.role === 'admin';
  } catch {
    isAdmin = false;
  }

  if (!isAdmin) return null;

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-[#121726] via-[#0b0c26] to-[#04050f] text-white shadow-2xl hidden md:flex flex-col justify-between border-r border-[#1e2138]">
      
      {/* Branding */}
      <div className="px-6 py-8 border-b border-[#2a2e48] bg-[#0f1329] shadow-inner">
        <div className="flex items-center space-x-4">
          <img
            src="/assets/logo-hq.png"
            alt="TechslideITS Logo"
            className="h-14 w-14 object-contain drop-shadow-lg animate-pulse"
          />
          <div>
            <h1 className="text-xl font-bold text-white tracking-wider leading-tight">TechslideITS</h1>
            <p className="text-sm text-cyan-200 mt-1">Admin Panel</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-white/60 leading-snug">
          Control center for blogs, categories & tags.
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 pt-6 pb-4 space-y-2 overflow-y-auto">
        {navItems.map(({ to, label, icon }) => {
          const isActive = location.pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={`group flex items-center gap-4 px-5 py-3 rounded-md font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-[#202945] text-white shadow-md'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-lg group-hover:scale-110 transform transition-transform duration-200">
                {icon}
              </span>
              <span className="text-base tracking-wide">{label}</span>
            </Link>
          );
        })}

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = `/${adminSecret}/login`;
          }}
          className="w-full flex items-center gap-4 px-5 py-3 mt-8 rounded-md font-medium text-red-300 hover:text-white hover:bg-red-600 transition-all duration-200"
        >
          <span className="text-lg">
            <FiLogOut />
          </span>
          <span className="text-base tracking-wide">Logout</span>
        </button>
      </nav>

      {/* Footer */}
      <footer className="text-center text-xs text-white/60 py-5 bg-[#0f1329] border-t border-[#2a2e48]">
        <p className="text-sm text-cyan-100 font-semibold">© {new Date().getFullYear()} TechslideITS</p>
        <p className="text-xs text-gray-400 mt-1">All rights reserved.</p>
      </footer>
    </aside>
  );
};

export default AdminSidebar;
