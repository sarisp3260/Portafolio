import React from 'react'

const Cv = () => {
  return (
    <div className='cv'>
        <div className="first-sec">
          <span>I'm</span>
          <h2>Name</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, incidunt.</p>

          <div className="btns w-full flex">
            <button className='btn-primary rounded-none w-1/2'>Download</button>
            <button className='btn-primary rounded-none w-1/2 bg-blue hover:bg-blue/90'>Go to portafolio</button>
          </div>
        </div>
        <div className="second-sec">
          <h1>Profile</h1>
        </div>
        <div className="third-sec">
          <h1>Education</h1>
        </div>
        <div className="third-sec">
          <h1>Skills</h1>
        </div>
    </div>
  )
}

export default Cv