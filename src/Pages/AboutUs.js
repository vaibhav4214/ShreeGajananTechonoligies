import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import InfoIcon from '@mui/icons-material/Info';
import VissionMissionQuality from "../Component/VissionMissionQuality";




const AboutUS = () => {
    return <>
        <Navbar />

        <h1 className="text-[50px]  underline text-[#ffffff] text-center font-[900]"><InfoIcon/>AboutUS</h1>
        <div className="m-5 grid grid-cols-12">
            <div className="col-span-2"></div>
            <div className="col-span-12 lg:col-span-5 text-white font-[700]">
                 <img src="https://www.prognosticsoft.com/images/about-us.jpg"/><br/>
                                We are a place that defines Integrity, Innovation, and Serenity. We believe in building long-term relationships with our clients and to do that, we keep them happy by providing quality technological solutions. We also believe in transparency with our valued clients and discuss every minute detail related to the project.

                We strongly believe in providing effective client service, taking care of the employees’ needs, and creating a success story to remember through our innovation.
            </div>
            <div className="lg:col-span-3 col-span-12">
                <VissionMissionQuality/>
            </div>
            <div className="col-span-2"></div>



        </div>
        <Footer />
    </>
}

export default AboutUS