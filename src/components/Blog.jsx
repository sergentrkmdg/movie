import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { TbMessageCircle } from "react-icons/tb";
import { BiHeart } from "react-icons/bi";

const Blog = () => {
  return (
    
    <div className="py-10 ">
     
      <div className="container px-10 lg:px-0">
        
        <h2 className="font-semibold text-lg pb-3  text-rose-700 tracking-wide "> POPULAR POSTS </h2>
    
        <div className="grid grid-cols-6 gap-10 text-white">
         
          <div className="col-span-6 md:col-span-3 border-2 bg-black  border-rose-800  ">
            
            <div className="border-b border-rose-800 p-4 flex items-center justify-between">
              <h3>OPPENHEIMER</h3>
              <RxAvatar size={25} className="text-white rounded-full " />
            </div>
            
            <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
              temporibus dolorem nihil
              excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
            
            <div className="border-t   border-rose-800  p-4 flex items-center justify-end space-x-4 font-bold  text-xs">
              <p>ON DEC 17, 2023</p>
              <div className="flex items-center justify-center space-x-1">
              <TbMessageCircle size={18} />
                <p>12</p>
                <BiHeart size={18} />
                <p>09</p>
              </div>
            </div>
          </div>
          
            <div className="col-span-6 text-white bg-black md:col-span-3 border-2 border-rose-800">
             
              <div className="border-b border-rose-800 p-4 flex items-center justify-between">
                <h3>ONE MORE SHOT</h3>
                <RxAvatar size={25} className="text-white rounded-full " />
              </div>
              
              <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
                temporibus dolorem nihil
                excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
             
              <div className="border-t border-rose-800 p-4 flex items-center justify-end space-x-4 font-bold text-xs">
                <p>ON DEC 17, 2023</p>
                <div className="flex items-center justify-center space-x-1">
                <TbMessageCircle size={18} />
                  <p>12</p>
                  <BiHeart size={18} />
                  <p>09</p>
                </div>
              </div>
            </div>
             
          <div className="col-span-6 text-white  bg-black  md:col-span-3 lg:col-span-2 border-2 border-rose-800">
           
            <div className="border-b border-rose-800 p-4 flex items-center justify-between">
              <h3>NAPOLEON</h3>
              <RxAvatar size={25} className="text-white rounded-full " />
            </div>
           
            <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
              temporibus dolorem nihil
              excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
          
            <div className="border-t border-rose-800 p-4 flex items-center justify-end space-x-4 font-bold  text-xs">
              <p>ON DEC 17, 2023</p>
              <div className="flex items-center justify-center space-x-1">
              <TbMessageCircle size={18} />
                <p>12</p>
                <BiHeart size={18} />
                <p>09</p>
              </div>
            </div>
          </div>
           
            <div className="col-span-6  bg-black  text-white md:col-span-3 lg:col-span-2 border-2 border-rose-800">
             
              <div className="border-b border-rose-800 p-4 flex items-center justify-between">
                <h3>DEEP FEAR</h3>
                <RxAvatar size={25} className="text-white rounded-full " />
              </div>
             
              <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
                temporibus dolorem nihil
                excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
              
              <div className="border-t border-rose-800 p-4 flex items-center justify-end space-x-4 font-bold text-xs">
                <p>ON DEC 17, 2023</p>
                <div className="flex items-center justify-center space-x-1">
                <TbMessageCircle size={18} />
                  <p>12</p>
                  <BiHeart size={18} />
                  <p>09</p>
                </div>
              </div>
            </div>
           
          <div className="hidden lg:block  bg-black  text-white lg:col-span-2 border-2 border-rose-800">
         
            <div className="border-b border-rose-800 p-4 flex items-center justify-between">
              <h3>THE BRICKLAYER</h3>
              <RxAvatar size={25} className="text-white rounded-full " />
            </div>
           
            <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur
              temporibus dolorem nihil
              excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
           
            <div className="border-t border-rose-800 p-4 flex items-center justify-end space-x-4 font-bold  text-xs">
              <p>ON DEC 17, 2023</p>
              <div className="flex items-center justify-center space-x-1">
              <TbMessageCircle size={18} />
                <p>12</p>
                <BiHeart size={18} />
                <p>09</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Blog