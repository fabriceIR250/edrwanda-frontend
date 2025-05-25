const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-green-900 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Education for All Rwandans</h1>
          <p className="text-lg mb-6">Access affordable, high-quality courses in Kinyarwanda, English, and French to advance your skills and career.</p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a href="#" className="bg-white text-green-500 px-6 py-3 rounded-md font-bold text-center hover:bg-green-100">Browse Courses</a>
            <a href="#" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-bold text-center hover:bg-white hover:text-green-400">How It Works</a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="https://imageio.forbes.com/specials-images/imageserve/5fd9f701f7b9eec76f25330b/Male-student-in-classroom-writing-in-notebook/960x0.jpg?format=jpg&width=960" alt="Students learning" className="rounded-lg shadow-2xl max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;