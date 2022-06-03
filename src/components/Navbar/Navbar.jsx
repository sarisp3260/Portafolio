/* import { FaStream } from 'react-icons/fa' */
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import logo from '../../assest/ssBlue.png'

const Navbar = () => {

  return (
    <nav className='bg-black w-full h-16 fixed top-0 flex justify-between items-center px-5 text-2xl md:px-6 z-40'>
      <div className="logo animate-wiggle">
          <Link to="/"><img className='w-8' src={logo} alt="" /></Link>
      </div>
      <div className="div flex items-center gap-5">
        <a href="https://www.linkedin.com/in/sara-salas-perez" target="_blank"><FaLinkedinIn className="hover:text-white/50 scale-125"/></a>
        <a href="https://github.com/sarisp3260" target="_blank"><FaGithub className="hover:text-white/50 scale-125"/></a>
        <a href="https://api.whatsapp.com/send?phone=+573162386323&text=Hey!,%20What’s%20up?" target="_blank"><FaWhatsapp className="hover:text-white/50 scale-125"/></a>
      </div>
    </nav>
  )
}

export default Navbar