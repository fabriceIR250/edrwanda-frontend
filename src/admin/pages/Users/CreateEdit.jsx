// src/admin/pages/Users/CreateEdit.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSave, FaArrowLeft, FaUser } from 'react-icons/fa';

const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: 'student',
    password: '',
    avatar_url: ''
  });
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id && id !== 'new') {
      setIsEditing(true);
      const fetchUser = async () => {
        try {
          const response = await axios.get(`https://edrwanda-backend.onrender.com/api/users?id=eq.${id}`);
          if (response.data && response.data.length > 0) {
            setUser(response.data[0]);
          }
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      };
      fetchUser();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isEditing) {
        await axios.patch(`https://edrwanda-backend.onrender.com/api/users?id=eq.${id}`, user);
      } else {
        await axios.post('https://edrwanda-backend.onrender.com/api/users', user);
      }
      navigate('/admin/users');
    } catch (error) {
      console.error('Error saving user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {isEditing ? 'Edit User' : 'Create New User'}
        </h1>
        <button
          onClick={() => navigate('/admin/users')}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <FaArrowLeft className="mr-1" /> Back to Users
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
        <div className="mb-6 flex items-center">
          <div className="mr-4">
            <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
              {user.avatar_url ? (
                <img 
                  src={user.avatar_url} 
                  alt={user.name} 
                  className="h-20 w-20 rounded-full object-cover"
                />
              ) : (
                <FaUser className="text-gray-500 text-3xl" />
              )}
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Avatar URL</label>
            <input
              type="text"
              name="avatar_url"
              value={user.avatar_url}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="https://example.com/avatar.jpg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              name="role"
              value={user.role}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isEditing ? 'New Password (leave blank to keep current)' : 'Password'}
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required={!isEditing}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-rwanda-green text-white px-4 py-2 rounded flex items-center"
          >
            <FaSave className="mr-2" /> {loading ? 'Saving...' : 'Save User'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;