import { FaBook, FaClock, FaPercentage } from 'react-icons/fa';

const Courses = () => {
  const courses = [
    { title: "ICT Fundamentals", progress: 80, duration: "4 weeks" },
    { title: "Entrepreneurship", progress: 65, duration: "6 weeks" },
    { title: "Modern Agriculture", progress: 45, duration: "8 weeks" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>
      
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <div className="flex items-center space-x-4 text-gray-600 mb-4">
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <FaPercentage className="mr-2" />
                <span>{course.progress}% complete</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-green-600 h-2.5 rounded-full" 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;