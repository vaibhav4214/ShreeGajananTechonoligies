import { Link } from "react-router-dom"

const SerrvicesPopUP = () => {
    return <>
        <div className="bg-[grey]  p-5 text-white">
            <ul>
                <li className="hover:bg-[#a78989] px-3"> <Link to="/services">Software Service</Link><br /></li>
                <li className="hover:bg-[#a78989] px-3">            <Link to="/services">Product</Link><br /></li>
                <li className="hover:bg-[#a78989] px-3">            <Link to="/services">Skilled Training</Link><br /></li>
                <li className="hover:bg-[#a78989] px-3">            <Link to="/services">Talent Service</Link><br /></li>
                <li className="hover:bg-[#a78989] px-3">            <Link to="/services">Career Service</Link><br /></li>


            </ul>




        </div>
    </>
}
export default SerrvicesPopUP