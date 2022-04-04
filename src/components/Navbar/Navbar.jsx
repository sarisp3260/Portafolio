import React from 'react'
import { FaStream } from 'react-icons/fa'
import Links from './Links'

const Navbar = () => {
  return (
    <nav className='sticky top-0 w-full h-16 flex justify-between items-center px-5 text-2xl shadow-lg shadow-white/50 md:px-10 '>
      <div className="logo text-lg md:text-2xl font-mono">
          SS
      </div>
      <div className="menu hidden gap-5 md:inline-flex">
        <Links/>
      </div>
      <div className="menu-icon flex md:hidden">
        <FaStream className='text-lg'/>
      </div>
    </nav>
  )
}

export default Navbar