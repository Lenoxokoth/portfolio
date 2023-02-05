import React from 'react'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Heropro from '../Component/Heropro'
import Meabout from '../Component/Meabout'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heropro heading="ABOUT." text="I'm frontend web developer"/>
      <Meabout/>
      <Footer/>
    </div>
  )
}

export default About
