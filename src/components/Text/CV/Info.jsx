import SubTitle from "../SubTitle"
import { BsArrowReturnRight } from 'react-icons/bs'
import { FcGraduationCap } from 'react-icons/fc'
import { GiFeather, GiThorHammer } from 'react-icons/gi'
import { MdStickyNote2 } from 'react-icons/md'

const Info = ({ cv }) => {
  return (
    <section className="left-item px-10 py-5">
        <div className="third-sec">
            <SubTitle title="Education"/>
            
            {cv[0].education.map((item, index) =>
            <div className="div-edu flex flex-col gap-3 pb-5" key={index}>
                <div className="title flex items-center gap-3">
                    <FcGraduationCap/>
                    <h1 className="font-bold">{item.title}</h1>
                </div>
                <h2 className="ml-10 font-semibold">{item.date}</h2>
                <span className="ml-16 font-semibold">{item.subtitle}</span>
                <div className="div ml-24 flex items-center gap-3">
                    <BsArrowReturnRight/>
                    {item.desc}
                </div>

            </div>)}
        </div>
        <div className="third-sec">
            <SubTitle title="Soft skills"/>

            <div className="flex flex-wrap gap-10">
                {cv[0].softskill.map((item,index) =>
                <div className="div flex items-center gap-3" key={index}>
                    <GiFeather/>
                    <span className="text-xl">{item}</span>
                </div>)}
            </div>
            
            
        </div>
        <div className="third-sec">
            <SubTitle title="Hard skills"/>

            <div className="flex flex-wrap gap-10">
                {cv[0].hardskill.map((item,index) =>
                <div className="div flex items-center gap-3" key={index}>
                    <GiThorHammer/>
                    <span className="text-xl">{item}</span>
                </div>)}
            </div>

            
        </div>
        <div className="third-sec">
            <SubTitle title="Achivements"/>

            {cv[0].achivments.map((item, index) =>
            <div className="div pb-5" key={index}>
                <h2 className="font-bold text-xl flex items-center gap-3"> <MdStickyNote2 className="text-2xl"/> {item.title}</h2>
                <p className="py-5 ml-10">{item.subtitle}</p>
                <a className="btn-primary my-5 ml-16" href={item.link} target="_blank">View certification</a>
            </div>)}

        </div>
    </section>
  )
}

export default Info