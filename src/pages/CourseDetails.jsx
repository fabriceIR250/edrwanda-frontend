import { useParams } from 'react-router-dom'
import { FaClock, FaUserGraduate, FaLanguage, FaCertificate } from 'react-icons/fa'

const coursesData = [
  {
    id: 1,
    title: "ICT Fundamentals",
    description: "Learn basic computer skills in Kinyarwanda",
    fullDescription: "This course provides foundational knowledge of information and communication technology. You'll learn computer basics, internet usage, and essential software applications.",
    category: "Technology",
    level: "Beginner",
    duration: "4 weeks",
    price: "FREE",
    rating: 4.5,
    instructor: "John Doe",
    language: "Kinyarwanda",
    students: 1250,
    modules: [
      "Introduction to Computers",
      "Using Operating Systems",
      "Internet Basics",
      "Productivity Software",
      "Digital Safety"
    ]
  },
  // Add more courses...
]

const CourseDetails = () => {
  const { id } = useParams()
  const course = coursesData.find(c => c.id === parseInt(id))

  if (!course) {
    return <div className="container mx-auto px-4 py-12 text-center">Course not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-700 mb-6">{course.fullDescription}</p>
          
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

          <div>
            <h2 className="text-xl font-semibold mb-4">Course Content</h2>
            <div className="border rounded-lg overflow-hidden">
              {course.modules.map((module, index) => (
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
            <img src={`/images/course-${course.id}.jpg`} alt={course.title} className="w-full rounded-lg mb-4" />
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">{course.price}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  {course.level}
                </span>
              </div>

              <button className="w-full bg-rwanda-green text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
                Enroll Now
              </button>

              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2" />
                  <span>Duration: {course.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaLanguage className="mr-2" />
                  <span>Language: {course.language}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaUserGraduate className="mr-2" />
                  <span>Students: {course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaCertificate className="mr-2" />
                  <span>Certificate: Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails