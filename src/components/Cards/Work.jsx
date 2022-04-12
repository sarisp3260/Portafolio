import { Link } from 'react-router-dom'
import {GoDeviceMobile} from 'react-icons/go'
import {MdLaptopMac} from 'react-icons/md'

const Work = ({ project }) => {
  return (
    <>
      {project.map((item, index) =>
      <div className='flex flex-col items-center justify-center gap-3 bg-gray/70 rounded-md transform hover:scale-95 transition ease-out duration-700' key={index}>

        <picture className='w-52 md:w-72' key={index}>
          <Link to={`/ProjectsView/${item.title}`} target="_top">
            <img src={item.img} alt="" className='w-auto rounded-t-md'/>
          </Link>
        </picture>


        <div className="descrip flex justify-center md:justify-between flex-wrap text-black py-2 px-4 w-full">
            <div className="icons flex items-center">
                <MdLaptopMac className='text-2xl md:text-3xl'/>
                <GoDeviceMobile className='text-sm md:text-base'/>
            </div>
            <span className='max-w-full break-words text-base md:text-2xl'>{item.title}</span>
        </div>

      </div>)}
    </>
  )
}

export default Work