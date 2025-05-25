// src/admin/components/AdminLayout.js
import { Link, Outlet } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaBook, 
  FaUsers, 
  FaChartBar, 
  FaCog,
  FaSignOutAlt 
} from 'react-icons/fa';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-green-700 text-white p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">EdRwanda Admin</h1>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link to="/admin" className="flex items-center p-2 rounded hover:bg-white hover:text-green-700">
                <FaTachometerAlt className="mr-2" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/courses" className="flex items-center p-2 rounded hover:bg-white hover:text-green-700">
                <FaBook className="mr-2" /> Courses
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="flex items-center p-2 rounded hover:bg-white hover:text-green-700">
                <FaUsers className="mr-2" /> Users
              </Link>
            </li>
            <li>
              <Link to="/admin/analytics" className="flex items-center p-2 rounded hover:bg-white hover:text-green-700">
                <FaChartBar className="mr-2" /> Analytics
              </Link>
            </li>
            <li>
              <Link to="/admin/settings" className="flex items-center p-2 rounded hover:bg-white hover:text-green-700">
                <FaCog className="mr-2" /> Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <button className="flex items-center p-2 text-white hover:bg-white rounded w-full hover:text-green-700">
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;