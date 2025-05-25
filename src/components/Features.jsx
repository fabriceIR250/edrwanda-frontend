import { FaLanguage, FaMobileAlt, FaCertificate } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaLanguage className="text-4xl" />,
      title: "Multilingual Content",
      description: "Courses available in Kinyarwanda, English, and French to cater to all Rwandans."
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Mobile Friendly",
      description: "Learn on any device, even with low internet bandwidth. Download courses for offline study."
    },
    {
      icon: <FaCertificate className="text-4xl" />,
      title: "Recognized Certificates",
      description: "Earn certificates recognized by Rwanda Education Board and employers nationwide."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Why Choose EduRwanda?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-green-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;