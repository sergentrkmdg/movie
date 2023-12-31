import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Card from './components/Card';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import PageContainer from './containers/PageContainer';
import Seat from './components/Seat';
import TopRated from "./pages/TopRated";
import NowPlaying from "./pages/NowPlaying";

function App() {
  const {drawer} = useSelector(state => state.drawer );
  const {salon} = useSelector(state => state.salon);
  const [seats, setSeats] = useState([]);
  const [total, setTotal] = useState(0);

  
  return (  
   
   <BrowserRouter>
    <Navbar/> 
      <PageContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<TopRated/>} />
        <Route path="/trend" element={<NowPlaying/>}/>
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
      {salon && <Seat setTotal={setTotal} total={total} seats={seats} setSeats={setSeats} /> }
      {drawer && <Card setTotal={setTotal} total={total} seats={seats} setSeats={setSeats}  />}
       </PageContainer>
    </BrowserRouter>

 );
}

export default App;
