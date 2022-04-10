import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

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
        title: "Figma",
        img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
        text: "loremsdnenejnjdncjd"
    },
    {
        id: 2,
        title: "Figma",
        img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
        text: "loremsdnenejnjdncjd"
    },
    {
        id: 3,
        title: "Figma",
        img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
        text: "loremsdnenejnjdncjd"
    },
    {
        id: 4,
        title: "Figma",
        img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
        text: "loremsdnenejnjdncjd"
    },
  ]

  return (
    <>
        <div >
          {DataInfo.map((element) => 
          <div key={element.id} className="bg-gray w-full rounded-md my-5 text-black transform transition ease-in duration-700">
            <div onClick={() => toogle(element.id)} key={element.id} className="brandUpdates-text px-6 py-4 flex justify-between items-center">

                <img src={element.img} className="w-10" alt="" />
                <span className='hidden sm:flex'>{element.title}</span>
                <button className='text-3xl font-black'>{isOpen === element.id ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</button>

            </div>

            {isOpen === element.id ? 
            <div className="content text-lg px-10 pb-10 py-5 sm:text-2xl" key={element.id}>
              <div className='flex'>
                  <span>{element.text}</span>
                  <img src={element.img} alt="" />
              </div>
            </div> : null}
            </div>)}
        </div>
    </>
  )
}

export default Collapse
