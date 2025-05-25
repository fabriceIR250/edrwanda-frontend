import { useParams } from 'react-router-dom'
import { FaClock, FaUserGraduate, FaLanguage, FaCertificate } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CourseDetails = () => {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`https://edrwanda-backend.onrender.com/api/courses?id=eq.${id}`)
        if (response.data && response.data.length > 0) {
          setCourse(response.data[0])
        } else {
          setError('Course not found')
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCourse()
  }, [id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600 mx-auto"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-red-50 p-6 rounded-lg text-red-500 inline-block">
          <p>Error: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-red-100 rounded hover:bg-red-200"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (!course) {
    return <div className="container mx-auto px-4 py-12 text-center">Course not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-700 mb-6">{course.full_description || course.description}</p>
          
          {course.modules && course.modules.length > 0 && (
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">What you'll learn</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {course.modules.map((module, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{module}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="text-xl font-semibold mb-4">Course Content</h2>
            <div className="border rounded-lg overflow-hidden">
              {course.modules && course.modules.map((module, index) => (
                <div key={index} className="border-b last:border-b-0">
                  <div className="p-4 bg-gray-50 flex justify-between items-center">
                    <h3 className="font-medium">{module}</h3>
                    <span className="text-gray-500">3 lectures • 45 min</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white border rounded-lg shadow-md p-6 sticky top-4">
            <img 
              src={course.image_url || `/images/course-placeholder.jpg`} 
              alt={course.title} 
              className="w-full h-48 object-cover rounded-lg mb-4" 
            />
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">{course.price || 'FREE'}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  {course.level || 'All Levels'}
                </span>
              </div>

              <button className="w-full bg-rwanda-green text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
                Enroll Now
              </button>

              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2" />
                  <span>Duration: {course.duration || 'Not specified'}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaLanguage className="mr-2" />
                  <span>Language: {course.language || 'English'}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaUserGraduate className="mr-2" />
                  <span>Students: {(course.students || 0).toLocaleString()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaCertificate className="mr-2" />
                  <span>Certificate: {course.certificate ? 'Yes' : 'No'}</span>
                </div>
                {course.instructor && (
                  <div className="pt-2 border-t">
                    <p className="font-medium">Instructor:</p>
                    <p>{course.instructor.name}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails