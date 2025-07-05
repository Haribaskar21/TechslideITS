import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AllCategories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('/meta/categories');
      setCategories(res.data);
    } catch (err) {
      console.error('Error fetching categories', err);
      toast.error('Failed to fetch categories');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return toast.warn('Category name cannot be empty.');

    setLoading(true);
    try {
      if (editId) {
        await axios.put(`/meta/categories/${editId}`, { name });
        toast.success('Category updated successfully');
      } else {
        await axios.post('/meta/categories', { name });
        toast.success('Category added successfully');
      }

      setName('');
      setEditId(null);
      fetchCategories();
    } catch (err) {
      console.error('Error saving category:', err);
      toast.error('Failed to save category');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this category?');
    if (!confirm) return;

    try {
      await axios.delete(`/meta/categories/${id}`);
      toast.success('Category deleted');
      fetchCategories();
    } catch (err) {
      console.error('Delete error', err);
      toast.error('Failed to delete category');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">📁 Manage Categories</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-lg shadow p-6 mb-8 space-y-4"
      >
        <h2 className="text-lg font-semibold text-gray-700">
          {editId ? '✏️ Edit Category' : '➕ Add New Category'}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            className="flex-1 border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className={`px-6 py-2 rounded font-medium text-white transition ${
              editId ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={loading}
          >
            {loading ? 'Saving...' : editId ? 'Update' : 'Add'}
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {categories.length === 0 ? (
          <p className="text-gray-500">No categories found.</p>
        ) : (
          categories.map((cat) => (
            <div
              key={cat._id}
              className="flex justify-between items-center bg-white shadow-sm border border-gray-200 p-4 rounded-lg"
            >
              <span className="text-gray-800 font-medium">{cat.name}</span>

              <div className="flex gap-2 text-sm">
                <button
                  onClick={() => {
                    setName(cat.name);
                    setEditId(cat._id);
                  }}
                  className="text-blue-600 hover:underline"
                  title="Edit Category"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(cat._id)}
                  className="text-red-600 hover:underline"
                  title="Delete Category"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
