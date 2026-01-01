import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import productImg from "../assest/Product1.png"
import skillTrainingImg from "../assest/skilltraining.jpg"
import careerImg1 from "../assest/careerimg1.jpg"
import careerImg2 from "../assest/careerimg2.jpg"
import stylecss from "./Services.module.css"

const Services = () => {

    const getServiceInformation = (e) => {
        document.getElementById("product").classList.add("hidden")
        document.getElementById("functionaltesting").classList.add("hidden")
        document.getElementById("uidesign").classList.add("hidden")
        document.getElementById("movileappdevelopment").classList.add("hidden")
        document.getElementById("webdevelopment").classList.add("hidden")
        document.getElementById("outsourceddevelopment").classList.add("hidden")
        document.getElementById("cybersecurity").classList.add("hidden")
        document.getElementById("modelbaseddevelopment").classList.add("hidden")
        document.getElementById("nonfuctionaltesting").classList.add("hidden")
        document.getElementById("softwareService").classList.add("hidden")
        document.getElementById("skilltraining").classList.add("hidden")
        document.getElementById("rpa").classList.add("hidden")

        // document.getElementById("talentservice").classList.add("hidden")
        document.getElementById("careerservice").classList.add("hidden")



        let id = e.target.value
        console.log(id)
        document.getElementById(id).classList.toggle("hidden")
    }


    return <div className="">

        <Navbar />

        <p className="text-[50px] underline   text-[#ffffff] text-center font-[900]">Services</p>
        {/* btn bar */}
        <div className="w-[50%]  mx-auto">
            <button value="functionaltesting" onClick={getServiceInformation} className={`${stylecss.allbtn} bg-[red]`}>Functional Testing</button>
            <button value="nonfuctionaltesting" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>Non Functional Testing</button>
            <button value="uidesign" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>UI/UX Design</button>
            <button value="softwareService" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>Software Service</button>
            <button value="skilltraining" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>3.Skill Training</button>
            <button value="product" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>2.Product</button>
            {/* <button value="talentservice" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>4.Talent Service</button> */}
            <button value="careerservice" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>5.Career Service</button>

            <button value="movileappdevelopment" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>Mobile App Development</button>
            <button value="webdevelopment" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>Web Development</button>
            <button value="outsourceddevelopment" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>Outsourced Development</button>
            <button value="cybersecurity" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>Cyber Security</button>
            <button value="modelbaseddevelopment" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>Model Based Development</button>
            <button value="rpa" onClick={getServiceInformation} className={`${stylecss.allbtn}`}>RPA</button>




        </div>
        <div className="grid grid-flow-col mb-5 text-[grey]   grid-cols-12">
            <div className="col-span-3"></div>
            <div className="col-span-6 rounded-[5px] p-5 bg-[white] ">
                {/* Functional Testing */}
                <div className=" px-10 border-2" id="functionaltesting">
                    <h5 className="text-[20px] font-[900] ">Types of Functional Testing Services We Provide</h5>
                    <p>As the best functional testing company in India, we offer various types of functional testing services to meet the diverse needs of our clients. From validation of user interactions to end-to-end system integration, our experts have you covered.</p>

                    <h5 className="text-[20px] font-[900] ">Acceptance Testing</h5>
                    <p>Our acceptance testing services ensure your software meets the specified acceptance criteria, providing a final quality checkpoint before deployment. We work closely with your team to define comprehensive test scenarios and validate the application's real-world functionality.</p>



                    <h5 className="text-[20px] font-[900] ">Alpha Testing</h5>
                    <p>Leverage our alpha testing services to get a head start on identifying and resolving critical bugs and usability issues in your software. Our experts simulate real-world user interactions to uncover hidden defects and provide actionable insights to refine your application before a wider release.</p>



                    <h5 className="text-[20px] font-[900] ">Automation Testing</h5>
                    <p>Accelerate your testing efforts and improve consistency with our automated testing services. Our experts design and implement tailored test frameworks to streamline the validation process, reduce manual effort, and ensure comprehensive test coverage for your software.</p>



                    <h5 className="text-[20px] font-[900] ">Beta Testing</h5>
                    <p>Beta testing allows you to gather real-world feedback and identify issues before your software's final release. Our team manages the beta testing process, recruiting a target audience to interact with your application and providing valuable insights to refine your product.</p>



                    <h5 className="text-[20px] font-[900] ">Black Box Testing</h5>
                    <p>With our black box testing approach, we assess your software's functionality without any prior knowledge of its internal structure or code. By focusing on validating user inputs, system behaviors, and expected outputs, we ensure your application meets all specified requirements.</p>



                    <h5 className="text-[20px] font-[900] ">Database Testing</h5>
                    <p>Our database testing services verify the integrity and reliability of your data storage systems. We validate data integrity, performance, security, and compliance to identify and address any issues that could impact your application's functionality.</p>



                    <h5 className="text-[20px] font-[900] ">End-to-End Testing</h5>
                    <p>Ensure your software operates as a cohesive whole with our end-to-end testing services. We simulate real-world user journeys, verifying the seamless integration of all components and identifying any system-level issues that may not be apparent during individual module testing.</p>



                    <h5 className="text-[20px] font-[900] ">Exploratory Testing</h5>
                    <p>Exploratory testing allows our team to uncover hidden defects and identify areas for improvement in your software by taking an unscripted, hands-on approach. We explore your application's functionality, user interactions, and edge cases to provide valuable insights for refinement.</p>



                    <h5 className="text-[20px] font-[900] ">Failover Testing</h5>
                    <p>Ensure your software can withstand system failures and unexpected events with our failover testing services. We simulate various failure scenarios, validating your application's ability to recover gracefully and maintain critical functionality, safeguarding your users' experience.</p>



                    <h5 className="text-[20px] font-[900] ">Functional Testing</h5>
                    <p>Functional testing is essential for verifying your software's compliance with its specified requirements. Our team validates user interactions, system behaviors, and expected outputs to identify and resolve defects, ensuring your application delivers a superior user experience that exceeds your customers' expectations.</p>



                    <h5 className="text-[20px] font-[900] ">Incremental Integration Testing</h5>
                    <p>Our incremental integration testing services validate the gradual integration of individual software components, identifying and addressing any issues before they escalate. This approach allows us to catch problems early, reducing the time and effort required to resolve them.</p>



                    <h5 className="text-[20px] font-[900] ">Integration Testing</h5>
                    <p>Our integration testing services validate the seamless interaction between different software modules and components. We assess the end-to-end functionality of your application, identifying and resolving any integration issues to deliver a cohesive and reliable software solution.</p>



                    <h5 className="text-[20px] font-[900] ">Negative Testing</h5>
                    <p>Negative testing is essential for identifying how your software handles invalid inputs and edge cases. Our team proactively tests your application's ability to respond appropriately to unexpected user actions or system behaviors, ensuring a robust and resilient user experience.</p>



                    <h5 className="text-[20px] font-[900] ">Positive Testing</h5>
                    <p>With our positive testing services, we help you validate your software's ability to handle valid inputs and perform expected actions. Our team designs comprehensive test scenarios to verify your application's core functionality, ensuring it meets all specified requirements and delivers a seamless user experience.</p>



                    <h5 className="text-[20px] font-[900] ">Regression Testing</h5>
                    <p>Ensure your software's stability and reliability with our regression testing services. Our experts execute comprehensive test suites to verify that newly introduced changes or bug fixes have not adversely impacted your application's existing functionality, identifying any regressions.</p>



                    <h5 className="text-[20px] font-[900] ">Sanity Testing</h5>
                    <p>Leverage our sanity testing services to quickly verify the basic functionality of your software after a new build or release. Our team performs a limited set of tests to ensure the application is working as expected and ready for more extensive testing, saving you time and resources.</p>



                    <h5 className="text-[20px] font-[900] ">System Testing</h5>
                    <p>Our system testing services validate the end-to-end functionality of your software and ensure all integrated components work together seamlessly. We simulate real-world user scenarios and evaluate the system's behavior, performance, and compliance with requirements to deliver a high-quality, robust application.</p>



                    <h5 className="text-[20px] font-[900] ">Unit Testing</h5>
                    <p>Our unit testing services validate the individual functionality of your software's components, serving as the foundation for our comprehensive testing approach. Our experts design and execute comprehensive test suites to identify and resolve issues at the most granular level.</p>



                    <h5 className="text-[20px] font-[900] ">White Box Testing</h5>
                    <p>With our white box testing services, we help you to examine the internal structure and logic of your software, complementing our black box testing approach. By understanding the code, we can design more thorough test scenarios, identify hidden defects, and provide valuable insights to optimize your application.</p>




                </div>

                {/* Non Functional Testing */}
                <div className="hidden px-10 border-2" id="nonfuctionaltesting">
                    <h5 className="text-[20px] font-[900] ">Types of Non-Functional Testing Services Offered</h5>
                    <p>At Prognosticsoft Solutions, we offer various types of non-functional testing services to ensure your software meets the highest standards of performance, security, usability, and more. As the best non-functional testing company in India, we leverage industry-best practices and cutting-edge tools to deliver tailored solutions that meet your unique requirements.</p>

                    <h5 className="text-[20px] font-[900] ">Security Testing</h5>
                    <p>Our security testing services help identify and mitigate potential vulnerabilities in your software, ensuring the protection of sensitive </p><p>data and system integrity. We employ advanced techniques, including penetration testing, vulnerability scanning, and security code review, to identify and address security risks proactively. With our expertise, you can rest assured that your application is secure and compliant with industry standards.</p>

                    <h5 className="text-[20px] font-[900] ">Performance Testing</h5>
                    <p>Our performance testing services ensure your application delivers optimal performance under varying user loads and system configurations. We simulate real-world scenarios to identify bottlenecks, measure response times, and analyze resource utilization. With our expertise, you can optimize your software's performance, providing a seamless user experience and ensuring scalability for future growth.</p>

                    <h5 className="text-[20px] font-[900] ">Load Testing</h5>
                    <p>Our load testing services validate your software's ability to handle anticipated user volumes and transaction loads. We simulate real-world scenarios to identify performance limitations, assess system behavior under extreme conditions, and ensure optimal resource utilization. With our expertise, you can be confident that your application will perform reliably even during peak usage periods.</p>

                    <h5 className="text-[20px] font-[900] ">Usability Testing</h5>
                    <p>Deliver an exceptional user experience with our usability testing services. Our team of experts assess your software's intuitive design, ease of navigation, and overall user-friendliness. We conduct rigorous testing, gather user feedback, and provide actionable insights to improve your application's usability, ensuring a seamless and engaging experience for your end-users.</p>

                    <h5 className="text-[20px] font-[900] ">Accessibility Testing</h5>
                    <p>Embrace digital inclusivity with our accessibility testing services. Our team of experts assesses your software's adherence to accessibility guidelines, ensuring seamless access for users with disabilities. We identify and resolve accessibility issues, enabling you to create an inclusive user experience that caters to diverse user needs and requirements.</p>

                    <h5 className="text-[20px] font-[900] ">Localization Testing</h5>
                    <p>Expand your software's reach with our localization testing services. Our team of experts thoroughly tests your application to ensure flawless adaptation to different languages, cultures, and regional preferences. We validate user interfaces, content, and functionality, enabling you to deliver a truly localized experience that resonates with users across the globe.</p>

                    <h5 className="text-[20px] font-[900] ">Compatibility Testing</h5>
                    Our compatibility testing services ensure your software functions seamlessly across various hardware, software, and platform combinations. We thoroughly test your application's compatibility with different operating systems, browsers, devices, and configurations, identifying and resolving any compatibility issues. With our expertise, you can deliver a consistent user experience regardless of the user's environment.<p></p>

                    <h5 className="text-[20px] font-[900] ">Stress Testing</h5>
                    <p>Fortify your software's resilience with our stress testing services. Our team of experts simulates extreme conditions, including limited resources, high user loads, and system failures, to assess your application's robustness and fault tolerance. We identify potential vulnerabilities, validate recovery mechanisms, and ensure your software can withstand unexpected situations without compromising performance or data integrity.</p>

                    <h5 className="text-[20px] font-[900] ">Globalization Testing</h5>
                    <p>Take your software global with our comprehensive globalization testing services. Our team of experts thoroughly tests your application to ensure seamless adaptation to different cultures, languages, and regional preferences. We validate functionality, user interfaces, and data handling, ensuring compliance with local regulations and cultural norms, enabling you to expand your software's reach worldwide effectively.</p>

                    <h5 className="text-[20px] font-[900] ">Scalability Testing</h5>
                    <p>Prepare your software for growth with our scalability testing services. We simulate various scaling scenarios, including increasing user loads, data volumes, and resource demands, to assess your application's ability to handle future expansion. Our experts identify potential bottlenecks and provide recommendations to optimize your software's scalability, ensuring a seamless experience as your business grows.</p>

                    <h5 className="text-[20px] font-[900] ">UI/UX Testing</h5>
                    Our UI/UX testing services ensure your software delivers an exceptional user experience by evaluating the user interface design, navigation, and overall usability. We conduct comprehensive testing to identify usability issues, gather user feedback, and provide actionable insights to improve the look, feel, and intuitive nature of your application, enhancing user satisfaction and engagement.<p></p>

                    <h5 className="text-[20px] font-[900] ">Cross Browser Testing</h5>
                    <p>Achieve seamless cross-browser compatibility with our comprehensive testing services. Our team of experts rigorously tests your web application's functionality, user interface rendering, and performance across a wide range of browser types and versions. We identify and resolve any compatibility issues, ensuring your software delivers a consistent and reliable experience to users, irrespective of their preferred browser.</p>

                    <h5 className="text-[20px] font-[900] ">Cross Platform Testing</h5>
                    <p>Our cross-platform testing services validate your software's functionality and performance across various operating systems, devices, and hardware configurations. We conduct thorough testing to identify and resolve compatibility issues, ensuring your application delivers a consistent and reliable experience to users, regardless of their platform or device preferences.</p>
                </div>

                {/* UX/UI Design */}
                <div className="hidden border-2
                " id="uidesign">
                    <div className="grid grid-flow-col grid-cols-12">
                        <img src="https://www.prognosticsoft.com/images/pic-small-3.png" className="col-span-4 h-[200px] " />
                        <div className="col-span-8">
                            The first impression may the last impression, but the first Experience is what truly matters.

                            A remarkable user interface is more than a website looking good. While an aesthetically pleasing appearance leaves an indelible impression, it’s better to leave the UI/UX in the hands of experts when it comes to putting your best ideas out in the open.

                            Enhanced user experience and interactivity go hand in hand. So, an up to the mark UI requires modern technology and exclusive attention. At Prognosticsoft, we have the design division working as an independent wing solely focused on UX/UI. The team comprises expert User interface (UI) Designers, User Experience (UX) Designers, Graphic Designers, and Animators.

                            Products need to be functional and visually appealing and our team of experts knows exactly how to deliver the same. Only after gaining a deep insight into the customer persona and client requirement, our designers leverage their creativity in delivering an intuitive, user-friendly, engaging, and personalized digital product.
                        </div>
                    </div>
                </div>



                {/* software service */}
                <div className="hidden" id="softwareService">
                    <p className="text-center  text-[20px] font-black">Have an idea. We’ll build it for you.</p>
                    <div className=" m-auto  overflow-auto">
                        Your product idea might be critical to your digital transformation strategy. Our approach enables right information, people and processes come together to drive benefits for our clients – whether in terms of improved revenue, reduced time to market, improvement in operations, impact on bottom-line – through well managed product development.
                    </div>
                </div>
                {/* Product */}
                <div id="product" className=" hidden">
                    <img className="m-auto p-5 shadow-2xl" src={productImg} />
                </div>

                {/* Skill Trained */}


                <div id="skilltraining" className="grid hidden p-5 grid-flow-col grid-cols-2">
                    <img src={skillTrainingImg} />
                    <div className="shadow-lg p-2">
                        Shree Gajanan Technologies providing  using its advanced Technology Expertise and Training Methodology for the benefit of the student in completing their dreams Skilled Training like JAVA-ALL , REACT, ANGULAR, BIGDATA,  CLOUD-AWS,AZURE, AI, ML,i OT

                    </div>

                </div>



                {/* Career Service */}

                <div id="careerservice" className="grid hidden grid-flow-col grid-cols-2">
                    <img src={careerImg1} />
                    <img src={careerImg2} />
                </div>

                {/* mobile app development */}
                <div className="hidden border-2
                " id="movileappdevelopment">
                    <div className="grid grid-flow-col grid-cols-12">
                        <img src="https://www.prognosticsoft.com/images/pic-small-4.png" className="col-span-4 h-[200px] " />
                        <div className="col-span-8">
                            There is only one device that truly matters – the Mobile. And it getting more powerful and all-encompassing by the day.

                            Mobile apps don’t just provide quick online and offline access to users or engage them using instant updates and push notifications. They have become critical for the entire customer journey management – not just for the end user, but also for the entire organisation to be able to deliver.

                            Our dedicated team of expert mobile app developers presents innovations in the most integrated form – yet keeping it all very simple.

                            From native Android and iOS apps to Hybrid applications, we have got the range of managed mobility services covered. Each team member equipped with well-built industry vertical knowledge, UI Design ability, and Mobile tech expertise strives to deliver a mobile-friendly end product for expanding our client’s business portfolio. Thus, leveraging a vast range of technologies, Prognosticsoft builds revenue streams and boost brand values to the fullest.
                        </div>
                    </div>


                </div>

                {/* web development */}
                <div className="hidden border-2
                " id="webdevelopment">
                    <div className="grid grid-flow-col grid-cols-12">
                        <img src="https://www.prognosticsoft.com/images/pic-small-5.png" className="col-span-4 h-[200px] " />
                        <div className="col-span-8">
                            A fully-functional website is the face of any business in the digital world and at Prognosticsoft we understand this. That’s why we present to you the most innovative web development services, thanks to our expert web developers leveraging the latest web development strategies, dynamic front-end, back-end, web applications, and design capacity.

                            With mobile being the first device of choice we follow a mobile-first approach enabling the websites to leverage the complete range of constantly evolving mobility features .

                            Hurdling through various business challenges, we are your true partners from the designing to deployment. Plus, our skilled developers use a variety of coding schemes using HTML, Angular, WordPress, ReactJS, Shopify, WooCommerce, Bootstrap, jQuery, etc to deliver a customized product.

                        </div>
                    </div>


                </div>
                {/* outsorced development */}
                <div className="hidden border-2
                " id="outsourceddevelopment">
                    <div className="">


                        Our extensive experience in technology makes Prognosticsoft one of the best outsourcing companies in India for IT-related tasks. Our Outsourced Product Development team has got your back when it comes to providing a client with a full development lifecycle. By handling Design, Development to Deployment, our team of experts acts as a pillar for your business needs. After all, in the current unpredictable and advancing scenario, every business needs a trustworthy IT partner!

                        At Prognosticsoft, we follow the eagle’s eye approach to achieve the end goal, that is, a quality product. Keeping the customer experience, business model, the objective, and ROI Enterprise Projects in mind, we exercise a pragmatic approach towards product development. Not to mention, we leverage the latest technology and combine it with industry best practices, thus, delivering an impeccable product.

                    </div>


                </div>

                {/* cybersecurity */}
                <div className="hidden border-2
                " id="cybersecurity">
                    <div className="">

                        <p><b> Web application Security:</b></p>
                        <p>Our Web Application Vulnerability Assessment and Penetration Testing (Web VAPT) service, where your online security is our top priority. At Prognosticsoft, we understand the importance of having a robust and secure web presence. Our expert cybersecurity team is dedicated to thoroughly assessing and testing your web applications, identifying vulnerabilities, and fortifying your defenses. We utilize cutting-edge tools and methodologies to ensure that your website is resilient against potential cyber threats. With our Web VAPT service, you can trust us to provide comprehensive and effective security solutions.</p>
                        <p> Web Vulnerability Assessment and Penetration Testing (Web VAPT) offers numerous advantages for organizations seeking to enhance their online security. Some key benefits include:</p>
                        <p>1) Web VAPT helps in the systematic identification of potential vulnerabilities in your web applications. This proactive approach allows organizations to discover and address security weaknesses before they can be exploited by malicious actors.
                            2) By uncovering and addressing vulnerabilities, Web VAPT helps organizations mitigate the risk of cyber threats. This proactive risk management approach reduces the likelihood of data breaches, unauthorized access, and other security incidents.
                            3) Many industry regulations and standards require regular security assessments. Web VAPT helps organizations meet compliance requirements by ensuring that their web applications adhere to the necessary security standards and guidelines.
                            4) Web VAPT plays a crucial role in safeguarding sensitive customer information. By securing web applications, organizations demonstrate a commitment to protecting customer data and building trust with their user base.
                            5) Proactively addressing security vulnerabilities through Web VAPT can result in cost savings. The financial impact of a data breach or a cyberattack is often much higher than the investment in regular security assessments.</p>
                        <p><b> API Security:</b></p>
                        <p>Our API Vulnerability Assessment and Penetration Testing (API VAPT) service, where security is paramount. At Prognosticsoft, we recognize the critical role that APIs play in modern digital ecosystems and the need to fortify them against potential vulnerabilities. Our expert cybersecurity team is dedicated to thoroughly assessing and testing your APIs, identifying weaknesses, and ensuring robust protection. With a focus on proactive risk mitigation, we employ methodologies to uncover and address security gaps. Our API VAPT service not only helps meet compliance standards but also enhances the overall security posture of your digital infrastructure.</p>
                        <p> API Vulnerability Assessment and Penetration Testing (API VAPT) offers several advantages for organizations relying on Application Programming Interfaces (APIs) to facilitate data exchange and integration. Here are some key benefits:
                            1) PIs often handle sensitive data. API VAPT ensures that data transmitted through APIs is secure, preventing unauthorized access and potential data breaches. This is crucial for maintaining the trust of customers and partners.
                            2) Many industries have specific regulations and compliance standards regarding data security. API VAPT helps organizations adhere to these standards, ensuring that their API implementations meet the necessary security and privacy requirements.
                            3) Many organizations rely on third-party APIs for various functionalities. API VAPT helps assess the security of these third-party integrations, ensuring that they do not introduce vulnerabilities into the organization's systems.
                            4) API VAPT is an ongoing process that adapts to evolving security threats. Regular assessments ensure that APIs remain secure in the face of emerging risks and technologies, contributing to continuous improvement in security measures.
                            5) The cost of addressing security incidents and data breaches can be significantly higher than the investment in API VAPT. Proactively securing APIs helps organizations avoid the financial impact of potential breaches</p>
                        <p><b>Mobile Security:</b></p>
                        <p>Step into a realm of secure mobile experiences with our Mobile Application Vulnerability Assessment and Penetration Testing (Mobile VAPT) service at Prognosticsoft. Safeguarding your mobile applications is not just a commitment but our expertise. Our adept cybersecurity team is devoted to conducting in-depth assessments and testing to unearth vulnerabilities in your mobile apps. We go beyond the surface, utilizing advanced tools and methodologies to ensure that your mobile applications are impervious to potential cyber threats.</p>
                        <p>Mobile Application Vulnerability Assessment and Penetration Testing (Mobile VAPT) offers a range of advantages for organizations seeking to secure their mobile applications effectively:</p>
                        <p>1) Addressing vulnerabilities through Mobile VAPT helps prevent potential financial losses resulting from data breaches, legal actions, and the associated costs of remediation.
                            2) Mobile VAPT contributes to the creation of a secure mobile ecosystem by identifying and resolving vulnerabilities not only within individual apps but also in the broader mobile environment.
                            3) Addressing security issues identified through VAPT can lead to overall performance improvements in mobile applications, ensuring they function optimally and provide a seamless user experience.
                            4) Mobile VAPT focuses on threats unique to mobile platforms, such as insecure data storage, mobile device vulnerabilities, and issues related to insecure communication, offering specialized protection against these risks.
                            5) Security-conscious users are increasingly selective about the apps they use. Investing in Mobile VAPT and ensuring the security of your mobile applications can provide a competitive edge in the market.</p>


                    </div>


                </div>
                {/* model Based Development */}

                <div className="hidden p-10" id="modelbaseddevelopment">
                    <p>Complexity of modern automotive software demands development methodologies that save time and ensure reliability. We at Prognosticsoft, achieve this by using modelling techniques powered by tools like MATLAB, Simulink and Simscape, and more.</p>
                    <p>Automation of processes like code generation, testing and documentation lead to faster time to market, something that automotive companies always aspire. Model Based Development (MBD) can result in average costs savings of 25%-30% and time savings of 35%-40% (according to a global study by Altran Technologies, the chair of software and systems engineering and the chair of Information Management of the University of Technology in Munich)</p>
                    <p>Over the past decade, our team of MATLAB programming experts has been delivering cost and time savings with Model Based Design approach for product development.</p>

                </div>


                {/* Rpa */}

                <div className="hidden p-10" id="rpa">
                    <p><b> Our Expertise:</b></p>
                    <p><b>Comprehensive Solutions:</b> We offer end-to-end RPA solutions covering a diverse range of industries and business functions.</p>
                    <p><b>Platform Agnostic: </b> Our team is proficient in working with various RPA platforms, ensuring flexibility and compatibility with existing systems.</p>
                    <p><b>Customized Implementations:</b> We tailor RPA solutions to meet the unique needs of each client, maximizing the benefits of automation.</p>
                    <p><b>Key Services</b></p>
                    <p><b>Process Assessment and Consultation:</b></p>
                    <p>Thorough analysis of existing processes to identify automation opportunities. Consultation on the most suitable RPA solutions for specific business needs.</p>
                    <p><b> Development and Integration:</b></p>
                    <p>Customized development of RPA bots to automate repetitive tasks. Seamless integration of RPA into existing systems and workflows.</p>
                    <p><b> Training and Support:</b></p>
                    <p>Comprehensive training programs for client teams to ensure effective utilization of RPA. Ongoing support and maintenance to address evolving business requirements.</p>

                </div>

            </div>



            <div className="col-span-3"></div>




        </div>
        <Footer />
    </div>
}

export default Services