import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { comingAction } from '../redux/actions/product'
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import './style.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";



const ComingCard = () => {
 const dispatch=useDispatch();
 const {coming} = useSelector(state=>state.coming);   
 const navigate = useNavigate();
 const API_IMAGE = "https://image.tmdb.org/t/p/w500";

 useEffect(()=>{
dispatch(comingAction())
 },[dispatch])

 console.log("coming",coming);

 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, 
  slidesToScroll: 2,
  arrows: true,
  nextArrow: <MdOutlineArrowForwardIos   />,
  prevArrow: <MdOutlineArrowBackIos  />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots:false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false
      }
    }
  ]
  
  
};
 return (
   
    <div> 
  <Slider   {...settings} > 
        {
          coming && coming.slice(0,8).map((com,i)=> (
                <div key={i} onClick={()=>navigate(`detail/${com?.id}`)} className= 'group relative overflow-hidden duration-200 flex flex-col items-center justify-between' >
                <img className='group-hover:scale-110 h-[300px] w-full group-hover:relative  group-hover:opacity-50 duration-700' src={API_IMAGE+com?.poster_path} alt="" />
                <div className='w-full h-12 absolute group-hover:items-start flex flex-col items-center justify-center group-hover:absolute group-hover:bg-transparent px-6 bottom-8 ' >
                  <h1 className='xl:leading-6 hidden group-hover:block text-white leading-3 font-medium text-center xl:text-[16px] lg:text-[14px] md:text-[12px] text-sm'>{com?.title} </h1>
                  <h2 className='hidden group-hover:block opacity-70 text-sm text-white'>{(com?.overview).substring(0,80)+"..."} </h2>
                </div>
           </div> 
            ))
        }
    </Slider>
    </div>
 
    
  )
}

export default ComingCard