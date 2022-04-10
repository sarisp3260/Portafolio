import SubTitle from '../SubTitle'
import Title from '../Title'
import { FaFileDownload, FaGithub, FaLinkedinIn, FaWhatsapp, FaSlack, FaInstagram, FaBehance } from 'react-icons/fa'
import { FcCloseUpMode } from 'react-icons/fc'

const Profile = () => {
  return (
    <section className="right-item bg-gray h-full w-full text-black p-10">
        <div className="second-sec">
            <SubTitle title="Profile" />
            <p>I am a web developer bilingual experienced in projects with Scrum methodoliges. I am  hard working and I have a good team worker, who always be friendly and polite, and also willing to learn new skills. Most important I am able to listen effectively to follow up and solve problems.</p>
        </div>
        <div className="third-sec w-full flex flex-col justify-center">
            <SubTitle title="English"/>
            <div className="cont bg-black rounded-md w-3/4 flex flex-col md:w-full hover:scale-105 transition ease-out duration-700">
                <div className="certification bg-blue rounded-t-md p-5 flex justify-between items-center gap-5 pb-5">
                    <span className='text-xl font-bold'>Education First</span>
                    <a className="btn-primary" href="https://drive.google.com/file/d/1maNV3IxX9xBO297PHesszdOfEvadOw-g/view?usp=sharing" target="_blank">Certification</a>
                </div>
                <div className="text text-gray flex justify-between py-5 px-10">
                    <h2 className='text-xl font-bold flex items-center gap-3'> <FcCloseUpMode/> Reading</h2>
                    <span>Medium</span>
                </div>
            </div>
        </div>
        <div className="third-sec">
            <SubTitle title="Contact"/>
            <div className="text flex items-center gap-3">
                <h2>Reading</h2>
                <FaLinkedinIn />
            </div>
        </div>
    </section>
  )
}

export default Profile