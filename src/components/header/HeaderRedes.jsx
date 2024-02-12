import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const HeaderRedes = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/marcovelandia/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/marcomps4" target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderRedes