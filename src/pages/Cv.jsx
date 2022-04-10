import { Link } from 'react-router-dom'

import {GiAstronautHelmet} from 'react-icons/gi'
import {FaFileDownload} from 'react-icons/fa'
import Title from '../components/Sections/Title'
import Icons from '../components/Sections/Footer/Icons'

const Cv = () => {
  return (
    <div className='cv'>
        <div className="first-sec h-screen flex flex-col">
          <div className="sec-intro h-3/4 grid grid-cols-1 md:grid-cols-2 place-items-center mb-10">
            <GiAstronautHelmet className='text-[128px] md:text-[500px]'/>
            <div className="text-into flex flex-col font-medium gap-10">
              <span className='text-xl md:text-4xl'>I'm</span>
              <h2 className='text-3xl md:text-7xl font-bold'>Sara Salas Perez</h2>
              <p className='text-xl md:text-4xl'>Web full stack developer</p>
            </div>
          </div>

          <div className="btns w-full flex flex-col md:flex-row">
            <button className='btn-primary rounded-none w-full md:w-1/2 py-4 md:py-6 text-xl md:text-2xl font-bold flex items-center justify-center gap-3'>Download <FaFileDownload/> </button>

            <Link to={"/"} className="w-full md:w-1/2">
              <button className='btn-primary rounded-none w-full bg-blue hover:bg-blue/90 py-4 md:py-6 text-xl md:text-2xl font-bold'>Go to portafolio</button>
            </Link>
          </div>
        </div>

        <div className="title pb-5">
          <Title title="Profile" />
        </div>

        <div className="cv-items grid grid-cols-1 md:grid-cols-2 place-items-center">
          <section className="left-item px-10">
            <div className="second-sec">
              <h1>Profile</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias quam earum ipsa, neque sequi ad dicta minima! Ipsum quod, omnis accusamus eaque commodi unde quia tenetur architecto dolores, illum atque repellat laborum beatae fugit quas nobis sapiente aliquid rerum.</p>
            </div>
            <div className="third-sec">
              <h1>Education</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias quam earum ipsa, neque sequi ad dicta minima! Ipsum quod, omnis accusamus eaque commodi unde quia tenetur architecto dolores, illum atque repellat laborum beatae fugit quas nobis sapiente aliquid rerum.</p>
            </div>
            <div className="third-sec">
              <h1>Skills</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias quam earum ipsa, neque sequi ad dicta minima! Ipsum quod, omnis accusamus eaque commodi unde quia tenetur architecto dolores, illum atque repellat laborum beatae fugit quas nobis sapiente aliquid rerum.</p>
            </div>
          </section>

          <section className="right-item bg-gray w-full px-10">
          <div className="second-sec">
              <h1>Profile</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias quam earum ipsa, neque sequi ad dicta minima! Ipsum quod, omnis accusamus eaque commodi unde quia tenetur architecto dolores, illum atque repellat laborum beatae fugit quas nobis sapiente aliquid rerum.</p>
            </div>
            <div className="third-sec">
              <h1>Education</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias quam earum ipsa, neque sequi ad dicta minima! Ipsum quod, omnis accusamus eaque commodi unde quia tenetur architecto dolores, illum atque repellat laborum beatae fugit quas nobis sapiente aliquid rerum.</p>
            </div>
            <div className="third-sec">
              <h1>Skills</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias quam earum ipsa, neque sequi ad dicta minima! Ipsum quod, omnis accusamus eaque commodi unde quia tenetur architecto dolores, illum atque repellat laborum beatae fugit quas nobis sapiente aliquid rerum.</p>
            </div>
          </section>
        </div>

        <div className="icons-footer">
          <Icons color='blue'/>
        </div>
    </div>
  )
}

export default Cv