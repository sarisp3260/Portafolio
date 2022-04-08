import React from 'react'
import { GiBranchArrow } from 'react-icons/gi'

const Header = () => {
  return (
    <div className='h-screen pt-10 grid place-items-center  items-center grid-rows-3' id='Header'>
      {/* <div className='pb-5 bg-slate-500 flex flex-col items-center justify-center'> */}
        <div className="part-one py-5 text-5xl text-center font-bold sm:text-7xl md:text-8 lg:text-[128px] lg:px-10">
            <h1>Welcome to my page!</h1>
        </div>
        <div className="part-two row-span-2 flex gap-7 py-5">
            <div className="circle w-10 h-36 rounded-full bg-blue md:w-36"></div>
            <div className="circle w-10 h-20 rounded-full bg-blue md:w-20"></div>
            <div className="circle w-10 h-36 rounded-full bg-blue md:w-36"></div>
        </div>
        <div className="icon flex justify-center">
          <GiBranchArrow className='cursor-pointer rotate-45 text-4xl hover:translate-y-2'/>
        </div>
    </div>
  )
}

export default Header