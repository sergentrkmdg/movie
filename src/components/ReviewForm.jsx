import React, { useState } from 'react'

const ReviewForm = ({addReview,product,deletePost}) => {
    
    const [nick,setNick]=useState("")
    const [yorum,SetYorum]=useState("")
    const [movieTitle,SetMovieTitle] =useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addReview(nick,yorum,movieTitle,Date.now());
        setNick("")
        SetYorum("")
        SetMovieTitle("")    
    }

    return (
    <div> <div className='m-1 text-white'>Film Hakkında Ne Düşünüyorsun ? </div> 
      <form className=' border-t border-opacity-75  border-neutral-800' onSubmit={handleSubmit}>
     <div className='flex  flex-col md:flex-row pt-3 md:space-y-0 space-y-2 md:space-x-4 space-x-0 justify-between'>
     <div className='flex flex-col basis-1/3 space-y-3 '>  
     <div className='text-white border border-opacity-50 box-border bg-black opacity-50 pl-1  py-3 text-sm rounded-sm '>{product.title}  </div>
     <input type="text" maxLength={12} className='border border-opacity-50   box-border bg-black opacity-50 pl-1 py-3 rounded-sm text-white' value={nick} placeholder='Nick Name' onChange={(e)=>setNick(e.target.value)} />
     </div>  
      <div className='basis-2/3 ' ><textarea maxLength={150} className='bg-black border box-border opacity-50 text-white rounded-sm h-28 pl-2 pt-1 w-full text-sm'  value={yorum} placeholder='Film Hakkındaki yorumlarınız' onChange={(e)=>SetYorum(e.target.value)} /></div></div>
      <div className='flex justify-end'> <span className='flex  items-center mr-2 text-white  text-sm opacity-50'>Yorumlarınızın kaydolması için üye girişi yapınız.</span> <button type='submit' className='  border border-rose-800 bg-rose-800 rounded-md text-white  px-2 py-1 mt-1' onClick={handleSubmit} >Gönder</button> </div>
      </form>
    </div>
  )
}

export default ReviewForm