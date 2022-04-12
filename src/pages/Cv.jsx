import { Link } from 'react-router-dom'

import { GiAstronautHelmet, GiHeartInside} from 'react-icons/gi'
import { FaFileDownload } from 'react-icons/fa'

import { motion } from 'framer-motion'
import Info from '../components/Text/CV/Info'
import Profile from '../components/Text/CV/Profile'

const Cv = () => {

  const cv = [
    {
      name: "Sara Salas Perez",
      shortDesc: "Web full stack developer",
      longDesc: "I am a bilingual web developer with experience in projects especially with Scrum methodologies. I'm a hard worker and have a good teamwork skills, I'm always very friendly and polite, and I'm also willing to learn new skills. I have worked in responsive web design and programming, in different parts of the process but I could say that my main skill is in the front-end. So enthusiastic to work together, then feel free to get in touch with me.",
      education: [
        {
          title: "Educamas",
          date: "From Dec 2021 to Currently",
          subtitle: "6 months Web full stack",
          desc: "Practical projects",
        },
        {
          title: "Servicion nacional de aprenizaje (SENA)",
          date: "From May 2020 to Currently",
          subtitle: "Analysis and Development of Information Systems Technologist",
          desc: "Stage of the final project",
        }
      ],
      softskill: ["Adaptability","Desire to learn", "Creativity", "Teamwork", "Patience", "Cooperation"],
      hardskill: ["HTML && CSS", "JS", "React", "Tailwind", "Figma && Ilustrator", "Node", "Mysql && MongoDB"],
      achivments: [
        {
        title: "Finalist Hackaton F5 Spain FEB 2022",
        subtitle: "Second place in the competition. The project to be performed was creation of a full web application in 3 days",
        link: "https://drive.google.com/file/d/1maNV3IxX9xBO297PHesszdOfEvadOw-g/view?usp=sharing",
        },
        {
        title: "Course skills to face challenges in the new work enviroment",
        subtitle: "40 hours course",
        link: "https://drive.google.com/file/d/1aKXhOrOwl4OdCjocswlfW4wVBpwsnU2A/view?usp=sharing",
        }
      ],
      enCertification:
        {
          title:"EF SET Certificate",
          link: "https://www.efset.org/cert/sWAMMA"
        },
      english: [
        {
          title: "Reading",
          desc: "Medimun"
        },  
        {
          title: "Listening",
          desc: "Medimun"
        },  
        {
          title: "Writing",
          desc: "Medimun"
        },  
        {
          title: "Speaking",
          desc: "Medimun"
        },  
      ],

      contact: [
        {
          title: "Sara Salas perez",
          link : "https://www.linkedin.com/in/sara-salas-perez"
        },   
        {
          title: "sarisp3260",
          link : "https://github.com/sarisp3260"
        },   
        {
          title: "+57 3162386323",
          link : "https://api.whatsapp.com/send?phone=+573162386323&text=Hey!,%20What’s%20up?"
        },   
        {
          title: "saris3260#2817",
          link : "https://www.linkedin.com/in/sara-salas-perez"
        },   
        {
          title: "sarisp3260@gmail.com",
          link : "https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
        },   
      ]

    }
  ]

  return (
    <motion.div className='cv'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
        <div className="first-sec h-max flex flex-col" >
          <div className="sec-intro h-3/4 grid grid-cols-1 md:grid-cols-2 place-items-center mb-10 pt-20 " id='cv'>
            <GiAstronautHelmet className='text-[128px] lg:text-[500px] md:text-[300px]'/>
            <div className="text-into flex flex-col font-medium gap-10">
              <span className='text-xl md:text-4xl'>I'm</span>
              <h2 className='text-3xl md:text-7xl font-bold'>{cv[0].name}</h2>
              <p className='text-xl md:text-4xl'>{cv[0].shortDesc}</p>
            </div>
          </div>

          <div className="btns w-full flex flex-col md:flex-row">
            
              <button className='btn-primary rounded-none w-full md:w-1/2 py-4 md:py-6 text-xl md:text-2xl font-bold '><a className='flex items-center justify-center gap-3' href="https://drive.google.com/file/d/1UJz5ixbz8ZuD0dLzquxsHh0xdxR-ytyi/view?usp=sharing" target="_blank">Download <FaFileDownload/>  </a></button>
           
            
            <Link to={"/"} className="w-full md:w-1/2">
              <button className='btn-primary rounded-none w-full bg-blue hover:bg-blue/90 py-4 md:py-6 text-xl md:text-2xl font-bold'>Go to portafolio</button>
            </Link>
          </div>
        </div>

        <div className="cv-items min-h-screen grid grid-cols-1 md:grid-cols-2 place-items-center">
          <Info cv={cv}/>
          <Profile cv={cv}/>
        </div>

        <div className="made font-extrabold text-black bg-blue py-5 flex items-center justify-center text-xl gap-5">
          Made with love
          <GiHeartInside className='text-4xl hover:text-red-500 hover:animate-spin'/>
        </div>

    </motion.div>
  )
}

export default Cv