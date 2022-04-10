import Title from "./Title"
import Work from '../Cards/Work'

const Projects = () => {
  return (
    <div className='text-center' id='Projects'>
        <Title title="Projects"/>
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-base md:text-xl py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut cupiditate non modi vero sed voluptas a eos voluptatum odio.</span>
          <div className='h-3/4 grid grid-cols-1 place-items-center gap-5 md:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <Work/>
          <Work/>
          <Work/>
          <Work/>
          <Work/>
          </div>
        </div>
    </div>
  )
}

export default Projects