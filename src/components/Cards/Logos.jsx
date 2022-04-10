import React from 'react'

const Logos = () => {
  return (
    <div className='backdrop-blur-3xl bg-gradient-to-br from-gray/60 to-transparent bg-opacity-20 shadow-lg hover:shadow-gray/10 w-fit py-4 px-2 rounded-lg flex flex-col justify-center items-center gap-3 md:px-6 hover:skew-y-6 transition ease-out duration-700'>
        <h1 className='text-black text-xl font-medium md:text-2xl'>Logo</h1>
        <div className="img w-24 h-24 rounded-xl bg-blue/10"></div>
    </div>
  )
}

export default Logos