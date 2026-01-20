import Navbar from "../Component/Navbar"
import ChildCareIcon from '@mui/icons-material/ChildCare';
import careersBanner from "../assest/career-banner.jpg"
import Footer from "../Component/Footer";
import VissionMissionQuality from "../Component/VissionMissionQuality";


const Careers = () => {

    const togglePosition = (e) => {
        let id = e.target.value
        console.log(id)
        document.getElementById(id).classList.toggle("hidden")

    }

    return (<>
        <Navbar />
        <h1 className="text-[50px]  underline text-[#ffffff] text-center font-[900]"><ChildCareIcon />Careers</h1>
        <div className="m-5 grid grid-cols-12">
            <div className="col-span-2"></div>
            <div className="col-span-12 p-5 border-b-2 lg:col-span-5 text-white font-[700]">
                <img src={careersBanner} /><br />
                At Shree Gajanan Technologies Pvt Ltd, every team member must be above all customer-centric. We value out-of-the-box thinking and an entrepreneurial mindset; our hard work is fueled by passion. This means innovating, experimenting, and solving challenges creatively. While our product is data-driven, our operations are very much people-driven. vSplash responds to challenges with empathy, courage, and commitment.
            </div>
            <div className="col-span-12 lg:col-span-3">  
                              <VissionMissionQuality/>
</div>
            <div className="col-span-2"></div>



        </div>
        {/* end */}
        <div className="m-5 grid grid-cols-12">
            <div className="col-span-2"></div>
            <div className="col-span-12 lg:col-span-5 text-white font-[700]">
                <p className="text-[30px]">Find the right position for you</p>
                <button value="java-devloper-pune" className="p-2 w-[100%] text-left border-2 text-[] cursor-pointer bg-[#f1593f] rounded-sm hover:text-[#cfc3c3]" onClick={togglePosition}  >Java Developer Pune</button>

                <div className="p-2 border-2 bg-[#f1593f] " id="java-devloper-pune">
                    <h4> Java Developer</h4>
                    <strong>Exp. Range:</strong> 3 - 5 years<br />

                    <strong>Location:</strong> Pune<br />

                    <strong>Qualification:</strong> BE/B.Tech, ME/M.Tech, MCA, MSc (IT /CS)<br />

                    <strong>Job Timing:</strong> Regular Day Shift (Flexible)<br />

                    <strong>No. of Positions:</strong> 2<br />
                    <strong>Job Description:</strong>
                    <span>
                        We are looking for a talented Java Developer to join our dynamic team. As a Java Developer, you will be responsible for developing, testing, and maintaining high-performance Java applications. You will work closely with our cross-functional teams to deliver quality software solutions and contribute to the continuous improvement of our development processes.
                    </span>
                    <span>-Design, develop, test, and deploy Java-based solutions.</span>
                    <span>- Collaborate with cross-functional teams to define, design, and ship new features.</span>
                    <span>- Participate in all phases of the software development lifecycle.</span>
                    <span>- Troubleshoot, debug, and resolve software defects and issues.</span>
                    <span>- Stay up-to-date with industry trends and best practices to ensure the adoption of the latest technologies.</span>
                </div>

            </div>
            <div className="col-span-3">
            </div>
            <div className="col-span-2"></div>
        </div>
        <Footer />

    </>)
}

export default Careers