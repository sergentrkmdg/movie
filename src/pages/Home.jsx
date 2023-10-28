import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productAction } from './../redux/actions/product';
import FilmCard from "../components/FilmCard";

const Home = () => {
  const dispatch = useDispatch();
  const {products}=useSelector(state=>state.products);

 useEffect(()=>{
  dispatch(productAction())
  },[dispatch])

  console.log("products",products);

 return (
    <div className="grid md:grid-cols-4 gap-5 grid-cols-2  " > 
      { 
      products && products.map((film,i)=>(
      <FilmCard key={i} film={film} /> ))
       } 
    </div>
  )
}

export default Home