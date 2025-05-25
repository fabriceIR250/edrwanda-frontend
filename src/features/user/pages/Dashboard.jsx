import { FaBook, FaChartLine, FaCertificate, FaComments } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../context/AuthContext';

const Dashboard = () => {
  const [stats, setStats] = useState([
    { title: "Active Courses", value: 0, icon: <FaBook />, color: "text-blue-500" },
    { title: "Progress", value: "0%", icon: <FaChartLine />, color: "text-green-500" },
    { title: "Certificates", value: 0, icon: <FaCertificate />, color: "text-purple-500" },
    { title: "Discussions", value: 0, icon: <FaComments />, color: "text-yellow-500" }
  ]);
  
  // Initialize as empty array instead of null
  const [recentActivity, setRecentActivity] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        
        const [statsRes, activityRes] = await Promise.all([
          axios.get('https://edrwanda-backend.onrender.com/api/users/stats', {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get('https://edrwanda-backend.onrender.com/api/users/activity', {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);

        setStats([
          { 
            title: "Active Courses", 
            value: statsRes.data.activeCourses || 0, 
            icon: <FaBook />, 
            color: "text-blue-500" 
          },
          { 
            title: "Progress", 
            value: `${statsRes.data.averageProgress || 0}%`, 
            icon: <FaChartLine />, 
            color: "text-green-500" 
          },
          { 
            title: "Certificates", 
            value: statsRes.data.certificates || 0, 
            icon: <FaCertificate />, 
            color: "text-purple-500" 
          },
          { 
            title: "Discussions", 
            value: statsRes.data.discussions || 0, 
            icon: <FaComments />, 
            color: "text-yellow-500" 
          }
        ]);

        // Ensure we always set an array, even if response is null/undefined
        setRecentActivity(activityRes.data || []);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch dashboard data');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rwanda-green"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome back, {user?.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className={`${stat.color} mb-2 text-2xl`}>{stat.icon}</div>
            <h3 className="text-lg font-medium text-gray-600">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        {recentActivity.length > 0 ? (
          <ul className="space-y-3">
            {recentActivity.map((activity, index) => (
              <li key={index} className="border-b pb-3 last:border-b-0">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No recent activity</p>
        )}
      </div>
    </div>
  );
};

// Helper functions remain the same
const getActivityIcon = (type) => {
  switch(type) {
    case 'course_started': return <FaBook className="text-white" />;
    case 'course_completed': return <FaCertificate className="text-white" />;
    case 'discussion': return <FaComments className="text-white" />;
    default: return <FaChartLine className="text-white" />;
  }
};

const getActivityColor = (type) => {
  switch(type) {
    case 'course_started': return 'bg-blue-500';
    case 'course_completed': return 'bg-green-500';
    case 'discussion': return 'bg-yellow-500';
    default: return 'bg-purple-500';
  }
};

export default Dashboard;