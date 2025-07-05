import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchCategories();
    fetchTags();
    fetchBlogs();
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [selectedCategory, selectedTag]);

  const fetchBlogs = async () => {
    try {
      const params = {};
      if (selectedCategory) params.category = selectedCategory;
      if (selectedTag) params.tag = selectedTag;

      const res = await axios.get('/blogs', { params });
      setBlogs(res.data);
    } catch (err) {
      console.error('Error fetching blogs', err);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get('/meta/categories');
      setCategories(res.data);
    } catch (err) {
      console.error('Error fetching categories', err);
    }
  };

  const fetchTags = async () => {
    try {
      const res = await axios.get('/meta/tags');
      setTags(res.data);
    } catch (err) {
      console.error('Error fetching tags', err);
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return isNaN(date)
      ? 'Date unavailable'
      : date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-20 px-6 md:px-20 shadow-md">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Insights, strategies, and updates from our finance & tech experts.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 pt-10">
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 shadow-sm bg-white text-gray-700"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat.name}>{cat.name}</option>
            ))}
          </select>

          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 shadow-sm bg-white text-gray-700"
          >
            <option value="">All Tags</option>
            {tags.map((tag) => (
              <option key={tag._id} value={tag.name}>{tag.name}</option>
            ))}
          </select>

          {(selectedCategory || selectedTag) && (
            <button
              onClick={() => {
                setSelectedCategory('');
                setSelectedTag('');
              }}
              className="text-sm underline text-gray-500 hover:text-blue-700"
            >
              Clear Filters
            </button>
          )}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 md:px-10 pb-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12" data-aos="fade-up">
          Latest Blog Posts
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              data-aos="fade-up"
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col"
            >
              <img
                src={`http://localhost:8080/uploads/${blog.image}`}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {blog.content.replace(/<[^>]+>/g, '').slice(0, 150)}...
                </p>

                <div className="mt-auto">
                  <div className="text-xs text-gray-500 italic mb-2">
                    {formatDate(blog.date)} • {blog.category || 'Uncategorized'}
                  </div>

                  <Link
                    to={`/blog/${blog._id}`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {blogs.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No blog posts available at the moment.
          </p>
        )}
      </section>
    </div>
  );
}
