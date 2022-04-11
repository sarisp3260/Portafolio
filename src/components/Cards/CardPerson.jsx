import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { GiAstronautHelmet } from 'react-icons/gi'

const Testimonials = ({ testimonial }) => {
  return (
    <>
    {testimonial.map((item,index) => 
    <div className=' backdrop-blur-3xl bg-gradient-to-bl from-gray/60 to-transparent bg-opacity-20 px-6 py-6 rounded-sm hover:scale-95' key={index}>
    <div className="sect-img flex justify-between items-center gap-4">
        <div className="img-card w-32 h-32">
          <img className='rounded-full' src={item.img} alt="" />
        </div>
        <div className="icons flex flex-col justify-center text-black text-4xl gap-5">
            <a href={item.gitHub} target="_blank"><FaLinkedinIn className='hover:text-black/80'/></a>
            <a href={item.link} target="_blank"><FaGithub className='hover:text-black/80'/></a>
        </div>
    </div>

    <div className="text text-gray text-center pt-5">
        <h1 className='text-xl font-semibold pb-3'>{item.name}</h1>
        <span className='italic'>{`" ${item.desc} "`}</span>
    </div>
</div>)}
    </>
  )
}

export default Testimonials