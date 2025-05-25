import { FaGraduationCap, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaGraduationCap className="mr-2" /> EduRwanda
            </h3>
            <p className="text-white">Empowering Rwandans through accessible, quality education in their preferred language.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white hover-text-green-100">Home</Link></li>
              <li><Link to="/courses" className="text-white hover-text-green-100">Courses</Link></li>
              <li><Link to="/pricing" className="text-white hover-text-green-100">Pricing</Link></li>
              <li><Link to="/success-stories" className="text-white hover-text-green-100">Success Stories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/faqs" className="text-white hover-text-green-100">FAQs</Link></li>
              <li><Link to="/help-center" className="text-white hover-text-green-100">Help Center</Link></li>
              <li><Link to="/contact" className="text-white hover-text-green-100">Contact Us</Link></li>
              <li><Link to="/mobile-app" className="text-white hover-text-green-100">Mobile App</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white hover-text-green-100 text-xl"><FaFacebook /></a>
              <a href="#" className="text-white hover-text-green-100 text-xl"><FaTwitter /></a>
              <a href="#" className="text-white hover-text-green-100 text-xl"><FaInstagram /></a>
              <a href="#" className="text-white hover-text-green-100 text-xl"><FaLinkedin /></a>
              <a href="#" className="text-white hover-text-green-100 text-xl"><FaYoutube /></a>
            </div>
            <p className="text-white">Email: info@edurwanda.rw</p>
            <p className="text-white">Phone: +250 788 123 456</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm mb-4 md:mb-0">© {new Date().getFullYear()} EduRwanda. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-white hover-text-green-100 text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-white hover-text-green-100 text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer