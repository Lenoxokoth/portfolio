import './Meabout.css'

import React from 'react'
import about from '../Assets/image.webp'
import CV from '../Assets/CV.pdf'

const Meabout = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>ABOUT ME</h1>
            <p>I am lenox Okoth a frontend web developer,i can provide clean code 
              also make the website more and more intractive regardless of the user interface.
            </p>
            <a href={CV} download>
            <button className='btn'>Download CV</button>
            </a>
        </div>
        <div className="right">
            <img src={about} alt="about" />
        </div>
    </div>
  )
}

export default Meabout
