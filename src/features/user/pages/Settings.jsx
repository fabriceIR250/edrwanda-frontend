import { FaUserShield, FaBell, FaLanguage, FaLock } from 'react-icons/fa';

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="divide-y divide-gray-200">
          <div className="p-6">
            <h2 className="text-lg font-medium flex items-center">
              <FaUserShield className="mr-3 text-green-600" />
              Account Information
            </h2>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span>Email Address</span>
                <span className="text-gray-600">john.doe@example.com</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Phone Number</span>
                <span className="text-gray-600">+250 788 123 456</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-lg font-medium flex items-center">
              <FaBell className="mr-3 text-green-600" />
              Notifications
            </h2>
            <div className="mt-4 space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" defaultChecked />
                <span>Email Notifications</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" defaultChecked />
                <span>SMS Notifications</span>
              </label>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-lg font-medium flex items-center">
              <FaLanguage className="mr-3 text-green-600" />
              Language Preferences
            </h2>
            <select className="mt-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
              <option>English</option>
              <option>Kinyarwanda</option>
              <option>French</option>
            </select>
          </div>

          <div className="p-6">
            <h2 className="text-lg font-medium flex items-center">
              <FaLock className="mr-3 text-green-600" />
              Security
            </h2>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;