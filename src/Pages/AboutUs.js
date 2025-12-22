import Navbar from "../Component/Navbar"


const AboutUS = () => {
    return <>
        <Navbar />

        <h1 className="text-[50px] underline text-[#ffffff] text-center font-[900]">AboutUS</h1>
        <div className="grid bg grid-flow-col grid-cols-12 p-[20px]">
            <p className="col-span-12 bg-[#ebeee2b9] rounded-[5px] shadow-2xl text-[15px] p-5">
                We are a place that defines Integrity, Innovation, and Serenity. We believe in building long-term relationships with our clients and to do that, we keep them happy by providing quality technological solutions. We also believe in transparency with our valued clients and discuss every minute detail related to the project.

                We strongly believe in providing effective client service, taking care of the employees’ needs, and creating a success story to remember through our innovation.
            </p>



        </div>
    </>
}

export default AboutUS