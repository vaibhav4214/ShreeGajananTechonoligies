import { Link } from "react-router-dom"

const Navbar=()=>
{
    return(<>
             {/* nav bar */}
        <div className="grid shadow-md grid-flow-col grid-cols-12 p-3 bg-[white]">
            <p className="text-[30px] font-[1000]  col-span-8 text-center text-[red]"><span className="float-right">SHREE GAJANAN TECHNOLOGIES</span></p>
            <div className="col-span-4 m-auto">
                <Link to="/" className="pr-3 mr-1 shadow-md p-2 bg-[red] font-[700] text-[white] rounded-[5px] hover:text-[grey] hover:scale-125">Home</Link>
                <Link to="/services" className="pr-3 mr-1 shadow-md font-[700] bg-[red] text-[white]  p-2 rounded-[5px] hover:text-[grey]">Services</Link>
                <Link to="/about-us" className="pr-3 mr-1 shadow-md font-[700] bg-[red] text-[white] p-2 rounded-[5px] hover:text-[grey]">About-Us</Link>
                <Link to="/contact" className="pr-3 mr-1 shadow-md font-[700] bg-[red] text-[white] p-2 rounded-[5px] hover:text-[grey]">Contact</Link>


            </div>


        </div>
    </>)
}

export default Navbar