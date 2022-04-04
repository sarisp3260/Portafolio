import React from 'react'
import { GiBranchArrow } from 'react-icons/gi'

const Header = () => {
  return (
    <div className='h-screen flex items-center justify-center gap-5 flex-col'>
      <div className='pb-5 bg-slate-500 grid place-items-center  items-center grid-cols-1 grid-rows-2 lg:grid-cols-2  lg:grid-rows-1'>
          <div className="part-one text-5xl text-center font-bold sm:text-7xl md:text-8xl">
              <h1>Welcome to my page!</h1>
          </div>
          <div className="part-two flex gap-7">
              <div className="circle w-10 h-36 rounded-full bg-blue md:w-36"></div>
              <div className="circle w-10 h-20 rounded-full bg-blue md:w-20"></div>
              <div className="circle w-10 h-36 rounded-full bg-blue md:w-36"></div>
          </div>
      </div>
      <div className="icon flex justify-center">
        <GiBranchArrow className='cursor-pointer rotate-45 text-4xl hover:translate-y-2'/>
      </div>
    </div>
  )
}

export default Header