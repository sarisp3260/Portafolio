import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Form from '../components/Sections/Form'
import { motion } from 'framer-motion'
import hand from '../assest/hand.png'

const Contact = () => {
  return (
    <>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
        <MainLayout>
            <div className='w-11/12 grid grid-cols-1 grid-rows-2 md:w-full md:grid-cols-3 md:grid-rows-1'>
              <div className='col-span-2 relative'>
                <Form/>
              </div>
              <div className='col-span-1 w-full text-center mt-5 mb-10 pr-0 center flex-col justify-between md:w-9/12 md:my-10 md:pr-10'>
                <h1 className='text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Cool!</h1>
                <span className='text-xl'>Now you can get in touch with me</span>
                <div className=' w-10/12 h-3/6 center flex-col hover:scale-105 select-none bg-white/10 hover:bg-gradient-to-b hover:from-white/10 hover:to-blue/10 transition delay-100 ease-in-out duration-1000 backdrop-blur-3xl rounded-xl relative'>
                  <img className='absolute -left-14 top-0 w-28' src={hand} alt="" />
                  <p className='px-12 text-center text-4xl break-words '>Don't doubt, contact me now! </p>
                </div>
              </div>
            </div>
        </MainLayout>
    </motion.div>
    </>
  )
}

export default Contact