import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"


const Home = () => {
    return (<>

       <Navbar/>
       <div className=" text-center mt-3">   
         <input className="border-2 p-3 w-[250px] rounded-[10px]   "  type="search" placeholder="Search Here"/>
</div>

       <div className="grid grid-flow-col grid-cols-12 gap-2 mt-3">
        <div className="col-span-3"></div>
        <div className="col-span-2 hover:bg-[grey] bg-[white] rounded-[10px] shadow-2xl p-2">
            <img src="https://gloat.com/wp-content/uploads/talent-mobility-feature-img.jpg"/>
            <h1 className="text-[30px] text-center">TALENT</h1>
            <p>
                We provide end to end services from graceful on boarding to exit as per custom requirements
            </p>
        </div>
         <div className="col-span-2 shadow-2xl bg-[white] rounded-[10px] hover:bg-[grey] p-2">
            <img src="https://www.logicalcube.com/wp-content/uploads/2023/09/l3-digital-transformation.png"/>
            <h1 className="text-[30px] text-center">Tranformation</h1>
            <p>
Growth Consulting & Implementation, Digital Branding & Transformation, On line   Reputation Management, Analysis & Strategy  based  on  Market  Research            </p>
        </div>
         <div className="col-span-2 bg-[white] rounded-[10px] hover:bg-[grey] shadow-2xl p-2">
            <img src="https://gloat.com/wp-content/uploads/talent-mobility-feature-img.jpg"/>
            <h1 className="text-[30px] text-center">Technology</h1>
            <p>
Technology Consulting & implementation, Web Development, Application Development,Training & Mentorship            </p>
        </div>
                <div className="col=span-3"></div>
       </div>
       <Footer/>
    </>)
}

export default Home