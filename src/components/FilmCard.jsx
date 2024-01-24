import React from 'react'
import { useNavigate } from 'react-router-dom';


const API_IMAGE = "https://image.tmdb.org/t/p/w500";

const FilmCard = ({film}) => {
    const navigate=useNavigate()
  return (

 <div onClick={()=>navigate(`detail/${film?.id}`)} className= 'group hover:opacity-70  hover:border-2 hover:scale-105 duration-500 rounded-md flex flex-col items-center justify-between ' >
       <img className='' src={API_IMAGE+film.poster_path} alt="" />
       <div className='w-full h-12  bg-black  flex items-center justify-center  ' >
         <h1 className='xl:leading-6 text-white opacity-80 leading-3 font-medium text-center xl:text-[16px] lg:text-[14px] md:text-[12px] text-sm'>{film?.title} </h1>
       </div>
  </div>
    )
}

export default FilmCard