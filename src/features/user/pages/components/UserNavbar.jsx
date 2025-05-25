import { FaBell, FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../../../../context/AuthContext';

const UserNavbar = () => {
  const { user } = useAuth(); // Get user from auth context

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-rwanda-green">EduRwanda</h1>
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-500 hover:text-gray-700">
          <FaBell className="text-xl" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        
        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-2xl text-gray-500" />
          <span className="font-medium">
            {user?.name || 'Guest'} {/* Fallback to 'Guest' if no user */}
          </span>
        </div>
      </div>
    </header>
  );
};

export default UserNavbar;