import { useState, useEffect } from 'react';
import axios from '../../api/axios';
import ContentEditor from './ContentEditor';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminBlogForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const [tagsRes, categoriesRes] = await Promise.all([
          axios.get('/meta/tags'),
          axios.get('/meta/categories'),
        ]);
        setAllTags(tagsRes.data);
        setCategories(categoriesRes.data);
      } catch (err) {
        console.error(err);
        toast.error('Failed to load tags/categories');
      }
    };
    fetchMeta();
  }, []);

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);
    try {
      const res = await axios.post('/upload-image', formData);
      return res.data.imageUrl;
    } finally {
      setUploading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleTagChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setTags(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    let imageUrl = '';
    if (image) {
      imageUrl = await uploadImageToCloudinary(image);
    }

    const blogData = {
      title,
      content,
      category,
      tags,
      image: imageUrl,
    };

    try {
      await axios.post('/blogs', blogData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Blog published successfully!');
      navigate(`/${import.meta.env.VITE_ADMIN_SECRET}/blogs`);
    } catch (err) {
      console.error(err);
      toast.error('Failed to publish blog.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 lg:px-0">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Create New Blog Post</h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-10">
        {/* Left Panel */}
        <div className="md:col-span-2 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <ContentEditor value={content} onChange={setContent} />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              required
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags <span className="text-xs text-gray-500">(Hold Ctrl/Cmd for multiple)</span>
            </label>
            <select
              multiple
              value={tags}
              onChange={handleTagChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md h-32 shadow-sm"
            >
              {allTags.map((tag) => (
                <option key={tag._id} value={tag.name}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-600"
            />
            {imagePreview && (
              <div className="mt-3">
                <p className="text-sm text-gray-500 mb-1">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-md border shadow"
                />
              </div>
            )}
            {uploading && <p className="text-sm text-blue-600 mt-2">Uploading image...</p>}
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-md shadow transition duration-300"
            >
              Publish Blog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
