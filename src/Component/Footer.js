import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => { 
    return (
        <>

            <div className=" m-auto text-white   bg-gradient-to-r from-red-500
               to-red-600  mt-10 h-[150px] w-[100%]">
                <div className='grid grid-flow-col p-5 mx-5 border-b-2 border-[grey] border-solid p-4 grid-cols-12'>
                    <div className='col-span-2'></div>
                    <div className='col-span-4 pr-5 text-right border-r-2 border-[grey]'>
                        <a className="pr-2 text-[green]" href=""><WhatsAppIcon /></a>
                <a className="pr-2 text-[#3142d6]" href="https://www.facebook.com/people/Shree-Gajanan-Tec"><FacebookIcon /></a>
                <a className="pr-2 text-[#ee46e6]" href="https://www.instagram.com/shreegajanantechnology/"><InstagramIcon /></a>
                <a className="pr-2 text-[#d82323]" href="https://www.youtube.com/@ShreeGajananTechnologies"><YouTubeIcon /></a>
                    </div>

                    <div className='col-span-4 pl-5'>
                        Email: Contact@shreegajanan.org <br/>
                Phone: 7276867899<br/>
                Address: Ofc No- 4. 2nd floor, Adity Shangun Building,<br/>
                 Bavdhan 411008, Pune.
                    </div>

                    <div className='col-span-2'></div>

                </div>
                

            </div>
        </>
    )
}

export default Footer