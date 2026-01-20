import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'; // Import the CSS file
import Home from './Pages/Home';
import Services from './Pages/Services';
import AboutUS from './Pages/AboutUs';
import Contact from './Pages/Contact';
import PageNotFOund from './Pages/PageNotFOund';
import Careers from './Pages/Careers';



function App() {
  return (
        
            <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}>
            </Route>
            <Route path='/about-us' element={<AboutUS/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path="/careers" element={<Careers/>}/>
            <Route path="*" element={<PageNotFOund/>} />
          </Routes>
  </BrowserRouter>
          


          

  
  );
}

export default App;
