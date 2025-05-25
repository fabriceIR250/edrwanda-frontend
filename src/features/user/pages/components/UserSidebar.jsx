import { NavLink } from 'react-router-dom';
import { 
  FaHome, 
  FaBook, 
  FaCertificate, 
  FaUser, 
  FaCog,
  FaCreditCard
} from 'react-icons/fa';

const UserSidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-sm p-4">
      <nav className="space-y-1">
        <NavLink 
          to="/user/dashboard"
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg ${isActive ? 'bg-rwanda-green text-white' : 'text-gray-700 hover:bg-gray-100'}`
          }
        >
          <FaHome className="mr-3" />
          Dashboard
        </NavLink>
        
        <NavLink 
          to="/user/courses"
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg ${isActive ? 'bg-rwanda-green text-white' : 'text-gray-700 hover:bg-gray-100'}`
          }
        >
          <FaBook className="mr-3" />
          My Courses
        </NavLink>
        
        <NavLink 
          to="/user/certificates"
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg ${isActive ? 'bg-rwanda-green text-white' : 'text-gray-700 hover:bg-gray-100'}`
          }
        >
          <FaCertificate className="mr-3" />
          Certificates
        </NavLink>
        
        <NavLink 
          to="/user/profile"
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg ${isActive ? 'bg-rwanda-green text-white' : 'text-gray-700 hover:bg-gray-100'}`
          }
        >
          <FaUser className="mr-3" />
          Profile
        </NavLink>
        
        <NavLink 
          to="/user/payments"
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg ${isActive ? 'bg-rwanda-green text-white' : 'text-gray-700 hover:bg-gray-100'}`
          }
        >
          <FaCreditCard className="mr-3" />
          Payments
        </NavLink>
        
        <NavLink 
          to="/user/settings"
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg ${isActive ? 'bg-rwanda-green text-white' : 'text-gray-700 hover:bg-gray-100'}`
          }
        >
          <FaCog className="mr-3" />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default UserSidebar;