import SubTitle from "../SubTitle"
import { BsArrowReturnRight } from 'react-icons/bs'
import { FcGraduationCap } from 'react-icons/fc'
import { GiFeather, GiThorHammer } from 'react-icons/gi'

const Info = () => {
  return (
    <section className="left-item px-10 py-5">
        <div className="third-sec">
            <SubTitle title="Education"/>
            
            <div className="div-edu flex flex-col gap-3">
                <div className="title flex items-center gap-3">
                    <FcGraduationCap/>
                    <h1>Title</h1>
                </div>
                <h2 className="ml-10">SubTitle</h2>
                <span className="ml-16">Description</span>
                <div className="div ml-24">
                    <BsArrowReturnRight/>
                </div>

            </div>
        </div>
        <div className="third-sec">
            <SubTitle title="Soft skills"/>
            
            <div className="div flex items-center gap-3">
                <GiFeather/>
                <span className="text-xl">Text</span>
            </div>
        </div>
        <div className="third-sec">
            <SubTitle title="Hard skills"/>

            <div className="div flex items-center gap-3">
                <GiThorHammer/>
                <span className="text-xl">Text</span>
            </div>
        </div>
        <div className="third-sec">
            <SubTitle title="Achivements"/>

            <h2>Finalist Hackaton F5 Spain FEB-2022</h2>

            <p className="py-5">Second place in the competition. The project to be performed was creation of a full web application in 3 days</p>
            
            <a className="btn-primary my-5" href="https://drive.google.com/file/d/1maNV3IxX9xBO297PHesszdOfEvadOw-g/view?usp=sharing" target="_blank">View certification</a>

        </div>
    </section>
  )
}

export default Info