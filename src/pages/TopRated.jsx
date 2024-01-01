import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { topProductAction } from '../redux/actions/product';
import TopCard from '../components/TopCard';
import { searchAction } from '../redux/actions/search';
import SearchCard from '../components/SearchCard';

const TopRated = () => {
    const dispatch = useDispatch();
    const {top} = useSelector(state=>state.top); 
    const {search} = useSelector(state=>state.search );

     useEffect(()=> {
      dispatch(topProductAction())
      dispatch(searchAction())
     },[ dispatch])
     console.log("top",top);
    return (
        <div className="grid md:grid-cols-4 md:gap-5 gap-2 grid-cols-2 min-h-screen  " > 
        {
         search.length > 0 ? search.map((film,i)=>(
        <SearchCard key={i} film={film} /> ))
        :
             top &&  top.map((rated,i)=>(
           <TopCard key={i} rated={rated} />
        ))
        }
        

    </div>
  )
}

export default TopRated