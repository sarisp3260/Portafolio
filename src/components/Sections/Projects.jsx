import React from 'react'
import Work from '../Cards/Work'

const Projects = () => {
  return (
    <div className='text-center py-5'>
        <div className='py-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
         <Work/>
        </div>
        <button className='btn-primary'>More ...</button>
    </div>
  )
}

export default Projects