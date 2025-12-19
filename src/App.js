import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'; // Import the CSS file
import Home from './Pages/Home';
import Services from './Pages/Services';
import AboutUS from './Pages/AboutUs';
import Contact from './Pages/Contact';


function App() {
  return (<BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
           
            <Route path='/about-us' element={<AboutUS/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
  </BrowserRouter>
  
  );
}

export default App;
