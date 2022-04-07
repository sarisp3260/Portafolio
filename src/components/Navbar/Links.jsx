import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const Links = () => {

    const about = [ 'About me', 'CV', 'Skills', 'Testimonials'];
    const work = [ 'Projects', 'Branding'];
  return (
    <div className='flex relative gap-20'>
        <Dropdown items={about} title={'About'}/>
        <Dropdown items={work} title={'Work'}/>
        <Link to='#'>Skills</Link>
        <Link to='#'>Contact</Link>
    </div>
  )
}

export default Links