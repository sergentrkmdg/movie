import React, { useEffect } from 'react'
import {useParams } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { productDetailAction } from './../redux/actions/product';
import { productActionCard } from './../redux/actions/card';

const Detail=()=> {

const API_IMAGE = "https://image.tmdb.org/t/p/w500";
const dispatch = useDispatch();
const {product} = useSelector(state => state.product) 
const {id}=useParams();
 
 useEffect(()=> {

  dispatch(productDetailAction(id) )  

},[dispatch])
 
console.log("product", product)

const Imdb=product.vote_average
const Vote= Math.round(Imdb*10)/10

const addCard = () => {
  dispatch(productActionCard(id))
  dispatch({type:"DRAWER", payload:true})
}



return (
    <div className='mt-5 w-full h-screen flex flex-row space-x-10  '>
      <div className='relative w-1/3  '>
         <img className='relative w-full ' src={API_IMAGE+product?.poster_path} alt="" /> 
      </div>
      <div className='flex  text-neutral-200  flex-col w-2/3 space-x-5 space-y-5 items-center'>
         <div className='text-lg uppercase font-bold'>{product?.title}</div>
         <div className='opacity-70 text-sm'>{product?.overview}</div>
         <div>Yayın tarihi :  {product?.release_date}</div>
         <div >IMDB: {Vote}</div>
         
          <button onClick={addCard} className=' w-full  h-12 bg-slate-400 p-2 hover:scale-105   border rounded-lg text-lg  '>Online İzle</button>
          <button onClick={()=> dispatch({type:"SALON_AC",payload:true})}className='w-full h-12 bg-slate-400 hover:scale-105  border rounded-lg  text-lg overflow-hidden  '>Sinemada izle</button>
         
     </div>
      
    </div>
  )
}

export default Detail