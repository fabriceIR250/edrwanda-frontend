import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mr-4">
            <FaUser className="text-3xl text-gray-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600">Student</p>
          </div>
          <button className="ml-auto flex items-center text-green-700">
            <FaEdit className="mr-2" />
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Personal Information</h3>
            <div className="flex items-center">
              <FaEnvelope className="text-gray-500 mr-3" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-gray-500 mr-3" />
              <span>+250 788 123 456</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-gray-500 mr-3" />
              <span>Kigali, Rwanda</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Account Settings</h3>
            <button className="w-full text-left py-2 px-4 bg-gray-100 rounded hover:bg-gray-200">
              Change Password
            </button>
            <button className="w-full text-left py-2 px-4 bg-gray-100 rounded hover:bg-gray-200">
              Notification Preferences
            </button>
            <button className="w-full text-left py-2 px-4 bg-gray-100 rounded hover:bg-gray-200">
              Privacy Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;