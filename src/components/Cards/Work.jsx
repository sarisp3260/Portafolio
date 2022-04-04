import React from 'react'
import {GoDeviceMobile} from 'react-icons/go'
import {MdLaptopMac} from 'react-icons/md'

const Work = () => {
  return (
    <div className='flex flex-col items-center'>
        <img src="https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_960_720.jpg" alt="" className='w-52 rounded-md'/>
        <div className="descrip flex justify-between">
            <div className="icons flex items-center">
                <MdLaptopMac className='text-2xl md:text-3xl'/>
                <GoDeviceMobile className='text-sm md:text-base'/>
            </div>
            <span>Text</span>
        </div>
    </div>
  )
}

export default Work