// src/admin/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import StatCard from '../components/StatCard';
import { 
  FaBook, 
  FaUsers, 
  FaGraduationCap, 
  FaChartLine 
} from 'react-icons/fa';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalUsers: 0,
    totalEnrollments: 0,
    activeUsers: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('https://edrwanda-backend.onrender.com/api/admin/stats');
        setStats(response.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-rwanda-green mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-green-100 p-4 rounded-lg text-red-500 text-center">
        <p>Error loading dashboard: {error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-red-100 rounded hover:bg-red-200"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<FaBook className="text-blue-500 text-2xl" />}
          title="Total Courses"
          value={stats.totalCourses}
        />
        <StatCard 
          icon={<FaUsers className="text-green-500 text-2xl" />}
          title="Total Users"
          value={stats.totalUsers}
        />
        <StatCard 
          icon={<FaGraduationCap className="text-purple-500 text-2xl" />}
          title="Enrollments"
          value={stats.totalEnrollments}
        />
        <StatCard 
          icon={<FaChartLine className="text-orange-500 text-2xl" />}
          title="Active Users"
          value={stats.activeUsers}
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="text-gray-500">
          <p>No recent activity to display</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;