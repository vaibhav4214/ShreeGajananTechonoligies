import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import pagenotfond from"../assest/pagenotfond.svg"
import { Height } from "@mui/icons-material";


const PageNotFOund=()=>
{
    const pagenotfond404 = {
      backgroundImage: `url(${pagenotfond})`,
      height:"100vh",
      width:'100%',
      backgroundSize: 'cover',

   };
    return(<>
                <div style={pagenotfond404}>
                <div className="text-center mt-5"><Link to="/"><Button variant="contained" color="error">Go Back To Home</Button></Link>

                    
                </div>
</div>
                
    </>)    
}

export default PageNotFOund