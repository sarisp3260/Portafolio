import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import About from '../components/Sections/About'
import Branding from '../components/Sections/Branding'
import Footer from '../components/Sections/Footer'
import Header from '../components/Sections/Header'
import Projects from '../components/Sections/Projects'

const Landing = () => {
  return (
    <div className='bg-black'>
        <Navbar/>
        <div className="sections px-5 md:px-10">
          <Header/>
          <About/>
          <Projects/>
          <Branding/>
        </div>
        <Footer/>
    </div>
  )
}

export default Landing