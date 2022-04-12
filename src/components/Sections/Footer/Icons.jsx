import { FaGithub, FaLinkedinIn, FaWhatsapp, FaSlack, FaBehance } from 'react-icons/fa'

const Icons = () => {

    let hoverstyle = "hover:text-black/80 scale-125" 
  return (
    <div className="icons py-8 justify-center flex flex-wrap items-center gap-5 md:gap-10 text-3xl md:text-5xl">
        <FaLinkedinIn className={hoverstyle}/>
        <FaGithub className={hoverstyle}/>
        <FaBehance className={hoverstyle}/>
        <FaSlack className={hoverstyle}/>
        <FaWhatsapp className={hoverstyle}/>
    </div>
  )
}

export default Icons