import React from 'react'
import { useNavigate } from 'react-router-dom';

const API_IMAGE = "https://image.tmdb.org/t/p/w500";

const SearchCard = ({film}) => {
    const navigate=useNavigate()
  return (    
  <div  onClick={()=>navigate(`/detail/${film?.id}`)} className= 'group border-2 hover:border-4 hover:scale-105 duration-200 rounded-md flex flex-col items-center justify-between max-h-[500px] ' >       
       <img className='h-full' src={API_IMAGE+film?.poster_path} alt="" />
       <div className='w-full h-12 bg-slate-400 flex items-center justify-center  ' >
         <h1 className='xl:leading-6 leading-3 font-medium text-center xl:text-[16px] lg:text-[14px] md:text-[12px] text-sm'>{film?.title} </h1>
       </div>  
  </div> 
    )
}

export default SearchCard