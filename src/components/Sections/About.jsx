import { Link } from 'react-router-dom'

import Title from './Title'

const About = () => {
  return (
    <div className='min-h-screen h-max' id='About'>
        <Title title="Who am I?" />
        <div className='h-max grid place-items-center items-center grid-cols-1 md:grid-cols-3'>
            <div className="part-text flex flex-col justify-center items-center gap-10 text-lg md:text-center font-bold md:text-2xl md:col-span-2 px-10">
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, repudiandae.sit amet consectetur adipisicing elit. Cumque, repudiandae.</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, repudiandae.sit amet consectetur adipisicing elit. Cumque, repudiandae.</span>
                <button className='btn-primary w-fit'><Link to={'/Curriculum-Vitae'}>Know more</Link></button>
            </div>
            <div className="part-img">
                <img className='w-96' src="https://raw.githubusercontent.com/sarisp3260/IMG/main/R%26M%20IMG/Rick.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About