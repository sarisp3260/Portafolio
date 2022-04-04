import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaSlack, FaInstagram, FaBehance } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='text-black bg-gradient-to-b from-gray to-blue text-center px-5 py-3 md:px-10'>
        <span className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi expedita sunt voluptate sit quod magnam, magni iure! Facere, aliquam.</span>

        <div className="icons py-5 justify-center flex flex-wrap items-center gap-5 text-3xl md:text-4xl">
            <FaLinkedinIn className='hover:text-black/80'/>
            <FaGithub className='hover:text-black/80'/>
            <FaInstagram className='hover:text-black/80'/>
            <FaBehance className='hover:text-black/80'/>
            <FaSlack className='hover:text-black/80'/>
            <FaWhatsapp className='hover:text-black/80'/>
        </div>

        <div className="copy-rights">
            <span className='font-semibold'>SaraSalas.com &copy;Sara Salas. All Rigths Reserved</span>
        </div>
    </div>
  )
}

export default Footer