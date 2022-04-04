import React from 'react'
import Logos from '../Cards/Logos'

const Branding = () => {
  return (
    <div className='py-5 grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 place-items-center'>
        <Logos/>
    </div>
  )
}

export default Branding