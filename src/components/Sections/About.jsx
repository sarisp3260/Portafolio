import { Link } from 'react-router-dom'

import memoji from '../../assest/MEmoji.png'

import Title from "../Text/Title"

const About = () => {
  return (
    <div className='min-h-screen h-max pt-16' id='About'>
        <Title title="Who am I?" />
        <div className='h-max grid place-items-center items-center grid-cols-1 md:grid-cols-3'>
            <div className="part-text flex flex-col justify-center items-center gap-10 text-lg md:text-center font-bold md:text-2xl md:col-span-2 px-10">
                <span>I am a bilingual web developer with experience in projects especially with Scrum methodologies. I'm a hard worker and have a good teamwork skills</span>
                <span>So enthusiastic to work together, then feel free to get in touch with me.</span>
                <button className='btn-primary w-fit'><Link to={'/Curriculum-Vitae'} target="_top">Know more</Link></button>
            </div>
            <div className="part-img">
                <img className='w-96' src={memoji} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About