import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {BsBasketFill} from "react-icons/bs"; 
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
    <div className='flex items-center  justify-between  bg-neutral-900  px-5 h-28'>
        <div onClick={()=>navigate(`/`) } className='text-4xl text-transparent bg-gradient-to-r bg-clip-text   from-green-500 to-sky-400  font-bold tracking-wider '> SINEFILM</div>
        <div className='text-white space-x-2 font-medium divide-x divide divide-slate-300  divide-opacity-50'>
        <Link to="/" className='hover:text-yellow-500 '>POPULAR</Link> 
        <Link to="/trend" className='hover:text-yellow-500 pl-2'>TRENDING</Link> 
        <Link to="/top" className='hover:text-yellow-500 pl-2'>TOP RATED</Link> 
        </div>   
        <div className='flex items-center space-x-4'>
            <input value={search} onKeyPress={searchPost} onChange={e=>setSearch(e.target.value)}  className='hover:border hover:opacity-100 text-white opacity-70 bg-neutral-700 p-2 outline-none rounded-xl ' type="text" placeholder='Search movie' />
            <div onClick={()=> dispatch({type:"DRAWER",payload:true})} className='relative cursor-pointer'  >
            <BsBasketFill  size={25} className='text-white'  />
           <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm'> {cardItems.length} </span> 
            </div>
        </div>  

    </div>
  )
}

export default Navbar