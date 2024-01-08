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
            <div className='w-full '>

              <Form/>
              
            </div>
        </MainLayout>
    </motion.div>
    </>
  )
}

export default Contact