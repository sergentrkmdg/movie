import React from 'react'
import { useEffect } from 'react'
import { nowProductAction } from './../redux/actions/product'
import { useDispatch, useSelector } from 'react-redux'
import { searchAction } from '../redux/actions/search'
import NowCard from '../components/NowCard'
import SearchCard from '../components/SearchCard';

const NowPlaying = () => {
  const dispatch = useDispatch();
  const {now} = useSelector(state=>state.now);
  const {search} = useSelector(state=>state.search );
  

  useEffect(()=>{
    dispatch(nowProductAction())
    dispatch(searchAction())
  },[dispatch])
  
  console.log ("now",now);
  return (
    
    <div className="grid md:grid-cols-4 md:gap-5 gap-2 grid-cols-2 min-h-screen  " >
      {
        search.length > 0 ? search.map((film,i)=>(
          <SearchCard key={i} film={film} /> ))
          :
        now && Object.values(now).map((play,i)=>(
          <NowCard key={i} play={play} />
        ))
      }  
    </div>
  )
}

export default NowPlaying