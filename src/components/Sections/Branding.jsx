import React from 'react'
import Logos from '../Cards/Logos'

const Branding = () => {
  return (
    <div className='pt-16' id='Branding'>
      <h1 className='text-center text-5xl font-extrabold text-blue py-5 md:text-7xl'>Branding</h1>

      <div className='py-3 grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 place-items-center'>
          <Logos/>
          <Logos/>
          <Logos/>
      </div>
    </div>
  )
}

export default Branding