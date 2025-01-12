import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div id='flex-30'>
              <img src='logo-footer.png' id='footer-logo'/>  
              <p>Order Easy, Eat Happy</p>
              <div className='container12'>
                <div className='back'>
              <FaInstagram  className='fa'/>
              </div>
              <div className='back'>
              <FaLinkedinIn className='fa'/>
              </div>

              </div>
            </div>
            <div className='container-flex'><p className='headnng'>CONTACT</p>
            {/* <div className='container-s'><IoMdCall className='ico'/> <h4 className='bod'>+91 9555855303 <br/> +91 6393887230</h4> </div>
            <div className='container-s'><IoMdMail className='ico'/> <h4 className='bod'>fluxvisiodynamics@gmail.com</h4> </div>
            <div className='container-s'><MdLocationPin className='ico'/> <h4 id='addres'>82/22, Gandhi Gram, Ramadevi,<br/> Kanpur, Uttar Pradesh</h4>  </div> */}
             <ul>
              <li>HIIIIIII</li>
              <li>HIIIIIII</li>
              <li>HIIIIIII</li>
            </ul>
            </div>
            <div className='container-flex'><p className='headnng'>PRODUCTS</p>
            <ul>
              <li>HIIIIIII</li>
              <li>HIIIIIII</li>
              <li>HIIIIIII</li>
            </ul>
            </div>
            <div className='container-flex'><p className='headnng'>COMPANY</p>
            <ul>
              <li>HIIIIIII</li>
              <li>HIIIIIII</li>
              <li>HIIIIIII</li>
            </ul></div>
        </div>
    </footer>
  )
}

export default Footer;
