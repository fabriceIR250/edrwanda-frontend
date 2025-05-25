// src/admin/pages/Courses/CreateEdit.js
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSave, FaArrowLeft } from 'react-icons/fa';

const CourseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    title: '',
    description: '',
    category: 'Technology',
    level: 'Beginner',
    duration: '',
    price: 'FREE',
    language: 'English',
    image_url: ''
  });
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id && id !== 'new') {
      setIsEditing(true);
      const fetchCourse = async () => {
        try {
          const response = await axios.get(`https://edrwanda-backend.onrender.com/api/courses?id=eq.${id}`);
          if (response.data && response.data.length > 0) {
            setCourse(response.data[0]);
          }
        } catch (error) {
          console.error('Error fetching course:', error);
        }
      };
      fetchCourse();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isEditing) {
        await axios.patch(`https://edrwanda-backend.onrender.com/api/courses?id=eq.${id}`, course);
      } else {
        await axios.post('https://edrwanda-backend.onrender.com/api/courses', course);
      }
      navigate('/admin/courses');
    } catch (error) {
      console.error('Error saving course:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {isEditing ? 'Edit Course' : 'Create New Course'}
        </h1>
        <button
          onClick={() => navigate('/admin/courses')}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <FaArrowLeft className="mr-1" /> Back to Courses
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={course.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              value={course.category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Technology">Technology</option>
              <option value="Business">Business</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Language">Language</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={course.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
            <select
              name="level"
              value={course.level}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
            <input
              type="text"
              name="duration"
              value={course.duration}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
            <input
              type="text"
              name="language"
              value={course.language}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            type="text"
            name="image_url"
            value={course.image_url}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-rwanda-green text-white px-4 py-2 rounded flex items-center"
          >
            <FaSave className="mr-2" /> {loading ? 'Saving...' : 'Save Course'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;