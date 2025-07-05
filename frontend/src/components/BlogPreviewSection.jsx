import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "../api/axios";

// Utility to strip HTML tags for excerpt
function stripHTML(html) {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

export default function BlogPreviewSection() {
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/blogs");
      const sorted = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setLatestBlogs(sorted.slice(0, 3));
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="text-center mb-12">
        <p className="text-sm text-blue-600 font-semibold uppercase">Blogs</p>
        <h2 className="text-3xl font-bold">Latest Tips & Tricks</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-3">
          We've been building creative tools together for over a decade and have a deep appreciation for software applications.
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestBlogs.map((post) => (
          <div key={post._id} data-aos="fade-up" className="bg-white rounded-xl shadow p-4">
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="rounded-xl w-full h-52 object-cover"
              />
              <span className="absolute bottom-2 right-2 bg-blue-700 text-white text-sm px-3 py-1 rounded-full">
                {post.category || "General"}
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="text-sm text-gray-400 flex gap-4">
                <span>📅 {new Date(post.date).toLocaleDateString()}</span>
                <span>👤 admin</span>
              </div>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600 text-sm">
                {stripHTML(post.content).slice(0, 100)}...
              </p>
              <a
                href={`/blog/${post._id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
