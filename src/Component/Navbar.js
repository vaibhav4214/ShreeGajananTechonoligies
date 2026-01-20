import { Link } from "react-router-dom"
import VerticleNAvbar from "./VerticleNavbar"
import ArticleIcon from '@mui/icons-material/Article';
import logo from "../assest/logomain.png"
import SerrvicesPopUP from "./ServicesPopUP";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InfoIcon from '@mui/icons-material/Info';
import LanSharpIcon from '@mui/icons-material/LanSharp';
import ChildCareIcon from '@mui/icons-material/ChildCare';

const Navbar = () => {



    // for service hover display service list
    const serviceHoverOmuseOver = () => {
        console.log("v")
        document.getElementById("servicepopup").classList.remove("hidden")
    }
    const serviceHoverOmuseLeave = () => {
        console.log("v")
        document.getElementById("servicepopup").classList.add("hidden")
    }

    const serviceDisplayNone = () => {
        document.getElementById("servicepopup").classList.toggle("hidden")

    }

    const displayVerticleNavbar = () => {
        document.getElementById("verticleNavBar").classList.toggle("hidden")
        console.log("vai")
    }

    return (<>
        {/* nav bar */}
        <div className="lg:grid  bg-[white] lg:block  lg:grid-cols-12 py-1 border-solid border-2 ">
            <div className="col-span-3"></div>

            <p className="lg:col-span-3 col-span-12 text-[13px]   p-2 pr-5  text-[#423b3b]"><span className="font-bold">Phone:</span> (+91) 7276867899  |  <span className="font-bold ">Email:</span> <a className="hover:text-[grey]" href="mailto:Contact@shreegajanan.org" >Contact@shreegajanan.org</a></p>
            <div className="lg:col-span-3 col-span-12 p-2 pl-5 lg:text-right">
                <a className="pr-2 text-[#423b3b] hover:text-[grey]" href=""><WhatsAppIcon /></a>
                <a className="pr-2 text-[#423b3b] hover:text-[grey]" href="https://www.facebook.com/people/Shree-Gajanan-Tec"><FacebookIcon /></a>
                <a className="pr-2 text-[#423b3b] hover:text-[grey]" href="https://www.instagram.com/shreegajanantechnology/"><InstagramIcon /></a>
                <a className="pr-2 text-[#423b3b] hover:text-[grey]" href="https://www.youtube.com/@ShreeGajananTechnologies"><YouTubeIcon /></a>
            </div>
            <div className="col-span-3"></div>

        </div>

        <div className="grid  grid-flow-col grid-cols-12 bg-[#ffffff]">
            <div className="lg:col-span-3 col-span-0 "></div>
            {/* main logo div */}
            <div className="lg:col-span-3 col-span-6">
                <Link to="/">
                <img src={logo} width={300}  className="my-auto  cursor-pointer rounded-full  " />
                </Link>
            </div>
            
            <div className="col-span-6  my-auto">
                <VerticleNAvbar
                />
                <span onClick={displayVerticleNavbar} className="text-[#f35757] float-right p-5 cursor-pointer 2xl:hidden "><ArticleIcon sx={{ fontSize: 50 }} /></span>
                <div className=" hidden 2xl:block float-left">
                    <Link to="/" className=" px-[30px] border-r-0    py-12   border-2 border-y-0 border-gray-200 p-5   hover:bg-[#dfd7d7]"><HomeIcon/>Home</Link>
                    <Link to="" onMouseOver={serviceHoverOmuseOver} onMouseLeave={serviceHoverOmuseLeave} className=" px-[30px]  p-5  py-12 border-r-0   border-2 border-y-0 border-gray-200   hover:bg-[#dfd7d7]"><LanSharpIcon/>Services</Link>

                    <div id="servicepopup" onMouseLeave={serviceDisplayNone} className="bg-red hidden absolute ml-[75px]   mt-[45px] ">
                        <SerrvicesPopUP />
                    </div>
                    <Link to="/careers" className="p-5 px-[30px] py-12   border-2 border-y-0 border-gray-200 border-r-0 hover:bg-[#dfd7d7]"><ChildCareIcon/>Careers</Link>

                    <Link to="/about-us" className="p-5 px-[30px] py-12   border-2 border-y-0 border-gray-200 border-r-0 hover:bg-[#dfd7d7]"><InfoIcon/>About-Us</Link>
                    <Link to="/contact" className="p-5 px-[30px]  py-12   border-2 border-y-0 border-gray-200    hover:bg-[#dfd7d7]"><PermContactCalendarIcon/>Contact</Link>
                </div>

            </div>


        </div>
    </>)
}

export default Navbar