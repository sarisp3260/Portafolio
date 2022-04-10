import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { GiAstronautHelmet } from 'react-icons/gi'

const Testimonials = () => {
  return (
    <div className='backdrop-blur-3xl bg-gradient-to-bl from-gray/60 to-transparent bg-opacity-20 px-6 py-4 rounded-sm hover:scale-105'>
        <div className="sect-img flex justify-between items-center gap-4">
            <div className="img-card w-32 h-32 rounded-full bg-blue/60 flex items-center justify-center">
              <GiAstronautHelmet className='text-7xl text-black'/>
            </div>
            <div className="icons flex flex-col justify-center text-black text-4xl gap-5">
                <FaLinkedinIn className='hover:text-black/80'/>
                <FaGithub className='hover:text-black/80'/>
            </div>
        </div>

        <div className="text text-gray text-center pt-5">
            <span>{`" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vero quos atque repellat rerum exercitationem vitae "`}</span>
        </div>
    </div>
  )
}

export default Testimonials