import React from 'react'
import './Footer.css'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
          <h4>LENOX OKOTH</h4>
          <p>WEB DEVELOPER</p>
            <div className="social">
              <a href="https://github.com/Lenoxokoth" target='blank'>
              <FaGithub size={25} style={{color: "#fff", marginRight: "2rem"}}/>
              </a>

              <a href="https://facebook.com" target='blank'>
              <FaFacebook size={25} style={{color: "#fff", marginRight: "2rem"}}/>
              </a>

              <a href="https://www.linkedin.com/in/lenoxokoth/" target='blank'>
              <FaLinkedin size={25} style={{color: "#fff", marginRight: "2rem"}}/>
              </a>

              <a href="https://instagram.com" target='blank'>
              <FaInstagram size={25} style={{color: "#fff", marginRight: "2rem"}}/>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
