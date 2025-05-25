import { FaBook, FaClock, FaPercentage } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://edrwanda-backend.onrender.com/api/courses');
        setCourses(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 rounded-lg text-red-500">
        <p>Error loading courses: {error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-red-100 rounded hover:bg-red-200"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>
      
      {courses.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <p>No courses available at the moment.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                {course.instructor && (
                  <span className="text-sm text-gray-500">
                    Instructor: {course.instructor.name}
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  <span>{course.duration || 'Duration not specified'}</span>
                </div>
                <div className="flex items-center">
                  <FaPercentage className="mr-2" />
                  <span>{course.progress || 0}% complete</span>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-green-600 h-2.5 rounded-full" 
                  style={{ width: `${course.progress || 0}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;