import React from 'react'
import './Hero.css'
import laptop from "../Assets/image.webp"
import { Link } from 'react-router-dom'

import "./Navbar.css"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img className="hero-img" src={laptop} alt="laptop" />
        </div>
        <div className="content">
            <p>HI AM LENOX OKOTH</p>
            <h1>FRONT-END WEB DEVELOPER</h1>
            <div>
                <Link to ='/project' className='btn'>PROJECT</Link>
                <Link to ='/contact' className='btn'>CONTACT</Link>

            </div>
        </div>
    </div>
  )
}

export default Hero
