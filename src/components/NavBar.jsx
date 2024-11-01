import React from 'react'
import logo from '../assets/kevinRushLogo.png';
import {FaLinkedin, FaTwitterSquare} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'
const NavBar = () => {
  return (
    <nav className='mb-20 flex item-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-20 w-10' src={logo} alt="logo" />
        </div>
        <div className='m-1 mx-20  flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaSquareXTwitter />
        </div>
    </nav>
  )
}

export default NavBar
