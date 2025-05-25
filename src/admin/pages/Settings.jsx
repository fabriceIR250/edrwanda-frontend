// src/admin/pages/Settings.jsx
import { useState } from 'react';
import { FaSave, FaGlobe, FaLock, FaBell, FaPalette } from 'react-icons/fa';

const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: 'EdRwanda',
    siteLogo: '',
    primaryColor: '#2e7d32', // Rwanda green
    enableNotifications: true,
    maintenanceMode: false
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Here you would typically send the settings to your API
      console.log('Saving settings:', settings);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Settings saved successfully!');
    } catch (error) {
      console.error('Error saving settings:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">System Settings</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          {/* General Settings */}
          <div className="border-b pb-6">
            <h2 className="text-lg font-medium flex items-center mb-4">
              <FaGlobe className="mr-2 text-blue-500" />
              General Settings
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Site Name
                </label>
                <input
                  type="text"
                  name="siteName"
                  value={settings.siteName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Site Logo URL
                </label>
                <input
                  type="text"
                  name="siteLogo"
                  value={settings.siteLogo}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="https://example.com/logo.png"
                />
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className="border-b pb-6">
            <h2 className="text-lg font-medium flex items-center mb-4">
              <FaPalette className="mr-2 text-purple-500" />
              Appearance
            </h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Color
              </label>
              <div className="flex items-center">
                <input
                  type="color"
                  name="primaryColor"
                  value={settings.primaryColor}
                  onChange={handleChange}
                  className="w-12 h-12 cursor-pointer"
                />
                <span className="ml-2">{settings.primaryColor}</span>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="border-b pb-6">
            <h2 className="text-lg font-medium flex items-center mb-4">
              <FaBell className="mr-2 text-yellow-500" />
              Notifications
            </h2>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="enableNotifications"
                name="enableNotifications"
                checked={settings.enableNotifications}
                onChange={handleChange}
                className="h-4 w-4 text-rwanda-green focus:ring-rwanda-green border-gray-300 rounded"
              />
              <label htmlFor="enableNotifications" className="ml-2 block text-sm text-gray-700">
                Enable email notifications
              </label>
            </div>
          </div>

          {/* Maintenance */}
          <div className="pb-6">
            <h2 className="text-lg font-medium flex items-center mb-4">
              <FaLock className="mr-2 text-red-500" />
              Maintenance
            </h2>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="maintenanceMode"
                name="maintenanceMode"
                checked={settings.maintenanceMode}
                onChange={handleChange}
                className="h-4 w-4 text-rwanda-green focus:ring-rwanda-green border-gray-300 rounded"
              />
              <label htmlFor="maintenanceMode" className="ml-2 block text-sm text-gray-700">
                Maintenance mode (restricts access to admin only)
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-rwanda-green text-white px-4 py-2 rounded flex items-center"
            >
              <FaSave className="mr-2" /> {loading ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;