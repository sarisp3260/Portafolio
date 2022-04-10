import Title from "../Text/Title"
import Logos from '../Cards/Logos'

const Branding = () => {
  return (
    <div className='pt-16' id='Branding'>
      <Title title="Branding"/>
      <div className="flex flex-col justify-center items-center gap-5">
        <span className="text-base md:text-xl py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut cupiditate non modi vero sed voluptas a eos voluptatum odio.</span>
        <div className='py-3 flex flex-wrap items-center justify-center gap-10'>
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