import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Contact = () => {
  return (
   <>
   <Navbar />
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-rwanda-green">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rwanda-green focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rwanda-green focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rwanda-green focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rwanda-green focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-rwanda-green text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-rwanda-green">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-rwanda-green mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">KG 123 St, Kigali, Rwanda</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhone className="text-rwanda-green mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+250 788 123 456</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaEnvelope className="text-rwanda-green mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">info@edurwanda.rw</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaClock className="text-rwanda-green mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-rwanda-green text-xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-rwanda-green text-xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-rwanda-green text-xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-rwanda-green text-xl">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
   </>
  )
}

export default Contact