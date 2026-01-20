import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InfoIcon from '@mui/icons-material/Info';
import LanSharpIcon from '@mui/icons-material/LanSharp';
import ClearIcon from '@mui/icons-material/Clear';
import ChildCareIcon from '@mui/icons-material/ChildCare';



const VerticleNAvbar = () => {
    const hideVeticleNavbar=()=>
        {
                document.getElementById("verticleNavBar").classList.add("hidden")
        }
    return (
        
        <>
            <div id="verticleNavBar" className="fixed animate-come-in hidden text-[white] font-[900] z-10 bg-[#ffffff] right-0 w-[50%]   top-0 h-[100%]">
                <span className="float-right  p-2 bg-[#ce5252] rounded-md  cursor-pointer" onClick={hideVeticleNavbar}><ClearIcon/></span>
                <ul className=" pt-[50px]">
                    <li className="bg-[#ce5252] m-1 p-1"><Link to="/"><HomeIcon/>Home</Link></li>
                    <li className="bg-[#ce5252] m-1 p-1"><Link to="/services"><LanSharpIcon/> Service</Link></li>
                    <li className="bg-[#ce5252] m-1 p-1"><Link to="/careers"><ChildCareIcon/>Careers</Link></li>
                    <li className="bg-[#ce5252] m-1 p-1"><Link to="/contact"><PermContactCalendarIcon/>Contact</Link></li>
                    <li className="bg-[#ce5252] m-1 p-1"><Link to="/about-us"><InfoIcon/>About Us</Link></li>

                </ul>
            </div>
        </>
    )
}

export default VerticleNAvbar