import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdVideoCameraBack } from 'react-icons/md'
import { GiDeadHead } from 'react-icons/gi'

const Collapse = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toogle = index => {
    if (isOpen === index){
      return setIsOpen(null)
    }
    setIsOpen(index)
  }

  const DataInfo = [
    {
        id: 1,
        title: "HTML && CSS",
        img: "https://camo.githubusercontent.com/67b8ea14ec5ed863c1001addb82b3847ce1187d61742370cdf43d0245096fea6/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f642f64352f435353335f6c6f676f5f616e645f776f72646d61726b2e7376672f33343070782d435353335f6c6f676f5f616e645f776f72646d61726b2e7376672e706e67",
        img2: "https://camo.githubusercontent.com/309bd1d3bd253dff456421a439882e5189b95a839120f0555d7172ff277e99c3/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f362f36312f48544d4c355f6c6f676f5f616e645f776f72646d61726b2e7376672f35313270782d48544d4c355f6c6f676f5f616e645f776f72646d61726b2e7376672e706e67",
        text: "This begining of something every website start with this two simple languages and in all my projects I've been working with this beautiful tools."
    },
    {
        id: 2,
        title: "JS",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        text: "A particularly interesting language, I remember that I was excited to learn it, more specifically to see the wonderful things that could be make"
    },
    {
        id: 3,
        title: "React",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        text: "That just blow my mind. I feel more practicly and faster de development of a website with the whole set of libraries and frameworks that you can use here"
    },
    {
        id: 4,
        title: "Tailwind",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        text: "Tailwind is the eight wonders of the World never found hahah, and this is no only because for his versality is just the easy way to give styles."
    },
    {
        id: 5,
        title: "Figma && Ilustrator",
        img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
        img2: "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
        text: "Important tools to design this beautiful wireframe, mockups or logos. I really love exploring new things and mixing colors to create great designs."
    },
    {
        id: 6,
        title: "Mongo",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        img2: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        text: "Powerfull NoSql and relationals data management systems, both of them really useful depending of the task you need to complete."
    },
    {
        id: 7,
        title: "Laravel",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
        text: "Despite the short time learning this tool is quite wonderfull framework to create full websites"
    },
  ]

  return (
    <>
        <div >
          {DataInfo.map((element) => 
          <div key={element.id} className="bg-gray w-full rounded-md my-5 text-black transform transition ease-in duration-700">
            <div onClick={() => toogle(element.id)} key={element.id} className="brandUpdates-text px-6 py-4 flex justify-between items-center">

                <div className="div flex">
                  <img src={element.img} className="w-10 h-fit" alt="" />
                  {element.img2 ? <img src={element.img2} className="w-10 h-fit" alt="" />: null}
                </div>
                <button className='text-3xl font-black'>{isOpen === element.id ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</button>

            </div>

            {isOpen === element.id ? 
            <div className="content text-lg px-5 md:px-10 pb-10 py-5 sm:text-2xl" key={element.id}>
              <div className='flex flex-col space-y-5 items-center'>
                <span className='font-bold'>{element.title}</span>
                <span>{element.text}</span>
                {/* <button className='btn-dark flex items-center justify-center gap-3 w-full md:w-1/2 '>Watch <MdVideoCameraBack className='text-2xl'/></button> */}
              </div>
            </div> : null}
            </div>)}
        </div>
    </>
  )
}

export default Collapse
