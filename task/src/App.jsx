import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Homepage from './components/Homepage';
import Adminpage from './components/Adminpage';
import About from './components/About';

function App() {
  const isLoggedIn = !!sessionStorage.getItem('credential');

  
  return (
    <>
     
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
