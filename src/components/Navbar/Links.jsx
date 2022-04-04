import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
    const style = "text-xl font-semibold hover:text-blue"
  return (
    <>
        <Link to='#' className={style}>About</Link>
        <Link to='#' className={style}>Work</Link>
        <Link to='#' className={style}>Skills</Link>
        <Link to='#' className={style}>Contact</Link>
    </>
  )
}

export default Links