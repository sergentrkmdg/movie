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
        if(e.key === "Enter" && search.trim()) {
           const searc = search.toLocaleLowerCase()
          
           dispatch(searchAction(searc)) 
           
        }
        else if (e.key === '' || (e.key === 'Enter')) {
            navigate("/");
           
          }
    }
      
    
    return (
    <div className='sm:flex  sm:items-center justify-between  bg-neutral-900   md:px-5 px-1   h-28 space-y-2'>
        <div onClick={()=>navigate(`/`) } className='lg:text-4xl text-2xl text-transparent bg-gradient-to-r bg-clip-text   from-green-500 to-sky-400  font-bold tracking-wider flex justify-center '> SINEFILM</div>
        <div className='text-white md:space-x-2 space-x-1 font-medium divide-x divide divide-slate-300  divide-opacity-50 flex justify-center'>
        <Link to="/" className='hover:text-yellow-500 '>POPULAR</Link> 
        <Link to="/trend" className='hover:text-yellow-500 md:pl-2 pl-1'>TRENDING</Link> 
        <Link to="/top" className='hover:text-yellow-500 md:pl-2 pl-1'>TOP RATED</Link> 
        </div>   
        <div className='flex justify-center items-center md:space-x-4 space-x-1'>  
            <input value={search} onKeyPress={searchPost} onChange={e=>setSearch(e.target.value)}  className='hover:border md:w-48  w-28  hover:opacity-100 text-white opacity-70 bg-neutral-700 sm:p-2 p-1 outline-none rounded-xl ' type="text" placeholder='Search movie' />
            <div onClick={()=> dispatch({type:"DRAWER",payload:true})} className='relative cursor-pointer'  >
             <BsBasketFill  size={25} className='text-white'  />  
           {cardItems.length>0 && <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm'> {cardItems.length} </span> } 
            </div>
        </div>  

    </div>
  )
}

export default Navbar