import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Card from './components/Card';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import PageContainer from './containers/PageContainer';

function App() {
  const {drawer} = useSelector(state => state.drawer );
  return (  
   <PageContainer>
    <BrowserRouter>
    <Navbar/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
      {drawer && <Card/>}
    </BrowserRouter>
  </PageContainer>
 );
}

export default App;
