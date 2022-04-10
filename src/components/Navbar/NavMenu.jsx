import React from 'react'
import Links from './Links'

const NavMenu = () => {
  return (
    <div className="nav-items-menu h-screen flex flex-col fixed top-16 right-0 w-full bg-blue/40 backdrop-blur-lg gap-8 p-8">

        <Links className="text-blue" responsive='yes'/>

    </div>
  )
}

export default NavMenu