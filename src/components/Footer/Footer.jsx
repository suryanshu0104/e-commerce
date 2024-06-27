import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import Pintester_icon from '../assets/pintester_icon.png'
import Whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer=()=>{
    return (
        <div className='footer'>
         

            <div className="footer-logo">
                <img src={footer_logo} alt=""/>
                <p>Today's Fashion</p>
            </div>
            
            

            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            
            

            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={Pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={Whatsapp_icon} alt="" />
                </div>
            </div>
            
            <div className="footer-address">
            <p>Address: Prakash Paradise<br/>
            Building Ashok Rajpath Rd,<br/>
            Patna, Bihar 800004, India</p>
                <iframe
                    width="300"
                    height="200"
                    frameborder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.770199170963!2d85.12997711446032!3d25.602020483691305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991659d6c92a875%3A0x3758f9e25ad46c7f!2sPrakash%20Paradise%20Building%2C%20Ashok%20Rajpath%20Rd%2C%20Bir%20Chand%20Patel%20Path%2C%20Mahendru%20Sujapur%2C%20Patna%2C%20Bihar%20800004%2C%20India!5e0!3m2!1sen!2sus!4v1649752064392!5m2!1sen!2sus"
                    allowfullscreen
                    aria-hidden="false"
                    tabindex="0"
                ></iframe>
                
            </div>
            
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved </p>
            </div>
        </div>
        //<h1>hello world</h1>
    )
}
export default Footer