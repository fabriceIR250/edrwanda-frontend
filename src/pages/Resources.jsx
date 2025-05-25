import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const resources = [
  {
    title: "Rwanda Education Board",
    description: "Official curriculum guidelines and education policies",
    link: "https://www.reb.rw",
    category: "Government"
  },
  // Add more resources...
]

const Resources = () => {
  return (
   <>
   <Navbar />
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Learning Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <a 
              href={resource.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-rwanda-green font-medium hover:underline"
            >
              Visit Resource →
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer />
   </>
  )
}

export default Resources