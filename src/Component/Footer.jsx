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
              <a href="https://github.com" target='blank'>
              <FaGithub size={25} style={{color: "#fff", marginRight: "2rem"}}/>
              </a>

              <a href="https://facebook.com" target='blank'>
              <FaFacebook size={25} style={{color: "#fff", marginRight: "2rem"}}/>
              </a>

              <a href="https://linkedin.com" target='blank'>
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
