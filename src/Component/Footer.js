import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from "../assest/logomain.png"

const Footer = () => {
    return (
        <>

            <div className=" mt-auto text-[grey]   bg-[#f8f6e3]    ">
                <div className='grid  p-5   border-[grey]  grid-rows-1 lg:grid-cols-12'>
                    <div className='lg:col-span-2 '></div>
                    <div className='lg:col-span-2  lg:p-5'>
                        <img className="ml-[-50px]" src={logo} /><br />
                        <p className='text-[grey] ml-[-50px]'>At Shree Gajanan Technologies, we believe that imagination plus innovation equals a complete solution. We believe that there is virtually no end to the success that can be achieved with one single value- innovation</p>

                    </div>
                    <div className='col-span-2   p-5 border-[grey]'>
                        <p className='float-left font-[900]'>Recent Post</p><br />
                        <ul>
                            <li className='border-b-2 p-1'>The Challenges of Cloud Migration (and Their Solutions)</li>
                            <li className='border-b-2 p-1'>The Importance of Big Data</li>
                            <li className='border-b-2 p-1'>Reasons Why You Should Outsource Your Customer Services</li>
                            <li className='border-b-2 p-1'>What Makes for Good SEO Content?</li>

                        </ul>

                        {/* <a className="pr-2 text-[green]" href=""><WhatsAppIcon /></a>
                        <a className="pr-2 text-[#3142d6]" href="https://www.facebook.com/people/Shree-Gajanan-Tec"><FacebookIcon /></a>
                        <a className="pr-2 text-[#ee46e6]" href="https://www.instagram.com/shreegajanantechnology/"><InstagramIcon /></a>
                        <a className="pr-2 text-[#d82323]" href="https://www.youtube.com/@ShreeGajananTechnologies"><YouTubeIcon /></a> */}
                    </div>
                    <div className='col-span-2 p-5'>
                        <p className='text-[grey] font-[900]'>Tags</p>
                        <ul>
                            <li className='bg-[#f83a18d2] font-[700] hover:bg-[grey] p-2 m-1 text-white inline-block text-[12px] '><a href="#link">Web Development</a></li>
                            <li className='bg-[#f83a18d2] font-[700] hover:bg-[grey] p-2 m-1 text-white inline-block text-[12px] '><a href="#link">Android Application</a></li>
                            <li className='bg-[#f83a18d2] font-[700] hover:bg-[grey] p-2 m-1 text-white inline-block text-[12px] '><a href="#link">UI/UX Design</a></li>
                            <li className='bg-[#f83a18d2] font-[700] hover:bg-[grey] p-2 m-1 text-white inline-block text-[12px] '><a href="#link">Outsource Product Development</a></li>
                            <li className='bg-[#f83a18d2] font-[700] hover:bg-[grey] p-2 m-1 text-white inline-block text-[12px] '><a href="#link">QA Staff Augmentation Services</a></li>
                            <li className='bg-[#f83a18d2] font-[700] hover:bg-[grey] p-2 m-1 text-white inline-block text-[12px] '><a href="#link">Software Testing and QA Services</a></li>
                            <li className='bg-[#f83a18d2] font-[700] hover:bg-[grey] p-2 m-1 text-white inline-block text-[12px] '><a href="#link">Project Based Testing Services</a></li>
                            <li className='bg-[#f83a18d2] font-[700] hover:bg-[grey] p-2 m-1 text-white inline-block text-[12px] '><a href="#link">QA Consulting &amp; Audit Services</a></li>
                            <li className='bg-[#f83a18d2] font-[700] hover:bg-[grey] p-2 m-1 text-white inline-block text-[12px] '><a href="#link">Cyber Security</a></li>
                            <li className='bg-[#f83a18d2] font-[700] hover:bg-[grey] p-2 m-1 text-white inline-block text-[12px] '><a href="#link">Model Based Development</a></li>
                            <li className='bg-[#f83a18d2] font-[700] hover:bg-[grey] p-2 m-1 text-white inline-block text-[12px] '><a href="#link">Robotic Process Automation</a></li>
                        </ul>
                    </div>


                    <div className='col-span-2 p-5'>
                        <p className='float-left font-[900]'>Contact Us</p><br />

                        Email: Contact@shreegajanan.org <br />
                        Phone: 7276867899<br />
                        Address: Ofc No- 4. 2nd floor, Adity Shangun Building,<br />
                        Bavdhan 411008, Pune.
                    </div>

                    <div className='col-span-2'></div>

                </div>

                            
            </div>
            <div className="p-5 border-2 text-center bg-[#f8f6e3] text-[grey]"> © Copyright 2025 - Shree Gajanan Technologies Pvt Ltd </div>
        </>
    )
}

export default Footer