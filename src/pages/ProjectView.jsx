import {Link, useParams} from 'react-router-dom'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { AiOutlineLaptop, AiFillGithub } from 'react-icons/ai'
import Footer from '../components/Sections/Footer/Footer';

const ProjectView = () => {

    const project = [
        {
          id: 1,
          title: "Project 1",
          img: "https://cdn.pixabay.com/photo/2020/10/03/17/44/mountain-5624148_960_720.jpg",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio inventore iste porro laudantium eos obcaecati mollitia magnam consectetur est, tenetur, recusandae quae minus? Reprehenderit, cumque. Officia modi praesentium porro? Eum. ",
          arryImg: [2,3,4],
          repository: "text",
          deploy: "text.."
        },
        {
          id: 2,
          title: "Project 2",
          img: "https://cdn.pixabay.com/photo/2020/10/03/17/44/mountain-5624148_960_720.jpg",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio inventore iste porro laudantium eos obcaecati mollitia magnam consectetur est, tenetur, recusandae quae minus? Reprehenderit, cumque. Officia modi praesentium porro? Eum. ",
          arryImg: [2,3,4],
          repository: "text",
          deploy: "text.."
        },
        {
          id: 3,
          title: "Project 3",
          img: "https://cdn.pixabay.com/photo/2020/10/03/17/44/mountain-5624148_960_720.jpg",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio inventore iste porro laudantium eos obcaecati mollitia magnam consectetur est, tenetur, recusandae quae minus? Reprehenderit, cumque. Officia modi praesentium porro? Eum. ",
          arryImg: [2,3,4],
          repository: "text",
          deploy: "text.."
        },
        {
          id: 4,
          title: "Project 4",
          img: "https://cdn.pixabay.com/photo/2020/10/03/17/44/mountain-5624148_960_720.jpg",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio inventore iste porro laudantium eos obcaecati mollitia magnam consectetur est, tenetur, recusandae quae minus? Reprehenderit, cumque. Officia modi praesentium porro? Eum. ",
          arryImg: [2,3,4],
          repository: "text",
          deploy: "text.."
        }
      ]

    const title = useParams();

    const result = project.find((items)=> items.title === title.title);

    console.log("results:",result)

    console.log(title)
  return (
    <div className='pt-16 min-h-screen'>
        <div className="top flex justify-center sm:justify-end text-2xl pt-5 px-5">
            <Link className='flex items-center gap-3 m-0 sm:mr-5 hover:outline hover:outline-4 py-2 px-4 rounded-md' to={"/#Projects"}>Go back <RiArrowGoBackLine/></Link>
        </div>
        
        <div className='body py-5'>
            <h1 className='text-4xl text-center py-4'>{result.title}</h1>
            <div className="proyect-img-text px-8  w-full grid grid-cols-1 place-items-center gap-5 text-gray md:grid-cols-2 md:px-20">
                <span className='tex-base'>{result.description}</span>
                <picture className='flex items-center justify-center'>
                    <img className='w-full sm:w-4/5' src={result.img} alt="" />
                </picture>
            </div>
        </div>

        <div className="carousel">

        </div>

        <div className="btns flex flex-col justify-center items-center space-y-5 sm:flex-row sm:space-y-0 sm:space-x-10 md:space-x-36 pt-5 pb-10 px-8 md:px-20">
            <button className='btn-primary' disabled><a className='flex items-center gap-3' href="" target="_top">Repository <AiFillGithub className='text-3xl'/> </a></button>
            <button className='btn-primary' disabled><a className='flex items-center gap-3' href="" target="_top">WebSite <AiOutlineLaptop className='text-3xl'/> </a></button>
        </div>

        <Footer/>
    </div>
  )
}

export default ProjectView