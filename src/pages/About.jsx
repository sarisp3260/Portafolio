import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


import meimage from '../assest/Me_animation.png'
import meimobile from '../assest/mobile_img.png'

import Title from "../components/Text/Title"
import MainLayout from '../layouts/MainLayout'

const About = () => {
  return (
    <>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <MainLayout>
        <div className='' id='About'>
          <Title title="Who am I?" />
          <div className='h-max grid place-items-center items-center grid-cols-1 md:grid-cols-2'>
              <div className="part-text flex flex-col justify-center items-center gap-10 text-lg md:text-center font-bold md:text-2xl px-10">
                  <span>I am a bilingual web developer with experience in projects especially with Scrum methodologies. I'm a hard worker and have a good teamwork skills</span>
                  <span>So enthusiastic to work together, then feel free to get in touch with me.</span>
                  
                  <div className='relative block md:hidden pb-10'>
                    <img className='w-48' src={meimobile} alt="" />
                    <Link to='/Curriculum-Vitae' className=' absolute bottom-10 left-7'>
                    <button className='btn-primary w-fit'>Know more</button>
                  </Link>
                  </div>
                  <Link to='/Curriculum-Vitae' className='hidden md:block'>
                    <button className='btn-primary w-fit'>Know more</button>
                  </Link>
              </div>
              <div className="part-img" >
                <img className='w-64 hidden md:block' src={meimage} alt="" />
              </div>
          </div>
        </div>
      </MainLayout>

    </motion.div>
    </>
  )
}

export default About