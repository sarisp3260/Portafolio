import Collapse from "../Collapse/Collapse"
import Title from "./Title"

const Skills = () => {
  return (
    <div className='min-h-screen h-max' id='Skills'>
      <Title title="Skills"/>

      <h1>Skills</h1>

      <div className="div-collapse px-3 md:px-10 lg:px-20">
        <Collapse/>
      </div>
    </div>
  )
}

export default Skills