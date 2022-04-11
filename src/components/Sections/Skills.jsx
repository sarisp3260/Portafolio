import Collapse from "../Collapse/Collapse"
import Title from "../Text/Title"

const Skills = () => {
  return (
    <div className='min-h-screen h-max pt-16 md:pt-0' id='Skills'>
      <Title title="Skills"/>

      <div className="div-collapse px-3 md:px-10 lg:px-20">
        <Collapse/>
      </div>
    </div>
  )
}

export default Skills