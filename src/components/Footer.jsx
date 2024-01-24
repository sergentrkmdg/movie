import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-neutral-900 justify-center text-center lg:h-12 mt-3 lg:flex lg:flex-row  items-center  min-h-max space-x-5">
       <div className='pl-2 lg:text-2xl text-xl bg-clip-text text-transparent  bg-gradient-to-l  from-green-500 to-sky-500  font-bold tracking-wider '> SINEFILM</div>
       <p className='text-white opacity-40'>2023 Sergentrkmdg No © COPYRIGHT</p> 
       <p className='text-white opacity-40 ' >Bu bir sinema bilet alma ve online film izleme sitesidir.</p>
        <div className='flex justify-center items-center space-x-2'>
            <div><FaInstagram size={18} className='text-white' /></div>
            <div><FaTwitter size={18} className='text-white' /></div>
            <div><FaFacebook size={18} className='text-white' /></div>

        </div>
   </div>
  )
}

export default Footer