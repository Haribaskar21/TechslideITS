import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import { toast } from 'react-toastify';

export default function AdminBlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('/blogs');
        setBlogs(res.data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        toast.error('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
      toast.success('Blog deleted successfully');
    } catch (err) {
      console.error('Error deleting blog:', err);
      toast.error('Failed to delete blog');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-blue-800">Manage Blogs</h2>
        <Link
          to="new"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md shadow transition"
        >
          <span>➕</span> New Blog
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-500 text-sm">Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="text-gray-500 text-sm">No blogs available.</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all flex flex-col overflow-hidden"
            >
              <div className="h-44 bg-gray-100">
                <img
                  src={blog.image || 'https://via.placeholder.com/600x400?text=No+Image'}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">{blog.title}</h3>
                  <p className="text-xs text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>

                <div className="text-sm text-gray-600 mb-2">
                  <strong>Category:</strong> {blog.category || 'Uncategorized'}
                </div>

                {blog.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex items-center justify-between border-t pt-4">
                  <Link
                    to={`edit/${blog._id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition"
                    title="Edit Blog"
                  >
                    ✏️ Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium transition"
                    title="Delete Blog"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
