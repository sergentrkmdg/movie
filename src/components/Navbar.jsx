import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {BsBasketFill} from "react-icons/bs"; 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchAction } from '../redux/actions/search';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {cardItems} = useSelector(state=>state.cardItems)
    const [isOpen,setIsOpen]=useState(false);
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
    <div className='sm:flex  sm:items-center justify-between  bg-neutral-900   md:px-5 px-1  h-auto md:h-28 space-y-2'>
      <div className='flex justify-between'>
          <div onClick={()=>navigate(`/`) } className='lg:text-4xl text-2xl text-transparent bg-gradient-to-r bg-clip-text h-28 items-center  from-green-500 to-sky-400  font-bold tracking-wider flex justify-center '> SINEFILM</div>
        <div className='block md:hidden   '> 
        <button className='h-28 flex items-center '  onClick={()=>setIsOpen(!isOpen)}> <GiHamburgerMenu size={25}/>  </button>  
        </div>  </div>
      <div className={`${ isOpen ? `block`:`hidden`} w-full flex flex-col-reverse   md:flex md:flex-row md:items-center md:justify-evenly space-x-2   ` } >
        <div className='text-white md:space-x-2 space-x-2 font-medium   md:flex md:flex-row flex flex-col md:items-center items-star '>
        <div className=''> <Link to="/" className='hover:text-yellow-500 hover:bg-transparent '>POPULAR</Link> </div>
        <div className=''><Link to="/trend" className='hover:text-yellow-500 '>TRENDING</Link> </div>
        <div className=''><Link to="/top" className='hover:text-yellow-500'>TOP RATED</Link> </div>
        </div>   
        <div className='flex justify-center items-center md:space-x-4 space-x-1'>  
            <input value={search} onKeyPress={searchPost} onChange={e=>setSearch(e.target.value)}  className='hover:border md:w-48  w-full  hover:opacity-100 text-white opacity-70 bg-neutral-700 sm:p-2 p-1 outline-none rounded-lg ' type="text" placeholder='Search movie' />
            <div onClick={()=> dispatch({type:"DRAWER",payload:true})} className='relative cursor-pointer'  >
             <BsBasketFill  size={25} className='text-white'  />  
           {cardItems.length>0 && <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm'> {cardItems.length} </span> } 
            </div>
           </div> 
        </div>  

    </div>
  )
}

export default Navbar