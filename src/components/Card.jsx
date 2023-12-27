import React from 'react'
import {GrFormClose} from "react-icons/gr"
import {RiDeleteBin5Fill} from "react-icons/ri"
import { PiArmchairDuotone } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux'
import { productRemoveCard } from '../redux/actions/card';



const Card = ({seats,setSeats,total,setTotal}) => {

  

    const API_IMAGE = "https://image.tmdb.org/t/p/w500";
    const dispatch = useDispatch()
    const {cardItems} = useSelector(state=>state.cardItems);
    const price = 49.99
    const deleteCard = (id) => { dispatch(productRemoveCard(id))}
    const leng = cardItems.length;
    
    const deleteToCard=()=> {
      setSeats([]);
      setTotal(0);
  }
    

    console.log(leng, "lenght")

    console.log(cardItems, "cardItems")
    return (
    <div className='md:w-1/3 flex flex-col justify-between sm:w-2/4 w-full h-full border fixed top-0 right-0 z-50 bg-white p-3'>
       <div className=''>
        <div className="flex items-center  shadow-md  pl-3 pb-3 h-18 justify-between">
            <h1 className=' text-lg '>SEPETİM</h1>
            <GrFormClose onClick={()=>dispatch({type:"DRAWER",payload:false}) } size={25} className='cursor-pointer opacity-70' />
        </div>
        
            {
            cardItems.map((card,i) =>(
            <div className='flex justify-between items-center border-b-2 p-3 space-x-3 text-black' key={i}> 
            <div className='flex space-x-2 items-center'>
             <img className='h-12 w-12 ' src={API_IMAGE+card?.image} alt={card?.title} /> 
              <div className='text-sm md:text-base ' >  {card?.title}</div>  
            </div>  
              <div className='flex items-center space-x-3'>
               <div>{price} TL </div>
               <RiDeleteBin5Fill className='cursor-pointer opacity-70' size={20} onClick={()=>deleteCard(card.id)} /> 
             </div>
            </div> 
            
            ))}
           {seats.length > 0 &&   <div className='flex justify-between items-center border-b-2 p-3 space-x-3 text-black'>
            <div className='flex '>  <PiArmchairDuotone size={25} className='mr-2' />    {seats + ","} {"("+seats.length+")"} </div>
           <div className='flex items-center space-x-3'> <h3 className='ml-3 '>  {total} TL</h3>  <RiDeleteBin5Fill className='cursor-pointer opacity-70' size={20} onClick={deleteToCard} /> </div>
          </div>  }
         
        </div>
        <div className='h-12 font-semibold flex p-2 items-center rounded-sm  border-b-2 shadow-md'>Total: {(leng*price)+total} TL</div>
       
    </div>
  )
}

export default Card