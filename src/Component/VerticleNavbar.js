import { Link } from "react-router-dom"

const VerticleNAvbar = () => {
    const hideVeticleNavbar=()=>
        {
                document.getElementById("verticleNavBar").classList.add("hidden")
        }
    return (
        
        <>
            <div id="verticleNavBar" className="fixed hidden z-10 bg-[white] right-0 w-[30%]   top-0 h-[100%]">
                <span className="float-right p-5 cursor-pointer" onClick={hideVeticleNavbar}>❌</span>
                <ul className="p-10">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services"> Service</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>

                </ul>
            </div>
        </>
    )
}

export default VerticleNAvbar