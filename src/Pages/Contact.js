import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';



const Contact = () => {
    return <>
        <Navbar />
        <p className="text-[50px] underline text-[#ffffff] text-center font-[900]"><PermContactCalendarIcon/>Contact</p>
        <div className="grid grid-cols-12 m-2 p-[15px]">
            <div className="lg:col-span-3"></div>
                        <div className="lg:col-span-3 col-span-12 shadow-2xl rounded-[1px]  bg-[white] ml-1">
                <iframe   src="https://docs.google.com/forms/d/e/1FAIpQLSeRXEsa4uFvoCv-SuwiEMwY63qAv40WtYoI06DVgeyVPncCjg/viewform?embedded=true"  height="504"  className="m-auto w-[90%]">Loading…</iframe>
            </div>
            <div className="lg:col-span-3 col-span-12 text bg-[white] shadow-2xl rounded-[1px] text-[15px] p-5">
                Email: <span className="text-[#ff0000]">Contact@shreegajanan.org </span><br/>
                Phone: 7276867899<br/>
                Address: Ofc No- 4. 2nd floor, Adity Shangun Building,<br/>
                 Bavdhan 411008, Pune.
            </div>
            





        </div>
        <div>
                
        </div>
        <Footer/>
    </>
}

export default Contact