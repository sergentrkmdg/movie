import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {BsBasketFill} from "react-icons/bs"; 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchAction } from '../redux/actions/search';
import { CiSearch } from "react-icons/ci";

const Menu = () => {
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
        else if (search.length === 0 && e.key === 'Enter') {
            
          navigate("/");
           
          }
    }
      

  return (
    <nav className="lg:flex  lg:items-center justify-between flex-wrap bg-neutral-900 p-6 ">
      <div className="flex justify-between flex-row-reverse lg:flex-row  items-center flex-shrink-0 text-white ">
      <div className="block lg:hidden ">
       <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded  text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div onClick={()=>navigate(`/`) } className='lg:text-4xl text-2xl text-transparent bg-gradient-to-r bg-clip-text  items-center  from-green-500 to-sky-400  font-bold tracking-wider flex justify-center pr-2'> SINEFILM</div>
      </div>
      <div
        className={`${
          isOpen ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center  lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow space-x-1 lg:space-x-3  ">
        <Link to="/" className=' ml-1 hover:text-yellow-500 hover:bg-transparent block mt-4 lg:inline-block lg:mt-0 text-teal-200 '>POPULAR</Link>
        <Link to="/trend" className='ml-1 hover:text-yellow-500 block mt-4 lg:inline-block lg:mt-0 text-teal-200'>TRENDING</Link>
        <Link to="/top" className='ml-1 hover:text-yellow-500 block mt-4 lg:inline-block lg:mt-0 text-teal-200'>TOP RATED</Link>
       
        </div>
        <div className='flex justify-start  items-center md:space-x-4 space-x-1'>  
        <div className="group flex flex-row  my-1 ">
            <input value={search} onKeyPress={searchPost} onChange={e=>setSearch(e.target.value)}  className='opacity-50 group-hover:opacity-100 bg-transparent h-8  text-white border-b border-teal-200 focus:outline-none w-full lg:w-44 transition duration-500  ' type="text" placeholder='Search movie' />
            <button className=" group-hover:ml-0 transition duration-500"><CiSearch size={20} className="text-white transition duration-500" /></button>
            </div>
            <div onClick={()=> dispatch({type:"DRAWER",payload:true})} className='relative cursor-pointer'  >
             <BsBasketFill  size={25} className='text-white'  />  
           {cardItems.length>0 && <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm'> {cardItems.length} </span> } 
            </div>
           </div> 
      </div>
      
    </nav>
  );
};

export default Menu;