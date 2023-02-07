import React from 'react'
import Footer from '../Component/Footer'
import Heropro from '../Component/Heropro'
import Navbar from '../Component/Navbar'
import Work from '../Component/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heropro heading="PROJECTS." text="Some of my recent works."/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
