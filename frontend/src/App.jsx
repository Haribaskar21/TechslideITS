import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layouts
import PublicLayout from './layout/PublicLayout';
import AdminLayout from './layout/AdminLayout';

// Public Pages
import Home from './pages/Home';
import Contact from './pages/ContactSection';
import About from './pages/About';
import Services from './pages/Services';
import WebDevelopment from './pages/WebDevelopment';
import PaymentGateway from './pages/PaymentGateway';
import TollFreePage from './pages/TollFreePage';
import SocialMediaMarketingPage from './pages/SocialMediaMarketing';
import EcommerceServicesPage from './pages/EcommerceServicesPage';
import SEOServicePage from './pages/SEOServicePage';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';

// Admin Pages
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminBlogList from './pages/admin/AdminBlogList';
import AdminBlogForm from './pages/admin/AdminBlogForm';
import AdminBlogEdit from './pages/admin/AdminBlogEdit';
import AllCategories from './pages/admin/AllCategories';
import AllTags from './pages/admin/AllTags';

// Route Protection
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';

const adminSecret = import.meta.env.VITE_ADMIN_SECRET;

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <Routes>

        {/* ---------- PUBLIC ROUTES ---------- */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="payment-gateway" element={<PaymentGateway />} />
          <Route path="social-media-marketing" element={<SocialMediaMarketingPage />} />
          <Route path="toll-free" element={<TollFreePage />} />
          <Route path="ecommerce-services" element={<EcommerceServicesPage />} />
          <Route path="seo-service" element={<SEOServicePage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
        </Route>

        {/* ---------- ADMIN LOGIN ROUTE ---------- */}
        <Route path={`/${adminSecret}/login`} element={<AdminLogin />} />

        {/* ---------- PROTECTED ADMIN ROUTES ---------- */}
        <Route path={`/${adminSecret}`} element={<AdminLayout />}>
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="blogs"
            element={
              <ProtectedRoute>
                <AdminBlogList />
              </ProtectedRoute>
            }
          />
          <Route
            path="blogs/new"
            element={
              <ProtectedRoute>
                <AdminBlogForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="blogs/edit/:id"
            element={
              <ProtectedRoute>
                <AdminBlogEdit />
              </ProtectedRoute>
            }
          />
          <Route
            path="categories"
            element={
              <ProtectedRoute>
                <AllCategories />
              </ProtectedRoute>
            }
          />
          <Route
            path="tags"
            element={
              <ProtectedRoute>
                <AllTags />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* ---------- 404 PAGE ---------- */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen text-3xl text-red-600 font-semibold">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
