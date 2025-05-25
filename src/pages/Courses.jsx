import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaFilter } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const coursesData = [
  {
    id: 1,
    title: "ICT Fundamentals",
    description: "Learn basic computer skills in Kinyarwanda",
    category: "Technology",
    level: "Beginner",
    duration: "4 weeks",
    price: "FREE",
    rating: 4.5
  },
  // Add more courses...
]

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === 'All' || course.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
   <>
   <Navbar />
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Courses</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <FaFilter className="text-gray-600" />
          <select
            className="border rounded-lg px-4 py-2"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Language">Language</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={`/images/course-${course.id}.jpg`} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {course.level}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-1">{course.title}</h3>
              <p className="text-gray-600 mb-3">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    i < Math.floor(course.rating) ? 
                      <span key={i}>★</span> : 
                      <span key={i}>☆</span>
                  ))}
                  <span className="text-gray-600 ml-1">{course.rating}</span>
                </span>
                <span className="text-green-700 font-bold">{course.price}</span>
              </div>
              <Link 
                to={`/courses/${course.id}`}
                className="block mt-4 text-center bg-rwanda-green text-white py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
   </>
  )
}

export default Courses