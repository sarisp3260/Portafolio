import React from 'react'

const About = () => {
  return (
    <div className='pt-24' id='About'>
        <h1 className='text-center text-7xl font-extrabold text-blue py-5 md:text-8xl'>Who am I?</h1>
        <div className='grid place-items-center  items-center grid-cols-1 md:grid-cols-2 md:grid-row-1'>
            <div className="part-text text-lg text-center font-bold md:text-2xl">
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, repudiandae.sit amet consectetur adipisicing elit. Cumque, repudiandae.</span>
            </div>
            <div className="part-img">
                <img src="https://raw.githubusercontent.com/sarisp3260/IMG/main/R%26M%20IMG/Rick.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About