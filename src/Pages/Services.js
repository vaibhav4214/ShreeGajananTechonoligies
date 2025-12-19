import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"


const Services = () => {

const getServiceInformation=(e)=>
{
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
                    <p className="text-center text-[20px] font-black">Have an idea. We’ll build it for you.</p>
                    <div className=" m-auto w-[700px]">                Your product idea might be critical to your digital transformation strategy. Our approach enables right information, people and processes come together to drive benefits for our clients – whether in terms of improved revenue, reduced time to market, improvement in operations, impact on bottom-line – through well managed product development.
                    </div>
                </div>
                {/* Product */}
                <button value="product" onClick={getServiceInformation} className="bg-white hover:bg-[#bba9a9] w-[100%] text-left shadow-lg p-2 m-1 rounded-lg">2.Product</button><br />
                    <div id="product"  className=" hidden">
                        <img className="m-auto p-5 shadow-2xl" src="https://lh3.googleusercontent.com/sitesv/AAzXCkfbop0oMP1R-MatPF_24HlPOPi9Cg1oTItMH7qCineMka3oF9tk-XxEQ7jfjBGajj-f2yHV06c3-GJO2AMc7bG79CmOALQyclQ21Gc8-VjNqK9G-vz8rtLWw7lGienfexrJu1jBBMtscO1-X92gH3h7RDXeCugua35PG09XSV5g7W7jMsJQqvYiBCmH4sQWzPee8pG3KJRgqwNl9CVjiXg2qSTBnAEphhmSEPg=w1280"/>
                    </div>
                
                {/* Skill Trained */}
                <button value="skilltraining" onClick={getServiceInformation} className="bg-white hover:bg-[#bba9a9] w-[100%] text-left shadow-lg p-2 m-1 rounded-lg">3.Skill Training</button><br />
                <div id="skilltraining" className="grid hidden p-5 grid-flow-col grid-cols-2">
                    <img src="https://lh3.googleusercontent.com/sitesv/AAzXCkf9zx-UMQpP2Dhf2e4r2bD0yI91-GqXzfkd-wzX8J9aBtO0D8uSl4Lv4OcQqWP5pMethpkl_KbrOZAiQ3qT9Qg9UGjj0txJTkYvjHOlyiTMl0R9MPFJRDV8mR5flvOPOsQGok-WYSVzP6BrpOm3ngwcq4ars-SV9j4-9sDCTzA7U625iILIhUFIluFNzGFoAid718BKUr7E4OZzktQg9Kl4bgQU6a6Sjq3f=w1280"/>
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
                    <img src="https://lh3.googleusercontent.com/sitesv/AAzXCkcA5Owtycz8X-zsjXYgaYUzc834qn-BAeWBfgfl8noyysHTexoQSUrAHMsS7yyEpOQkDMhAklH15VKieO3l9KESmj6X4TfqePKgOLeClAj_P1ljZbfp-R98GUOmM1B9HJKLgqUBKfyUJG02Grxw9TFmLLfyS1wYIwBd9w1sQqazkaQ99IiHG_lHDoYyTkg1Zt6Q1s0NfltUxKxPImqaUcxIIXJO94_YpMr2Nuo=w1280"/>
                    <img src="https://lh3.googleusercontent.com/sitesv/AAzXCkdpMv2obVpZSjGbGZtGN0IuaxUNhkhavgT0Smq8fIhNzzuaqO2tit6fe3u7iZhirgprrpIH0iy3elTd5xXI-noFXj0AMve3lVRXTqanxHFjCbkmnZwn-J9Ei5pO43iEh65sywyYvEEFO1ktfyY_-nCA80_jCULSE2tvTCUsLloGuhDiY3FkHR7lPunM-erBgBEHyYQlR8ta1hLDRhWHOFbwL0O6yk8TrJcEmxg=w1280"/>
                </div>

            </div>

            <div className="col-span-2"></div>




        </div>
        <Footer/>
    </>
}

export default Services