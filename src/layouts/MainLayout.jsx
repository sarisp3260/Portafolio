import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Navbar/Sidebar'

const MainLayout = ({ children }) => {
  return (
    <>
    <div className='min-h-screen lg:grid bg-black'>

        <Navbar/>

        <Sidebar/>

        <main className='ml-0 pt-20 flex flex-col items-center justify-center lg:ml-16 lg:mt-16 lg:pt-0'>
            { children }
        </main>
    </div>
    </>
  )
}

export default MainLayout