import SubTitle from '../SubTitle'
import Title from '../Title'
import { FaFileDownload, FaGithub, FaLinkedinIn, FaWhatsapp, FaSlack, FaDiscord, FaGoogle } from 'react-icons/fa'
import { FcCloseUpMode } from 'react-icons/fc'

const Profile = ({ cv }) => {
    const socialMedia = [<FaLinkedinIn />,<FaGithub />, <FaWhatsapp />, <FaDiscord />, <FaGoogle />]
  return (
    <section className="right-item bg-gray h-full w-full text-black p-10">
        <div className="second-sec">
            <SubTitle title="Profile" />
            <p>{cv[0].longDesc}</p>
        </div>
        <div className="third-sec w-full flex flex-col justify-center">
            <SubTitle title="Languages"/>
            {cv[0].languages.map((speak, index) =>
                <div className="cont bg-black rounded-md flex flex-col md:w-full hover:scale-105 transition ease-out duration-700 mb-5" key={index}>
                    <div className="certification bg-blue rounded-t-md p-5 flex flex-wrap justify-between items-center gap-5 pb-5">
                        <span className='text-xl font-bold'>{speak.title}</span>
                        
                    </div>
                    
                    <div className="text text-gray flex justify-between items-center py-5 px-5 md:px-10" >
                        <h2 className='text-xl font-bold flex items-center gap-3'> 

                        <FcCloseUpMode/>

                        {speak?.certification} 

                        {speak?.link &&
                        <a className="btn-primary" href={speak.link} target="_blank">Certification</a>}

                        </h2>
                        <span>{speak.level}</span>
                    </div>
                
                </div>
            )}
        </div>
        <div className="third-sec">
            <SubTitle title="Contact me"/>
            <div className="grid grid-cols-2">
                <div className="contact flex flex-col items-center gap-6">
                    {cv[0].contact.map((item, index) =>
                    <div className="text" key={index}>
                        <a className='hover:underline' href={item.link} target={"_blank"}>{item.title}</a>
                    </div>)}
                </div>
                <div className="social flex flex-col items-center gap-4">
                    {socialMedia.map((item2,index)=>
                        <div className="div-icon text-3xl" key={index}>
                            {item2}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile