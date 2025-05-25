import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Courses = () => {
  const courses = [
    {
      image: "https://www.learn.mtechitng.com/wp-content/uploads/2024/01/IT-Course.png",
      level: "Beginner",
      levelColor: "bg-green-100 text-green-800",
      title: "ICT Fundamentals",
      description: "Learn basic computer skills in Kinyarwanda",
      rating: 4.5,
      price: "FREE"
    },
    {
      image: "https://hub.nexford.org/hubfs/Imported_Blog_Media/Advantages-Disadvantages-of-Entrepreneurship.jpg",
      level: "Intermediate",
      levelColor: "bg-blue-100 text-blue-800",
      title: "Entrepreneurship in Rwanda",
      description: "Start and grow your business in Rwanda",
      rating: 4.0,
      price: "15,000 RWF"
    },
    {
      image: "https://farm.ws/wp-content/uploads/2020/12/inspection-vegetable-garden-quality-by-farmers.jpg",
      level: "Advanced",
      levelColor: "bg-purple-100 text-purple-800",
      title: "Modern Agriculture Techniques",
      description: "Increase your crop yields with modern methods",
      rating: 5.0,
      price: "10,000 RWF"
    },
    {
      image: "https://www.internationalteachersassociation.com/wp-content/uploads/shutterstock_343329656.png",
      level: "Beginner",
      levelColor: "bg-green-100 text-green-800",
      title: "English for Business",
      description: "Improve your professional English communication",
      rating: 4.0,
      price: "12,000 RWF"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="inline" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="inline" />);
      } else {
        stars.push(<FaRegStar key={i} className="inline" />);
      }
    }
    
    return stars;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-green-400">Popular Courses</h2>
          <a href="#" className="text-rwanda-green font-medium hover:underline">View All Courses</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <span className={`${course.levelColor} text-xs font-medium px-2.5 py-0.5 rounded`}>
                  {course.level}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-1">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500">
                    {renderStars(course.rating)}
                    <span className="text-gray-600 ml-1">{course.rating}</span>
                  </span>
                  <span className="text-rwanda-green font-bold">{course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;