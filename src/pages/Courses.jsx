import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaFilter } from 'react-icons/fa'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://edrwanda-backend.onrender.com/api/courses')
        setCourses(response.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         (course.description && course.description.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = categoryFilter === 'All' || course.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
        </div>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">
          <div className="bg-red-50 p-6 rounded-lg text-red-500 text-center max-w-md">
            <p className="mb-4">Error loading courses: {error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-100 rounded hover:bg-red-200 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 min-h-screen">
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

        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching your criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={course.image_url || `/images/course-placeholder.jpg`} 
                  alt={course.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {course.level || 'All Levels'}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-1">{course.title}</h3>
                  <p className="text-gray-600 mb-3">{course.description || 'No description available'}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        i < Math.floor(course.rating || 0) ? 
                          <span key={i}>★</span> : 
                          <span key={i}>☆</span>
                      ))}
                      <span className="text-gray-600 ml-1">{course.rating || '0'}</span>
                    </span>
                    <span className="text-green-700 font-bold">{course.price || 'FREE'}</span>
                  </div>
                  {course.instructor && (
                    <p className="text-sm text-gray-500 mt-2">
                      Instructor: {course.instructor.name}
                    </p>
                  )}
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
        )}
      </div>
      <Footer />
    </>
  )
}

export default Courses