import React from 'react'
import './Menu.css'
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


function Menu(){
return(
        <>
        <div className='menubg'>
            <div className='leftul'>
                <li><p>+91 9878787845</p></li>
                <li><p>abc@Gmail.com</p></li>
                <div className='rightul'>
                    <li className='facebook'><h2><IoLogoFacebook/></h2></li>
                    <li className='linkedin'><h2><FaLinkedin /></h2></li>
                    <li className='twitter'><h2><AiFillTwitterCircle /></h2></li>
                    <li className='vertical'><h3>|</h3></li>
                    <li className='login'><h2>Log In</h2></li>
                    <li className='signup'><button>Sign Up</button></li>
                    <li className='vertical'><h3>|</h3></li>
                    <li className='dropdown'><h4>NRs<IoIosArrowDown /></h4></li>
                </div>
                </div>
                <span className='hr'><hr/></span>
                <div className='menu2'>
                    <ul>
                        <li><h1>Let'sBooklt</h1></li>
                    </ul>
                    <div className='move'>
                    <div className='rightul2'>
                        <ul>
                            <li><p>About</p></li>
                            <li><p>Explore</p></li>
                            <li><p>Bookings</p></li>
                            <li><p>Find Ticket</p></li>
                            <li><p>Contact Us</p></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className='heading'>
                    <h1>Say Yes to the World</h1>
                </div>
            </div>
            <div className='paragraph'>
            Pulvinar rhoncus eget non vulputate varius ullamcorper enim arcu mauris. Pharetra <br/> augue amet sit cursus. Leo commodo neque neque praesent. Aliquet tincidunt <br/> maecenas elementum eu ipsum erat. Velit quisque morbi nisl accumsan auctor at at <br/> nec.
               </div>
               <div className='location'>
                    <label className='departure'>Departure Airport</label>
                    <span className='icon1'><IoLocationSharp /></span><input className='depart' type='text' placeholder='Where are you now?'/>
               </div>
               <div className='location1'>
                <label className='arrival'>Arrival Airport</label>
                <span className='icon2'><IoLocationSharp /></span> <input className='arrive' type='text' placeholder='Where are you going?'/>
               </div>
               <div className='calendar'>
                <label className='date'>Date</label>
                <span className='icon3'><FaCalendar /></span><input className='dated' type='text' placeholder='When you are leaving?' />
               </div>
               <div className='travellers'>
                <label className='travel'>Travellers</label>
                <span className='icon4'><FaUser /></span><input className='travelling' type='text' placeholder='No of passengers'/><span className='icon5'><IoIosArrowDown /></span>
               </div>
               <div className='searchflight'>
                <button>Search Your Flight</button>
               </div>
        </>
    )
}
export default Menu