import React, { useState } from 'react';
import ReviewForm from './ReviewForm.jsx';
import { v4 as uuidv4 } from 'uuid';
import { RiDeleteBin5Fill } from "react-icons/ri";

const Post = ({product}) => {
  const [reviews, setReviews] = useState([]);

  const addReview = (nickname, comment, movieTitle) => {
    setReviews([...reviews, {id: uuidv4(), nickname, comment, movieTitle }]); 
  };

  const deletePost = (id) => {
    const updateReviews = reviews.filter((revi)=>revi.id!==id);
    setReviews(updateReviews);
   }
 

  return (
    <div className="w-full">
     
      <ReviewForm addReview={addReview} deletePost={deletePost} product={product} />
      <div className='w-full'> 
        {reviews.map((review, index) => (
          <div className='mt-10 w-full m-auto bg-black border box-border opacity-50 text-white rounded-sm md:h-28 overflow-hidden word-break min-h-fit pl-2 pt-1 text-sm' key={index}>
          <div className=' border-b py-1 border-opacity-75  flex justify-between border-neutral-800 mx-2'> 
           <div><span className='mr-1'>{product.title}</span> -  
                <strong className='ml-1'> {review.nickname}</strong>   </div> 
          <div className='flex ' onClick={()=>deletePost(review.id)} > <RiDeleteBin5Fill size={20} className='text-white' /></div> </div> 
            <div className='mx-2 my-1'>{review.comment} </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;