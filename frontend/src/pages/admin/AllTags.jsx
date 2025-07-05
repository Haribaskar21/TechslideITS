import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AllTags() {
  const [tags, setTags] = useState([]);
  const [name, setName] = useState('');
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTags = async () => {
    try {
      const res = await axios.get('/meta/tags');
      setTags(res.data);
    } catch (err) {
      console.error('Error fetching tags', err);
      toast.error('Failed to fetch tags');
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.warning('Tag name cannot be empty');
      return;
    }

    setLoading(true);
    try {
      if (editId) {
        await axios.put(`/meta/tags/${editId}`, { name });
        toast.success('Tag updated');
      } else {
        await axios.post('/meta/tags', { name });
        toast.success('Tag added');
      }
      setName('');
      setEditId(null);
      fetchTags();
    } catch (err) {
      console.error('Error saving tag:', err.response?.data || err.message);
      toast.error('Failed to save tag');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this tag?')) return;

    try {
      await axios.delete(`/meta/tags/${id}`);
      toast.success('Tag deleted');
      fetchTags();
    } catch (err) {
      console.error('Delete error', err);
      toast.error('Failed to delete tag');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">🏷️ Manage Tags</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-lg shadow-md p-6 mb-8 space-y-4"
      >
        <h2 className="text-lg font-semibold text-gray-700">
          {editId ? '✏️ Edit Tag' : '➕ Add New Tag'}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            className="flex-1 border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter tag name"
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

      {/* Tag List */}
      <div className="space-y-4">
        {tags.length === 0 ? (
          <p className="text-gray-500">No tags available.</p>
        ) : (
          tags.map((tag) => (
            <div
              key={tag._id}
              className="flex justify-between items-center bg-white shadow-sm border border-gray-200 p-4 rounded-lg"
            >
              <span className="text-gray-800 font-medium">#{tag.name}</span>
              <div className="flex gap-4 text-sm">
                <button
                  onClick={() => {
                    setName(tag.name);
                    setEditId(tag._id);
                  }}
                  className="text-blue-600 hover:underline"
                  title="Edit tag"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(tag._id)}
                  className="text-red-600 hover:underline"
                  title="Delete tag"
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
