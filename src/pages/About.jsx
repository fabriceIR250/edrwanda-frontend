
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const About = () => {
  return (
   <>
   <Navbar />
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">About EduRwanda</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-rwanda-green">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            EduRwanda is committed to providing accessible, high-quality education to all Rwandans, 
            regardless of their location or economic status. We believe in empowering individuals 
            through knowledge and skills development to drive personal and national growth.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-rwanda-green">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Founded in 2023, EduRwanda began as a small initiative to provide ICT training to rural 
            communities. Today, we've grown into a comprehensive e-learning platform offering courses 
            in technology, business, agriculture, and language studies.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-rwanda-green">Our Approach</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
            <li>Courses available in Kinyarwanda, English, and French</li>
            <li>Mobile-friendly platform for learning anywhere</li>
            <li>Affordable pricing with many free courses</li>
            <li>Practical, skills-based curriculum</li>
            <li>Certificates recognized by Rwanda Education Board</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-center">Join Our Growing Community</h3>
            <p className="text-center text-gray-700">
              Over 50,000 learners across Rwanda are already advancing their skills with EduRwanda.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
   </>
  )
}

export default About