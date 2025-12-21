import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import productImg from "../assest/Product1.png"
import skillTrainingImg from "../assest/skilltrainig.jpg"
import careerImg1 from "../assest/careerimg1.jpg"
import careerImg2 from "../assest/careerimg2.jpg"


const Services = () => {

const getServiceInformation=(e)=>
{
        document.getElementById("product").classList.add("hidden")   
        document.getElementById("softwareService").classList.add("hidden")   
        document.getElementById("skilltraining").classList.add("hidden")   
        document.getElementById("talentservice").classList.add("hidden") 
                document.getElementById("careerservice").classList.add("hidden")   
  


        let id=e.target.value
        console.log(id)
        document.getElementById(id).classList.toggle("hidden")   
}

    
    return <>

        <Navbar />
        <p className="text-[50px] underline   text-[#ffffff] text-center font-[900]">Services</p>
        <div className="grid grid-flow-col   grid-cols-12">
            <div className="col-span-2"></div>
            <div className="col-span-8 rounded-[5px] p-5 bg-white ">
                {/* software service */}
                <button value="softwareService"  onClick={getServiceInformation} className="bg-white hover:bg-[#bba9a9] w-[100%] text-left shadow-lg p-2 m-1 rounded-lg">1.Software Service</button><br />
                <div className="hidden"  id="softwareService">
                    <p className="text-center  text-[20px] font-black">Have an idea. We’ll build it for you.</p>
                    <div className=" m-auto  overflow-auto">     
                    Your product idea might be critical to your digital transformation strategy. Our approach enables right information, people and processes come together to drive benefits for our clients – whether in terms of improved revenue, reduced time to market, improvement in operations, impact on bottom-line – through well managed product development.
                    </div>
                </div>
                {/* Product */}
                <button value="product" onClick={getServiceInformation} className="bg-white hover:bg-[#bba9a9] w-[100%] text-left shadow-lg p-2 m-1 rounded-lg">2.Product</button><br />
                    <div id="product"  className=" hidden">
                        <img className="m-auto p-5 shadow-2xl" src={productImg}/>
                    </div>
                
                {/* Skill Trained */}
                <button value="skilltraining" onClick={getServiceInformation} className="bg-white hover:bg-[#bba9a9] w-[100%] text-left shadow-lg p-2 m-1 rounded-lg">3.Skill Training</button><br />
                <div id="skilltraining" className="grid hidden p-5 grid-flow-col grid-cols-2">
                    <img src={skillTrainingImg}/>
                    <div className="shadow-lg p-2">
                        Shree Gajanan Technologies providing  using its advanced Technology Expertise and Training Methodology for the benefit of the student in completing their dreams Skilled Training like JAVA-ALL , REACT, ANGULAR, BIGDATA,  CLOUD-AWS,AZURE, AI, ML,i OT

                    </div>

                </div>
               {/* Talent Service */}
                <button value="talentservice" onClick={getServiceInformation} className="bg-white hover:bg-[#bba9a9] w-[100%] text-left shadow-lg p-2 m-1 rounded-lg">4.Talent Service</button><br />
                    <div className="hidden p-10" id="talentservice">
                        Technology is your business. And we have the people to make it work. We know that agility and innovation are essential to your success and our technology staffing company has only one purpose - to find you the right match.
Our combination of tech and touch is created for the modern agile organization focused on success. From product management professionals to digital transformation experts, our proven track record in finding the right technology staffing talent will take your organisation forward.
                    </div>
                
                {/* Career Service */}
                <button value="careerservice" onClick={getServiceInformation} className="bg-white hover:bg-[#bba9a9] w-[100%] text-left shadow-lg p-2 m-1 rounded-lg">5.Career Service</button><br />
                <div id="careerservice"  className="grid hidden grid-flow-col grid-cols-2">
                    <img src={careerImg1}/>
                    <img src={careerImg2}/>
                </div>

            </div>

            <div className="col-span-2"></div>




        </div>
    </>
}

export default Services