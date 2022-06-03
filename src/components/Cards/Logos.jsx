import React from 'react'

const Logos = ({ branding }) => {
  return (
    <>
    {branding.map((item,index)=>
      <div className='backdrop-blur-3xl bg-gradient-to-br from-gray/60 to-transparent bg-opacity-20 shadow-lg hover:shadow-white/20 w-fit py-4 px-6 mx-2 rounded-lg flex flex-col justify-center items-center gap-3 md:px-6 transition ease-out duration-700' key={index}>
        <h1 className='text-black text-xl font-medium md:text-2xl'>{item.title}</h1>
        <div className="img w-24 h-24 bg-black/60 p-3 rounded-lg">
          <img src={item.img} alt="" />
        </div>
        <button className='btn-yellow font-bold'><a href={item.figma} target={"_blank"}>Go to Figma</a></button>
      </div>
    )}
    </>
  )
}

export default Logos