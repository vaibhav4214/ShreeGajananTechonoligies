import { Link } from "react-router-dom"
import VerticleNAvbar from "./VerticleNavbar"
import ArticleIcon from '@mui/icons-material/Article';
import logo from "../assest/logomain.png"
import SerrvicesPopUP from "./ServicesPopUP";

const Navbar = () => {



        // for service hover display service list
        const serviceHover=()=>
        {
            console.log("v")
            document.getElementById("servicepopup").classList.remove("hidden")
        }
        const serviceDisplayNone=()=>
        {
                        document.getElementById("servicepopup").classList.add("hidden")

        }





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
                <span onClick={displayVerticleNavbar} className="text-[red] cursor-pointer 2xl:hidden "><ArticleIcon sx={{ fontSize: 50 }} /></span>
                <div className=" hidden 2xl:block">
                    <Link to="/" className=" px-[30px] py-[58px]    border-2 border-gray-200   hover:bg-[#dfd7d7]">Home</Link>
                    <Link to="" onMouseOver={serviceHover}  className=" px-[30px] py-[58px]  p-5 py-3  border-2 border-gray-200   hover:bg-[#dfd7d7]">Services</Link>

                    <div id="servicepopup" onMouseLeave={serviceDisplayNone} className="bg-red hidden fixed ml-[75px]   mt-[58px] ">
                        <SerrvicesPopUP/>
                    </div>
                    <Link to="/about-us" className="p-5 px-[30px] py-[58px] py-3  border-2 border-gray-200 hover:bg-[#dfd7d7]">About-Us</Link>
                    <Link to="/contact" className="p-5 px-[30px] py-[58px] py-3  border-2 border-gray-200    hover:bg-[#dfd7d7]">Contact</Link>
                </div>

            </div>


        </div>
    </>)
}

export default Navbar