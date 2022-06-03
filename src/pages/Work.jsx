import React from 'react'
import { Outlet } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { motion } from 'framer-motion'

const Work = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
        <MainLayout>
            <Outlet/>
        </MainLayout>
    </motion.div>
  )
}

export default Work