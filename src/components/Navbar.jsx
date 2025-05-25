import { useState, useEffect } from 'react';
import { 
  FaGraduationCap, 
  FaBars, 
  FaTimes, 
  FaHome,
  FaBook,
  FaFileAlt,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
  FaUserPlus,
  FaChevronDown
} from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { to: '/', label: 'Home', icon: FaHome },
    { to: '/courses', label: 'Courses', icon: FaBook },
    { to: '/resources', label: 'Resources', icon: FaFileAlt },
    { to: '/about', label: 'About', icon: FaInfoCircle },
    { to: '/contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-green-50 backdrop-blur-lg shadow-lg border-b border-green-400' 
          : 'bg-white shadow-md'
      }`}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center py-3">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <FaGraduationCap className="text-3xl text-green-500 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute -inset-1 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <a 
                href="/" 
                className="text-2xl font-bold text-gray-800 hover:text-green-500 transition-colors duration-300"
              >
                Edu<span className="text-green-500">Rwanda</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <a
                  key={item.to}
                  href={item.to}
                  className="group relative flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-green-500 hover:bg-green-50 transition-all duration-300"
                >
                  <item.icon className="text-sm group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{item.label}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="/login"
                className="group flex items-center space-x-2 px-4 py-2 text-green-600 font-medium rounded-lg border border-green-200 hover:bg-green-50 hover:border-green-300 transition-all duration-300"
              >
                <FaUser className="text-sm group-hover:scale-110 transition-transform duration-300" />
                <span>Login</span>
              </a>
              <a
                href="/register"
                className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaUserPlus className="text-sm group-hover:scale-110 transition-transform duration-300" />
                <span>Register</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative p-2 text-gray-700 hover:text-green-500 hover:bg-green-50 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-20"
            >
              <div className="relative w-6 h-6">
                <FaBars 
                  className={`absolute inset-0 w-6 h-6 transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <FaTimes 
                  className={`absolute inset-0 w-6 h-6 transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg border-t border-green-100">
            <div className="container mx-auto px-4 py-4 space-y-2">
              
              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <a
                  key={item.to}
                  href={item.to}
                  onClick={closeMenu}
                  className="group flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-green-500 hover:bg-green-50 rounded-lg transition-all duration-300"
                >
                  <item.icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{item.label}</span>
                  <FaChevronDown className="ml-auto text-xs text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
                </a>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-green-100 space-y-2">
                <a
                  href="/login"
                  onClick={closeMenu}
                  className="group flex items-center space-x-3 px-4 py-3 text-green-600 font-medium rounded-lg border border-green-200 hover:bg-green-50 transition-all duration-300"
                >
                  <FaUser className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  <span>Login</span>
                </a>
                <a
                  href="/register"
                  onClick={closeMenu}
                  className="group flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
                >
                  <FaUserPlus className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  <span>Register</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;