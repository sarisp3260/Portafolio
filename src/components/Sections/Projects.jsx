import Title from "../Text/Title"
import Work from '../Cards/Work'

import {FiArrowRight} from 'react-icons/fi'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { project } from "../../data/work"

const Projects = () => {

  const [filtered, setFiltered] = useState([])
  const [category, setCategory] = useState("all")

  useEffect(() => {
    if(category === "all"){
      setFiltered(project)
      return
    }
    const filter = project.filter(item => item.category === category)
      setFiltered(filter)
  },[category])

  
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
            <button onClick={()=> setCategory("Full-Stack")} className={category === "Full-Stack" ? "btn-blue" : "btn-primary"}>
              Full-Stack
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