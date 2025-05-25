import Hero from '../components/Hero'
import Features from '../components/Features'
import PopularCourses from '../components/PopularCourses'
import Testimonials from '../components/Testimonials'
import Partners from '../components/Partners'
import CTA from '../components/CTA'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <Navbar />
      <Hero />
      <Features />
      <PopularCourses />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </>
  )
}

export default Home