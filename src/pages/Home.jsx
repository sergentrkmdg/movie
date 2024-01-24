import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productAction } from './../redux/actions/product';
import FilmCard from "../components/FilmCard";
import { searchAction } from '../redux/actions/search';
import SearchCard from '../components/SearchCard';
import ComingCard from '../components/ComingCard';
import Blog from '../components/Blog';


const Home = () => {
  const dispatch = useDispatch();
  const {products}=useSelector(state=>state.products);
  const {search} = useSelector(state=>state.search );

 useEffect(()=>{
  dispatch(productAction())
  dispatch(searchAction())
  },[dispatch])

  console.log("products",products);


  
 return (
     
    <div className="" > 
      <div> 
       {search.length > 0 ? <div className='mt-5 grid md:grid-cols-4 md:gap-5 gap-2 grid-cols-2 min-h-screen' > {search.map((film,i)=>(
        <SearchCard key={i} film={film} /> ))
        } </div> :
         <div className=''>  
       <div className=''><ComingCard/></div> 
       <div className='mt-5 grid md:grid-cols-4 md:gap-5 gap-2 grid-cols-2 min-h-screen' > {
      products && products.map((film,i)=>(
      <FilmCard key={i} film={film} /> ))
       } 
      </div>
      <div className=' '>
        <Blog/>
      </div>
      </div> 
      }
        </div>  
       
      
      
       
    </div>
  )
}

export default Home