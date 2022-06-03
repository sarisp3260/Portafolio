import React from 'react'

const Title = ({ title }) => {
  return (
    <h1 className='select-none text-center font-extrabold text-blue py-5 text-4xl md:text-6xl xl:text-[100px]'>{ title }</h1>
  )
}

export default Title