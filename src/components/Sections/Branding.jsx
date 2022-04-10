import Title from "./Title"
import Logos from '../Cards/Logos'

const Branding = () => {
  return (
    <div className='pt-16' id='Branding'>
      <Title title="Branding"/>
      <div className="flex flex-col justify-center items-center gap-5">
        <span className="text-base md:text-xl py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut cupiditate non modi vero sed voluptas a eos voluptatum odio.</span>
        <div className='py-3 grid grid-cols-2 gap-5 md:grid-cols-4 place-items-center'>
            <Logos/>
            <Logos/>
            <Logos/>
            <Logos/>
        </div>
      </div>
    </div>
  )
}

export default Branding