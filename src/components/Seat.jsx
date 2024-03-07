import React from "react";
import { BiSolidCartAdd } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from 'react-redux';

const Seat = ({seats,setSeats,total,setTotal}) => {

 const dispatch = useDispatch()
 const seatPrices = 100;


 const addToCart = (seatIndex) => {
    if (!seats.includes(seatIndex)) {
        setSeats((prevSeats) => [...prevSeats, seatIndex]);
        setTotal((prevTotal) => prevTotal + seatPrices);
    } else {
        setSeats((prevSeats) => prevSeats.filter((item) => item !== seatIndex));
        setTotal((prevTotal) => prevTotal - seatPrices);
    }
};
    const deleteToCard=()=> {
        setSeats([]);
        setTotal(0);
    }
 return (
    
     <div className='md:w-2/4 w-3/4  p-5   top-10  fixed rounded-sm  z-30  h-[500px]  bg-neutral-950'>
      <div className="flex justify-end ">
        <div><AiFillCloseCircle onClick={()=>dispatch({type:"SALON_AC", payload:false})} className="text-white cursor-pointer " /> </div>
      </div>
       
       <div className="lg:w-3/4 w-full gap-5 lg:gap-10 rounded-sm m-auto ">
        <div className="w-3/4 m-auto h-10 rounded-sm bg-slate-500">

        </div>
        <div className="flex justify-evenly space-x-3 sm:space-x-0 mt-5 m-auto ">
       <div className=' grid grid-cols-4 text-center justify-center gap-1' >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((seatIndex) => (
          <div className="h-[30px] w-[30px] flex items-center justify-center text-xs rounded-sm hover:scale-105 duration-200 "
            key={seatIndex}
            style={{
              backgroundColor: seats.includes(seatIndex) ? "#636e72" : "#b2bec3",
              padding: "10px",
              margin: "5px",
            }}
            onClick={() => addToCart(seatIndex)}
          >
            {seatIndex}
          </div>
        ))} </div>
        <div className='grid grid-cols-4 gap-1'>
         {Array.from({ length: 20 }, (_, i) => i + 21).map((seatIndex) => (
          <div className="h-[30px] w-[30px] flex items-center justify-center text-xs rounded-sm hover:scale-105 duration-200 "
            key={seatIndex}
            style={{
              backgroundColor: seats.includes(seatIndex) ? "#636e72" : "#b2bec3",
              padding: "10px",
              margin: "5px",
            }}
            onClick={() => addToCart(seatIndex)}
          >
            {seatIndex}
          </div>
        ))} </div>
        
       </div>
            {seats.length > 0 ?<div className=" w-3/4 m-auto mt-5 text-center rounded-md justify-center items-center  bg-neutral-600">
          <h3 className="text-md"> Koltuk no : {seats+","+ "(x"+seats.length+")" } </h3>
          <h3 className="font-semibold flex justify-center">Total : {total} TL <BiSolidCartAdd className="ml-2" size={25}  onClick={()=> dispatch({type:"DRAWER",payload:true})} /> </h3>
          <button onClick={deleteToCard} className="w-2/5 mb-2 border border-neutral-950 font-medium bg-slate-400 rounded-md" > Temizle </button>
         </div> : null }
         
      </div>
      
    </div>
 );
};

export default Seat;