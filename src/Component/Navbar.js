import { Link } from "react-router-dom"
import VerticleNAvbar from "./VerticleNavbar"
import ArticleIcon from '@mui/icons-material/Article';
import logo from "../assest/logomain.png"

const Navbar = () => {
    const displayVerticleNavbar = () => {
        document.getElementById("verticleNavBar").classList.toggle("hidden")
        console.log("vai")
    }

    return (<>
        {/* nav bar */}
        <div className="grid  grid-flow-col grid-cols-12 p-3 bg-[#ffffff]">
                <div className="col-span-7 ">
                    <img  src={logo} width={300}  className="my-auto rounded-full mr-5 float-right" />
                    </div>
            {/* <p className="text-[30px] font-[1000]  col-span-8 text-center text-[red]">
                <span className="float-right">SHREE GAJANAN TECHNOLOGIES</span>
                <img src={logo} width={50} className="my-auto rounded-full mr-5 float-right" />
                </p> */}
            <div className="col-span-5 m-auto">
                <VerticleNAvbar
                />
                <span onClick={displayVerticleNavbar} className="text-[red] cursor-pointer lg:hidden "><ArticleIcon sx={{ fontSize: 50 }} /></span>
                <div className=" hidden lg:block">
                    <Link to="/" className=" p-5 py-3  border-2 border-gray-200   hover:bg-[#dfd7d7]">Home</Link>
                    <Link to="/services" className=" p-5 py-3  border-2 border-gray-200    hover:bg-[#dfd7d7]">Services</Link>
                    <Link to="/about-us" className="p-5 py-3  border-2 border-gray-200 hover:bg-[#dfd7d7]">About-Us</Link>
                    <Link to="/contact" className="p-5 py-3  border-2 border-gray-200    hover:bg-[#dfd7d7]">Contact</Link>
                </div>

            </div>


        </div>
    </>)
}

export default Navbar