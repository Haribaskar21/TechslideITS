import { useEffect, useState } from "react";
import axios from "../api/axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBlog, FaTags, FaFolderOpen } from "react-icons/fa";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const [blogsRes, categoriesRes, tagsRes] = await Promise.all([
        axios.get("/blogs", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get("/meta/categories", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get("/meta/tags", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setBlogs(blogsRes.data);
      setCategories(categoriesRes.data);
      setTags(tagsRes.data);
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    }
  };

  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "N/A";

  const getLatestDate = (items) => {
    if (!items.length) return null;
    const sorted = [...items].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return sorted[0]?.createdAt;
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <h2
        className="text-4xl font-extrabold text-blue-900 mb-10"
        data-aos="fade-down"
      >
        Admin Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <DashboardCard
          icon={<FaBlog className="text-4xl text-blue-600 mb-2" />}
          title="Total Blogs"
          count={blogs.length}
          latest={formatDate(getLatestDate(blogs))}
          delay="0"
        />

        <DashboardCard
          icon={<FaFolderOpen className="text-4xl text-green-600 mb-2" />}
          title="Total Categories"
          count={categories.length}
          latest={formatDate(getLatestDate(categories))}
          delay="100"
        />

        <DashboardCard
          icon={<FaTags className="text-4xl text-purple-600 mb-2" />}
          title="Total Tags"
          count={tags.length}
          latest={formatDate(getLatestDate(tags))}
          delay="200"
        />
      </div>
    </div>
  );
}

function DashboardCard({ icon, title, count, delay }) {
  return (
    <div
      className="bg-white hover:shadow-xl transition duration-300 rounded-xl p-6 text-center border border-blue-100 ring-1 ring-blue-100"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-4xl font-bold text-blue-700 mb-1">{count}</p>
    </div>
  );
}
