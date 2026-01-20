import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import siderImg from '../assest/wide1.jpg'
import siderImg2 from '../assest/wide2.jpg'
import Button from '@mui/material/Button';
import agileImg from "../assest/agileimage.png"
import { Link } from "react-router-dom";
import stylecss from "../Pages/Services.module.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import functionalTesting from "../assest/functionalTestingHome.png"
import uiDesignHome from "../assest/uiDesignHome.png"
import webDevelopHome from "../assest/webDevelopmentHome.png"
import technologyHome from "../assest/technologyHome.jpg"
import tranformationHome from "../assest/tranformationHome.png"
import talentHome from "../assest/talentHome.jpg"





const Home = () => {

   const siderImgB = {
      backgroundImage: `url(${siderImg})`,
      backgroundSize: 'cover',
   };
   const siderImgB2 = {
      backgroundImage: `url(${siderImg2})`,
      backgroundSize: 'cover',

   };
   const getServiceInformation = (e) => {
      document.getElementById("functionaltesting").classList.add("hidden")
      document.getElementById("uidesign").classList.add("hidden")
      document.getElementById("webdevelopment").classList.add("hidden")

      let id = e.target.value
      console.log(id)
      document.getElementById(id).classList.toggle("hidden")
   }

   return (<>


      <Navbar />
      {/* searchbar
       <div className=" text-center mt-3">   
         <input className="border-2 text-[15px] border-r-0 p-1 w-[250px]  rounded-l-[10px]   "  type="search" placeholder="Search Here"/>
          <span className="bg-white p-1 border-l-0 border-2 hover:bg-[#ece6e6] cursor-pointer rounded-r-[10px]   "><SearchIcon /></span>
</div> */}

      {/* sider */}
      <div className=" grid grid-cols-12" style={siderImgB}>
         <div className="lg:col-span-3"></div>
         <div className="lg:col-span-6 col-span-12 p-10 font-[900] my-auto text-white">
            <p className="text-[25px] animate-pulse inline" >4 Years Of Solid Technology</p>
            <p className="text-[40px] lg:text-[70px] ">SHREE GAJANAN TECHNOLOGIES</p>
            
            
            <Link to="/services"><Button variant="contained" color="error">Our Services</Button></Link>

         </div>


         <div className="lg:col-span-3"></div>

      </div>

      <div className="bg-[#ebeee2b9] grid grid-cols-2 text-grey my-5 text-[25px] py-[20px] fond-900">
         <div className=" col-span-2 lg:col-span-1 p-5 lg:ml-[100px]">End-to-End Software Testing ensures thorough verification, enhancing quality and reliability.
         </div>
         <div className="col-span-2 lg:col-span-1 p-5">
            <Link to="/contact">
            <Button variant="contained" color="error">Get in touch with Us</Button></Link>
         </div>
      </div>
      <div className="grid  grid-cols-3 gap-2 mt-3 px-2 lg:px-20">
         <div className="col-span-3 lg:col-span-1  hover:bg-[grey] bg-[#ebeee2b9] rounded-[10px] shadow-2xl p-2">
            <img src={talentHome} />
            <h1 className="text-[30px] text-center">TALENT</h1>
            <p>
               We provide end to end services from graceful on boarding to exit as per custom requirements
            </p>
         </div>
         <div className="col-span-3 lg:col-span-1 shadow-2xl bg-[#ebeee2b9] rounded-[10px] hover:bg-[grey] p-2">
            <img src={tranformationHome} />
            <h1 className="text-[30px] text-center">Tranformation</h1>
            <p>
               Growth Consulting & Implementation, Digital Branding & Transformation, On line   Reputation Management, Analysis & Strategy  based  on  Market  Research            </p>
         </div>
         <div className="col-span-3 lg:col-span-1 bg-[#ebeee2b9] rounded-[10px] hover:bg-[grey] shadow-2xl p-2">
            <img src={technologyHome} />
            <h1 className="text-[30px] text-center">Technology</h1>
            <p>
               Technology Consulting & implementation, Web Development, Application Development,Training & Mentorship            </p>
         </div>
      </div>
      <div className="bg-[#ebeee2b9] my-5"  style={siderImgB} >
         <p className="text-[35px] text-white font-[900] text-center"> Agile Software Development </p>
         <img src={agileImg}  className=" blur-0 lg:h-[80%]   m-auto my-5" />

      </div>
      {/* services */}
      <div className="grid grid-cols-12 bg-[#f8f6e3] p-5 ">
         <div className="lg:col-span-2"></div>
         <div className="col-span-12 lg:col-span-4">
            <p className="text-[25px] text-center ">Latest Post</p>
         </div>
        
         <div className="col-span-12 lg:col-span-4 ">
            <p className=" text-[25px]">Our Services</p><br/>
            <button value="functionaltesting" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>Functional Testing</button>
            <button value="uidesign" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>UI/UX Design</button>
            <button value="webdevelopment" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>Web Development</button>
            <button  className={`${stylecss.allbtn}`}> <Link to="/services">More</Link></button>

            <div className="bg-[#dfdfda] p-5 border-2 rounded-[3px]">
            {/* functional testing */}
            <div className=" px-2 grid grid-cols-12" id="functionaltesting">
               <p className="col-span-8">
                  As the leading functional testing company in India, we provide a wide range of functional testing services to cater to our clients' diverse needs.
                  Our experts excel in validating user interactions and ensuring seamless end-to-end system integration, delivering comprehensive solutions for all your testing requirements.
               </p>
               <img src={functionalTesting} className="col-span-4"/>
            </div>
            {/* UX/UI Design */}
            <div className="hidden border-2
                " id="uidesign">
               <div className="grid grid-flow-col grid-cols-12">
                  <img src={uiDesignHome} className="col-span-4 h-[200px] " />
                  <div className="col-span-8">
                     The first impression may the last impression, but the first Experience is what truly matters.

                     A remarkable user interface is more than a website looking good. While an aesthetically pleasing appearance leaves an indelible impression, it’s better to leave the UI/UX in the hands of experts when it comes to putting your best ideas out in the open.

                     
                  </div>
               </div>
            </div>

            {/* web development */}
            <div className="hidden border-2
                " id="webdevelopment">
               <div className="grid grid-flow-col grid-cols-12">
                  <div className="col-span-8">
                      A fully-functional website is the face of any business in the digital world and at Sunday Tech we understand this. That’s why we present to you the most innovative web development services, thanks to our expert web developers leveraging the latest web development strategies, dynamic front-end, back-end, web applications, and design capacity. 

                  </div>
                 <img src={webDevelopHome} className="col-span-4 h-[200px] " />

               </div>
                     <p className="col-span-12">With mobile being the first device of choice we follow a mobile-first approach enabling the websites to leverage the complete range of constantly evolving mobility features</p>
               </div>
            </div>
         </div>
         <div className="col-span-2"></div>



      </div>


      <div className="   text-center " style={siderImgB2}>
         <p id="pp" className="m-auto pt-[50px] lg:w-[50%]  text-[white] text-pretty font-[900] text-[20px]">
"We have been working together for quite some time. I have to say that the entire experience working with Shree Gajanan Technologies is exceptional."         </p>
            <div className="mx-auto text-white">
               <FiberManualRecordIcon className="cursor-pointer hover:bg-[grey] hover:rounded-full" onClick={()=>document.getElementById("pp").innerHTML='"We have been working together for quite some time. I have to say that the entire experience working with Shree Gajanan Technologies is exceptional."'}/>
               <FiberManualRecordIcon className="cursor-pointer hover:bg-[grey] hover:rounded-full" onClick={()=>document.getElementById("pp").innerHTML='"We are continuously taking IT services from Shree Gajanan Technologies from last 5 years, We are happy with our decision"'}/>

               </div>
      </div>


      <Footer />

   </>)
}

export default Home