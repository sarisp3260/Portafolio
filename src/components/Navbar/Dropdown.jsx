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
        <span className='flex items-center gap-3' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            {title} {dropState ? <MdArrowDropUp className='text-3xl'/> : <MdArrowDropDown className='text-3xl'/> }
        </span>
        {dropState ? <div className="box-item absolute pt-10 inset-y-0  bottom-0" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            {items.map((item, index) => 
            <div className='dropdown-menu bg-white/80 px-4 py-2 flex flex-col ' key={index}>
                <Link to='#' className='text-black text-lg font-medium'>{item}</Link>
            </div>)}
        </div>
        : null}
    </div>
  )
}

export default Dropdown