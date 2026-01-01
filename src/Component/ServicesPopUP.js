import { Link } from "react-router-dom"

const SerrvicesPopUP = () => {
    return <>
        <div className="bg-[grey]  p-5 text-white">

            <ul>
                            <li className="p-1 hover:text-[#3d3833]"><Link to="/services">UI/UX Design</Link></li>
                            <li className="p-1 hover:text-[#3d3833]"><Link to="/services">Web development</Link></li>
                            <li className="p-1 hover:text-[#3d3833]"><Link to="/services">Outsourced Product Development</Link></li>
							<li className="p-1 hover:text-[#3d3833]"><Link to="/services">Outsourced Product Development</Link></li>
						    <li className="p-1 hover:text-[#3d3833]"><Link to="/services">QA Staff Augmentation Services</Link></li>
							<li className="p-1 hover:text-[#3d3833]"><Link to="/services">Software Testing and QA Services</Link></li>    
							<li className="p-1 hover:text-[#3d3833]"><Link to="/services">Project Based Testing Services</Link></li>

                            <li className="p-1 hover:text-[#3d3833]"><Link to="/services">Cyber Security</Link></li>
                            <li className="p-1 hover:text-[#3d3833]"><Link to="/services">Model Based Development</Link></li>
                            <li className="p-1 hover:text-[#3d3833]"><Link to="/services">Robotic Process Automation</Link></li>
                        </ul>
            {/* <ul>
                <li className="hover:bg-[#a78989] px-3"> <Link to="/services">Software Service</Link><br /></li>
                <li className="hover:bg-[#a78989] px-3">            <Link to="/services">Product</Link><br /></li>
                <li className="hover:bg-[#a78989] px-3">            <Link to="/services">Skilled Training</Link><br /></li>
                <li className="hover:bg-[#a78989] px-3">            <Link to="/services">Talent Service</Link><br /></li>
                <li className="hover:bg-[#a78989] px-3">            <Link to="/services">Career Service</Link><br /></li>


            </ul> */}




        </div>
    </>
}
export default SerrvicesPopUP