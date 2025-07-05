import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import ContentEditor from './ContentEditor';
import { toast } from 'react-toastify';

export default function AdminBlogEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [existingImage, setExistingImage] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/blogs/${id}`);
        const blog = res.data;
        setTitle(blog.title);
        setContent(blog.content);
        setCategory(blog.category);
        setTags(blog.tags || []);
        setExistingImage(blog.image);
      } catch (err) {
        console.error(err);
        toast.error('Failed to fetch blog');
      }
    };

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
        toast.error('Failed to fetch tags/categories');
      }
    };

    fetchBlog();
    fetchMeta();
  }, [id]);

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);
    const res = await axios.post('/upload-image', formData);
    setUploading(false);
    return res.data.imageUrl;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleTagChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setTags(selected);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    let imageUrl = existingImage;
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
      await axios.put(`/blogs/${id}`, blogData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Blog updated successfully!');
      navigate(`/${import.meta.env.VITE_ADMIN_SECRET}/blogs`);
    } catch (err) {
      console.error(err);
      toast.error('Failed to update blog');
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">Edit Blog Post</h2>

      <form onSubmit={handleUpdate} className="grid md:grid-cols-3 gap-10">
        {/* Left Panel */}
        <div className="md:col-span-2 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm focus:ring-blue-500"
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
              Tags <span className="text-xs text-gray-500">(Hold Ctrl/Cmd to select multiple)</span>
            </label>
            <select
              multiple
              value={tags}
              onChange={handleTagChange}
              className="w-full px-4 py-3 border border-gray-300 rounded h-32 shadow-sm"
            >
              {allTags.map((tag) => (
                <option key={tag._id} value={tag.name}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>

          {/* Image Preview */}
          {(existingImage || preview) && (
            <div>
              <p className="text-sm text-gray-600 mb-1">Current Image:</p>
              <img
                src={preview || existingImage}
                alt="Preview"
                className="w-full h-40 object-cover rounded border shadow"
              />
            </div>
          )}

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload New Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {uploading && <p className="text-sm text-blue-600 mt-2">Uploading image...</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded shadow-md transition duration-300"
            >
              Update Blog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
