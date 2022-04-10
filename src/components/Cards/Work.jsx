import { Link } from 'react-router-dom'
import {GoDeviceMobile} from 'react-icons/go'
import {MdLaptopMac} from 'react-icons/md'

const Work = () => {
  return (
    <>
      <Link to={"/"}>
        <div className='flex flex-col items-center justify-center gap-3 bg-gray/70 rounded-md transform hover:scale-95 transition ease-out duration-700'>

          <picture className='w-72'>
            <img src="https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_960_720.jpg" alt="" className='w-auto rounded-t-md'/>
          </picture>


          <div className="descrip flex justify-center md:justify-between flex-wrap text-black py-2 px-4 w-full">
              <div className="icons flex items-center">
                  <MdLaptopMac className='text-2xl md:text-3xl'/>
                  <GoDeviceMobile className='text-sm md:text-base'/>
              </div>
              <span className='max-w-full break-words text-base md:text-2xl'>Text</span>
          </div>

        </div>
      </Link>
    </>
  )
}

export default Work