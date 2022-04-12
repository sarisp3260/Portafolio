import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

const Icons = () => {

    let hoverstyle = "hover:text-black/80 scale-125" 
  return (
    <div className="icons py-8 justify-center flex flex-wrap items-center gap-5 md:gap-10 text-3xl md:text-5xl">
        <a href="https://www.linkedin.com/in/sara-salas-perez" target="_blank"><FaLinkedinIn className={hoverstyle}/></a>
        <a href="https://github.com/sarisp3260" target="_blank"><FaGithub className={hoverstyle}/></a>
        <a href="https://api.whatsapp.com/send?phone=+573162386323&text=Hey!,%20What’s%20up?" target="_blank"><FaWhatsapp className={hoverstyle}/></a>
        
    </div>
  )
}

export default Icons