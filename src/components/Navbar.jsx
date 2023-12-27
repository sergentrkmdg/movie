import React, { useState } from 'react'
import {BsLightbulb,BsBasketFill} from "react-icons/bs"; 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchAction } from '../redux/actions/search';

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {cardItems} = useSelector(state=>state.cardItems)
    const [search, setSearch] = useState("")
    const searchPost = (e)=>{
        if(e.key === "Enter") {
           const searc = search.toLocaleLowerCase()
           dispatch(searchAction(searc)) 
        }
    }
    return (
    <div className='flex items-center  justify-between bg-slate-700 px-5 h-28'>
        <div onClick={()=>navigate(`/`) } className='text-2xl text-white font-bold tracking-wider '> TMDB</div>
        <div className='flex items-center space-x-4'>
            <input value={search} onKeyPress={searchPost} onChange={e=>setSearch(e.target.value)}  className='border p-2 outline-none rounded-md ' type="text" placeholder='search movie' />
            <BsLightbulb size={25} className='cursor-pointer'/>
            <div onClick={()=> dispatch({type:"DRAWER",payload:true})} className='relative cursor-pointer'  >
            <BsBasketFill  size={25}  />
            <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm'> {cardItems.length} </span>
            </div>
        </div>

    </div>
  )
}

export default Navbar