
const VissionMissionQuality = () => {

    const toggleVMQP = (e) => {
        document.getElementById("vision").classList.add("hidden")
        document.getElementById("mission").classList.add("hidden")
        document.getElementById("quality-product").classList.add("hidden")


        const id = e.target.value
        document.getElementById(id).classList.toggle("hidden")


    }

    return (<>
        <div className="p-5">
            <button onClick={toggleVMQP} className="bg-white p-1 ml-1 px-2 border-2" value="vision">Vision</button>
            <button onClick={toggleVMQP} className="bg-white p-1 ml-1 px-2 border-2" value="mission">Misson</button>
            <button onClick={toggleVMQP} className="bg-white p-1 ml-1 px-2 border-2" value="quality-product">Quality Product</button>
            {/* vision */}
            <div className="border-2 border-t-0 ml-1 p-5 bg-white" id="vision">
                <h2 className="text-[20px] font-[700]">Vision:</h2>
                <p className="text-[grey] text-[13px]">To become a world-class IT software and Services providing Company. To increase our customer's productivity by developing and implementing powerful Software solutions, which reflects in effective and user-friendly products and far beyond that.</p>
            </div>
            {/* Mission */}
            <div className="border-2 border-t-0 ml-1 p-5 bg-white hidden" id="mission">
                <h2 className="text-[20px] font-[700]">Misson:</h2>
                <p className="text-[grey] text-[13px]">To strive for customer satisfaction by providing pragmatic and cost-effective IT Solutions in minimum possible time. Prognostic also pledges to do continual in Quality Management System to deliver pre-determined results defined by the customer.</p>
            </div>
            {/* Quality Product */}
            <div className="border-2 border-t-0 ml-1 p-5 bg-white hidden" id="quality-product">
                <h2 className="text-[20px] font-[700]">Quality Product:</h2>
                <p className="text-[grey] text-[13px]">We, the members of Prognostic are committed to provide world-class IT Software and Solutions & Competitive Engineering Software Training Courses. We involve all our employees to increase our Productivity & Customer Satisfaction through effective implementation of Quality Management System & Continual Improvement.</p>
            </div>
        </div>
    </>)
}

export default VissionMissionQuality