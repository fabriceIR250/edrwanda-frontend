import { FaCertificate, FaDownload } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    { title: "ICT Fundamentals", date: "June 15, 2023", id: "EDU12345" },
    { title: "Business Management", date: "May 10, 2023", id: "EDU67890" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Certificates</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600">
            <div className="flex items-start">
              <FaCertificate className="text-3xl text-green-600 mr-4" />
              <div>
                <h2 className="text-xl font-semibold">{cert.title}</h2>
                <p className="text-gray-600 mb-2">Issued: {cert.date}</p>
                <p className="text-sm text-gray-500">Certificate ID: {cert.id}</p>
              </div>
            </div>
            <button className="mt-4 flex items-center text-green-600 hover:text-green-800">
              <FaDownload className="mr-2" />
              Download Certificate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;