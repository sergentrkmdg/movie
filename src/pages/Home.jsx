import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productAction } from './../redux/actions/product';
import FilmCard from "../components/FilmCard";
import { searchAction } from '../redux/actions/search';
import SearchCard from '../components/SearchCard';

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
    <div className="grid md:grid-cols-4 md:gap-5 gap-2 grid-cols-2 min-h-screen  " > 
      { 
      search.length > 0 ? search.map((film,i)=>(
        <SearchCard key={i} film={film} /> ))
        :
      products && products.map((film,i)=>(
      <FilmCard key={i} film={film} /> ))
       } 
    </div>
  )
}

export default Home