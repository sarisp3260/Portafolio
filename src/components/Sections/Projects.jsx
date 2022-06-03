import Title from "../Text/Title"
import Work from '../Cards/Work'

import {FiArrowRight} from 'react-icons/fi'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Projects = () => {

  const [filtered, setFiltered] = useState([])
  const [category, setCategory] = useState("all")

  const project = [
    {
      id: 1,
      title: "Replica blog",
      img: "https://dsm01pap007files.storage.live.com/y4mUWUf8CvEi46X9Cx5XH0pjUVe8SuXm0EsshlkA_9OAeXf2bMdE1sYh36RvVMxgx96dP4l9o7cKrsdLLtTM0fYaCocEZc7tU14kTebvNkix7INs9uW-KEm1KzyX304Cvxwq2Gu39wL8ImLPSsSwvZPpTLp-JJ6PDaJ-movwrarUndoABt0hfQJKaphWRmLeNTy?width=1920&height=1280&cropmode=none",
      desription: "Inspiration design replica developed in React configured with Vite, hope you like this wonderful development. Follow me for more",
      demo: "http://replblog-details.vercel.app/",
      repo: "https://github.com/sarisp3260/replblog-details.git",
      category: "Replica",
    },
    {
      id: 2,
      title: "Str3et Style",
      img: "https://dsm01pap007files.storage.live.com/y4m1bLv9TmDbovkJRTdrqMl56IaIXckCbujiObywNI91CBQp4zs8dO23jC1GpZYCNNmgy_f8XJnAY2u-8Ma66LB_Pt7PU6F_6TPk5FRioj-pjNPkiEogndFc_hJ-8R_dnx_iLLkxDjaEXGOsi5hLmg9MqEkep1uPMP3Af8h_EOd11dExNzj-5tpKYcMWttAHctV?width=1600&height=1064&cropmode=none",
      desription: "Developing a website where users can interact, learn about and buy the products of the STR3ET STYLE brand with the latest trendy clothes. In which all purchases will be made through the WhatsApp application.",
      demo: "https://str3et-style.netlify.app/",
      repo: "https://github.com/sarisp3260/str3et-style",
      category: "React",
    },
    {
      id: 3,
      title: "Project 3",
      img: "https://cdn.pixabay.com/photo/2022/05/17/15/59/cat-7203072_960_720.jpg",
      desription: "This project will develop a module offered to level 2",
      demo: "",
      repo: "",
      category: "Backend",
    },
    {
      id: 4,
      title: "Impulse Replica",
      img: "https://raw.githubusercontent.com/sarisp3260/InpulseReplica/main/src/imgBackground.jpg",
      desription: "The design of the website is based on behance page, which is the simple layput and folder structuring made in react",
      demo: "https://inpulse-replica.vercel.app/",
      repo: "https://github.com/sarisp3260/InpulseReplica.git",
      category: "Replica",
    },
  ]

  useEffect(() => {
    if(category === "all"){
      setFiltered(project)
      return
    }
    const filter = project.filter(item => item.category === category)
      setFiltered(filter)
      console.log(filter)
  },[category])

  console.log(filtered)
  return (
      <div className='text-center pb-10 relative pt-10 md:pt-0' id='Projects'>
        <Title title="Projects"/>
        <div className="w-full flex flex-col justify-center items-center gap-5 overflow-hidden">
          <span className="text-base md:text-xl py-5 px-6">Here there are some of my principal works made in the last months in diferents technologies</span>

          <div className="center gap-4 flex-wrap">
            <button onClick={()=> setCategory("all")} className={category === "all" ? "btn-blue" : "btn-primary"}>
              All
            </button>
            <button onClick={()=> setCategory("Replica")} className={category === "Replica" ? "btn-blue" : "btn-primary"}>
              Replicas
            </button>
            <button onClick={()=> setCategory("React")} className={category === "React" ? "btn-blue" : "btn-primary"}>
              React
            </button>
            <button onClick={()=> setCategory("JS")} className={category === "JS" ? "btn-blue" : "btn-primary"}>
              JS
            </button>
            <button onClick={()=> setCategory("Backend")} className={category === "Backend" ? "btn-blue" : "btn-primary"}>
              Back-end
            </button>
          </div>

          <motion.div layout className='h-3/4 flex flex-wrap items-center justify-center gap-5 md:gap-10'>
            {filtered.map((item, index) => 
              <Work key={index} item={item}/>)}
          </motion.div>
        </div>

        <Link to="/Work/Branding" className="absolute right-5 top-0">
          <button className="btn-primary text-base center gap-2">Go to Branding <FiArrowRight/> </button>
        </Link>
      </div>
  )
}

export default Projects