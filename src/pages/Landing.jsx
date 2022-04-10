import Testimonials from '../components/Sections/Testimonials'
import About from '../components/Sections/About'
import Branding from '../components/Sections/Branding'
import Header from '../components/Sections/Header'
import Projects from '../components/Sections/Projects'
import Footer from '../components/Sections/Footer/Footer'
import Skills from '../components/Sections/Skills'


import { motion } from 'framer-motion'

const Landing = () => {
  return (
    <>
      <motion.div 
      className='sections px-5 md:px-10'

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>

            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Branding/>
            <Testimonials/>
            
      </motion.div>
      <Footer/>
    </>
  )
}

export default Landing