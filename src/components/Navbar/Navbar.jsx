import { useState } from 'react'
import { FaStream } from 'react-icons/fa'
import Links from './Links'
import NavMenu from './NavMenu';
import { useLocation } from 'react-router-dom';

import logo from '../../assest/ssBlue.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  console.log(location)

  return (
    <nav className='w-full fixed top-0 bg-black h-16 flex justify-between items-center px-5 text-2xl shadow-lg shadow-blue/10 z-10 md:px-10 md:static mb-16'>
      <div className="logo text-lg md:text-2xl font-mono">
          <img className='w-10' src={logo} alt="" />
      </div>
      <div className="menu hidden md:inline-flex">
        <div className="link flex relative items-center gap-10 lg:gap-20">
          <Links/>
        </div>
      </div>
      <div className="menu-icon flex md:hidden">
        <FaStream className='text-lg' onClick={() => setIsOpen(!isOpen)}/>

          {isOpen ? <NavMenu /> : null}

      </div>
    </nav>
  )
}

export default Navbar