import { Link } from 'react-router-dom'

import { GiAstronautHelmet, GiHeartInside} from 'react-icons/gi'
import { FaFileDownload } from 'react-icons/fa'

import { motion } from 'framer-motion'
import Info from '../components/Text/CV/Info'
import Profile from '../components/Text/CV/Profile'

const Cv = () => {
  return (
    <motion.div className='cv'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
        <div className="first-sec h-max flex flex-col">
          <div className="sec-intro h-3/4 grid grid-cols-1 md:grid-cols-2 place-items-center mb-10 pt-20 md:pt-10">
            <GiAstronautHelmet className='text-[128px] lg:text-[500px] md:text-[300px]'/>
            <div className="text-into flex flex-col font-medium gap-10">
              <span className='text-xl md:text-4xl'>I'm</span>
              <h2 className='text-3xl md:text-7xl font-bold'>Sara Salas Perez</h2>
              <p className='text-xl md:text-4xl'>Web full stack developer</p>
            </div>
          </div>

          <div className="btns w-full flex flex-col md:flex-row">
            <button className='btn-primary rounded-none w-full md:w-1/2 py-4 md:py-6 text-xl md:text-2xl font-bold flex items-center justify-center gap-3'>Download <FaFileDownload/> </button>

            <Link to={"/"} className="w-full md:w-1/2">
              <button className='btn-primary rounded-none w-full bg-blue hover:bg-blue/90 py-4 md:py-6 text-xl md:text-2xl font-bold'>Go to portafolio</button>
            </Link>
          </div>
        </div>

        <div className="cv-items min-h-screen grid grid-cols-1 md:grid-cols-2 place-items-center">
          <Info/>
          <Profile/>
        </div>

        <div className="made font-extrabold text-black bg-blue py-5 flex items-center justify-center text-xl gap-5">
          Made with love
          <GiHeartInside className='text-4xl hover:text-red-500 hover:animate-spin'/>
        </div>

    </motion.div>
  )
}

export default Cv