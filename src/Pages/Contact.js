import Navbar from "../Component/Navbar"


const Contact = () => {
    return <>
        <Navbar />
        <p className="text-[50px] underline text-[#ffffff] text-center font-[900]">Contact</p>
        <div className="grid grid-flow-col grid-cols-12">
            <div className="col-span-2"></div>
            <div className="col-span-4 bg-white shadow-2xl rounded-[5px] text-[15px] p-5">
                Email: Contact@shreegajanan.org <br/>
                Phone: 7276867899<br/>
                Address: Ofc No- 4. 2nd floor, Adity Shangun Building,<br/>
                 Bavdhan 411008, Pune.
            </div>
            



            <div className="col-span-4 shadow-2xl rounded-[5px]  bg-white ml-1">
                <iframe  src="https://docs.google.com/forms/d/e/1FAIpQLSeRXEsa4uFvoCv-SuwiEMwY63qAv40WtYoI06DVgeyVPncCjg/viewform?embedded=true" width="640" height="824" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
             <div className="col-span-2"></div>

        </div>
        <div>
            
        </div>
    </>
}

export default Contact