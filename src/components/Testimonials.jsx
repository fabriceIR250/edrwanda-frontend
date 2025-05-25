import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://aims.ac.rw/wp-content/uploads/sites/7/2021/02/Jean-Remy-Kubwimana_Rwanda_AIMS202104288_jeanremy.kubwimana@aims.ac_.rw_Sex_Male-scaled.jpg",
      name: "Jean Claude",
      location: "Kigali",
      quote: "EduRwanda helped me learn computer skills in my native Kinyarwanda. Now I have a job at a local tech company!",
      rating: 5
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CqxK-Kd-UQOctfX9cvWIUtTLShtjQ1M-YA&s",
      name: "Marie Aimee",
      location: "Musanze",
      quote: "The agriculture course transformed my farming. My yields increased by 40% in just one season!",
      rating: 4.5
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQ585mzJRF6jkjfCKA7l7hrHpINDLx8GzCQ&s",
      name: "Eric",
      location: "Huye",
      quote: "I started my own business after completing the entrepreneurship course. The practical lessons were exactly what I needed.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-rwanda-green text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-12">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-green-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-green-200 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <p className="italic">"{testimonial.quote}"</p>
              <div className="mt-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  i < Math.floor(testimonial.rating) ? (
                    <FaStar key={i} className="inline" />
                  ) : i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0 ? (
                    <FaStarHalfAlt key={i} className="inline" />
                  ) : (
                    <FaStar key={i} className="inline opacity-30" />
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;