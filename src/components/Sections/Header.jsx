import { HiArrowNarrowDown } from 'react-icons/hi'

const Header = () => {
  return (
    <div className='h-screen flex flex-col justify-center' id='Header'>
        <div className="welcome py-10 grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-3">
          <div className="part-one py-5 text-5xl text-center font-bold md:col-span-2 sm:text-7xl md:text-8 lg:text-[128px] lg:px-10">
              <h1>Welcome to my page!</h1>
          </div>
          <div className="part-two flex justify-center gap-7">
              <div className="circle w-10 h-36 rounded-full bg-blue md:w-36"></div>
              <div className="circle w-10 h-20 rounded-full bg-blue md:w-20"></div>
              <div className="circle w-10 h-36 rounded-full bg-blue md:w-36"></div>
          </div>
        </div>
        <div className="icon flex justify-center pt-10">
          <button className='animate-bounce bg-gray/10 rounded-full p-2'>
            <a href="#About">
              <HiArrowNarrowDown className='cursor-pointer text-4xl'/>
            </a>
          </button>
        </div>
    </div>
  )
}

export default Header