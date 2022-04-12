import Title from "../Text/Title"
import Work from '../Cards/Work'

const Projects = () => {

  const project = [
    {
      id: 1,
      title: "Project 1",
      img: "https://cdn.pixabay.com/photo/2020/10/03/17/44/mountain-5624148_960_720.jpg",
    },
    {
      id: 2,
      title: "Project 2",
      img: "https://cdn.pixabay.com/photo/2020/10/03/17/44/mountain-5624148_960_720.jpg",
    },
    {
      id: 3,
      title: "Project 3",
      img: "https://cdn.pixabay.com/photo/2020/10/03/17/44/mountain-5624148_960_720.jpg",
    },
    {
      id: 4,
      title: "Project 4",
      img: "https://cdn.pixabay.com/photo/2020/10/03/17/44/mountain-5624148_960_720.jpg",
    }
  ]

  return (
    <div className='text-center pt-16' id='Projects'>
        <Title title="Projects"/>
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-base md:text-xl py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut cupiditate non modi vero sed voluptas a eos voluptatum odio.</span>
          <div className='h-3/4 flex flex-wrap items-center justify-center gap-5 md:gap-10'>
          <Work project={project}/>
          </div>
        </div>
    </div>
  )
}

export default Projects