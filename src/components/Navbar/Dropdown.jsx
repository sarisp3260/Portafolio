import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowDropDown, MdArrowDropUp  } from 'react-icons/md'

const Dropdown = ({items, title}) => {
    const [dropState, setDropState] = useState(false)

    const showDropdown = () =>{
        setDropState(true)
    }
    const hideDropdown = () =>{
        setDropState(false)
    }


  return (
    <div className='dropdown '>
        <Link to={"/"}>
            <span className='flex items-center gap-3' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                {title} {dropState ? <MdArrowDropUp className='text-3xl'/> : <MdArrowDropDown className='text-3xl'/> }
            </span>
        </Link>
        {dropState ? <div className="box-item absolute pt-10 inset-y-0  bottom-0" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>

            {items.map((item, index) => 
            <div className='dropdown-menu bg-white/80 px-4 py-2 flex flex-col ' key={index}>
                <a key={index} href={item.link} className='text-black text-lg font-medium'>{item.title}</a>
            </div>)}

        </div>
        : null}
    </div>
  )
}

export default Dropdown