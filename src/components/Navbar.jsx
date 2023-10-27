import React from 'react'
import {BsLightbulb,BsBasketFill} from "react-icons/bs"; 
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch()
    return (
    <div className='flex items-center justify-between px-3 h-28'>
        <div className='text-2xl text-slate-800 font-bold tracking-wider '>TMDB</div>
        <div className='flex items-center space-x-4'>
            <input className='border p-3 outline-none rounded-lg ' type="text" placeholder='search' />
            <BsLightbulb size={25} className='cursor-pointer'/>
            <div onClick={()=> dispatch({type:"DRAWER",payload:true})} className='relative cursor-pointer'  >
            <BsBasketFill  size={25}  />
            <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm'> 3 </span>
            </div>
        </div>

    </div>
  )
}

export default Navbar