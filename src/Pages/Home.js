import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import LightPillar from "../LightPillar"
import SearchIcon from '@mui/icons-material/Search';
import siderImg from '../assest/wide1.jpg'
import Button from '@mui/material/Button';
import agileImg from "../assest/agileimage.png"
import { Link } from "react-router-dom";


const Home = () => {

   const siderImgB = {
      backgroundImage: `url(${siderImg})`,
      height: '50vh',
      backgroundSize: 'cover',

   };

   return (<>


      <Navbar />
      {/* searchbar
       <div className=" text-center mt-3">   
         <input className="border-2 text-[15px] border-r-0 p-1 w-[250px]  rounded-l-[10px]   "  type="search" placeholder="Search Here"/>
          <span className="bg-white p-1 border-l-0 border-2 hover:bg-[#ece6e6] cursor-pointer rounded-r-[10px]   "><SearchIcon /></span>
</div> */}

      {/* sider */}
      <div className="bg-[red] grid grid-cols-12" style={siderImgB}>
         <div className="col-span-3"></div>
         <div className="col-span-6 font-[900] my-auto text-white">
            <p className="text-[20px]" >4 Years Of Solid Technology</p>
            <p className="text-[70px]">Gajanan Technologies</p>
                        <Link to="/services"><Button variant="contained" color="error">Get in touch with Us</Button></Link>

         </div>

        
         <div className="col-span-3"></div>

      </div>

      <div className="bg-[#ebeee2b9] grid grid-cols-2 text-grey my-5 text-[25px] p-[20px] fond-900">
         <div className="col-span-1 ml-[100px]">End-to-End Software Testing ensures thorough verification, enhancing quality and reliability.
         </div>
         <div className="col-span-1">
            <Link to="/contact"><Button variant="contained" color="error">Get in touch with Us</Button></Link>
            </div>
      </div>
      <div className="grid  grid-cols-3 gap-2 mt-3 px-20">
         <div className="col-span-3 lg:col-span-1  hover:bg-[grey] bg-[#ebeee2b9] rounded-[10px] shadow-2xl p-2">
            <img src="https://gloat.com/wp-content/uploads/talent-mobility-feature-img.jpg" />
            <h1 className="text-[30px] text-center">TALENT</h1>
            <p>
               We provide end to end services from graceful on boarding to exit as per custom requirements
            </p>
         </div>
         <div className="col-span-3 lg:col-span-1 shadow-2xl bg-[#ebeee2b9] rounded-[10px] hover:bg-[grey] p-2">
            <img src="https://www.logicalcube.com/wp-content/uploads/2023/09/l3-digital-transformation.png" />
            <h1 className="text-[30px] text-center">Tranformation</h1>
            <p>
               Growth Consulting & Implementation, Digital Branding & Transformation, On line   Reputation Management, Analysis & Strategy  based  on  Market  Research            </p>
         </div>
         <div className="col-span-3 lg:col-span-1 bg-[#ebeee2b9] rounded-[10px] hover:bg-[grey] shadow-2xl p-2">
            <img src="https://gloat.com/wp-content/uploads/talent-mobility-feature-img.jpg" />
            <h1 className="text-[30px] text-center">Technology</h1>
            <p>
               Technology Consulting & implementation, Web Development, Application Development,Training & Mentorship            </p>
         </div>
      </div>

      <img src={agileImg} className="w-[100%] border-2 my-5" />




      <Footer />

   </>)
}

export default Home