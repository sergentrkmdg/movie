import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Card from './components/Card';
import { useSelector } from 'react-redux';
import PageContainer from './containers/PageContainer';
import Seat from './components/Seat';
import TopRated from "./pages/TopRated";
import NowPlaying from "./pages/NowPlaying";
import ComingCard from "./components/ComingCard";
import SearchCard from "./components/SearchCard";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  const {drawer} = useSelector(state => state.drawer );
  const {salon} = useSelector(state => state.salon);
  const [seats, setSeats] = useState([]);
  const [total, setTotal] = useState(0);

  
  return (  
   
   <BrowserRouter>
    <Menu/>  
      <PageContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ComingCard/>} />
        <Route path="/search" element={<SearchCard/>} />
        <Route path="/top" element={<TopRated/>} />
        <Route path="/trend" element={<NowPlaying/>}/>
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
      {salon && <Seat setTotal={setTotal} total={total} seats={seats} setSeats={setSeats} /> }
      {drawer && <Card setTotal={setTotal} total={total} seats={seats} setSeats={setSeats}  />}
       </PageContainer>
       <Footer/>
    </BrowserRouter>

 );
}

export default App;
