import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error('Error fetching blog', err);
      }
    };

    fetchBlog();
  }, [id]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return isNaN(date)
      ? 'Date unavailable'
      : date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
  };

  if (!blog) return <p className="text-center py-16 text-gray-500">Loading blog...</p>;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white py-16 px-6 md:px-20 shadow-lg">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{blog.title}</h1>

          <p className="text-sm text-blue-200 italic mb-1">
            Posted on: {formatDate(blog.date)}
          </p>

          {blog.category && (
            <p className="text-sm text-blue-100">
              Category: <span className="font-semibold">{blog.category}</span>
            </p>
          )}

          {blog.tags?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white/20 text-sm px-3 py-1 rounded-full border border-white/30"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Blog Content */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-12" data-aos="fade-up">
        {/* Featured Image */}
        <img
          src={`http://localhost:8080/uploads/${blog.image}`}
          alt={blog.title}
          className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-10"
        />

        {/* Blog Body with Tailwind styling */}
        <div
          className="text-base leading-relaxed space-y-4 text-gray-800
            [&_h1]:text-3xl [&_h2]:text-2xl [&_h3]:text-xl
            [&_ul]:list-disc [&_ul]:ml-6
            [&_ol]:list-decimal [&_ol]:ml-6
            [&_li]:mb-1
            [&_a]:text-blue-600 [&_a:hover]:underline
            [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600
            [&_img]:rounded-md [&_img]:max-w-full [&_img]:my-4"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </section>
    </div>
  );
}
