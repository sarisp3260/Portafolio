import Testimonials from '../components/Sections/Testimonials'
import About from '../components/Sections/About'
import Branding from '../components/Sections/Branding'
import Header from '../components/Sections/Header'
import Projects from '../components/Sections/Projects'

const Landing = () => {
  return (
    <div className='sections px-5 md:px-10'>
          <Header/>
          <About/>
          <Projects/>
          <Branding/>
          <Testimonials/>
    </div>
  )
}

export default Landing