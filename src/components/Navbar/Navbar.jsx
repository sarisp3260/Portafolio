import { useState } from 'react'
import { FaStream } from 'react-icons/fa'
import Links from './Links'
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assest/ssBlue.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  console.log(location)

  return (
    <nav className='w-full fixed top-0 bg-black h-16 flex justify-between items-center px-5 text-2xl shadow-lg shadow-blue/10 z-10 md:px-10 md:static'>
      <div className="logo text-lg md:text-2xl font-mono">
          <Link to="/"><img className='w-10 animate-wiggle' src={logo} alt="" /></Link>
      </div>
      <div className="menu hidden md:inline-flex">
        <div className="link flex relative items-center gap-10 lg:gap-20">
          <Links/>
        </div>
      </div>
      <div className="menu-icon flex md:hidden">
        <FaStream className='text-lg' onClick={() => setIsOpen(!isOpen)}/>

          {isOpen ? 
          <div className="nav-items-menu h-screen flex flex-col fixed top-16 right-0 w-full bg-black/70 backdrop-blur-lg gap-8 p-8">

            <Links responsive='yes' onClick={value => setIsOpen(value)}/>
  
          </div> : null}

      </div>
    </nav>
  )
}

export default Navbar